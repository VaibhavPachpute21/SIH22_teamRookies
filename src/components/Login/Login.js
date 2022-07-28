import React from 'react'
import './Login.css';
import {
  Heading, Box,
  SimpleGrid,
  FormControl,
  GridItem, Input, Flex, FormLabel, InputGroup, InputRightElement, Button, Link, main, Checkbox, HStack, Text, ButtonGroup
} from '@chakra-ui/react';
import './Login.css'
export default function Login() {


  return (
    <Box
      className='Login-Background'
      w={"100vw"} minH={"90vh"}>
      <Flex w="100%" h="100%" flex-direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        paddingTop={'7vh'}
      >
        <Box w={['90%','60%','40%']} bg="white" border={'lg'} boxShadow={'2xl'}>
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
                  fontWeight={'400'}
                  size={'lg'}>Grievance login portal</Heading>
                </GridItem>

                <GridItem>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder='Email' />
                </GridItem>

                <GridItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="text" placeholder='Password' />
                </GridItem>

                <GridItem>
                  <FormLabel>Captcha</FormLabel>
                  <Input type="text" placeholder='Captcha' />
                </GridItem>

                <GridItem>
                  <HStack>
                    <Checkbox />
                    <Text>Remember me</Text>
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
                  <Text>Don't have an account ?</Text>
                  
                  <Link 
                  fontWeight={500}
                  color={'#FC9601'}
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

