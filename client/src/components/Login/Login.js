import React, { useEffect, useState } from 'react'
import './Login.css';
import {
  Heading, Box,
  SimpleGrid,
  FormControl,
  GridItem, Input, Flex, FormLabel, Button,
  InputLeftAddon, InputGroup, useToast,
  Link, HStack, Icon, Text, VStack, Divider, FormErrorMessage, Select
} from '@chakra-ui/react';
import './Login.css'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai';
import * as actions from '../../actions/user_actions'
import cookie from 'js-cookie'

function Login(props) {

  const [emailRed, setEmailRed] = useState("black")
  const [passwordRed, setPasswordRed] = useState("black")
  const [error, SetError] = useState('')

  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm(
    { mode: 'onChange' }
  )


  const navigate = useNavigate()


  useEffect(() => {
    if (errors.mail && errors.mail.message) {
      setEmailRed("red")
    }
    else {
      setEmailRed("black")
    }
  }, [errors.mail])

  useEffect(() => {
    if (errors.password && errors.password.message) {
      setPasswordRed("red")
    }
    else {
      setPasswordRed("black")
    }
  }, [errors.password])


  const HandleLoginSubmit = async (data) => {
    let obj = {
      email: data.mail,
      password: data.password
    }

    try {
     let req = await props.LoginUser(obj)
     if(req.payload.success != false){
      navigate("/Dashboard")
     }
    } catch (error) {
      SetError(error.message)
    }


  }

  useEffect(()=>{
    if(cookie.get('token')){
      navigate('/')
    }
  },[])


  useEffect(() => {
    if (props.data) {
      let alias = props.data
      if (alias.userData) {
        let success = alias.userData?.success
        let token = alias.userData?.token
        let errr = alias.userData?.message
        if (success) {
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='green.500'>
                Login complete
              </Box>
            ),
          })
          cookie.set("token",token)
        }
        else {
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='red.500'>
                {errr}
              </Box>
            ),
          })
        }

      }

    }
  }, [props.data])

  useEffect(() => {
    if (error.length > 0) {
      toast({
        position: 'top',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
            {error.message}
          </Box>
        ),
      })
    }
  }, [error, error.length, error.message])


  return (
    <Box overflow={'none'}
      w={"100vw"} h={"90vh"}>
      <HStack w="100%" h="100%" >
        <Box w="60%" h="100%"
        >
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box w="80%">
              <Flex w="100%" h="100%">
                <HStack justifyContent={'start'} w="62%">
                  <Text
                    fontSize={'md'}>
                    Don't have an account?
                  </Text>
                  <Link href='/Registration' fontWeight={600} color={"#5A4FCF"}>
                    Sign up
                  </Link>
                </HStack>
              </Flex>
            </Box>
            <Box w="80%" h="10%">
              <VStack w="100%" h="100%" justifyContent={'flex-start'}>
                <Box w="100%">
                  <Heading
                    fontSize={'5xl'}
                    fontWeight={700}  >
                    Log in to your account
                  </Heading>
                </Box>
                {/* <Box w="80%">
                  <Text
                    fontSize={'sm'}
                    fontWeight={600} opacity={.6}>
                    Start complaining! &#128540;.
                    Kidding, we got everything covered from sending, tracking and managing your grievances.
                    All you need to do is say.
                  </Text>
                </Box> */}
              </VStack>
            </Box>
            <Box py={2} w="80%" h="max-content" border={'1px solid black'} borderRadius={10} shadow={'dark-lg'} >
              <form className='Login-Form' onSubmit={handleSubmit(HandleLoginSubmit)}>

                <FormControl w="80%">
                  <SimpleGrid spacing={10} columns={'1'} rows={4}>
                    <GridItem>
                      <FormLabel>
                        Email
                      </FormLabel>
                      <InputGroup
                        size={'lg'}>
                        <InputLeftAddon
                          bg="#5A4FCF"

                          children={<MdEmail color={'white'} />} />
                        <Input

                          border={emailRed === "black" ? "0px" : "1px"}
                          borderColor={emailRed}
                          id="mail"
                          type="email"
                          placeholder="email"
                          {...register("mail",
                            {
                              required: {
                                value: true,
                                message: "Email is required",
                              },
                              pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Enter valid email"
                              }
                            })}

                        />
                      </InputGroup>
                      {
                        errors.mail && errors.mail.message ? (
                          <Box
                            position={'fixed'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                            {errors.mail.message}
                          </Box>
                        ) : (null)

                      }
                    </GridItem>

                    <GridItem>
                      <FormLabel>
                        Password
                      </FormLabel>
                      <InputGroup size={'lg'}>
                        <InputLeftAddon
                          bg="#5A4FCF"
                          children={<RiLockPasswordFill color={'white'} />} />
                        <Input
                          border={passwordRed === "black" ? "0px" : "1px"}
                          borderColor={passwordRed}
                          id="password"
                          type="password"
                          placeholder="password"
                          {...register('password', { required: "Password is required", minLength: '' })}
                        />
                      </InputGroup>
                      {
                        errors.password && errors.password.message ? (
                          <Box
                            position={'fixed'}
                            fontSize={'12px'}
                            py={1}
                            maxH={'0px'}
                            color={'red'}>
                            {errors.password.message}
                          </Box>
                        ) : (null)

                      }
                    </GridItem>

                    <GridItem w={"30%"}>
                    <FormLabel>Role</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlineUser color={'white'} />} />
                      <Select variant={'flushed'} type={'text'} name="role" id="role" placeholder='Select Role' px="2"
                        {...register('role', { required: { value: true, message: "User role is required!", } })}>

                        <option>Student/Teacher</option>
                        <option>UGC Admin</option>
                        <option>University</option>
                        <option>Nodal Officer</option>
                        <option>Other</option>
                      </Select>
                    </InputGroup>
                    {errors.role && errors.role.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.role.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                    <GridItem py={5}>
                      <Button
                        w="100%"
                        h="5vh"
                        borderRadius={'sm'}
                        type="submit"
                        bg={"#5A4FCF"} color={'white'} fontWeight={600}>
                        Login
                      </Button>
                    </GridItem>
                  </SimpleGrid>
                </FormControl>
              </form>
            </Box>

          </Flex>
        </Box>

        <Box w="40%" h="100%"
          bg="#5A4FCF"
        >
          <Flex
          flexDirection={'column'}
          w="100%" h="100%">
            <Box w="100%" h="70%">
              <VStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                <Box>
                  <Heading
                    fontSize={'5xl'}
                    color={'white'}  >
                    Lorem Ispum
                  </Heading>
                </Box>
                <Box w="60%">
                  <Text color={'white'} fontWeight={600}>
                    &#129505; Leave a review! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis lacus orci, eget laoreet diam elementum in. Curabitur libero justo, volutpat at nunc non, fermentum efficitur sem.
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={'./image/pd.png'}
              w="100%"
              h="40%"
            ></Box>
          </Flex>
        </Box>
      </HStack>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.users
  }
}

export default connect(mapStateToProps, actions)(Login)