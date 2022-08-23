import { Box, VStack, HStack, Heading, Icon, Image, IconButton, Flex, Tag, Text, Avatar, Button, Divider } from '@chakra-ui/react'

import { MdPendingActions, MdOutlineMoreVert } from 'react-icons/md'
import ChartComponent from '../Chart/index'
import { BsChat } from 'react-icons/bs'

const UserHome = (props) => {

    const Go = (n) => {
        props.runner(n)
    }
    const Go1=(n)=>{
        props.runner1(n)
    }

    return (
        <Flex spacing={10} w="100%" h="max-content" 
            flexDirection={["column", "column", "column", "column"]}>
            <Flex flexDirection={["column"]}
                paddingLeft={8}
                w="100%" h={["100%", "100%", "max-content", "max-content"]} >
                <Heading fontFamily={'monospace'}>
                    Welcome, {props.userData.fullname || props.userData.institute_name}!
                </Heading>
            </Flex>
            <Divider minH={1} bg={'#5A4FCF'} mt={2} />

            <Flex padding={8} spacing={10} flexDirection={["row"]} justifyContent={'space-evenly'}>
                <Box borderTop={'4px solid #5A4FCF'} padding={5}
                    borderRadius={'2xl'} boxShadow={'xl'} alignItems={'center'}
                    justifyContent={'center'} bg="white" w="35%" h="max-content">
                    <Box w="100%" h="max-content">
                        <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                            <Box w="100%" h="100%">
                                <Heading size='xl'> One Step Away From Submitting Grievance </Heading>
                            </Box>
                        </HStack>
                    </Box>
                    <Box alignSelf={'start'} py={3}>
                        <Button bg={'#5A4FCF'} color='white' onClick={() => Go(3)}>Add Grievance </Button>
                    </Box>
                </Box>
                <Box borderTop={'4px solid #5A4FCF'} padding={5}
                    borderRadius={'2xl'} boxShadow={'xl'} alignItems={'center'}
                    justifyContent={'center'} bg="white" w="35%" h="max-content">
                    <Box w="100%" h="max-content">
                        <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                            <Box w="100%" h="100%">
                                <Heading size='xl'> View Submitted Grievance </Heading>
                            </Box>
                        </HStack>
                    </Box>
                    <Box alignSelf={'start'} py={3}>
                        <Button bg={'#5A4FCF'} color='white' onClick={() => Go(2)}>View Grievance </Button>
                    </Box>
                </Box>
            </Flex>

            <Flex padding={4} flexDirection={"row"} justifyContent={'space-evenly'}>
                <Box borderTop={'4px solid #5A4FCF'} borderBottom={'4px solid #5A4FCF'} w="20%" borderRadius={'2xl'} boxShadow={'xl'}>
                    <Box >
                        <Image src='https://i.imgur.com/qfeGLmR.png' borderTopRadius={'2xl'} />
                        <Heading size='lg' p={1}>DATA SECURITY</Heading>
                        <Text p={1}>User data is handled securely and the confidentiality of the data is maintained.
                        </Text>
                    </Box>
                </Box>
                <Box borderTop={'4px solid #5A4FCF'} borderBottom={'4px solid #5A4FCF'} w="20%" borderRadius={'2xl'} boxShadow={'xl'}>
                    <Box >
                        <Image src='https://i.imgur.com/FcmRNkq.png' borderTopRadius={'2xl'} />
                        <Heading size='lg' p={1}>TRACK YOUR GRIEVANCES</Heading>
                        <Text p={1}>
                            We provide customers a monitoring mechanism so they may monitor the status of grievance resolution in order to preserve the system's transparency.
                        </Text>
                    </Box>
                </Box>
                <Box borderTop={'4px solid #5A4FCF'} borderBottom={'4px solid #5A4FCF'} w="20%" borderRadius={'2xl'} boxShadow={'xl'}>
                    <Box >
                        <Image src='https://i.imgur.com/o9LI13A.png' borderTopRadius={'2xl'} />
                        <Heading size='lg' p={1}>TIME BOUND SYSTEM</Heading>
                        <Text p={1}>
                        Grievances are resolved quickly and methodically to guarantee little delay using a time bound automated system.
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default UserHome;