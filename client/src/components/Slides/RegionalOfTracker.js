import React, { useEffect, useState } from 'react'
import {
    Box, useToast, Flex, Textarea, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Button, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../../actions/regional_officer_actions'

function RegionalOfTracker(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [User, SetUser] = useState({})
    const [Error, SetError] = useState('')
    const [grievances, setgrievances] = useState([])

    const [message, SetMessage] = useState('')

    useEffect(() => {
        if (props.User) {
            SetUser(props.User)

        }

    }, [props.User])
    const toast = useToast()

    useEffect(() => {
        const GetAllRegionalGrievances = async () => {
            try {
                await props.GetRegionGrievances(User?.region)
                if (props.data) {
                    let alias = props.data?.regionData
                    if (alias.grievances?.length > 0) {
                        setgrievances(alias.grievances)
                    }
                }
            } catch (error) {
                SetError(error.message)
            }
        }
        GetAllRegionalGrievances()
    }, [User.region])


    const MakeReply = async (gid) => {

        try {
            let obj = {
                message: message
            }

            await props.SendReply(obj,gid,User._id)
            let request = props.data
            
            if (request.regionData) {
                let f = request?.regionData.success 
                
                if (f) {
                    toast({
                        position: 'top',
                        render: () => (
                            <Box color='white' p={3} bg='green.500'>
                                Message sent!
                            </Box>
                        ),
                    })
                }
                else {
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

        } catch (error) {
            SetError(error.message)
        }
    }


    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} padding={2} overflowX={'hidden'}>
            <Flex w={"90%"}>

                <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
                    <Text fontWeight={600}>Grievances related to your region</Text>
                    {
                        grievances && grievances.length > 0 ? (
                            grievances.map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    mt={2} p={2} borderTop={'4px solid #5A4FCF'} borderBottom={'2px solid #5A4FCF'}
                                    borderTopRadius={15} shadow='dark-md' >
                                    <h2>

                                        <AccordionButton>
                                            <Box flex='1'>
                                                <Flex justifyContent={'space-evenly'}>
                                                    <Box>
                                                        Grievance Title: <strong>{item?.grievance_title}</strong>
                                                    </Box>
                                                    <Box>
                                                        Raised By: <strong>{item?.grievant_university} </strong>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Box w={'100%'}>
                                            <Flex w={'100%'}>
                                                <Box w={"15%"}>
                                                    <strong>Nature of Grievance</strong>
                                                </Box>
                                                <Box w={'80%'} textAlign={'justify'}>
                                                    <Text>{item?.grievance_nature}</Text>
                                                </Box>
                                            </Flex>
                                            <Flex w={'100%'}>
                                                <Box w={"15%"}>
                                                    <strong>Description</strong>
                                                </Box>
                                                <Box w={'80%'} textAlign={'justify'}>
                                                    <Text>
                                                        {item?.grievance_description}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Flex w={'100%'}>
                                                <Box w={"15%"}>
                                                    <strong>Grievant Institute</strong>
                                                </Box>
                                                <Box w={'80%'} textAlign={'justify'}>
                                                    <Text>{item?.grievant_institute}</Text>
                                                </Box>
                                            </Flex>

                                            <Flex w={'100%'}>
                                                <Box w={"15%"}>
                                                    <strong>Grievance Raised on</strong>
                                                </Box>
                                                <Box w={'80%'} textAlign={'justify'}>
                                                    <Text>{item?.createdAt?.split('T')[0]}</Text>
                                                </Box>
                                            </Flex>

                                            <Flex w={'100%'}>
                                                <Box w={"15%"}>
                                                    <strong>Attachments</strong>
                                                </Box>
                                                <Box w={'80%'} textAlign={'justify'}>
                                                    <Text>{item?.imgs.length} attachment</Text>
                                                </Box>
                                            </Flex>

                                            <Flex w={'100%'} justifyContent={'center'} >
                                                <Box alignSelf={'center'}>
                                                    {
                                                        item?.satisfied ? (
                                                            <Button 
                                                            hover={{}}
                                                            bg={'darkgreen'} color='white' >Solved</Button>
                                                        ):(
                                                            <Button onClick={onOpen} bg={'#5A4FCF'} color='white' >Send Reply</Button>
                                                        )
                                                    }
                                                   

                                                    <Modal isOpen={isOpen} onClose={onClose}>
                                                        <ModalOverlay />
                                                        <ModalContent>
                                                            <ModalHeader>Enter Reply</ModalHeader>
                                                            <ModalCloseButton />
                                                            <ModalBody>
                                                                <Textarea value={message} onChange={(e) => SetMessage(e.target.value)} />
                                                            </ModalBody>

                                                            <ModalFooter>
                                                                <Button
                                                                    onClick={() => { onClose(); MakeReply(item._id) }}
                                                                    colorScheme='blue' mr={3}>
                                                                    Send
                                                                </Button>
                                                            </ModalFooter>
                                                        </ModalContent>
                                                    </Modal>
                                                </Box>
                                            </Flex>

                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                            ))

                        ) : ("No grievances in your region")
                    }



                </Accordion>
            </Flex>
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.region
    }
}


export default connect(mapStateToProps, actions)(RegionalOfTracker)