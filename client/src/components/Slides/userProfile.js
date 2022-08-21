import { Box, HStack, VStack, Flex, Avatar, Text, Button, FormLabel, Input, useToast, Divider, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { connect } from 'react-redux'
import * as actions from '../../actions/user_actions'



const UserProfile = (props) => {
    const [VHeight, setVHeight] = useState("50vh")
    const [User, SetUser] = useState({})
    const [error, Seterror] = useState('')

    const toast = useToast()

    useEffect(() => {
        const GetUserInfo = async () => {
            try {
                await props.UserInfo(`${props.userData._id}`)
            } catch (error) {
                console.log(error.message)
            }
        }
        GetUserInfo()
    }, [])

    useEffect(() => {
        let alias = props.data
        if (alias) {
            let user = alias.userData?.TheUser
            if (user) {
                SetUser(user)
            }
        }
    }, [props.data])

    const UpdateCallback = async () => {
        try {
            props.UpdateUser(`${props.userData._id}`, User)

            if (props.data) {
                let alias = props.data
                if(alias.userData){
                    let core = alias.userData
                    if(core.success){
                        toast({
                            position: 'top',
                            render: () => (
                              <Box color='white' p={3} bg='green.500'>
                                User updated
                              </Box>
                            ),
                          })
                    }
                    else{
                        toast({
                            position: 'top',
                            render: () => (
                              <Box color='white' p={3} bg='red.500'>
                                Some error occured
                              </Box>
                            ),
                          })
                    }
                }
            }

        } catch (error) {
            Seterror(error.message)
        }
    }


    return (
        <Box w="100%" h="100%" overflowX={'hidden'} > 
            <Flex w="100%" h="100%" alignItems={'flex-start'} flexDirection={['column']} >
                <Box borderRadius={'2xl'}
                    w="100%" h="20%" bg="blue.200">
                </Box>
                <Flex w="100%" h="10%" flexDirection={['column', 'row', 'row']}>
                    <Box w={["100%", "13%", "13%"]} h="100%">
                        <Avatar
                            border={'3px solid white'}
                            src="https://avatars.githubusercontent.com/u/77983400?v=4"
                            marginLeft={'5'}
                            marginTop={'-10'}
                            position={['relative', 'absolute', 'absolute']}
                            size={['lg', '2xl', '2xl']} />

                    </Box>
                    <Box px={1} w={["100%", "100%", "60%", "60%"]} h="100%">
                        <Box w="100%" h="100%" alignItems={'flex-start'}>
                            <Box
                                w="100%" h={["100%", "50%", "50%"]}>
                                <Text fontWeight={600} fontSize={'2xl'}>
                                    Profile page
                                </Text>
                                <Text>
                                    Update your photo and personal details
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box w={["100%", "30%", "30%"]} h="100%" paddingTop={['10vh', 1, 1]}>
                        <HStack w="100%" h="100%" spacing={10} alignItems={'center'} justifyContent={'center'}>

                            <Button w="30%" size={'sm'}>
                                Cancel
                            </Button>

                            <Button color={'white'} bg="#5A4FCF" w="30%" size={'sm'}
                                onClick={() => UpdateCallback()}
                            >
                                Save
                            </Button>
                        </HStack>
                    </Box>
                </Flex>

                <VStack paddingTop={['20vh', 1, 1]}
                    w="100%" h={["95vh", "70%", "70%"]}>
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
                                        onChange={(e) => {
                                            SetUser((prevState) => ({
                                                ...prevState,
                                                email: e.target.value,
                                            }));
                                        }}
                                        w={["100%", "100%", "30%", "30%"]}
                                        type="email"
                                        value={props.userData.email} />
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

                                        w={["100%", "100%", "30%", "30%"]}
                                        type="text"
                                        value={props.userData.dob || "3/2/2002"} />
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
                                        onChange={(e) => {
                                            SetUser((prevState) => ({
                                                ...prevState,
                                                role: e.target.value,
                                            }));
                                        }}
                                        w={["100%", "100%", "30%", "30%"]}
                                        type="text"
                                        value={User ? props.userData.role: "Not found"} />
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
                                        onChange={(e) => {
                                            SetUser((prevState) => ({
                                                ...prevState,
                                                phone_number: e.target.value,
                                            }));
                                        }} w={["100%", "100%", "30%", "30%"]}
                                        type="number"
                                        value={User ? props.userData.phone_number : "Not found"} />
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
                                                    onChange={(e) => {
                                                        SetUser((prevState) => ({
                                                            ...prevState,
                                                            college_name: e.target.value,
                                                        }));
                                                    }}
                                                    w={["100%", "100%", "30%", "30%"]}
                                                    type="text"
                                                    value={User ? props.userData.college_name : "Not found"} />
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
                                                    onChange={(e) => {
                                                        SetUser((prevState) => ({
                                                            ...prevState,
                                                            university: e.target.value,
                                                        }));
                                                    }}
                                                    w={["100%", "100%", "30%", "30%"]}
                                                    type="text"
                                                    value={User ? props.userData.university : "Not found"} />
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
                                                    onChange={(e) => {
                                                        SetUser((prevState) => ({
                                                            ...prevState,
                                                            state: e.target.value,
                                                        }));
                                                    }}
                                                    w={["100%", "100%", "30%", "30%"]}
                                                    type="text"
                                                    value={User ? props.userData.state : "Not found"} />
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
                                                    onChange={(e) => {
                                                        SetUser((prevState) => ({
                                                            ...prevState,
                                                            district: e.target.value,
                                                        }));
                                                    }}
                                                    w={["100%", "100%", "30%", "30%"]}
                                                    type="text"
                                                    value={User ? props.userData.district : "Not found"} />
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
                    <Flex flexDirection={["column", "row", "row"]}
                        py={5}
                        alignItems={'center'} justifyContent={'center'} w="100%" h={["100%", "100%", "15%", "15%"]} >
                        <Box py={2} w={["100%", "30%", "30%"]} h="50%">
                            <FormLabel>
                                Your photo
                            </FormLabel>
                            <Text>
                                This will displayed on your profile
                            </Text>
                        </Box>

                        <Box
                            w="60%" h="100%">
                            <Flex flexDirection={["row", "row", "row", "row"]}
                                justifyContent={['center', 'flex-end', 'flex-end']}
                                w="100%" h="100%">
                                <Box w={["100%", "20%", "20%"]} margin={2}>
                                    <Avatar
                                        src="https://avatars.githubusercontent.com/u/77983400?v=4"
                                        size={'lg'} />
                                </Box>

                                <HStack spacing={5} w={["90%", "30%", "30%"]}>
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
                            </Flex>
                        </Box>
                    </Flex>
                </VStack>
            </Flex>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.users
    }
}


export default connect(mapStateToProps, actions)(UserProfile);