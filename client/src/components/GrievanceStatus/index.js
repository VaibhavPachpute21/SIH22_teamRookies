import { Avatar, Box, Flex, HStack, Tag, Text, VStack, Link, IconButton, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { FiThumbsUp } from 'react-icons/fi'
import { FiThumbsDown } from 'react-icons/fi'
const GrievanceStatus = () => {



    const start = (
        <Box w="100%" h="20vh">
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
                orientation="vertical"/>
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

                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )

    const forward = (
        <Box w="100%" h="20vh">
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
                orientation="vertical"/>
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

                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )

    const end = (
        <Box w="100%" h="max-content">
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
                orientation="vertical"/>
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
                                    <VStack
                                        py={2}
                                        w="100%" h="max-content">
                                        <VStack
                                            alignItems={'flex-start'}
                                            w="100%" h="100%">
                                            <Text fontWeight={'600'}>
                                                Officer
                                            </Text>

                                            <VStack
                                                alignItems={'flex-end'}
                                                justifyContent={'space-between'}
                                                px={3}
                                                py={2}
                                                border={'1px'}
                                                borderColor={'gray.100'}
                                                w="100%" h="100%">
                                                <Text>
                                                    Donec vehicula leo ac risus interdum iaculis. Phasellus ut imperdiet erat. Mauris porttitor, tortor ut congue tincidunt, magna neque aliquam velit, eu sagittis magna leo in nulla. Phasellus bibendum tincidunt rutrum. Vestibulum posuere ac nisl vel imperdiet. Vestibulum tincidunt dui in nulla pulvinar, id vulputate nibh accumsan. Quisque nisi risus, mattis in sem eget, dictum interdum justo. Sed tempor lorem sed lacinia semper. Ut suscipit arcu id ullamcorper condimentum. Proin elementum, turpis cursus tincidunt faucibus, dui metus luctus dolor, nec malesuada leo nisl sit amet est.
                                                </Text>

                                                <Text>
                                                    2:42 pm
                                                </Text>


                                            </VStack>

                                        </VStack>

                                    </VStack>
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
                </Box>

            </HStack>

        </Box>
    )


    return (
        <Box w="100%" maxH={'90vh'} overflowY={'scroll'} overflowX={'hidden'}>
            <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                <VStack py={5} w="85%" h="100%" alignItems={'center'} spacing={7}>
                    {start}
                    {forward}
                    {end}
                </VStack>
            </Flex>

            <Flex w="100%" h="15vh"
                flexDirection={'column'}
                alignItems={'center'} justifyContent={'center'}>

                <Text fontWeight={600}>
                    Satisfied with reply/s ?
                </Text>

                <HStack py={2}>
                    <IconButton 
                    colorScheme={'red'}
                    icon={<FiThumbsDown />} />
                    <IconButton
                    colorScheme={'green'}
                        icon={<FiThumbsUp />} />
                </HStack>
            </Flex>
        </Box>
    );
}

export default GrievanceStatus;