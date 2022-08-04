import { Box, HStack, VStack, Flex, Avatar, AvatarBadge, Text, Button, FormControl, SimpleGrid, GridItem, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { BsPencil } from 'react-icons/bs'


const UserProfile = () => {
    return (
        <Box w="100%" h="100%">
            <VStack w="100%" h="100%" alignItems={'flex-start'}>
                <Box
                borderRadius={'2xl'}
                w="100%" h="20%" bg="blue.200">
                    1
                </Box>
                <HStack w="100%" h="10%">
                <Box w="13%" h="100%">
                        <Avatar
                        border={'3px solid white'} 
                        src="https://avatars.githubusercontent.com/u/77983400?v=4"
                        marginLeft={'5'}
                        marginTop={'-10'}
                        position={'absolute'}
                        size={'2xl'}/>
                    
                </Box>


                <Box 
                px={4}
                 w="60%" h="100%">
                    <HStack w="100%" h="100%" alignItems={'flex-start'}>
                        <Box 
                    
                        w="100%" h="50%">
                            <Text fontWeight={600} fontSize={'2xl'}>
                                Profile page
                            </Text>
                            <Text>
                                Update your photo and personal details
                            </Text>
                        </Box>
                    </HStack>
                </Box>

                <Box w="30%" h="100%">
                    <HStack w="100%" h="100%" spacing={10} alignItems={'center'} justifyContent={'center'}>
                     
                            <Button w="30%" size={'sm'}>
                                Cancel
                            </Button>

                            <Button color={'white'} bg="#5A4FCF" w="30%" size={'sm'}>
                                Save
                            </Button>
                  

                        <Box w="50%" h="100%">
                            
                        </Box>
                    </HStack>
                </Box>
                </HStack>

                <VStack w="100%" h="70%">
                    
                    {/* <HStack w="100%" h="10%">
                        <Text w="50%" h="100%">
                            Email
                        </Text>

                        <Text>
                            <Input
                            type="email"
                            value={'abhinav@gmail.com'}
                            />
                        </Text>
                    </HStack> */}

                    <HStack>

                    </HStack>
                </VStack>
            </VStack>
        </Box>
    );
}

export default UserProfile;