import { Box, VStack, HStack, Flex, Text, Checkbox, IconButton, Avatar, Heading, Tag } from '@chakra-ui/react'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './styles/drawer.css'
import { BiLinkExternal } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'


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
            <Flex w="100%" h="100%"
            flexDirection={['column','row','row']} alignItems={'center'}
            alignContent={'space-between'}
            >

                {
                    classSwitch === 'init-drawer' || classSwitch === "close-drawer" ? (
                        <Box h={["10%","10%","100%","100%"]} w={["100%","100%","5%","5%"]}
                        margin={2}
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
                            w={["100%","100%","15%","15%"]} h="100%" bg="#5A4FCF" borderRadius={'2xl'}>

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

                <Box padding={[2,2,2,2]}
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
                            paddingTop={5}
                            w={["100%","100%","90%","90%"]}
                            maxH={"80vh"} spacing={[1,2,5,10]}>
                            {
                                fakeGrievances?.map((item, i) => (
                                    <Box
                                        bg="white" padding={5}
                                        key={i}
                                        w="100%" minH={["max-content","20vh","20vh"]} borderRadius={[2,3,5,10]} boxShadow={'lg'}>
                                        <Flex w="100%" h="100%" flexDirection={['column','column','row','row']} >
                                            <Box w={["100%","25%","25%"]} h="100%">
                                                <Flex w="100%" h={["100%","20vh","20vh"]} alignItems={'center'} justifyContent={'center'}>
                                                    <Avatar
                                                        src='https://bit.ly/dan-abramov'
                                                        size={['xl','md','xl','xl']}
                                                    />
                                                </Flex>
                                            </Box>

                                            <Box w={["100%","20%","30%"]} h={["100%","100%","20vh","20vh"]}>
                                                <Flex flexDirection={['column','column','row','row']}
                                                    spacing={[1,2,6]}
                                                    alignItems={'flex-start'}
                                                    py={3}

                                                    w="100%" h="100%">
                                                    <Heading
                                                        size={["sm","md","md"]}
                                                        fontWeight={500}>
                                                        {item.user_role}
                                                    </Heading>

                                                    <Flex flexDirection={['row','row','column','column']}
                                                        px={[0,0,5,5]}
                                                        spacing={5}
                                                        w="100%" h="40%">
                                                        <Box w="100%">
                                                            <Text w="100%"
                                                            size={["sm","md","md"]}
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
                                                    </Flex>
                                                </Flex>
                                            </Box>

                                            <Box w={["100%","20%","20%","25%"]} h={["100%","100%","20vh","20vh"]} marginTop={5} >
                                                <Flex flexDirection={['column','column','row','row']}
                                                    spacing={[1,1,9]}
                                                    alignItems={'start'}
                                                    justifyContent={'space-between'}
                                                    py={[1,1,3]}
                                                    w="100%" h="100%">

                                                    <Flex flexDirection={['row','row','column','column']}
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
                                                                    ) : (<Tag
                                                                        borderRadius={'20'}
                                                                        background={'red.400'}>{" "}</Tag>)
                                                                }
                                                                {" "}
                                                                {item.grievance_status}
                                                            </Text>
                                                        </Box>

                                                    </Flex>
                                                </Flex>
                                            </Box>

                                            <Box w={["100%","100%","30%"]} h={["100%","100%","20vh","20vh"]}>
                                                <Flex flexDirection={['column']}
                                                spacing={0} w="100%" h="100%">
                                                    <Box
                                                        w="100%" h="5vh">
                                                        <Flex
                                                            py={2}
                                                            w="100%" h="100%" alignItems={'flex-end'} justifyContent={'flex-end'}>
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
                                                                <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                                                    <IconButton
                                                                        bg="#D9CEFF"
                                                                        color={'black'}
                                                                        icon={<BiLinkExternal />} />
                                                                </Flex>
                                                            </Box>
                                                            <Box
                                                                h="100%"
                                                                w="50%">
                                                                <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                                                    <IconButton
                                                                        bg="#D9CEFF"
                                                                        color={'black'}
                                                                        icon={<BsChat />} />
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>

                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                ))
                            }
                        </VStack>
                    </Flex>


                </Box>
            </Flex>
        </Box>
    );
}

export default DashboardHistory;