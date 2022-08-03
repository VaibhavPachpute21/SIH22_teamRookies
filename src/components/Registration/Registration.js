import React, { useState } from 'react'
import './../Login/Login.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'

import { Box, Flex, Input, Icon, FormControl, SimpleGrid, GridItem, Heading, FormLabel,Textarea, Checkbox,Button,Image,Select } from '@chakra-ui/react';


const initState={
  fName:"",
  lName:"",
  phone:"",
  collage:"",
  enrollment:"",
  course:"",
  email:"",
  role:"",
  pass:"",
  DOB:"",
  academicYear:"",
  address:""

}

export default function Registration() {
  const [inputState,setInputState]=useState(initState)
  const [password,setPassword]=useState();
  const [cpassword,setcpassword]=useState();

  const { fName,lName,phone,collage,enrollment,course,email,role,pass,DOB,academicYear,address } = inputState;


  const handleInputChnage =(e)=>{
    const {name,value}=e.target;
    setInputState({...inputState,[name]:value});
  }

  const registerUser=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword( email,pass).then((value)=>{
      console.log(value);
    })
    console.log(inputState);

  }




  return (
    <Box className='Login-Background' minH={'max-content'} maxWidth={"100vw"} overflow={'hidden'} align="center" padding={[4,5,5]}>
      <Flex  height="100%" align={'center'} width={"100%"} flexDirection={'row'} justifyContent={'space-around'} >
        {/* <Box w={["0%",'0%','30%']} margin={['0px','0px','10px']}>
          <Image src='./image/bg1.jpg' />
        </Box> */}
        
        <Box  w={['100%','60%','60%']} bg={'white'} borderRadius={15}>
          <Heading paddingTop={5} fontFamily={'monospace'} textAlign={'center'} size={'lg'}>Register Here
          </Heading>

          <form>
            <FormControl
              padding={[2,3,10]} align={'center'}
            >
              <SimpleGrid
                overflow={'hidden'}
                columns={2}
                spacing={5}
                row={7}
              // spacingX={['10', '10', '150']}
              >
                <GridItem>
                  <FormLabel>First Name</FormLabel>
                  <Input type={'text'} value={fName} name={"fName"} id="fName" onChange={handleInputChnage} placeholder='Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Last Name</FormLabel>
                  <Input type={'text'} value={lName} name={"lName"} id="lName" onChange={handleInputChnage} placeholder='Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Phone No.</FormLabel>
                  <Input type={'tel'} value={phone} name="phone" id="phone" onChange={handleInputChnage} placeholder='Phone No.' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </GridItem>

                <GridItem>
                  <FormLabel>Collage Name</FormLabel>
                  <Input type={'text'} value={collage} name="collage" id="collage" onChange={handleInputChnage} placeholder='Collage Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Enrollment Number</FormLabel>
                  <Input type={'number'} value={enrollment} name="enrollment" id="enrollment" onChange={handleInputChnage} placeholder='Enrollment Number' />
                </GridItem>

                <GridItem>
                  <FormLabel>Course Name</FormLabel>
                  <Input type={'text'} value={course} name="course" id="course" onChange={handleInputChnage} placeholder='Course Name' />
                </GridItem>

                <GridItem>
                  <FormLabel>Email</FormLabel>
                  <Input type={'email'} value={email} name="email" id="email" onChange={handleInputChnage} placeholder='Email' />
                </GridItem>

                <GridItem>
                  <FormLabel>Role</FormLabel>
                  <Select type={'text'} value={role} name="role" id="role" onChange={handleInputChnage} placeholder='Select Role'>
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Other</option>
                  </Select>
                </GridItem>

                <GridItem>
                  <FormLabel>Password</FormLabel>
                  <Input type={'password'} value={pass} name="pass" id="pass" onChange={handleInputChnage} placeholder='Password' />
                </GridItem>

                <GridItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type={'password'} value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} focusBorderColor={pass==cpassword? "lime":'red.400' } placeholder='Confirm Password' />
                </GridItem>

                <GridItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type={'date'} value={DOB} name="DOB" id="DOB" onChange={handleInputChnage} placeholder='Date of Birth' />
                </GridItem>

                <GridItem>
                  <FormLabel>Academic Year</FormLabel>
                  <Input type="text" value={academicYear} name="academicYear" id="academicYear" onChange={handleInputChnage} placeholder='Academic Year' />
                </GridItem>

              </SimpleGrid>
              <FormLabel marginTop={5}>Address</FormLabel>
              <Textarea  type="text" value={address} name="address" id="address" onChange={handleInputChnage} padding={5} placeholder={'Address'} rows={3}/>

              <Box marginTop={5}><span><input type='checkbox'/> I declare that all the above mentioned information is correct</span></Box>
              <Button marginTop={5} onClick={registerUser}>Register</Button>
            </FormControl>
          </form>
        </Box>
      </Flex>

    </Box>
  )
}
