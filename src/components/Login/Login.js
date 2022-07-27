import React from 'react'
import './Login.css';
import {
  Heading, Box,
  SimpleGrid,
  FormControl,
  GridItem, Input, Flex, InputGroup, InputRightElement, Button, Link, main, Checkbox, HStack, Text, ButtonGroup
} from '@chakra-ui/react';
import './Login.css'
export default function Login() {


  return (
    <Box
      bg="#ededed"
      w={"100vw"} minH={"90vh"}>
      <Flex w="100%" h="100%" flex-direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        paddingTop={'5vh'}
      >
        <Box w="40%" bg="white" border={'lg'} boxShadow={'xl'}>
          <form className='Login-Form'>
            <FormControl 
            paddingTop={'10'}
            w="80%">
              <SimpleGrid 
              row={5}
              column={1}
              spacing={20}
         >
                <GridItem>
                  <Input type="text" placeholder='Email'/>
                </GridItem>

                <GridItem>
                  <Input type="text" placeholder='Passwrod'/>
                </GridItem>

                <GridItem>
                  <Input type="text" placeholder='Captcha'/>
                </GridItem>

                <GridItem>
                  <HStack>
                    <Checkbox/>
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

              </SimpleGrid>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

