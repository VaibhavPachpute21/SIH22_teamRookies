import { Avatar, Box, Flex, HStack, Tag, Text, VStack, Link, Input, Button, useToast,IconButton, Divider, Image } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { FiThumbsUp } from 'react-icons/fi'
import { FiThumbsDown } from 'react-icons/fi'
import * as actions from '../../actions/grievant_actions'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
import { FiSend } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import axios from "axios";

const GrievanceStatus = (props) => {

    const [error, Seterror] = useState('')
    const { pathname } = useLocation()
    const toast = useToast()
    const [satisfiedConfirm, setSatisfiedConfirm] = useState(false)
    const [satisfiedId, setsatisfiedId] = useState('')
    const [currentR, setCurrentR] = useState('')
    const [forwards, setForwards] = useState([])
    const [message, SetMessage] = useState('')
    const [forwardId, setForwardIs] = useState('')
    const [Error, SetError] = useState('')
    const inRef = useRef(null)
    const [Files, SetFiles] = useState([])
    const [success, setSuccess] = useState(null)
    const [urlSuccess, seturlSuccess] = useState(null)
    const [Url, SetUrl] = useState('')



    const navigate = useNavigate()
    useEffect(() => {
        const GetAllForwards = async () => {
            try {
                await props.GetForwards(pathname?.split("/")[2])
            } catch (error) {
                Seterror(error.message)
            }
        }
        GetAllForwards()
    }, [])

    useEffect(() => {
        let d = props.data
        if (d) {
            let f = d.grievanceData
            setForwards(f?.forwards)
        }
    }, [props.data])

    const EnableFile = () => {
        inRef.current.click()
      }

    const UploadFile = async (files) => {
        const file = files[0]
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "blrx6dsr")
    
        const data = await axios.post("https://api.cloudinary.com/v1_1/dvvzlzude/image/upload", formData)
        
          .then(response => response.data)
    
        if (data) {
            
          seturlSuccess(true)
          SetUrl(data?.url)
          let clone = [...Files]
          clone.push(file)
          SetFiles(clone)
        }
    
      }

      useEffect(()=>{
        if(Url){
            

  
              toast({
                position: 'top',
                render: () => (
                  <Box color='white' p={3} bg='green.500'>
                    Image uploaded
                  </Box>
                ),
              })
              
            }
            else if(Url==undefined) {
              toast({
                position: 'top',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    {Error}
                  </Box>
                ),
              })
            }
        
      },[Url])

      

    const SetSatisfied = (reciever_id, id) => {

        setCurrentR(reciever_id)
        setForwardIs(id)
        var ans = window.confirm("Are you sure you're satisfied with the reply?")
        if (ans) {

            setSatisfiedConfirm(true)
        }
        else
            setSatisfiedConfirm(false)
    }

    useEffect(() => {
        if (satisfiedConfirm == true) {

            try {
                props.SatisfiedWithReply(pathname?.split("/")[2], currentR, forwardId)
                //navigate(`/feedback/${pathname?.split("/")[2]}`)
            } catch (error) {
                Seterror(error.message)
            }

        }
    }, [satisfiedConfirm, props.SatisfiedWithReply])

    const MakeReply = async (gid, rid) => {
        if (gid) {
            try {
                const data = await axios.get(`http://localhost:3001/api/forwards/get_user_from_grievance/${gid}`)
                    .then(response => response.data)
                if (data) {
                    let someone = data?.user[0]
                    if (someone) {
                        let obj = {
                            message: message,
                            userType: "user",
                            img_link:Url
                        }
                        

                         const newReply = await axios.post(`http://localhost:3001/api/forwards/send-reply/${gid}/${rid}`, obj)
                            .then(response => response.data)
                        if (newReply) {
                            
                            

  
                                toast({
                                  position: 'top',
                                  render: () => (
                                    <Box color='white' p={3} bg='green.500'>
                                      Reply sent
                                    </Box>
                                  ),
                                })
                                
                              }
                              else  {
                                toast({
                                  position: 'top',
                                  render: () => (
                                    <Box color='white' p={3} bg='red.500'>
                                      {Error}
                                    </Box>
                                  ),
                                })
                              }
                        
                    }
                }



            } catch (error) {
                SetError(error.message)
            }
        }

    }


    const end = function (username, reciever_id, university, replies, i, id, satisfied, updatedAt, officer_name, grievance_id) {

        return (
            typeof (officer_name) !== undefined ? <Box key={i} w="100%" h="max-content">
                <HStack w="100%" h="100%" alignItems={'flex-start'} justifyContent={'center'}>
                    <VStack w="5%" h="100%">
                        <Box w="100%" h="10%">
                            <Tag
                                borderRadius={20}
                                size={'lg'}
                                colorScheme={'purple'}>

                            </Tag>
                        </Box>

                        <Divider
                            w="40%"
                            h="100%"
                            orientation="vertical" />
                    </VStack>
                    <Box
                        border={'1px'}
                        borderColor={'gray.100'}
                        w="95%" h="100%">
                        <HStack w="100%" h="60%">
                            <VStack
                                py={1}
                                px={5}
                                alignItems={'flex-start'}
                                w="70%" h="100%">
                                <Box>
                                    <Text fontWeight={'600'}>
                                        System
                                    </Text>
                                </Box>


                                <Box>
                                    {`Grievance was forwarded to a new nodal officer: ${officer_name}`}
                                </Box>

                                <Box w="100%" h="40%">
                                    <VStack
                                        alignItems={'flex-start'}
                                        w="100%" h="100%">
                                        <Text fontWeight={'600'}>
                                            New reciever info
                                        </Text>

                                        <HStack
                                            w="100%" h="max-content">
                                            <Box w="10%">
                                                <Avatar />
                                            </Box>

                                            <Box w="40%" h="100%">
                                                <VStack alignItems={'flex-start'} spacing={0} w="100%">
                                                    <Text fontWeight={'600'}>
                                                        @{username}
                                                    </Text>

                                                    <Text px={4}>
                                                        {university}
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                        {
                                            replies && replies.length ? (
                                                <VStack

                                                    py={2}
                                                    w="100%" h="max-content">
                                                    <VStack
                                                        alignItems={'flex-start'}
                                                        w="100%" h="100%">
                                                        <Text fontWeight={'600'}>
                                                            Officer
                                                        </Text>

                                                        {
                                                            replies?.map((item, i) => {
                                                                return (
                                                                    <VStack
                                                                        key={i}
                                                                        alignItems={'flex-start'}
                                                                        justifyContent={'space-between'}
                                                                        px={3}
                                                                        py={2}
                                                                        border={'1px'}
                                                                        borderColor={'gray.100'}
                                                                        w="100%" h="100%">
                                                                        Hey
                                                                        <Text fontWeight={600}>
                                                                            {item.message}
                                                                        </Text>

                                                                        {
                                                                            item.user_type === "admin" ? (
                                                                                <Text>
                                                                                    {item.DateTime}

                                                                                </Text>
                                                                            ) : (
                                                                            <Box><Text>
                                                                                By you on {item.DateTime}

                                                                            </Text>
                                                                            {item.img_link ? (
                                                                                 <Image 
                                                                                 w="50%"
                                                                                 h="50%"
                                                                                 src={item.img_link} alt="Hey"/>
                                                                            ):null}
                                                                           
                                                                            </Box>)
                                                                        }

                                                                        <HStack py={2}>
                                                                            {
                                                                                item.user_type === "admin" ? (
                                                                                    <Box>
                                                                                        <IconButton
                                                                                            disabled={satisfied ? true : false}
                                                                                            size={'sm'}
                                                                                            colorScheme={'red'}
                                                                                            icon={<FiThumbsDown />} />
                                                                                        <IconButton
                                                                                            disabled={satisfied ? true : false}
                                                                                            size={'sm'}
                                                                                            onClick={() => { SetSatisfied(reciever_id, id); setsatisfiedId(item._id) }}
                                                                                            colorScheme={'green'}
                                                                                            icon={<FiThumbsUp />} />
                                                                                    </Box>
                                                                                ) : (null)
                                                                            }

                                                                        </HStack>
                                                                        {
                                                                            item.user_type === "admin" ? (
                                                                                <Flex
                                                                                    justifyContent={'flex-end'}
                                                                                    alignItems={'flex-end'} w="100%" h="max-content">
                                                                                    <Box>
                                                                                        <VStack
                                                                                            justifyContent={'flex-end'}
                                                                                            alignItems={'flex-end'}>
                                                                                            <Text
                                                                                                fontWeight={600}
                                                                                            >
                                                                                                Send reply
                                                                                            </Text>
                                                                                            <Text fontSize={'10px'}>
                                                                                                {"(Be respectful)"}
                                                                                            </Text>
                                                                                            <Input
                                                                                                type="text" onChange={(e) => SetMessage(e.target.value)} />



                                                                                            <IconButton
                                                                                                disabled={message ? false : true}
                                                                                                color={'white'}
                                                                                                bg="green"
                                                                                                onClick={() => { MakeReply(grievance_id, reciever_id) }}
                                                                                                icon={<FiSend />} />

                                                                                            <IconButton
                                                                                            onClick={() => EnableFile()}
                                                                                            color={'white'}
                                                                                                bg="green"
                                                                                                disabled={message ? false : true}
                                                                                                
                                                                                                icon={<GrAttachment />} />
                                                                                            <input
                                                                                                style={{ width: '0', height: '0', display: 'none' }}
                                                                                                onChange={(e) => { UploadFile(e.target.files) }}
                                                                                                type="file"
                                                                                                accept="image/* application/pdf"
                                                                                                ref={inRef}
                                                                                            />
                                                                                        </VStack>
                                                                                    </Box>
                                                                                </Flex>
                                                                            ) : (null)
                                                                        }
                                                                    </VStack>
                                                                )
                                                            })
                                                        }



                                                    </VStack>

                                                </VStack>
                                            ) : (null)
                                        }

                                    </VStack>
                                </Box>
                            </VStack>
                            <Box
                                py={1}
                                w="30%" h="100%">
                                <Flex
                                    w="100%" h="30%" flexDirection={'row'} justifyContent={'space-around'}>

                                    <Text>
                                        20mins ago
                                    </Text>

                                    <Text>
                                        2:50 PM
                                    </Text>

                                </Flex>

                            </Box>

                        </HStack>
                        <Flex
                            py={5}
                            alignItems={'center'} justifyContent={'center'}>
                            <Text fontWeight={600}>
                                {
                                    satisfied && i == forwards.length - 1 ? (
                                        `Grievance closed on ${updatedAt?.split('T')[0]}`
                                    ) : ("")
                                }
                            </Text>
                        </Flex>
                    </Box>

                </HStack>


            </Box> : null
        )
    }


    return (
        <Box w="100%" maxH={'90vh'} overflowY={'scroll'} overflowX={'hidden'}>
            <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                <VStack py={5} w="85%" h="100%" alignItems={'center'} spacing={7}>
                    {forwards?.map((item, i) => (
                        end(item.assigned_to_role === "1A" || item.assigned_to_role === "1B" ? `Nodal officer` : `Regional officer`, item.current_reciever, item.officer_university, item.replies, i, item._id, item.satisfied, item.updatedAt, item.officer_name, item.grievance_id)
                    ))}
                </VStack>
            </Flex>

        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.grievance
    }
}

export default connect(mapStateToProps, actions)(GrievanceStatus);