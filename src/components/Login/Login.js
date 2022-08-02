import React from 'react'
import './Login.css';
import {
  Heading, Box,
  SimpleGrid,
  FormControl,
  Image,
  GridItem, Input, Flex, FormLabel, Button, Link, main, Checkbox, HStack, Icon, Text, ButtonGroup
} from '@chakra-ui/react';
import './Login.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import { TbCapture } from 'react-icons/tb'


export default function Login() {


  return (
    <Box
      // className='Login-Background'

      // paddingBottom={'10'}
      overflow={'none'}
      w={"100vw"} minH={"90vh"}>
      <Flex w="100%" h="100%" flex-direction={'row'}
        alignItems={'center'}
      // paddingTop={'4vh'}
      >

        {/* <Box w={["0%", '0%', '40%']} bg={"#5A4FCF"} height={"90vh"} paddingTop={10}>
          <Image src='./image/bg1.jpg' />
        </Box> */}

        <Flex className='Login-Background'
          w={['90%', '60%', '100%']} height="90vh" padding={1} flexDirection={"row"} alignItems={'center'} justifyContent={'center'}>
          <Box flex-direction={'row'} w={"70%"} bg={'white'} border={'lg'} alignItems={'center'} justifyContent={'space-between'} boxShadow={'2xl'} borderRadius={15}>
            <HStack>
            <Box w={["0%", '0%', '60%']} height={'100%'}>
              <Image src='./image/bg1.jpg' w={'100%'} height={'100%'} />
            </Box>
            <form className='Login-Form'>
              <FormControl
                paddingTop={'5'}
                paddingBottom={5}
                w="40%">
                <SimpleGrid
                  row={6}
                  column={1}
                  spacing={10}
                >

                  <GridItem >
                    <Heading
                      fontFamily={'monospace'}
                      size={'lg'}>Grievance login portal</Heading>
                  </GridItem>

                  <GridItem>
                    <FormLabel
                      fontFamily={'monospace'}
                    >
                      <Icon w={9} h={9} pt={1}>
                        <AiOutlineMail />
                      </Icon>
                      Email</FormLabel>
                    <Input type="email" placeholder='Email' borderLeft={"5px solid #5A4FCF"} borderLeftRadius={2} />
                  </GridItem>

                  <GridItem>
                    <FormLabel
                      fontFamily={'monospace'}
                    >
                      <Icon w={9} h={9} pt={1}>
                        <RiLockPasswordFill />
                      </Icon>
                      Password</FormLabel>
                    <Input type="text" placeholder='Password' borderLeft={"5px solid #5A4FCF"} borderLeftRadius={2} />
                  </GridItem>

                  <GridItem>
                    <FormLabel
                      fontFamily={'monospace'}
                    >
                      <Icon w={9} h={9} pt={1}>
                        <TbCapture />
                      </Icon>
                      Captcha</FormLabel>
                    <Input type="text" placeholder='Captcha' borderLeft={"5px solid #5A4FCF"} borderLeftRadius={2} />
                  </GridItem>

                  <GridItem>
                    <HStack>
                      <Checkbox />
                      <Text
                        fontSize={'md'}
                        fontFamily={'monospace'}
                      >Remember me</Text>
                    </HStack>
                  </GridItem>

                  {/* <GridItem colSpan={1}>
                    <ButtonGroup>
                      <Button>
                        Submit
                      </Button>
                    </ButtonGroup>
                </GridItem> */}

                  <GridItem w="100%">
                    <Flex w="100%" h="100%" flexDirection={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
                      <ButtonGroup>
                        <Button size={"lg"} bg={"#5A4FCF"} color={'white'}>
                          Submit
                        </Button>
                      </ButtonGroup>
                      <Text paddingBottom={5} fontSize={16} fontWeight={500}>Don't have Account?<Link w={"30%"}
                        href='/Registration'
                        fontWeight={500}
                        fontSize={16}
                        color={'blue'}
                        fontFamily={'monospace'}
                      >Register</Link></Text>

                    </Flex>
                  </GridItem>

                </SimpleGrid>
              </FormControl>
            </form>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
