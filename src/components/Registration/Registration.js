import React, { useState } from 'react'
import './../Login/Login.css'
import { UserAuth } from '../../context/AuthContext'
import { Box, Flex, Input, Icon, FormControl, SimpleGrid, GridItem, Heading, FormLabel, Textarea, Checkbox, Button, Image, Select } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const initState = {
  fName: "",
  lName: "",
  phone: "",
  collage: "",
  enrollment: "",
  course: "",
  email: "",
  role: "",
  pass: "",
  cpassword: "",
  DOB: "",
  academicYear: "",
  address: ""

}

let schema = yup.object().shape({
  fName: yup.string().required(),
  lName: yup.string().required(),
  phone: yup.number().required().min(10),
  collage:yup.string().required(),
  enrollment:yup.number().required(),
  course:yup.string().required(),
  email:yup.string().required(),
  role:yup.string().required(),
  pass:yup.string().required().min(6),
  DOB:yup.date().required(),
  academicYear:yup.string().required(),
  address:yup.string().required(),
});

export default function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [inputState, setInputState] = useState(initState)
  const { fName, lName, phone, collage, enrollment, course, email, role, pass, cpassword, DOB, academicYear, address } = inputState;

  const handleInputChnage = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }

  const onFormSumit = () => {
    console.log("hi")
    console.log(inputState);
  }


  return (
    <Box className='Login-Background' minH={'max-content'} maxWidth={"100vw"} overflow={'hidden'} align="center" padding={[4, 5, 5]}>
      <Flex height="100%" align={'center'} width={"100%"} flexDirection={'row'} justifyContent={'space-around'} >
        {/* <Box w={["0%",'0%','30%']} margin={['0px','0px','10px']}>
          <Image src='./image/bg1.jpg' />
        </Box> */}

        <Box w={['100%', '60%', '60%']} bg={'white'} borderRadius={15}>
          <Heading paddingTop={5} fontFamily={'monospace'} textAlign={'center'} size={'lg'}>Register Here
          </Heading>

          <form onSubmit={handleSubmit((d) => {
            console.log(d);
            setInputState(initState)

          })}>
            <FormControl
              padding={[2, 3, 10]} align={'center'}
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
                  <Input type={'text'} name={"fName"} {...register('fName')} id="fName" value={fName} onChange={handleInputChnage} placeholder='Name' />
                  <span>{errors.fName && <p style={{ color: 'red' }}>Please Enter First Name!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Last Name</FormLabel>
                  <Input type={'text'} name={"lName"}  {...register('lName')} id="lName" value={lName} onChange={handleInputChnage} placeholder='Name' />
                  <span>{errors.lName && <p style={{ color: 'red' }}>Please Enter Last Name!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Phone No.</FormLabel>
                  <Input type={'tel'} name="phone" {...register('phone')} id="phone" value={phone} onChange={handleInputChnage} placeholder='Phone No.' />
                  <span>{errors.phone && <p style={{ color: 'red' }}>Please Enter Valid Phone!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Collage Name</FormLabel>
                  <Input type={'text'} name="collage" {...register('collage')} value={collage} id="collage" onChange={handleInputChnage} placeholder='Collage Name' />
                  <span>{errors.collage && <p style={{ color: 'red' }}>Collage name is required!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Enrollment Number</FormLabel>
                  <Input type={'number'} name="enrollment" {...register('enrollment')} value={enrollment} id="enrollment" onChange={handleInputChnage} placeholder='Enrollment Number' />
                  <span>{errors.enrollment && <p style={{ color: 'red' }}>Enrollment number is required!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Course Name</FormLabel>
                  <Input type={'text'} name="course" {...register('course')} value={course} id="course" onChange={handleInputChnage} placeholder='Course Name' />
                  <span>{errors.course && <p style={{ color: 'red' }}>Please enter course name!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Email</FormLabel>
                  <Input type={'email'} name="email" {...register("email",
                            {required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} value={email} id="email" onChange={handleInputChnage} placeholder='Email' />
                </GridItem>

                <GridItem>
                  <FormLabel>Role</FormLabel>
                  <Select type={'text'} name="role" {...register('role')} value={role} id="role" onChange={handleInputChnage} placeholder='Select Role'>
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Other</option>
                  </Select>
                  <span>{errors.role && <p style={{ color: 'red' }}>Please select role!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Password</FormLabel>
                  <Input type={'password'} name="pass" {...register('pass')} value={pass} id="pass" onChange={handleInputChnage} placeholder='Password' />
                  <span>{errors.pass && <p style={{ color: 'red' }}>Enter password of (min 6 characters)!</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type={'password'} value={cpassword} onChange={handleInputChnage} focusBorderColor={pass == cpassword ? "lime" : 'red.400'} placeholder='Confirm Password' />
                </GridItem>

                <GridItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type={'date'} name="DOB" {...register('DOB')} value={DOB} id="DOB" onChange={handleInputChnage} placeholder='Date of Birth' />
                  <span>{errors.DOB && <p style={{ color: 'red' }}>Please enter date of birth</p>}</span>
                </GridItem>

                <GridItem>
                  <FormLabel>Academic Year</FormLabel>
                  <Input type="text" name="academicYear" {...register('academicYear')} value={academicYear} id="academicYear" onChange={handleInputChnage} placeholder='Academic Year' />
                  <span>{errors.academicYear && <p style={{ color: 'red' }}>Academic Year is required!</p>}</span>
                </GridItem>

              </SimpleGrid>
              <FormLabel marginTop={5}>Address</FormLabel>
              <Textarea type="text" name="address" {...register('address')} value={address} id="address" onChange={handleInputChnage} padding={5} placeholder={'Address'} rows={3} />
              <span>{errors.address && <p style={{ color: 'red' }}>Address is required!</p>}</span>
              <Box marginTop={5}><span><input type='checkbox' /> I declare that all the above mentioned information is correct</span></Box>
              <Button marginTop={5} type='submit'>Register</Button>
            </FormControl>
          </form>
        </Box>
      </Flex>

    </Box>
  )
}
