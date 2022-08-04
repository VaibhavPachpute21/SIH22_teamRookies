import { Box, HStack, VStack, Flex, Avatar, AvatarBadge, Icon, Text, Button } from "@chakra-ui/react";
import { BsPencil } from 'react-icons/bs'
const UserProfile = () => {
    return (
        <Box w="100%" h="100%" bg="red.200">
            <HStack w="100%" h="100%">
                <VStack w="30%" h="100%">
                    <Box w="100%" h="30%" bg="yellow.200">
                        <Flex w="100%" h="100%" flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Avatar
                                src="https://avatars.githubusercontent.com/u/77983400?v=4"
                                size={"xl"} >
                                <AvatarBadge
                                    fontSize={'40px'}
                                    border={"none"}
                                    as={BsPencil} />
                            </Avatar>
                        </Flex>
                    </Box>

                    <Box w="100%" h="70%">
                        <VStack w="100%" h="20%" alignItems={'flex-start'} justifyContent={"flex-start"}>
                            <Box w="100%" h="35%">
                                <Text fontWeight={600} fontSize={'4xl'} fontFamily={'monospace'}>
                                    Vaibhav Pachpute
                                </Text>
                            </Box>
                            <Box w="100%" h="50%">
                                <Text
                                opacity={.8}
                                fontWeight={600} fontSize={'lg'} fontFamily={'monospace'}>
                                    vaibhav@gmail.com
                                </Text>
                            </Box>

                            <Box w="100%" h="15%">
                                <Button w="100%" bg="#5A4FCF" color={"white"}>
                                    Edit profile
                                </Button>
                            </Box>


                        </VStack>

                        
                    </Box>

                </VStack>

                <VStack w="70%" h="100%" bg="purple.200">
                    <Box>
                        2
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}

export default UserProfile;