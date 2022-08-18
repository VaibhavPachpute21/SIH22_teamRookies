import React from 'react'
import { Box, Flex, FormLabel,Textarea, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,useDisclosure } from '@chakra-ui/react'


export default function OfficersRankingPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} padding={5} overflowX={'hidden'} >
            <Flex w='90%' h={'100%'} flexDirection='column' >
                <Box w={'100%'} h={"max-content"} margin={2} border={'0.5px solid gray'} borderTop={'4px solid #5A4FCF'} borderRadius={15}  >
                    <Flex w={'95%'}>
                        <Box w={'40%'} padding={2}>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='Nodal Officer 1' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Gender</FormLabel>
                            <Input placeholder='Male' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Phone number</FormLabel>
                            <Input placeholder='1234567890' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='nodalofficer@mail.com' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                    </Flex>

                    <Flex w={'95%'}>
                        <Box w={'20%'} padding={2}>
                            <FormLabel>District</FormLabel>
                            <Input placeholder='Thane' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>commitee </FormLabel>
                            <Input placeholder='CRGS' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Likes </FormLabel>
                            <Input placeholder='100' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>
                    </Flex>
                </Box>

                <Box w={'100%'} h={"max-content"} margin={2} border={'0.5px solid gray'} borderTop={'4px solid #5A4FCF'} borderRadius={15}  >
                    <Flex w={'95%'}>
                        <Box w={'40%'} padding={2}>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='Nodal Officer 1' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Gender</FormLabel>
                            <Input placeholder='Male' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Phone number</FormLabel>
                            <Input placeholder='1234567890' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='nodalofficer@mail.com' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                    </Flex>

                    <Flex w={'95%'}>
                        <Box w={'20%'} padding={2}>
                            <FormLabel>District</FormLabel>
                            <Input placeholder='Thane' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>commitee </FormLabel>
                            <Input placeholder='CRGS' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Likes </FormLabel>
                            <Input placeholder='100' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>
                    </Flex>
                </Box>

                <Box w={'100%'} h={"max-content"} margin={2} border={'0.5px solid gray'} borderTop={'4px solid #5A4FCF'} borderRadius={15}  >
                    <Flex w={'95%'}>
                        <Box w={'40%'} padding={2}>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='Nodal Officer 1' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Gender</FormLabel>
                            <Input placeholder='Male' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Phone number</FormLabel>
                            <Input placeholder='1234567890' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='nodalofficer@mail.com' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                    </Flex>

                    <Flex w={'95%'}>
                        <Box w={'20%'} padding={2}>
                            <FormLabel>District</FormLabel>
                            <Input placeholder='Thane' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>commitee </FormLabel>
                            <Input placeholder='CRGS' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Likes </FormLabel>
                            <Input placeholder='100' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>
                    </Flex>

                </Box>

                <Flex w={'100%'} justifyContent={'center'} >
                    <Box alignSelf={'center'}>
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
