import React, { useState } from 'react'
import { HStack, Flex, Box, VStack, IconButton, Divider, Text } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineRecentActors } from 'react-icons/md'
import { MdPendingActions } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'

import AddNewGrievance from '../Grievance/AddNewGrievance'
import DashboardAdd from '../Slides/add'
import DashboardHistory from '../Slides/history'
import DashboardHome from '../Slides/home'
import DashboardTracker from '../Slides/tracker'
import DashboardSettings from '../Slides/settings'
import UserProfile from '../Slides/userProfile'

export default function Dashboard() {

  const [shutter, setShutter] = useState(0)
  



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
              background={shutter==0?'#362ca0':'#5A4FCF'}
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
              background={shutter==1?'#362ca0':'#5A4FCF'}
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
              background={shutter==2?'#362ca0':'#5A4FCF'}
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
              background={shutter==3?'#362ca0':'#5A4FCF'}
              borderRadius={10}
      
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<IoMdAddCircleOutline />} />
          </Flex>
        </Box>

        <Divider w="50%" />

        {/* <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
              onClick={() => { setShutter(4) }}
              background={shutter==4?'#362ca0':'#5A4FCF'}
              borderRadius={10}
         
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'2xl'}
              icon={<FiSettings />} />
          </Flex>
        </Box> */}

        <Box w="100%" h="50%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'}>
            <IconButton
              onClick={() => { setShutter(5) }}
              background={shutter==5?'#362ca0':'#5A4FCF'}
              marginBottom={5}    
              borderRadius={10}
        
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<AiOutlineUser />} />
          </Flex>
        </Box>


      </VStack>

      <Box 
      borderRadius={10}
      w="93%" h="100%">
        {
          shutter === 0 ? (
            <DashboardHome/>
          ):(null)
        }
        {
          shutter === 1 ? (
            <DashboardHistory/>
          ):(null)
        }
        {
          shutter === 2 ? (
            <DashboardTracker/>
          ):(null)
        }
        {
          shutter === 3 ? (
            <AddNewGrievance/>
          ):(null)
        }
        {/* {
          shutter === 4 ? (
            <DashboardSettings/>
          ):(null)
        } */}
        {
          shutter === 5 ? (
            <UserProfile/>
          ):(null)
        }
        
      </Box>

    </HStack>
  )
}
