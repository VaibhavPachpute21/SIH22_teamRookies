import React from 'react'
import './Login.css';
import {
  Heading, Box,
  SimpleGrid,
  FormControl,
  Image,
  GridItem, Input, Flex, FormLabel, Button,
  InputLeftAddon, InputGroup,
  Link, main, Checkbox, HStack, Icon, Text, ButtonGroup, VStack, Divider, IconButton
} from '@chakra-ui/react';
import './Login.css'
import GoogleButton from 'react-google-button'
import { RiGoogleFill, RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const { user, logout, signIn } = UserAuth()
  const navigate = useNavigate()


  const HandleLogin = async (e) => {
    e.preventDefault()

    try {
      await signIn("testme@gmail.com", "1234562")
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }


  const handleLogOut = async () => {
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }



  return (
    <Box
      overflow={'none'}
      w={"100vw"} h={"100vh"}>
      <HStack w="100%" h="100%" >
        <Box w="60%" h="100%"
        >
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box w="80%" h="10%">
              <Flex w="100%" h="100%">
                <HStack justifyContent={'center'} w="62%">
                  <Text
                    fontSize={'md'}
                    fontFamily={'monospace'}>
                    Don't have an account?
                  </Text>
                  <Link
                    fontWeight={600}
                    color={"#5A4FCF"}>
                    Sign up
                  </Link>
                </HStack>
              </Flex>
            </Box>
            <Box w="80%" h="20%">
              <VStack w="100%" h="100%" justifyContent={'center'}>
                <Box w="80%">
                  <Heading
                    fontSize={'5xl'}
                    fontWeight={700} fontFamily={'monospace'}>
                    Howdy User!
                  </Heading>
                </Box>
                <Box w="80%">
                  <Text
                    fontSize={'sm'}
                    fontWeight={600} opacity={.6}>
                    Start complaining! &#128540;.
                    Kidding, we got everything covered from sending, tracking and managing your grievances.
                    All you need to do is say.
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box py={8} w="80%" h="70%">
              <form className='Login-Form'>

                <FormControl w="80%">
                  <SimpleGrid spacing={10} columns={'1'} rows={5}>
                    <GridItem>
                      <FormLabel>
                        Email
                      </FormLabel>
                      <InputGroup size={'lg'}>
                        <InputLeftAddon
                          bg="#5A4FCF"

                          children={<MdEmail color={'white'} />} />
                        <Input

                          type='tel' placeholder='Email address' />
                      </InputGroup>
                    </GridItem>

                    <GridItem>
                      <FormLabel>
                        Password
                      </FormLabel>
                      <InputGroup size={'lg'}>
                        <InputLeftAddon
                          bg="#5A4FCF"
                          children={<RiLockPasswordFill color={'white'} />} />
                        <Input type='tel' placeholder='Password' />
                      </InputGroup>
                    </GridItem>

                    <GridItem py={5}>
                      <Button
                        w="100%"
                        h="5vh"
                        borderRadius={'sm'}
                        bg={"#5A4FCF"} color={'white'} fontWeight={600}>
                        Login
                      </Button>
                    </GridItem>

                    <GridItem>
                      <HStack>
                        <Divider />
                        <Text fontWeight={600} opacity={.6} w="4%">
                          or
                        </Text>
                        <Divider />
                      </HStack>
                    </GridItem>


                    <GridItem w="100%">
                      <Flex w="100%" justifyContent={'center'}>
                        <GoogleButton
                          type="light"
                          onClick={() => { console.log('Google button clicked') }}
                        />
                      </Flex>

                    </GridItem>
                  </SimpleGrid>
                </FormControl>
              </form>
            </Box>

          </Flex>
        </Box>

        <Box w="40%" h="100%"
          bg="#5A4FCF"
        ><Flex
        flexDirection={'column'}
        w="100%" h="100%">
          <Box w="100%" h="70%">
            <VStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
              <Box>
                <Heading 
                fontSize={'5xl'}
                color={'white'} fontFamily={'monospace'}>
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
