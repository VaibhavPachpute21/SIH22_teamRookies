import { Avatar, Box, Flex, HStack, Tag, Text, VStack, Link, IconButton, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiThumbsUp } from 'react-icons/fi'
import { FiThumbsDown } from 'react-icons/fi'
import * as actions from '../../actions/grievant_actions'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";


const GrievanceStatus = (props) => {

    const [error, Seterror] = useState('')
    const { pathname } = useLocation()
    const [satisfiedConfirm, setSatisfiedConfirm] = useState(false)
    const [satisfiedId, setsatisfiedId] = useState('')
    const [currentR, setCurrentR] = useState('')
    const [forwards, setForwards] = useState([])
    const [forwardId, setForwardIs] = useState('')

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
                navigate('/feedback/=92=359=')
            } catch (error) {
                Seterror(error.message)
            }

        }
    }, [satisfiedConfirm, props.SatisfiedWithReply])

    console.log(props)

    const end = function (username, reciever_id, university, replies, i, id, satisfied, updatedAt,officer_name) {

        return (
            <Box key={i} w="100%" h="max-content">
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
                                    {`Grievance was forwarded to a new nodal officer: ${reciever_id}`}
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
                                                                        <Text>
                                                                            {item.message}
                                                                        </Text>

                                                                        <Text>
                                                                            {item.DateTime}
                                                                        </Text>
                                                                        <HStack py={2}>
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
                                                                        </HStack>

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


            </Box>
        )
    }


    return (
        <Box w="100%" maxH={'90vh'} overflowY={'scroll'} overflowX={'hidden'}>
            <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                <VStack py={5} w="85%" h="100%" alignItems={'center'} spacing={7}>
                    {forwards?.map((item, i) => (
                        end(item.assigned_to_role === "1A" || item.assigned_to_role === "1B" ? `Nodal officer`:`Regional officer`, item.current_reciever, item.officer_university, item.replies, i, item._id, item.satisfied, item.updatedAt,item.officer_name)
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