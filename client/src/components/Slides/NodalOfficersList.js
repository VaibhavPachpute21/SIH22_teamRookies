import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Text, FormLabel, Heading, Input, Textarea, FormControl, SimpleGrid, GridItem, Select } from '@chakra-ui/react'
import axios from 'axios'

export default function NodalOfficersList() {

    const [officer1A, SetOfficer1A] = useState([])
    const [officer1B, SetOfficer1B] = useState([])

    useEffect(() => {
        const AllOfficers = async () => {
            const officers = await axios.get('http://localhost:3001/api/uniadmin/AllOfficers')
                .then(response => response.data)
            if (officers) {
                SetOfficer1A(officers?.Officer1A)
                SetOfficer1B(officers?.Officer1B)
            }
        }
        AllOfficers()
    }, [])

    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} padding={5} overflowX={'hidden'} >
            <Flex w='90%' h={'100%'} flexDirection='column' >

                {
                    officer1A.length > 0 ? (
                        <Text fontWeight={600}>
                            1A officers
                        </Text>
                    ) : ("No 1A officers")
                }
                {
                    officer1A && officer1A.length > 0 ? (
                        officer1A?.map((item, i) => (
                            <Box
                                key={i}
                                w={'100%'} h={"max-content"} margin={2} border={'0.5px solid gray'} borderTop={'4px solid #5A4FCF'} borderRadius={15}  >
                                <Flex w={'95%'}>
                                    <Box w={'40%'} padding={2}>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input value={item?.fullname} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Gender</FormLabel>
                                        <Input value={item?.gender} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Phone number</FormLabel>
                                        <Input value={item?.phone_number} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Email</FormLabel>
                                        <Input value={item?.email} />
                                    </Box>

                                </Flex>
                                <Flex w={'95%'}>
                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>District</FormLabel>
                                        <Input value={item?.district} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>State</FormLabel>
                                        <Input value={item?.state} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>University</FormLabel>
                                        <Input value={item?.phone_number} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>commitee </FormLabel>
                                        <Input value={item?.committee} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Role </FormLabel>
                                        <Input value={item?.role} />
                                    </Box>

                                </Flex>
                            </Box>
                        )
                        )
                    ) : ("No officers")

                }


                {
                    officer1B.length > 0 ? (<Text fontWeight={600}>
                        1B officers
                    </Text>) : ("No 1B officers")
                }
                {

                    officer1B && officer1B.length > 0 ? (
                        officer1B?.map((item, i) => (
                            <Box
                                key={i}
                                w={'100%'} h={"max-content"} margin={2} border={'0.5px solid gray'} borderTop={'4px solid #5A4FCF'} borderRadius={15}  >
                                <Flex w={'95%'}>
                                    <Box w={'40%'} padding={2}>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input value={item?.fullname} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Gender</FormLabel>
                                        <Input value={item?.gender} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Phone number</FormLabel>
                                        <Input value={item?.phone_number} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Email</FormLabel>
                                        <Input value={item?.email} />
                                    </Box>

                                </Flex>
                                <Flex w={'95%'}>
                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>District</FormLabel>
                                        <Input value={item?.district} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>State</FormLabel>
                                        <Input value={item?.state} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>University</FormLabel>
                                        <Input value={item?.phone_number} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>commitee </FormLabel>
                                        <Input value={item?.committee} />
                                    </Box>

                                    <Box w={'20%'} padding={2}>
                                        <FormLabel>Role </FormLabel>
                                        <Input value={item?.role} />
                                    </Box>

                                </Flex>
                            </Box>

                        ))
                    ) : ("No officers")

                }




            </Flex>
        </Flex>
    )
}
