import { Box, HStack, VStack, Flex, Avatar, Text, Button, FormLabel, Input, Divider, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const UserProfile = () => {
    const [VHeight, setVHeight] = useState("50vh")

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
                            size={'2xl'} />

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

                <VStack

                    w="100%" h="70%">
                    <VStack
                        spacing={3}
                        overflow={'scroll'}
                        w="100%" maxH={VHeight}>
                        <HStack
                            py={5}
                            alignItems={'center'} justifyContent={'center'} w="100%" h="15%">
                            <Box py={2} w="30%" h="100%">
                                <FormLabel>
                                    Email
                                </FormLabel>
                            </Box>

                            <Box
                                w="60%" h="100%">
                                <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                    <Input
                                        w="30%"
                                        type="email"
                                        value={"abhinav@gmail.com"} />
                                </Flex>

                            </Box>
                        </HStack>

                        <HStack
                            py={5}
                            alignItems={'center'} justifyContent={'center'} w="100%" h="15%">
                            <Box py={2} w="30%" h="100%">
                                <FormLabel>
                                    Password
                                </FormLabel>
                            </Box>

                            <Box

                                w="60%" h="100%">
                                <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                    <Input
                                        w="30%"
                                        type="password"
                                        value={"241355"} />
                                </Flex>

                            </Box>
                        </HStack>


                        <HStack
                            py={5}
                            alignItems={'center'} justifyContent={'center'} w="100%" h="15%">
                            <Box py={2} w="30%" h="100%">
                                <FormLabel>
                                    Date of birth
                                </FormLabel>
                            </Box>

                            <Box

                                w="60%" h="100%">
                                <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                    <Input
                                        w="30%"
                                        type="text"
                                        value={"3/7/2002"} />
                                </Flex>

                            </Box>
                        </HStack>



                        <HStack
                            py={5}
                            alignItems={'center'} justifyContent={'center'} w="100%" h="15%">
                            <Box py={2} w="30%" h="100%">
                                <FormLabel>
                                    Role
                                </FormLabel>
                            </Box>

                            <Box

                                w="60%" h="100%">
                                <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                    <Input
                                        w="30%"
                                        type="text"
                                        value={"Student"} />
                                </Flex>

                            </Box>
                        </HStack>

                        <HStack
                            py={5}
                            alignItems={'center'} justifyContent={'center'} w="100%" h="15%">
                            <Box py={2} w="30%" h="100%">
                                <FormLabel>
                                    Phone
                                </FormLabel>
                            </Box>

                            <Box

                                w="60%" h="100%">
                                <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                    <Input
                                        w="30%"
                                        type="number"
                                        value={"30482419"} />
                                </Flex>

                            </Box>
                        </HStack>

                        {
                            VHeight === "50vh" ? (
                                <HStack
                                    alignItems={'center'} justifyContent={'center'} w="100%" h="15%" >
                                    <Box w="91%" h="100%">
                                        <Link
                                            onClick={() => { setVHeight("100vh") }}
                                            color="#5A4FCF">
                                            +5 more
                                        </Link>
                                    </Box>
                                </HStack>
                            ) : (
                                null
                            )
                        }

                        {
                            VHeight === "100vh" ? (
                                <VStack w="100%" h="60vh">
                                    <HStack

                                        py={5}
                                        alignItems={'center'} justifyContent={'center'} w="100%" h="8vh">
                                        <Box py={2} w="30%" h="100%">
                                            <FormLabel>
                                                College
                                            </FormLabel>
                                        </Box>

                                        <Box

                                            w="60%" h="100%">
                                            <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                                <Input
                                                    w="30%"
                                                    type="text"
                                                    value={"Ucoe"} />
                                            </Flex>

                                        </Box>
                                    </HStack>

                                    <HStack
                                        py={5}
                                        alignItems={'center'} justifyContent={'center'} w="100%" h="8vh">
                                        <Box py={2} w="30%" h="100%">
                                            <FormLabel>
                                                University
                                            </FormLabel>
                                        </Box>

                                        <Box

                                            w="60%" h="100%">
                                            <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                                <Input
                                                    w="30%"
                                                    type="text"
                                                    value={"MU"} />
                                            </Flex>

                                        </Box>
                                    </HStack>

                                    <HStack
                                        py={5}
                                        alignItems={'center'} justifyContent={'center'} w="100%" h="8vh">
                                        <Box py={2} w="30%" h="100%">
                                            <FormLabel>
                                                State
                                            </FormLabel>
                                        </Box>

                                        <Box

                                            w="60%" h="100%">
                                            <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                                <Input
                                                    w="30%"
                                                    type="text"
                                                    value={"Maharashtra"} />
                                            </Flex>

                                        </Box>
                                    </HStack>

                                    <HStack
                                        py={5}
                                        alignItems={'center'} justifyContent={'center'} w="100%" h="8vh">
                                        <Box py={2} w="30%" h="100%">
                                            <FormLabel>
                                                District
                                            </FormLabel>
                                        </Box>

                                        <Box

                                            w="60%" h="100%">
                                            <Flex w="100%" h="100%" flexDirection={'row'} justifyContent={'flex-end'}>
                                                <Input
                                                    w="30%"
                                                    type="text"
                                                    value={"Palghar"} />
                                            </Flex>

                                        </Box>
                                    </HStack>

                                    <Box w="100%" h="5vh">
                                        <Flex w="95%" h="100%" flexDirection={'row'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                                            <Button
                                                onClick={() => { setVHeight("50vh") }}
                                                color={'white'}
                                                bg="#5A4FCF"
                                                h="60%" w="19%">
                                                ^
                                            </Button>
                                        </Flex>
                                    </Box>


                                </VStack>
                            ) : (null)
                        }



                    </VStack>

                    <Divider w="95%" />
                    <HStack
                        py={5}
                        alignItems={'center'} justifyContent={'center'} w="100%" h="15%" >
                        <Box py={2} w="30%" h="100%">
                            <FormLabel>
                                Your photo
                            </FormLabel>
                            <Text>
                                This will displayed on your profile
                            </Text>
                        </Box>

                        <Box
                            w="60%" h="100%">
                            <HStack

                                justifyContent={'flex-end'}
                                w="100%" h="100%">
                                <Box w="20%">
                                    <Avatar
                                        src="https://avatars.githubusercontent.com/u/77983400?v=4"
                                        size={'lg'} />
                                </Box>

                                <HStack spacing={5} w="30%">
                                    <Button
                                        size={'sm'}>
                                        Delete
                                    </Button>

                                    <Button
                                        color="white"
                                        bg="#5A4FCF"
                                        size={'sm'}>
                                        Update
                                    </Button>
                                </HStack>
                            </HStack>
                        </Box>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    );
}

export default UserProfile;