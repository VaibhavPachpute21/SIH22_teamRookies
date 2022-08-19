import React from 'react'
import { Box, Button, Flex, FormLabel, Heading, Input,useToast,Textarea, FormControl, SimpleGrid, GridItem, Select } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export default function AddNewUniAdmin() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });


  return (
    <Flex w='100%' h={'100%'} justifyContent={'center'} padding={5} overflowX={'hidden'}>
    <Flex w={'90%'} h={'max-content'} border={'1px solid black'} flexDirection={'column'} overflowX={'hidden'} >
        <Flex w={'100%'} justifyContent={'center'}><Heading>Add New University Admin</Heading></Flex>
        <Box h={'100%'} w='100%'>
            <form>
                <FormControl padding={[2, 3, 5]} align={'center'}>
                    <SimpleGrid
                        columns={2}
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

                    <Button bg={'#5A4FCF'} color={'white'}
                        type="submit"
                        marginTop={5}>Create Admin</Button>
                </FormControl>
            </form>
        </Box>

    </Flex>
</Flex>
  )
}
