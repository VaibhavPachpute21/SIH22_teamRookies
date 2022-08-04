import { Box, HStack, VStack, Flex, Avatar, AvatarBadge, Text, Button, FormControl, SimpleGrid, GridItem, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { BsPencil } from 'react-icons/bs'
const UserProfile = () => {
    return (
        <Box w="100%" h="100%">
            <HStack w="100%" h="100%">
                <VStack w="30%" h="100%">
                    <Box w="100%" h="30%">
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

                    <Box

                        w="100%" h="50%">
                        <VStack w="100%" h="50%" alignItems={'flex-start'} justifyContent={"flex-start"}>
                            <Box w="100%" h="25%">
                                <Text fontWeight={600} fontSize={'4xl'} fontFamily={'monospace'}>
                                    Vaibhav Pachpute
                                </Text>
                            </Box>
                            <Box w="100%" h="20%">
                                <Text
                                    opacity={.8}
                                    fontWeight={600} fontSize={'lg'} fontFamily={'monospace'}>
                                    vaibhav@gmail.com
                                </Text>
                            </Box>

                            <Box py={5} w="100%" h="20%">
                                <Button w="100%" bg="#5A4FCF" color={"white"}>
                                    Edit profile
                                </Button>
                            </Box>

                            <Box py={7} w="100%" h="10%">
                                <HStack w="100%" h="100%">
                                    <Box w="30%" h="100%">
                                        <Text
                                            fontSize={'lg'}
                                            fontWeight={600} fontFamily={'monospace'}>
                                            Committee
                                        </Text>
                                    </Box>
                                    <Box w="50%" h="100%">
                                        <Text
                                            fontSize={'lg'}
                                            opacity={.8}
                                            fontWeight={600} fontFamily={'monospace'}>
                                            CSGRC
                                        </Text>
                                    </Box>
                                </HStack>


                            </Box>

                            <Box>
                                <HStack w="100%" h="100%">
                                    <Box w="30%" h="100%">
                                        <Text
                                            fontSize={'lg'}
                                            fontWeight={600} fontFamily={'monospace'}>
                                            State
                                        </Text>
                                    </Box>
                                    <Box w="70%" h="100%">
                                        <Text
                                            fontSize={'lg'}
                                            opacity={.8}
                                            fontWeight={600} fontFamily={'monospace'}>
                                            Maharashtra
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>
                        </VStack>

                    </Box>


                </VStack>

                <VStack w="70%" h="100%">
                    <Box w="100%" h="70%">
                        <form>
                            <FormControl>
                                <SimpleGrid px={5} spacing={7} columns={2} rows={4}>
                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="email"
                                            value={"abhinav@gmail.com"}
                                        />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="password"
                                            value={"abhinav@gmail.com"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Full Name
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"abhinav"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            College Name
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"UCOE"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Phone Number
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"24092841"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Date
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"2/4/2002"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Academic year
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"2004"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            User Role
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"Admin"}
                                        />
                                    </GridItem>


                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Course Name
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"CSE"}
                                        />
                                    </GridItem>

                                    <GridItem colSpan={1}>
                                        <FormLabel>
                                            Enrollment Number
                                        </FormLabel>
                                        <Input
                                            w="90%"
                                            borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"933332-3423"}
                                        />
                                    </GridItem>






                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Current Address
                                        </FormLabel>

                                        <Textarea
                                        borderLeftColor={'#5A4FCF'}
                                            type="text"
                                            value={"Your address"}
                                        />


                                    </GridItem>
                                </SimpleGrid>
                            </FormControl>
                        </form>
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}

export default UserProfile;