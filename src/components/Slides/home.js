import { Box, VStack, HStack, Heading, Icon, IconButton, Flex, Tag, Text, Avatar } from '@chakra-ui/react'

import { MdPendingActions, MdOutlineMoreVert } from 'react-icons/md'
import ChartComponent from '../Chart/index'
import {BsChat} from 'react-icons/bs'

const DashboardHome = () => {

    

    const fakeData = [
        {
            number: 5241,
            text: "Your pending grievances."
        },
        {
            number: 341,
            text: "New Grievances for you."
        },
        {
            number: 5,
            text: "New emails today."
        },
        {
            number: 7,
            text: "New messages"
        }
    ]

    const RecentlyContacted = [
        {
            username:"Abhinav",
            email:"abhinav@gmail.com"
        },
        {
            username:"Saurabh",
            email:"saurabh@gmail.com"
        },
        {
            username:"Shahima",
            email:"shahima@gmail.com"
        },
        {
            username:"Jaimit",
            email:"Jaimit@gmail.com"
        },
       
    ]



    return (
        <VStack spacing={10} w="100%" h="100%">
            <Box
                paddingLeft={8}
                w="100%" h="10%" >
                <Heading fontFamily={'monospace'}>
                    Good Morning, Abhinav !
                </Heading>
            </Box>
            <HStack
                paddingLeft={8}
                spacing={10} w="100%" h="30%">
                {
                    fakeData?.map((item, i) => (
                        <VStack
                            key={i} w="25%" h="100%"
                            boxShadow='xl'
                            borderRadius={20}>
                            <HStack w="100%" h="20%" alignItems={'center'} justifyContent={'center'}>
                                <HStack w="100%" h="100%"
                                    alignItems={'flex-start'} justifyContent={'space-around'}>
                                    <Icon
                                        color={"#5A4FCF"}
                                        w={20} h={20}>
                                        <MdPendingActions />
                                    </Icon>

                                    <IconButton
                                        color={"#5A4FCF"}
                                        fontSize={'3xl'}
                                        _hover={{}}
                                        icon={<MdOutlineMoreVert />}
                                        background={'none'}
                                    ></IconButton>
                                </HStack>
                            </HStack>

                            <VStack w="100%" h="80%">
                                <Box
                                    p={5}
                                    w="100%" h="50%">
                                    <Heading
                                        size={'2xl'}
                                    >
                                        {item.number}
                                    </Heading>
                                </Box>

                                <Box
                                    p={0}
                                    w="80%" h="50%">
                                    <Text
                                        fontSize={'md'}
                                        fontWeight={500}
                                    >
                                        {item.text}
                                    </Text>
                                </Box>
                            </VStack>
                        </VStack>
                    ))
                }
            </HStack>

            <HStack
                paddingLeft={8}
                w="100%" h="60%">
                <VStack w="20%" h="100%">
                    <Box
                        borderRadius={20}
                        boxShadow={'xl'}
                        w="100%" h="40%">
                        <VStack w="100%" h="100%">
                            <Box w="100%" h="30%" px={10} py={10}>
                                <Text w="100%" h="100%"
                                    fontFamily={'monospace'}
                                    fontWeight={700} fontSize={'xl'}>
                                    New users
                                </Text>
                            </Box>
                            <HStack w="100%" h="30%" px={10}>
                                <Text w="50%" h="100%"
                                    fontFamily={'monospace'}
                                    fontWeight={700} fontSize={'5xl'}>
                                    43
                                </Text>


                                <Tag

                                    w="50%" h="50%"
                                    background={'green.100'}
                                    fontWeight={500}
                                    color={'green.700'}
                                >+4.3%</Tag>


                            </HStack>
                        </VStack>
                    </Box>
                    <Box
                        borderRadius={20}
                        boxShadow={'xl'} 
                        w="100%" h="40%">
                        <VStack w="100%" h="100%">
                            <Box w="100%" h="30%" px={10} py={10}>
                                <Text w="100%" h="100%"
                                    fontFamily={'monospace'}
                                    fontWeight={700} fontSize={'xl'}>
                                    Missed grievances
                                </Text>
                            </Box>
                            <HStack w="100%" h="30%" px={10}>
                            <Text w="50%" h="100%"
                                    fontFamily={'monospace'}
                                    
                                    fontWeight={700} fontSize={'5xl'}>
                                    21
                                </Text>


                                <Tag
                                    w="50%" h="50%"
                                    background={'red.100'}
                                    fontWeight={500}
                                    color={'red.700'}
                                >-5.2%</Tag>

                            </HStack>
                        </VStack>
                    </Box>
                    
                </VStack>

                <HStack w="80%" h="100%" >
                    <VStack w="60%">
                    <Text px={5} w="100%" h="100%"
                                    fontFamily={'monospace'}
                                    fontWeight={700} fontSize={'xl'}>
                                    Recently contacted
                                </Text>
                    <ChartComponent/>
                    </VStack>

                    <Box w="40%" h="100%">
                        <VStack w="100%" h="85%">
                        <Text w="100%" h="100%"
                                    fontFamily={'monospace'}
                                    fontWeight={700} fontSize={'xl'}>
                                    Recently contacted
                                </Text>
                            {
                                RecentlyContacted?.map((item,i)=>(
                                    <Box key={i} w="100%"
                                    borderRadius={20}
                                    boxShadow={'md'}
                                    h="25%">
                                        <HStack w="100%" h="100%">
                                            <Box px={6} py={8} w="20%" h="100%">
                                               <Avatar
                                               
                                               size={'sm'}/>
                                            </Box>
                                            <VStack spacing={0} p={4} w="60%" h="100%">
                                            <Box w="100%" h="50%">
                                                <Text
                                                fontWeight={600}
                                                fontSize={'xl'}
                                                >{item.username}</Text>
                                            </Box>
                                            <Box w="100%" h="30%">
                                                <Text>{item.email}</Text>
                                            </Box>
                                            </VStack>

                                            <IconButton 
                                            background={'#5A4FCF'}
                                            color="white"
                                            icon={<BsChat/>}
                                            w="10%">

                                            </IconButton>
                                        </HStack>
                                    </Box>
                                ))
                            }
                        </VStack>
                    </Box>
                </HStack>
            </HStack>
        </VStack>
    );
}

export default DashboardHome;