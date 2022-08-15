import { Box, VStack, HStack, Heading, Icon, IconButton, Flex, Tag, Text, Avatar, Button, Divider } from '@chakra-ui/react'

import { MdPendingActions, MdOutlineMoreVert } from 'react-icons/md'
import ChartComponent from '../Chart/index'
import { BsChat } from 'react-icons/bs'

const UserHome = (props) => {

    const Go = (n) => {
        props.runner(n)
    }

    return (
        <Flex spacing={10} w="100%" h="100%"
            flexDirection={["column", "column", "column", "column"]}>
            <Flex flexDirection={["column"]}
                paddingLeft={8}
                w="100%" h={["100%", "100%", "max-content", "max-content"]} >
                <Heading fontFamily={'monospace'}>
                    Welcome, {props.userData.fullname}!
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
                        <Button bg={'#5A4FCF'} color='white' onClick={()=>Go(3)}>Add Grievance </Button>
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
                        <Button bg={'#5A4FCF'} color='white' >View Grievance </Button>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default UserHome;