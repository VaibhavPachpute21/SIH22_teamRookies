import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, FormLabel, Heading, Input,
    useToast,
    Textarea, FormControl, SimpleGrid, GridItem, Select } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as actions from '../../actions/uni_admin'
import {connect} from 'react-redux'

function AddNodalOfficer(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
    const [Error,SetError] = useState('')

    const toast = useToast()

    const HandleSubmit = async (data) => {
        
        let obj = {
            email:data.email,
            password:data.pass,
            role:data.role,
            fullname:data.fName,
            committee:data.committee,
            phone_number:data.phone,
            university:data.university,
            district:data.District,
            state:data.state,
            gender:data.Gender
        }
      
        try {
            await props.CreateOfficer(obj)
        } catch (error) {
            SetError(error.message)
        } 
    }

    useEffect(() => {
        if (props.data) {
          let alias = props.data
          console.log(alias)
          if (alias.uniadminData) {
            let success = alias.uniadminData?.success
            if (success) {
              toast({
                position: 'top',
                render: () => (
                  <Box color='white' p={3} bg='green.500'>
                    Registration complete
                  </Box>
                ),
              })
              
            }
            else {
              toast({
                position: 'top',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    {Error}
                  </Box>
                ),
              })
            }
    
          }
    
        }
      }, [props.data])

    


    return (
        <Flex w='100%' h={'100%'} justifyContent={'center'} padding={[2,2,5,5]} overflowX={'hidden'}>
            <Flex w={'90%'} h={'max-content'} border={'1px solid black'} flexDirection={'column'} overflowX={'hidden'} >
                <Flex w={'100%'} justifyContent={'center'}><Heading>Add New Nodal Officer</Heading></Flex>
                <Box h={'100%'} w='100%'>
                    <form onSubmit={handleSubmit(HandleSubmit)}>
                        <FormControl padding={[2, 3, 5]} align={'center'}>
                            <SimpleGrid
                                columns={[1,1,2,2]}
                                spacing={3}
                                row={7}
                            // spacingX={['10', '10', '150']}
                            >
                                <GridItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type={'text'} name={"fName"} id="fName" placeholder='Name'
                                        {...register('fName', { required: { value: true, message: "Name is required!", }, minLength: { value: 5, message: "Min length is 5" } })} />

                                    {errors.fName && errors.fName.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.fName.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                <GridItem>
                                    <FormLabel>Gender</FormLabel>

                                    <Select type={'text'} name="Gender" id="Gender" placeholder='Select Gender'
                                        {...register('Gender', { required: { value: true, message: "Please choose Gender", } })}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Select>
                                    {errors.Gender && errors.Gender.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.Gender.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                <GridItem>
                                    <FormLabel>Phone No.</FormLabel>

                                    <Input type={'tel'} name="phone" id="phone" placeholder='Phone No.'
                                        {...register('phone', { required: { value: true, message: "Phone number is required!", }, minLength: { value: 10, message: "Please Enter Valid number" } })} />

                                    {errors.phone && errors.phone.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.phone.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                <GridItem>
                                    <FormLabel>Email</FormLabel>
                                    <Input type={'email'} name="email" id="email" placeholder='Email'
                                        {...register("email", {
                                            required: { value: true, message: "Email is required!", },
                                            pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Enter valid email" }
                                        })} />
                                    {errors.email && errors.email.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.email.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                <GridItem>
                                    <FormLabel>State</FormLabel>
                                    <Input type={'text'} name={"state"} id="state" placeholder='state'
                                        {...register('state', { required: { value: true, message: "State name is required!", } })} />

                                    {errors.state && errors.state.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.state.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                <GridItem>
                                    <FormLabel>District</FormLabel>

                                    <Input type={'text'} name={"District"} id="District" placeholder='District'
                                        {...register('District', { required: { value: true, message: "District name is required!", } })} />

                                    {errors.District && errors.District.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.District.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                {/* <GridItem>
                                    <FormLabel>Collage Name</FormLabel>
                                    <Input type={'text'} name="college" id="college" placeholder='Collage Name'
                                        {...register('college', { required: { value: true, message: "Collage Name is required!", } })} />

                                    {errors.college && errors.college.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.college.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem> */}

                                {/* <GridItem>
                                    <FormLabel>Enrollment Number</FormLabel>
                                    <Input type={'number'} name="enrollment" id="enrollment" placeholder='Enrollment Number'
                                        {...register('enrollment', { required: { value: true, message: "Enrollment no. is required!", } })} />

                                    {errors.enrollment && errors.enrollment.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.enrollment.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem> */}

                                <GridItem>
                                    <FormLabel>University Name</FormLabel>
                                    <Input type={'text'} name="university" id="university" placeholder='University Name'
                                        {...register('university', { required: { value: true, message: "Unversity name is required!", } })} />

                                    {errors.university && errors.university.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.university.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                <GridItem>
                                    <FormLabel>commitee Name</FormLabel>

                                    <Input type={'text'} name="commitee" id="comity" placeholder='commitee Name'
                                        {...register('commitee', { required: { value: true, message: "commitee Name is required!", } })} />

                                    {errors.commitee && errors.commitee.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.commitee.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                {/* <GridItem>
                                    <FormLabel>Academic Year</FormLabel>
                                    <Input type="text" name="academicYear" id="academicYear" placeholder='Academic Year'
                                        {...register('academicYear', { required: { value: true, message: "Academic Year is required!", } })} />

                                    {errors.academicYear && errors.academicYear.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.academicYear.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem> */}


                                <GridItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select type={'text'} name="role" id="role" placeholder='Select Role'
                                        {...register('role', { required: { value: true, message: "User role is required!", } })}>

                                        <option>1A</option>
                                        <option>1B</option>
                                    </Select>

                                    {errors.role && errors.role.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.role.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                                {/* <GridItem>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Input type={'date'} name="DOB" id="DOB" placeholder='Date of Birth'
                                        {...register('DOB', { required: { value: true, message: "Date of birth is required!", } })} />

                                    {errors.DOB && errors.DOB.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.DOB.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem> */}

                                <GridItem>
                                    <FormLabel>Password</FormLabel>
                                    <Input type={'password'} name="pass" id="pass" placeholder='Password'
                                        {...register('pass', { required: { value: true, message: "Choose is password", }, minLength: { value: 6, message: "Passowrd should contain at least 6 characters" } })} />

                                    {errors.pass && errors.pass.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.pass.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </GridItem>

                            </SimpleGrid>
                            {/* <FormLabel marginTop={5}>Address</FormLabel>
                            <Textarea type="text" name="address" id="address" padding={5} placeholder={'Address'} rows={3}
                                //value={address} onChange={handleInputChnage}
                                {...register('address', { required: { value: true, message: "Address is required!", } })} />
                            {errors.address && errors.address.message ? (
                                <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                    {errors.address.message}
                                </Box>
                            ) : (null)
                            } */}

                            <Button
                                type="submit"
                                marginTop={5}>Register</Button>
                        </FormControl>
                    </form>
                </Box>

            </Flex>
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return{
        data:state.uniadmin
    }
}

export default connect(mapStateToProps,actions)(AddNodalOfficer)
