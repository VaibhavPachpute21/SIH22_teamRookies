import { Box, VStack, HStack, Flex, Text, Checkbox, IconButton, Avatar, Heading, Tag, Select, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import cookie from 'js-cookie'
import './styles/drawer.css'
import * as actions from '../../actions/user_actions'
import axios from 'axios';
import { connect } from 'react-redux';


const DashboardHistory = (props) => {

    const Filters = [
        "All", "Institute", "Student", "Employee", "Solved", "Unsolved"
    ]

    const [Error,SetError] = useState('')

    const [authen, setAuthen] = useState(null)
    const auth = cookie.get('token');
    const [User, SetUser] = useState({})

    const [forwards,setForwards] = useState([])
    const [currentGrievances,setcurrentGrievances] = useState([])

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
    

    useEffect(()=>{
        const fetchMyGrievances = async () => {
            try {
                await props.GetMyGrievances(User?._id)
            } catch (error) {
                SetError(error.message)
            }
        }
        fetchMyGrievances()
    },[User._id,props.GetMyGrievances])

    useEffect(()=>{
        if(props.data){
            let alias = props.data
           
            if(alias.userData){
                let d = alias.userData
                setForwards(d?.forwards)
            }
            else if(alias.userData){
                let d = alias.userData
                setcurrentGrievances(d?.myGrievances)
            }
        }
    },[props.data])

    

    return (
        <Box w="100%" h="100%">
            <VStack w="100%" h="100%">
                <Box w="100%" h="10%">
                    <Flex w="100%" h="100%" alignItems={'flex-end'} justifyContent={'flex-end'}>
                        <Select w="20%">
                            <option>All</option>
                            <option>Solved</option>
                            <option>Unsolved</option>
                            <option>Latest</option>
                        </Select>
                    </Flex>
                </Box>

                <Box w="100%" h="90%">
                    <Text
                    fontWeight={600}
                    fontSize={'xl'}
                    py={3}>
                        {
                            forwards && forwards.length > 0 ? ("Some grievances you've missed"):("Current grievances")
                        }
                    </Text>
                    <VStack w="100%" minH={'70vh'} overflow={'scroll'} spacing={5}>
                        {
                            forwards && forwards.length > 0 ? (
                                forwards?.map((item,i)=>(
                                    <VStack
                                    spacing={8}
                                    boxShadow={'md'}
                                    
                                    borderTop={'3px solid #5A4FCF'}
                                    key={i} w="100%" h="15vh">
                                        <HStack
                                        marginTop={2}
                                        alignItems={'flex-start'}
                                        justifyContent={'space-between'}
                                        w="100%" h="20%">
                                            <HStack w="40%" h="100%">
                                                <Text fontWeight={600}>
                                                    Grievance id
                                                </Text>
                                                <Text>
                                                    {item?.grievance_id}
                                                </Text>
                                            </HStack>

                                            <HStack w="15%" h="100%" alignItems={'center'}>
                                            <Button
                                            
                                            color={'white'}
                                            bg="#5A4FCF"
                                            h="100%">
                                                Check status
                                            </Button>
                                                </HStack>
                                        </HStack>

                                        <HStack w="100%" h="5%">
                                        <HStack w="40%" h="100%">
                                                <Text fontWeight={600}>
                                                    Forwarded to you on
                                                </Text>
                                                <Text>
                                                    {item?.updatedAt.split('T')[0]}
                                                </Text>
                                            </HStack>
                                        </HStack>

                                    </VStack>
                                ))
                            ):(null)
                        }
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return{
        data:state.users
    }
}


export default connect(mapStateToProps,actions)(DashboardHistory);