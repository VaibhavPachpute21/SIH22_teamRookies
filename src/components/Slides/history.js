import { Box, VStack, HStack, Flex, Text, Checkbox, IconButton, Avatar, Heading, Tag } from '@chakra-ui/react'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './styles/drawer.css'
import {BiLinkExternal} from 'react-icons/bi'
import {BsChat} from 'react-icons/bs'


const DashboardHistory = () => {

    const Filters = [
        "All", "Institute", "Student", "Employee", "Solved", "Unsolved"
    ]

    const [classSwitch, setClassSwitch] = useState('init-drawer')


    const fakeGrievances = [
        {
            user_role: "Student",
            user_committee: "CSRGC",
            grievance_status: "SOLVED",
            post_date: "22/7/2022"
        }, {
            user_role: "Institute",
            user_committee: "ISRGC",
            grievance_status: "UNSOLVED",
            post_date: "21/7/2021"
        },
        {
            user_role: "Employee",
            user_committee: "DSRGC",
            grievance_status: "SOLVED",
            post_date: "5/2/2022"
        },
        {
            user_role: "Hod",
            user_committee: "DSRGC",
            grievance_status: "SOLVED",
            post_date: "22/7/2022"
        },
        {
            user_role: "Principal",
            user_committee: "CSRGC",
            grievance_status: "UNSOLVED",
            post_date: "3/7/2002"
        },
        {
            user_role: "Principal",
            user_committee: "CSRGC",
            grievance_status: "UNSOLVED",
            post_date: "3/7/2002"
        }
    ]


    return (
        <Box w="100%" h="100%">
            <HStack w="100%" h="100%">

                {
                    classSwitch === 'init-drawer' || classSwitch === "close-drawer" ? (
                        <Box h="100%" w="5%"
                            className={classSwitch}
                            bg="#5A4FCF"
                            borderRadius={'2xl'}
                        >
                            <Flex w="100%" h="100%" alignItems={'flex-start'}
                                py={2}
                                px={2}>
                                <IconButton
                                    onClick={() => setClassSwitch("final-drawer")}
                                    color={"white"}
                                    background={"transparent"}
                                    icon={<GiHamburgerMenu />}
                                    _active={{ background: 'white' }}
                                    _hover={{ background: 'none' }}
                                />
                            </Flex>
                        </Box>

                    ) : (
                        <Box
                            className={"final-drawer"}
                            w="15%" h="100%" bg="#5A4FCF" borderRadius={'2xl'}>

                            <VStack w="100%" h="100%">
                                <Box w="100%" h="5%">
                                    <Flex w="100%" h="100%" alignItems={"flex-start"} justifyContent={"center"}>
                                        <HStack w="100%" h="100%">

                                            <IconButton
                                                w="10%"
                                                onClick={() => { setClassSwitch("close-drawer") }}
                                                color={"white"}
                                                background={"transparent"}
                                                icon={<GiHamburgerMenu />}
                                                _active={{ background: 'white' }}
                                                _hover={{ background: 'none' }}
                                            />
                                            <Text px={0} py={4} fontSize={'xl'}
                                                color={'white'}
                                                fontWeight={600}>
                                                Categories
                                            </Text>
                                        </HStack>
                                    </Flex>
                                </Box>

                                <VStack
                                    py={10}
                                    w="70%" h="95%" >
                                    {
                                        Filters?.map((item, i) => (
                                            <HStack w="100%" key={i}>
                                                <Checkbox
                                                    background={'white'}
                                                    _active={{ background: 'white' }}
                                                />
                                                <Text px={3} py={4} fontSize={'md'}
                                                    color={'white'}
                                                    fontWeight={600}>
                                                    {item}
                                                </Text>
                                            </HStack>
                                        ))
                                    }
                                </VStack>
                            </VStack>



                        </Box>)


                }

                <Box
                    overflow={'scroll'}
                    w={classSwitch === 'init-drawer' ||
                        classSwitch === 'close-drawer'
                        ? "95%" : "85%"}
                    h="100%"
                    bg="#D9CEFF"
                    borderRadius={'2xl'}
                >
                    <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                        <VStack
                            w="90%"
                            maxH={"80vh"} spacing={10}>
                            {
                                fakeGrievances?.map((item, i) => (
                                    <Box
                                        bg="white"
                                        key={i}
                                        w="100%" minH="20vh" borderRadius={10} boxShadow={'lg'}>
                                        <HStack w="100%" h="100%">
                                            <Box w="25%" h="100%">
                                                <Flex

                                                    w="100%" h="20vh" alignItems={'center'} justifyContent={'center'}>
                                                    <Avatar
                                                        size={'xl'}
                                                    />
                                                </Flex>
                                            </Box>
                                            <Box w="20%" h="20vh">
                                                <VStack
                                                    spacing={6}

                                                    alignItems={'flex-start'}
                                                    py={3}

                                                    w="100%" h="100%">
                                                    <Heading
                                                        size="md"
                                                        fontWeight={500}
                                                    >
                                                  
                                                        {item.user_role}</Heading>

                                                    <VStack
                                                        px={5}
                                                        spacing={5}
                                                        w="100%" h="40%">
                                                        <Box w="100%">
                                                            <Text w="100%"
                                                                color={'gray.600'}
                                                                fontWeight={500}>
                                                                Assigned committee:
                                                            </Text>
                                                        </Box>

                                                        <Box w="100%">
                                                            <Text w="100%"
                                                                color={'gray.600'}
                                                                fontWeight={500}>
                                                                Status:
                                                            </Text>
                                                        </Box>
                                                    </VStack>
                                                </VStack>
                                            </Box>

                                            <Box w="25%" h="20vh" >
                                            <VStack
                                                    spacing={9}
                                                    alignItems={'center'}
                                                    justifyContent={'center'}
                                                    py={3}
                                                    w="100%" h="100%">

                                                    <VStack
                                                        px={5}
                                                        spacing={5}
                                                        w="100%" h="40%">
                                                        <Box w="100%">
                                                            <Text w="100%"
                                                                
                                                                fontWeight={500}>
                                                                {item.user_committee}
                                                            </Text>
                                                        </Box>

                                                        <Box w="100%">
                                                            <Text w="100%"
                                                                color={'gray.600'}
                                                                fontWeight={500}>
                                                                    {
                                                                        item.grievance_status === "SOLVED" ? (
                                                                            <Tag
                                                                            borderRadius={'20'}
                                                                            background={'whatsapp.400'}>{" "}</Tag>
                                                                        ):(<Tag 
                                                                            borderRadius={'20'}
                                                                            background={'red.400'}>{" "}</Tag>)
                                                                    }
                                                                    {" "}
                                                                {item.grievance_status}
                                                            </Text>
                                                        </Box>
                                                        
                                                    </VStack>
                                                </VStack>
                                            </Box>

                                            <Box w="30%" h="20vh">
                                                <VStack spacing={0} w="100%" h="100%">
                                                    <Box
                                                     w="100%" h="5vh">
                                                      <Flex 
                                                      py={2}
                                                      w="95%" h="100%" alignItems={'flex-end'} justifyContent={'flex-end'}>
                                                        <Text>
                                                            {item.post_date}
                                                        </Text>
                                                      </Flex>
                                                    </Box>

                                                    <Box w="100%" h="15vh">
                                                     <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'flex-end'}>
                                                        <Box
                                                        h="100%"
                                                        w="50%">       
                                                        <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                                          <IconButton
                                                          bg="#D9CEFF"
                                                          color={'black'}
                                                          icon={<BiLinkExternal/>}/>
                                                        </Flex>
                                                        </Box>
                                                        <Box 
                                                        h="100%"
                                                        w="50%">       
                                                        <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                                        <IconButton 
                                                        bg="#D9CEFF"
                                                        color={'black'}
                                                        icon={<BsChat/>}/>
                                                        </Flex>
                                                        </Box>
                                                     </Flex>
                                                    </Box>

                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </Box>
                                ))
                            }
                        </VStack>
                    </Flex>


                </Box>
            </HStack>
        </Box>
    );
}

export default DashboardHistory;