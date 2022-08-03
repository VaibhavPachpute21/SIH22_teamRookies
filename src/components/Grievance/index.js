import { Avatar, Box, Flex, HStack, VStack, Image, Heading, Text, Spacer, IconButton, Divider } from '@chakra-ui/react'
import { TiExportOutline } from 'react-icons/ti'

const Grievance = () => {

    return (
        <Box w="100vw"
            h="100%" bg={'pink.100'} >
            <Box h="5%" w="95%">
                <Flex w="100%" h="100%">
                    <Box
                        w="100%" h="100%">
                        <Flex w="100%" h="100%" justifyContent={'flex-end'} alignItems={'center'}>
                            <IconButton
                                fontSize={24}
                                color={'red'}
                                background={'#'}
                                icon={<TiExportOutline />} />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Flex w="100%" h="95%" flexDir={'column'} alignItems={'center'} justifyContent={'center'} paddingBottom={5} >
                <Box w="80%" h="100%"   bg={'whitesmoke'} borderRadius={15}>
                    <VStack w="100%" h="100%">
                        <HStack
                            spacing={5}
                            w="100%" h="20%">
                            <Flex w="15%" h="100%" flexDir={'row'} alignItems={'center'} justifyContent={'center'}>
                                <Image
                                    maxW={'100%'}
                                    maxH={'100%'}
                                    src="../image/logo.png" />
                            </Flex>

                            <Box w="85%" h="100%">
                                <VStack spacing={0} w="100%" h="100%">
                                    <HStack
                                        py={10}
                                        justifyContent={'flex-start'} w="100%" h="20%">
                                        <Heading
                                            pt={4}
                                            fontSize={['xl', '2x;', '5xl']}
                                            fontFamily={'monospace'}
                                            fontWeight={600}>
                                            Grievance form
                                        </Heading>
                                        <Text
                                            pt={5}
                                            h="100%">
                                            {"_id: 4328920852"}
                                        </Text>

                                    </HStack>

                                    <HStack w="100%" h="20%">
                                        <Text
                                            fontSize={['sm', 'md', 'lg']}
                                            fontWeight={700}
                                            w="100%" textAlign={'flex-start'} h="50%">
                                            University Grants Commission (UGC) Bahadur Shah Zafar Marg, New Delhi - 110002.
                                        </Text>
                                    </HStack>

                                    <HStack w="100%" h="10%">
                                        <Box py={5} h="100%">
                                            <Text
                                                fontSize={['sm', 'md', 'lg']}
                                                h="100%">
                                                <strong>Phone number</strong>: 2498-108-01824
                                            </Text>
                                        </Box>

                                        <Box py={5} h="100%">
                                            <Text
                                                fontSize={['sm', 'md', 'lg']}
                                                h="100%">
                                                <strong>Email address</strong>: vaibhav@gmail.com
                                            </Text>
                                        </Box>
                                    </HStack>
                                </VStack>
                            </Box>
                        </HStack>
                        <Box borderTop={'1px solid black'} w={'95%'}></Box>

                        <VStack w="100%" h="100%" spacing={5} paddingBottom={10} >
                            <Box borderRadius={8} padding={2} width={'90%'}>
                                <Heading paddingBottom={5} textAlign={'center'} >Grievant(s) Information</Heading>
                                <Box w={'100%'}>
                                    <Box padding={2} border={'1px solid black'} w={'100%'}><Text fontSize={22}><strong>Grievant's Name:</strong>Vaibhav</Text></Box>
                                    <Flex padding={2} flexDirection={'row'} border={'1px solid black'} w={'100%'}>
                                        <Box w="50%"><Text fontSize={22}><strong>Email:</strong>Vaibhav</Text></Box>
                                        <Box w="50%"><Text fontSize={22}><strong>Grievance Type:</strong>clssification</Text></Box>
                                    </Flex>
                                    <Flex padding={2} flexDirection={'row'} border={'1px solid black'} w={'100%'}>
                                        <Box w="50%"><Text fontSize={22}><strong>Grievant To:</strong>Vaibhav</Text></Box>
                                        <Box w="50%"><Text fontSize={22}><strong>Grievance Filed on:</strong>22-09-22</Text></Box>
                                    </Flex>
                                </Box>
                            </Box>
                            <Box padding={2} width={'90%'}>
                                <Heading textAlign={'center'} paddingBottom={5} >Grievance</Heading>
                                <Box w={'100%'}>

                                    <Box padding={2} border={'1px solid black'} w={'100%'}><Text fontSize={22}><strong>Title of Grievance:</strong>Improper Canteen Fascility</Text></Box>
                                    <Flex padding={2} flexDirection={'row'} border={'1px solid black'} w={'100%'}>
                                        <Box><Text fontSize={22}><strong>Sender:</strong>Grievant name</Text></Box>
                                    </Flex>
                                    <Flex padding={2} flexDirection={'row'} border={'1px solid black'} w={'100%'}>
                                        <Box><Text fontSize={22}><strong>Grievance Raised for:</strong>ugc dept name</Text></Box>
                                    </Flex>
                                    <Flex padding={2} flexDirection={'row'} border={'1px solid black'} w={'100%'}>
                                        <Box w="50%"><Text fontSize={22}><strong>Current Status:</strong>Pending</Text></Box>
                                    </Flex>
                                </Box>
                            </Box>


                            <Box borderRadius={8} padding={2} width={'90%'} >
                                <Box w={'100%'}>
                                    <Box padding={2} h={'100%'} border={'1px solid black'} w={'100%'}><Text fontSize={22}><strong>Description of Grievance:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text></Box>
                                </Box>
                            </Box>
                        </VStack>
                    </VStack>


                </Box>
            </Flex>
        </Box>
    );
}

export default Grievance;