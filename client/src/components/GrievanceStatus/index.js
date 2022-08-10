import { Avatar, Box, Flex, HStack, Tag, Text, VStack, Link } from "@chakra-ui/react";


const GrievanceStatus = () => {



    const start = (
        <Box w="100%" h="20vh">
            <HStack w="100%" h="100%" alignItems={'flex-start'} justifyContent={'center'}>
                <Box w="10%" h="100%">
                    <Tag
                        borderRadius={20}
                        size={'lg'}
                        colorScheme={'purple'}>

                    </Tag>
                </Box>
                <Box
                    border={'1px'}
                    borderColor={'gray.100'}
                    w="70%" h="100%">
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
                                Grievance was sent to nodal officer of the mu with _id:834-3-2-0
                            </Box>

                            <Box w="100%" h="40%">
                                <VStack
                                    alignItems={'flex-start'}
                                    w="100%" h="100%">
                                    <Text fontWeight={'600'}>
                                        Reciever info
                                    </Text>

                                    <HStack
                                        w="100%" h="max-content">
                                        <Box w="10%">
                                            <Avatar />
                                        </Box>

                                        <Box w="40%" h="100%">
                                            <VStack alignItems={'flex-start'} spacing={0} w="100%">
                                                <Text fontWeight={'600'}>
                                                    @abhinavPandey
                                                </Text>

                                                <Text px={4}>
                                                    MU
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </HStack>
                                </VStack>
                            </Box>
                        </VStack>
                        <Box
                            py={1}
                            w="30%" h="100%">
                            <Flex
                                w="100%" h="30%" flexDirection={'row'} justifyContent={'space-around'}>

                                <Text>
                                    1mo ago
                                </Text>

                                <Text>
                                    5:39 PM
                                </Text>

                            </Flex>
                            <Box w="100%" h="90%">
                                <HStack
                                    px={10}
                                    w="100%" h="100%" alignItems={'flex-end'} justifyContent={'flex-start'}>

                                    <Link color={'red'}>
                                        No replies
                                    </Link>

                                </HStack>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )

    const forward = (
        <Box w="100%" h="20vh">
            <HStack w="100%" h="100%" alignItems={'flex-start'} justifyContent={'center'}>
                <Box w="10%" h="100%">
                    <Tag
                        borderRadius={20}
                        size={'lg'}
                        colorScheme={'purple'}>

                    </Tag>
                </Box>
                <Box
                    border={'1px'}
                    borderColor={'gray.100'}
                    w="70%" h="100%">
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
                                Grievance was forwarded to a new nodal officer with _id:-82-3582-0
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
                                                    @saurabhPandey
                                                </Text>

                                                <Text px={4}>
                                                    MU
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </HStack>
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

                            <Box w="100%" h="90%">
                                <HStack
                                    px={10}
                                    w="100%" h="100%" alignItems={'flex-end'} justifyContent={'flex-start'}>

                                    <Link color={'red'}>
                                        No replies
                                    </Link>

                                </HStack>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )

    const end = (
        <Box w="100%" h="20vh">
            <HStack w="100%" h="100%" alignItems={'flex-start'} justifyContent={'center'}>
                <Box w="10%" h="100%">
                    <Tag
                        borderRadius={20}
                        size={'lg'}
                        colorScheme={'green'}>
                    </Tag>
                </Box>
                <Box
                    border={'1px'}
                    borderColor={'gray.100'}
                    w="70%" h="100%">
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
                                Grievance was forwarded to a new nodal officer with _id:-82-3582-0
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
                                                    @vaibhavPachpute
                                                </Text>

                                                <Text px={4}>
                                                    MU
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </HStack>
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

                            <Box w="100%" h="90%">
                                <HStack
                                    px={10}
                                    w="100%" h="100%" alignItems={'flex-end'} justifyContent={'flex-start'}>
                                    <Link color={'green'}>
                                        View replies <Tag colorScheme={'green'}>
                                            +1
                                        </Tag>
                                    </Link>
                                </HStack>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )


    return (
        <Box w="100%" minH={'90vh'}>
            {start}
            {forward}
            {end}
        </Box>
    );
}

export default GrievanceStatus;