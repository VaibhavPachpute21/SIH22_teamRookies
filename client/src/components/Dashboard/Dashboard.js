import React, { useState, useEffect } from 'react'
import { HStack, Flex, Box, VStack, IconButton, Divider, Text } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineRecentActors } from 'react-icons/md'
import { MdPendingActions } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import axios from 'axios'
import AddNewGrievance from '../Grievance/AddNewGrievance'
import DashboardAdd from '../Slides/add'
import DashboardHistory from '../Slides/history'
import AdminHome from '../Slides/admin_home'
import UserHome from '../Slides/user_home'
import DashboardTracker from '../Slides/tracker'
import DashboardSettings from '../Slides/settings'
import UserProfile from '../Slides/userProfile'
import AddInstituteGrievance from '../InstitutePages/addInstituteGrievance'
import InstituteProfile from '../InstitutePages/instituteProfile'
import AdminDashboardHistory from '../Slides/admin_history'
import RegisterNewCollage from '../Slides/RegisterNewCollage'
import AddNodalOfficer from '../Slides/AddNodalOfficer'
import NodalOfficersList from '../Slides/NodalOfficersList'
import OfficersRankingPage from '../Slides/OfficersRankingPage'
import SolvedGrievance from '../Slides/SolvedGrievance'
import AddNewUniAdmin from '../Slides/AddNewUniAdmin'
import RegionalOfTracker from '../Slides/RegionalOfTracker'
import cookie from 'js-cookie'

export default function Dashboard() {

  const [shutter, setShutter] = useState(0)
  const [authen, setAuthen] = useState(null)
  const auth = cookie.get('token');
  const [User, SetUser] = useState({})


  console.log(User)
  useEffect(() => {
    async function VerifyUser() {
      const request = await axios.get('http://localhost:3001/api/user/private', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth}`
        }
      })
      if (request.data) {
        let s = request.data?.success
        setAuthen(s)
        let user = request.data?.user
        if (user) {
          SetUser(user)
        }
      }
    }
    VerifyUser()


  }, [auth])

  const GoToAddGrievance = (number) => {
    console.log(number)
    setShutter(number)
  }

  const GoToViewGrievance = (number) => {
    console.log(number)
    setShutter(number)
  }


  return (
    <HStack
      w={'100vw'}
      h={'90vh'}
      padding={6}
    >
      <VStack
        boxShadow={'2xl'}
        spacing={3}
        w="7%" h="100%" bg="#5A4FCF" borderRadius={'2xl'}>

        <Box
          w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Text color={'white'}
              fontSize={'lg'}
              fontFamily={'monospace'}
            >koo
            </Text>
          </Flex>

        </Box>

        <Divider w="50%" />


        <Box
          w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
              onClick={() => { setShutter(0) }}
              borderRadius={10}
              background={shutter == 0 ? '#362ca0' : '#5A4FCF'}
              _hover={{ background: '#5247cd' }}
              color={'white'}
              fontSize={'3xl'}
              icon={<AiOutlineHome />} />
          </Flex>

        </Box>

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
              onClick={() => { setShutter(1) }}
              background={shutter == 1 ? '#362ca0' : '#5A4FCF'}
              borderRadius={10}

              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<MdOutlineRecentActors />} />
          </Flex>
        </Box>

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
              onClick={() => { setShutter(2) }}
              background={shutter == 2 ? '#362ca0' : '#5A4FCF'}
              borderRadius={10}

              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<MdPendingActions />} />
          </Flex>
        </Box>

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
              onClick={() => { setShutter(3) }}
              background={shutter == 3 ? '#362ca0' : '#5A4FCF'}
              borderRadius={10}

              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<IoMdAddCircleOutline />} />
          </Flex>
        </Box>

        <Divider w="50%" />

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
              onClick={() => { setShutter(5) }}
              background={shutter == 5 ? '#362ca0' : '#5A4FCF'}
              marginBottom={5}
              borderRadius={10}

              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<AiOutlineUser />} />
          </Flex>
        </Box>
        <Box w="100%" h="50%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'}>
            <IconButton
              background={'#5A4FCF'}
              borderRadius={10}

              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'2xl'}
              icon={<AiOutlineLogout />} />

          </Flex>
        </Box>



      </VStack>

      <Box
        borderRadius={10}
        w="93%" h="100%">
        {
          shutter === 0 ? (
            User.role === "0P" || User.role === "0I" ? <UserHome
              runner={GoToAddGrievance}
              runner1={GoToViewGrievance}
              userData={User} /> : <AdminHome userData={User} />
          ) : (null)
        }
        {
          shutter === 1 ? (
            User.role == "0P" || User.role === "0I" ?
              <DashboardHistory User={User ? User : null} /> :
              User.role === "1" ? <NodalOfficersList /> :
                User.role === "3" ? <OfficersRankingPage /> :
                  User.role == "2" ? <RegionalOfTracker /> :
                    <AdminDashboardHistory User={User ? User : null} />
          ) : (null)
        }
        {
          shutter === 2 ? (
            User.role == "3" ? <SolvedGrievance /> :
              User.role == "1" ? <AddNodalOfficer /> :
                User.role == "2" ? <> Nothing here</> :
                  User.role != "1A" ? <DashboardTracker User={User ? User : null} /> : <>nothing here</>
          ) : (null)
        }
        {
          shutter === 3 ? (
            User.role == "1" ? <RegisterNewCollage /> :
              User.role == "0P" || User.role == "1B" ? <AddNewGrievance User={User ? User : null} /> :
                User.role === "3" ? <AddNewUniAdmin /> : User.role == "0I" ? <AddInstituteGrievance userData={User} /> : <>nothing Here</>
          ) : (null)
        }
        {/* {
          shutter === 4 ? (
            <DashboardSettings/>
          ):(null)
        } */}
        {
          shutter === 5 ? (
            User.role == 0 || User.role != "0I" ? <UserProfile userData={User} /> : <InstituteProfile />
          ) : (null)
        }

      </Box>

    </HStack>
  )
}
