import React, { useEffect, useState } from 'react'
import { Box, Flex, FormLabel, Input, Button, Text, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import * as actions from '../../actions/superadmin_actions'
import { connect } from 'react-redux'

function OfficersRankingPage(props) {

    const [Error, SetError] = useState('')
    const [officers, setOfficers] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        try {
            props.GetTopThrees()
        } catch (error) {
            SetError(error.message)
        }
    }, [])


    useEffect(() => {
        if (props.data) {
            let alias = props.data?.superData
            if (alias) {
                setOfficers(alias?.topThreeOfficers)
            }
        }
    }, [props.data])



    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} padding={5} overflowX={'hidden'} >

            <Flex w='90%' h={'100%'} flexDirection='column' >
                <Text fontWeight={600}>
                    Officers who solved max grievances
                </Text>
                {
                    officers && officers.length > 0 ? (
                        officers?.map((item, i) => (
                            <Box
                                key={i}
                                w={'100%'} h={"max-content"} margin={2} border={'0.5px solid gray'} borderTop={'4px solid #5A4FCF'} borderRadius={15}  >
                                <Flex w={'95%'}>
                                    <Box w={'40%'} padding={2}>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input value={item?.fullname} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Gender</FormLabel>
                                        <Input value={item?.gender} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Phone number</FormLabel>
                                        <Input value={item?.phone_number} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Email</FormLabel>
                                        <Input value={item?.email} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                </Flex>

                                <Flex w={'95%'}>
                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>District</FormLabel>
                                        <Input value={item?.district} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>commitee </FormLabel>
                                        <Input value={item?.committee} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Likes </FormLabel>
                                        <Input value={item?.solve_count} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                                    </Box>

                                    {/* <Box w={'20%'} padding={2}>
                            <FormLabel>Grievance Solved </FormLabel>
                            <Input value={item?.solve_count} variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={5}>
                            <Button mt={5}
                                borderRadius={'sm'} type="submit"
                                bg={"#5A4FCF"} color={'white'} fontWeight={600}>
                                Send appreciation
                            </Button>
                        </Box> */}

                                </Flex>
                            </Box>

                        ))
                    ) : (null)
                }

                <Flex w={'90%'} justifyContent={'center'}>
                    <Box>
                        <Button onClick={onOpen} color="white" bg="#5A4FCF">Send Appretiation</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <FormLabel>Add message</FormLabel>
                                    <Textarea ></Textarea>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Send Appretiation
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>

                </Flex>








            </Flex>
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.superadmin
    }
}


export default connect(mapStateToProps, actions)(OfficersRankingPage)