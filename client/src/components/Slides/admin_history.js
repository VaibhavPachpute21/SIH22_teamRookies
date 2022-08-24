import {
    Box, VStack, HStack, Flex, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast,
    useDisclosure,
    Checkbox, IconButton, Avatar, Heading, Tag, Select, Button, FormLabel, Textarea
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import cookie from 'js-cookie'
import './styles/drawer.css'
import * as actions from '../../actions/user_actions'
import axios from 'axios';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const AdminDashboardHistory = (props) => {

    const toast = useToast()
    

    const Filters = [
        "All", "Institute", "Student", "Employee", "Solved", "Unsolved"
    ]

    const [Error, SetError] = useState('')

    const [authen, setAuthen] = useState(null)
    const auth = cookie.get('token');
    const [User, SetUser] = useState({})

    const [forwards, setForwards] = useState([])
    const [currentGrievances, setcurrentGrievances] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [message, SetMessage] = useState('')
    const nav = useNavigate()

    useEffect(() => {
        SetUser(props.User)
    }, [props.User])


    useEffect(() => {
        const fetchMyGrievances = async () => {
            try {
                await props.GetMyGrievances(User._id, User?.role)
            } catch (error) {
                SetError(error.message)
            }
        }
        fetchMyGrievances()
    }, [User._id, props.GetMyGrievances, User.role])

    useEffect(() => {
        if (props.data) {
            let alias = props.data
            if (alias.userData) {
                let d = alias.userData
                if (d.forwards) {
                    setForwards(d.forwards)
                }
                if (d.myGrievances) {
                    setcurrentGrievances(d.myGrievances)
                }
            }
        }
    }, [props.data])

    useEffect(() => {
        if (props.data) {
          let alias = props.data
          if (alias.userData) {
                let newReply = alias?.userData
                if(newReply?.newReply){
                    let success =newReply?.success
                    
                    if (success) {
                        toast({
                          position: 'top',
                          render: () => (
                            <Box color='white' p={3} bg='green.500'>
                              Reply Sent! 
                            </Box>
                          ),
                        })
                       
                      }
                      else {
                        toast({
                          position: 'top',
                          render: () => (
                            <Box color='white' p={3} bg='red.500'>
                              Some error occured
                            </Box>
                          ),
                        })
                      }
                }
        
    
          }
    
        }
      }, [props.data])

    const MakeReply = async (gid) => {
      
        try {
                let obj = {
                    message:message
                }

            const set = await props.SendReply(obj, gid, User?._id)

        } catch (error) {
            SetError(error.message)
        }
    }

   



    return (
        <Box w="100%" h="100%">

            <VStack w="100%" h="100%">
                <Box w="100%" h="10%">
                    <Flex w="100%" h="100%" alignItems={'flex-end'} justifyContent={'flex-end'}>
                        <Select w={["100%","100%","20%","20%"]}>
                            <option>All</option>
                            <option>Solved</option>
                            <option>Unsolved</option>
                            <option>Latest</option>
                        </Select>
                    </Flex>
                </Box>

                <Box w="100%" h="90%" overflow={'scroll'}>
                    <Text
                    textAlign={'start'}
                        fontWeight={600}
                        fontSize={'xl'}
                        py={3}>
                        {
                            forwards && forwards.length > 0 ? ("Some grievances you've missed") : ("Current grievances")
                        }
                    </Text>
                    <Flex w="100%" minH={'70vh'} spacing={5} flexDirection={'column'}>

                        {
                            forwards && forwards.length > 0 ? (
                                forwards?.map((item, i) => (
                                    <Flex flexDirection={['column','column','column','column']}
                                        spacing={8} boxShadow={'md'}
                                        borderTop={'3px solid #5A4FCF'}
                                        key={i} w="100%" h={["100%","100%","15vh","15vh"]}>
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalHeader>Write reply</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <FormLabel>Enter Reply</FormLabel>
                                                    <Textarea type="text" value={message} onChange={(e) => SetMessage(e.target.value)} />
                                                </ModalBody>

                                                <ModalFooter>
                                                    <Button
                                                        color="white"
                                                        bg="#5A4FCF"
                                                        onClick={() => { onClose(); MakeReply(item.grievance_id) }}>
                                                        Send
                                                    </Button>

                                                </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                        <Flex flexDirection={['column','column','row','row']}
                                            marginTop={2}
                                            alignItems={'flex-start'}
                                            justifyContent={'space-between'}
                                            w="100%" h={["100%","100%","20%","20%"]}>
                                            <HStack w={["100%","100%","40%","40%"]} h="100%">
                                                <Text fontWeight={600}>
                                                    Grievance id
                                                </Text>
                                                <Text>
                                                    {item.grievance_id}
                                                </Text>
                                            </HStack>

                                            <HStack w={["100%","100%","15%","15%"]} h="100%" alignItems={'center'}>
                                                {User.role=="1B"?<Button
                                                onClick={() => { nav(`/TrackGrievance/${item.grievance_id}`, { state:{url:item.grievance_id} }) }}
                                                >TrackGrievance</Button>: <Button
                                                    onClick={() => { onOpen(); }}
                                                    color={'white'}
                                                    bg="#5A4FCF"
                                                    h="100%">
                                                    Send reply
                                                </Button>}
                                            </HStack>
                                        </Flex>

                                        <HStack w="100%" h="5%">
                                            <HStack w={["100%","100%","40%","40%"]} h="100%">
                                                <Text fontWeight={600}>
                                                    Forwarded to you on
                                                </Text>
                                                <Text>
                                                    {item?.updatedAt.split('T')[0]}
                                                </Text>
                                            </HStack>
                                        </HStack>

                                    </Flex>
                                ))
                            ) : (null)
                        }
                        <Box w={'100%'}>
                        <Text
                        textAlign={'start'}
                            fontWeight={600}
                            fontSize={'xl'}
                            py={3}>
                            {
                                currentGrievances && currentGrievances.length > 0 ? ("Current grievances") : ("Current grievances")
                            }
                        </Text>
                        </Box>
                        {
                            currentGrievances?.map((item, i) => (

                                <VStack
                                    spacing={8}
                                    boxShadow={'md'}

                                    borderTop={'3px solid #5A4FCF'}
                                    key={i} w="100%" h="max-content">

                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Write reply</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <FormLabel>{`To ${item?.grievant_name}`}</FormLabel>
                                                <Textarea type="text" value={message} onChange={(e) => SetMessage(e.target.value)} />
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button
                                                    color="white"
                                                    bg="#5A4FCF"
                                                    onClick={() => { onClose(); MakeReply(item._id); }}>
                                                    Send
                                                </Button>

                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
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
                                                {item?._id}
                                            </Text>
                                        </HStack>

                                        <HStack w="15%" h="100%" alignItems={'center'}>
                                            {
                                                item?.satisfied ? (
                                                    <Button
                                                        disabled={true}
                                                        onClick={() => { onOpen() }}
                                                        color={'white'}
                                                        bg="darkgreen"
                                                        _hover={{}}
                                                        h="100%">
                                                        Solved
                                                    </Button>
                                                ) : (

                                                    User.role =="1B" ? <Button>Track Grievance</Button>: <Button
                                                        onClick={() => { onOpen() }}
                                                        color={'white'}
                                                        bg="#5A4FCF"
                                                        h="100%">
                                                        Send reply
                                                    </Button>
                                                )
                                            }

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

                                    <HStack w="100%" h="5%">
                                        <HStack w="40%" h="100%">
                                            <Text fontWeight={600}>
                                                {15 - (item?.day_counter)}
                                            </Text>
                                            <Text>
                                                days to forward
                                            </Text>
                                        </HStack>
                                    </HStack>

                                    <VStack
                                        py={2}
                                        alignItems={'flex-start'}
                                        w="100%" h="max-content">
                                        <Text fontWeight={600}>
                                            {item?.grievance_title}
                                        </Text>

                                        <Text w="100%" h="max-content">
                                            {item?.grievance_description}
                                        </Text>
                                    </VStack>
                                </VStack>
                            ))
                        }
                    </Flex>
                </Box>
            </VStack>

        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.users
    }
}


export default connect(mapStateToProps, actions)(AdminDashboardHistory);