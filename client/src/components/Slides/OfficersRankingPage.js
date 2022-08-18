import React from 'react'
import { Box, Flex, FormLabel, Input, Button } from '@chakra-ui/react'


export default function OfficersRankingPage() {
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

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Grievance Solved </FormLabel>
                            <Input placeholder='100' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={5}>
                            <Button mt={5}
                                borderRadius={'sm'} type="submit"
                                bg={"#5A4FCF"} color={'white'} fontWeight={600}>
                                Send appreciation
                            </Button>
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

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Grievance Solved </FormLabel>
                            <Input placeholder='100' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={5}>
                            <Button mt={5}
                                borderRadius={'sm'} type="submit"
                                bg={"#5A4FCF"} color={'white'} fontWeight={600}>
                                Send appreciation
                            </Button>
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

                        <Box w={'20%'} padding={2}>
                            <FormLabel>Grievance Solved </FormLabel>
                            <Input placeholder='100' variant={'filled'} _placeholder={{ color: 'black' }} readOnly={true} />
                        </Box>

                        <Box w={'20%'} padding={5}>
                            <Button mt={5}
                                borderRadius={'sm'} type="submit"
                                bg={"#5A4FCF"} color={'white'} fontWeight={600}>
                                Send appreciation
                            </Button>
                        </Box>

                    </Flex>

                </Box>

            </Flex>
        </Flex>
    )
}
