import React from 'react'
import './Login.css';
import {
  Heading, Box,
  SimpleGrid,
  FormControl,
  Image,
  GridItem, Input, Flex, FormLabel, Button, Link, main, Checkbox, HStack, Icon,Text, ButtonGroup
} from '@chakra-ui/react';
import './Login.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {TbCapture} from 'react-icons/tb'


export default function Login() {


  return (
    <Box
      className='Login-Background'
      overflow={'none'}
      w={"100vw"} minH={"90vh"}>
      <Flex w="100%" h="100%" flex-direction={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
        paddingTop={'7vh'}
      >

        <Box w={["0%",'0%','30%']}>
          <Image src='./image/bg1.jpg'/>
        </Box>


        <Box w={['90%','60%','40%']} maxH="90vh" bg="white" border={'lg'} boxShadow={'2xl'} paddingBottom={100}>
          <form className='Login-Form'>
            <FormControl
              paddingTop={'10'}
              w="80%">
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
                      <AiOutlineMail/>
                    </Icon>
                    Email</FormLabel>
                  <Input type="email" placeholder='Email' />
                </GridItem>

                <GridItem>
                  <FormLabel
                  fontFamily={'monospace'}
                  >
                  <Icon w={9} h={9} pt={1}>
                      <RiLockPasswordFill/>
                    </Icon>
                    Password</FormLabel>
                  <Input type="text" placeholder='Password' />
                </GridItem>

                <GridItem>
                  <FormLabel
                  fontFamily={'monospace'}
                  >
                  <Icon w={9} h={9} pt={1}>
                      <TbCapture/>
                    </Icon>
                    Captcha</FormLabel>
                  <Input type="text" placeholder='Captcha' />
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

                <GridItem>
                  <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'flex-end'}>
                    <ButtonGroup>
                      <Button>
                        Submit
                      </Button>
                    </ButtonGroup>
                  </Flex>
                </GridItem>

                <GridItem w="70%">
                  <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'flex-start'} justifyContent={'space-between'}>
                  
                  <Link 
                  fontWeight={500}
                  paddingBottom={5}
                  fontFamily={'monospace'}
                  >Register</Link>
                  </Flex>
                </GridItem>

              </SimpleGrid>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}
