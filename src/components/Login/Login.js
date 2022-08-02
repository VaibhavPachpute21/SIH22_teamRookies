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
      overflow={'none'}
      w={"100vw"} h={"90vh"}>
      <Flex
      className='Login-Background'
      w="100%" h="100%" flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
        <Box 
        boxShadow={'2xl'}
        borderRadius={'2xl'}
        bg="white"
        h="60%"
         w="20%">
          <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
            <Box w="100%" h="100%">
              <Image
              borderLeftRadius={'2xl'}
              h="100%"
              src="./image/landscape.jpg" alt="landscape"/>
            </Box>
          </Flex> 
        </Box>
        <Box 
        boxShadow={'2xl'}
        borderRightRadius={'2xl'}
        bg="white"
         h="60%"
         w="50%">
          <form className='Login-Form'>
              <FormControl
              px={5}
                paddingBottom={5}
                w="100%">
                <SimpleGrid
                spacing={5}
                row={6}
                column={1}
                >

                  <GridItem py={3}>
                    <Heading
                      fontFamily={'monospace'}
                      size={'md'}>Grievance login portal</Heading>
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


                  <GridItem 
                  
                  w="100%">
                    <Flex w="100%" h="100%" flexDirection={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
                      <ButtonGroup>
                        <Button size={"md"} bg={"#5A4FCF"} color={'white'}>
                          Submit
                        </Button>
                      </ButtonGroup>


                      <Text py={3} fontSize={16} fontWeight={500}>Don't have Account{" "}?<Link w={"30%"}
                        href='/Registration'
                        fontWeight={500}
                        fontSize={16}
                        color={'blue'}
                        fontFamily={'monospace'}
                      >{" "}Register</Link></Text>

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
