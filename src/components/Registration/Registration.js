import React, { useState } from 'react'
import './../Login/Login.css'
import { UserAuth } from '../../context/AuthContext'
import { Box, Flex, Input, Icon, FormControl, SimpleGrid, GridItem, Heading, FormLabel, Textarea, Checkbox, Button, Image, Select, VStack, Text, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { MdEmail, MdSchool, MdDateRange, MdFormatListNumbered } from 'react-icons/md'
import { AiOutlineUser, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai'
import { db } from '../../firebase-config';


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


export default function Registration() {


  const { createUser, user } = UserAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
  const [inputState, setInputState] = useState(initState)
  const { fName, lName, phone, college, enrollment, course, email, role, pass, cpassword, DOB, academicYear, address } = inputState;
  const [error, SetError] = useState('')
  const navigate = useNavigate()
  const handleInputChnage = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }

  const registerUser = async (data) => {

    try {
      await createUser("abhinav@gmail.com", "12357783")

      if (user) {
        const ref = await db.collection("users").doc(user.uid)
        ref.get().then(doc => {
          if (!doc.exists) {
            ref.set({
              data
            })
          }
        })
        console.log(ref)
      }



    } catch (error) {
      SetError(error.message)
      console.log(error.message)
    }
  }



  return (
    <Box className='Login-Background' minH={'max-content'} maxWidth={"100vw"} overflow={'hidden'} align="center">
      <Flex height="100%" align={'center'} width={"100%"} flexDirection={'row'}>
        <Box w="40%" h="100%"
        // bg="#5A4FCF"
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

        <Box w={['100%', '60%', '60%']} bg={'white'}>
          <Heading paddingTop={5} fontFamily={'monospace'} textAlign={'center'} size={'lg'}>Register Here
          </Heading>
          <Box h={'100%'} w={['100%', '80%', '70%']}>
            <form onSubmit={handleSubmit(registerUser)}>
              <FormControl padding={[2, 3, 5]} align={'center'}>
                <SimpleGrid
                  overflow={'hidden'}
                  columns={2}
                  spacing={3}
                  row={7}
                // spacingX={['10', '10', '150']}
                >
                  <GridItem>
                    <FormLabel>First Name</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlineUser color={'white'} />} />
                      <Input type={'text'} name={"fName"} id="fName" placeholder='Name'
                        //value={fName} onChange={handleInputChnage}
                        {...register('fName', { required: { value: true, message: "Name is required!", } })} />
                    </InputGroup>
                    {errors.fName && errors.fName.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.fName.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Last Name</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlineUser color={'white'} />} />
                      <Input type={'text'} name={"lName"} id="lName" placeholder='Name'
                        //value={lName} onChange={handleInputChnage}
                        {...register('lName', { required: { value: true, message: "Last Name is required!", } })} />
                    </InputGroup >
                    {errors.lName && errors.lName.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.lName.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Phone No.</FormLabel>
                    <InputGroup>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlinePhone color={'white'} />} />
                      <Input type={'tel'} name="phone" id="phone" placeholder='Phone No.'
                        //value={phone} onChange={handleInputChnage}
                        {...register('phone', { required: { value: true, message: "Phone number is required!", }, minLength: { value: 10, message: "Please Enter Valid number" } })} />
                    </InputGroup>
                    {errors.phone && errors.phone.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.phone.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Collage Name</FormLabel>
                    <InputGroup>
                      <InputLeftAddon bg="#5A4FCF" children={<MdSchool color={'white'} />} />
                      <Input type={'text'} name="college" id="college" placeholder='Collage Name'
                        //value={college} onChange={handleInputChnage}
                        {...register('college', { required: { value: true, message: "Collage Name is required!", } })} />
                    </InputGroup>
                    {errors.college && errors.college.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.college.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Enrollment Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon bg="#5A4FCF" children={<MdSchool color={'white'} />} />
                      <Input type={'number'} name="enrollment" id="enrollment" placeholder='Enrollment Number'
                        //value={enrollment} onChange={handleInputChnage}
                        {...register('enrollment', { required: { value: true, message: "Enrollment no. is required!", } })} />
                    </InputGroup>
                    {errors.enrollment && errors.enrollment.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.enrollment.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Course Name</FormLabel>
                    <InputGroup>
                      <InputLeftAddon bg="#5A4FCF" children={<MdSchool color={'white'} />} />
                      <Input type={'text'} name="course" id="course" placeholder='Course Name'
                        //value={course} onChange={handleInputChnage}
                        {...register('course', { required: { value: true, message: "Course Name is required!", } })} />
                    </InputGroup>
                    {errors.course && errors.course.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.course.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Email</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<MdEmail color={'white'} />} />
                      <Input type={'email'} name="email" id="email" placeholder='Email'
                        //value={email} onChange={handleInputChnage}
                        {...register("email", {
                          required: { value: true, message: "Email is required!", },
                          pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Enter valid email" }
                        })} />
                    </InputGroup>
                    {errors.email && errors.email.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.email.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Role</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlineUser color={'white'} />} />
                      <Select type={'text'} name="role" id="role" placeholder='Select Role'
                        //value={role} onChange={handleInputChnage}
                        {...register('role', { required: { value: true, message: "User role is required!", } })}>

                        <option>Student</option>
                        <option>Teacher</option>
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

                  <GridItem>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlineLock color={'white'} />} />
                      <Input type={'password'} name="pass" id="pass" placeholder='Password'
                        //value={pass} onChange={handleInputChnage}
                        {...register('pass', { required: { value: true, message: "Choose is password", } })} />
                    </InputGroup>
                    {errors.pass && errors.pass.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.pass.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<AiOutlineLock color={'white'} />} />
                      <Input type={'password'} value={cpassword} name="cpassword" onChange={handleInputChnage} focusBorderColor={pass == cpassword ? "lime" : 'red.400'} placeholder='Confirm Password' />
                    </InputGroup>
                  </GridItem>

                  <GridItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<MdDateRange color={'white'} />} />
                      <Input type={'date'} name="DOB" id="DOB" placeholder='Date of Birth'
                        //value={DOB} onChange={handleInputChnage}
                        {...register('DOB', { required: { value: true, message: "Date of birth is required!", } })} />
                    </InputGroup>
                    {errors.DOB && errors.DOB.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.DOB.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                  <GridItem>
                    <FormLabel>Academic Year</FormLabel>
                    <InputGroup size={'md'}>
                      <InputLeftAddon bg="#5A4FCF" children={<MdFormatListNumbered color={'white'} />} />
                      <Input type="text" name="academicYear" id="academicYear" placeholder='Academic Year'
                        //value={academicYear} onChange={handleInputChnage}
                        {...register('academicYear', { required: { value: true, message: "Academic Year is required!", } })} />
                    </InputGroup>
                    {errors.academicYear && errors.academicYear.message ? (
                      <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                        {errors.academicYear.message}
                      </Box>
                    ) : (null)
                    }
                  </GridItem>

                </SimpleGrid>
                <FormLabel marginTop={5}>Address</FormLabel>
                <Textarea type="text" name="address" id="address" padding={5} placeholder={'Address'} rows={3}
                  //value={address} onChange={handleInputChnage}
                  {...register('address', { required: { value: true, message: "Address is required!", } })} />
                {errors.address && errors.address.message ? (
                  <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                    {errors.address.message}
                  </Box>
                ) : (null)
                }
                <Box marginTop={5}><span><input type='checkbox' /> I declare that all the above mentioned information is correct</span></Box>
                <Button
                  type="submit"
                  marginTop={5}>Register</Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>

    </Box>
  )
}



