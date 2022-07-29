import React from 'react'
import './../Login/Login.css'

import { Box, Flex, Input, Icon, FormControl, SimpleGrid, GridItem, Heading, FormLabel,Textarea, Checkbox,Button,Image } from '@chakra-ui/react';

export default function Registration() {
  return (
    <Box className='Login-Background' minH={'max-content'} maxWidth={"100vw"} overflow={'hidden'} align="center" padding={[4,5,10]}>
      <Flex  height="100%" align={'center'} width={"100%"} flexDirection={'row'} justifyContent={'space-around'} >
        <Box w={["0%",'0%','30%']} margin={['0px','0px','10px']}>
          <Image src='./image/bg1.jpg' />
        </Box>
        
       
        <Box  w={['100%','60%','60%']} bg={'white'}>
          <Heading paddingTop={5} fontFamily={'monospace'} textAlign={'center'} size={'lg'}>Register Here
          </Heading>

          <form>
            <FormControl
              padding={[2,3,10]} align={'center'}
            >
              <SimpleGrid
                overflow={'hidden'}
                columns={2}
                spacing={10}
                row={7}
              // spacingX={['10', '10', '150']}
              >
                <GridItem >
                  <FormLabel>First Name</FormLabel>
                  <Input type={'text'} placeholder='Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Phone No.</FormLabel>
                  <Input type={'number'} placeholder='Phone No.' />
                </GridItem>

                <GridItem>
                  <FormLabel>Last Name</FormLabel>
                  <Input type={'text'} placeholder='Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Collage Name</FormLabel>
                  <Input type={'text'} placeholder='Collage Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Enrollment Number</FormLabel>
                  <Input type={'number'} placeholder='Enrollment Number' />
                </GridItem>

                <GridItem>
                  <FormLabel>Course Name</FormLabel>
                  <Input type={'text'} placeholder='Course Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Email</FormLabel>
                  <Input type={'email'} placeholder='Email' />
                </GridItem>

                <GridItem>
                  <FormLabel>Commitee</FormLabel>
                  <Input type={'text'} placeholder='Commitie' />
                </GridItem>

                <GridItem>
                  <FormLabel>Password</FormLabel>
                  <Input type={'password'} placeholder='Password' />
                </GridItem>

                <GridItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type={'password'} placeholder='Confirm Password' />
                </GridItem>

                <GridItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type={'date'} placeholder='Date of Birth' />
                </GridItem>

                <GridItem>
                  <FormLabel>Academic Year</FormLabel>
                  <Input type="text" placeholder='Academic Year' />
                </GridItem>

              </SimpleGrid>
              <FormLabel marginTop={5}>Address</FormLabel>
              <Textarea  type="text" padding={5} placeholder={'Address'} rows={5}/>

              <Box marginTop={5}><span><input type='checkbox'/> I declare that all the above mentioned information is correct</span></Box>
              <Button marginTop={5}>Register</Button>
            </FormControl>
          </form>
        </Box>
      </Flex>

    </Box>
  )
}
