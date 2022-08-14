import { Box, VStack, HStack, Heading, Icon, IconButton, Flex, Tag, Text, Avatar } from '@chakra-ui/react'

import { MdPendingActions, MdOutlineMoreVert } from 'react-icons/md'
import ChartComponent from '../Chart/index'
import { BsChat } from 'react-icons/bs'

const UserHome = () => {



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
            username: "Abhinav",
            email: "abhinav@gmail.com"
        },
        {
            username: "Saurabh",
            email: "saurabh@gmail.com"
        },
        {
            username: "Shahima",
            email: "shahima@gmail.com"
        },
        {
            username: "Jaimit",
            email: "Jaimit@gmail.com"
        },

    ]



    return (
        <Flex spacing={10} w="100%" h="100%"
            flexDirection={["column", "column", "column", "column"]}
        >
            <Flex flexDirection={["column"]}
                paddingLeft={8}
                w="100%" h={["100%", "100%", "10%", "10%"]} >
                <Heading fontFamily={'monospace'}>
                    Good Morning, User !
                </Heading>
            </Flex>
            <Flex flexDirection={['column', 'column', 'row', 'row']}
                paddingLeft={8}
                spacing={10} w="100%" h={["100%", "100%", "100%", "30%"]}>
                {
                    fakeData?.map((item, i) => (
                        <Flex flexDirection={['column']}
                            key={i} w={["100%", "100%", "100%", "25%"]} h="100%"
                            boxShadow='xl'
                            padding={[2, 2, 0, 0]}
                            borderRadius={20}>
                            <HStack w="100%" h={["30%", "30%", "20%", "20%"]} alignItems={'center'} justifyContent={'center'}>
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

                            <VStack w="100%" h={["100%", "100%", "100%", "80%"]}>
                                <Box
                                    p={5}
                                    w="100%" h={["100%", "100%", "100%", "50%"]}>
                                    <Heading
                                        size={'xl'}
                                    >
                                        {item.number}
                                    </Heading>
                                </Box>

                                <Box
                                    p={0}
                                    w="80%" h={["100%", "100%", "100%", "50%"]}>
                                    <Text
                                        fontSize={'md'}
                                        fontWeight={500}
                                    >
                                        {item.text}
                                    </Text>
                                </Box>
                            </VStack>
                        </Flex>
                    ))
                }
            </Flex>

            
        </Flex>
    );
}

export default UserHome;