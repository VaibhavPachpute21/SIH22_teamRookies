import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormLabel, Heading, Input, Textarea, FormControl, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import {connect} from 'react-redux'
import * as actions from '../../actions/institute_actions'
import cookie from 'js-cookie'

function RegisterNewCollage(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    const [Error, SetError] = useState('')
    const toast = useToast()

    const HandleSubmit = async (data) => {
        let obj = {
            institute_name:data.iName,
            institute_code:data.iCode,
            institute_region:data.iRegion,
            institute_district:data.iDistrict,
            institute_state:data.iState,
            institute_address:data.iAddress,
            institute_pincode:data.iPin,
            institute_std_code:data.iSTD,
            institute_year_of_start:data.iYear,
            institute_web_address:data.iWeb,
            institute_email:data.iMail,
            institute_university:data.iUniversity,
            name_of_director:data.iDirector,
            director_email:data.iDMail,
            director_phone_number:data.iDphone,
            user_name:data.uName,
            user_phone:data.uPhone,
            user_email:"abhinav@gmail.com",
            password:data.uPassword
        }
        try {
            await props.CreateInstitute(obj)
        } catch (error) {
            SetError(error.message)
        }
    }

     useEffect(()=>{
        console.log(props.data)
        if (props.data) {
            let alias = props.data
            if (alias.inData) {
               
              let success = alias.inData?.success
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
                      Some error occured
                    </Box>
                  ),
                })
              }
      
            }
      
          }
    },[props.data]) 

    return (
        <Flex w='100%' h={'100%'} justifyContent={'center'} padding={5} overflowX={'hidden'}>
            <Flex w={'90%'} h={'max-content'} border={'1px solid black'} flexDirection={'column'} overflowX={'hidden'} >
                <form onSubmit={handleSubmit(HandleSubmit)}>
                    <FormControl>
                        <Flex w={'100%'} justifyContent={'center'}><Heading>Add New Institute</Heading></Flex>

                        <Flex w={'100%'} justifyContent={'center'}><Heading size={'lg'}>Institute Info</Heading></Flex>

                        <Flex w={'100%'} p={4}>
                            <Box w={'70%'} >
                                <FormLabel>Institute Name</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Institute Name' type={'text'}
                                    id='iName' name='iName'
                                    {...register('iName', { required: { value: true, message: "Please Enter Institute Name !", }, })}
                                />
                                {errors.iName && errors.iName.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iName.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>
                        </Flex>

                        <Flex w={'100%'} >
                            <Box w={'25%'} p={4}>
                                <FormLabel>Institute Code</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Code' type={'text'}
                                    id='iCode' name='iCode'
                                    {...register('iCode', { required: { value: true, message: "Please Enter Institute Code !", }, })}
                                />
                                {errors.iCode && errors.iCode.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iCode.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Institute Region</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Institute Region' type={'text'}
                                    id='iRegion' name='iRegion'
                                    {...register('iRegion', { required: { value: true, message: "Please Enter Institute Region !", }, })}
                                />
                                {errors.iRegion && errors.iRegion.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iRegion.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Institute District</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Institute District' type={'text'}
                                    id='iDistrict' name='iDistrict'
                                    {...register('iDistrict', { required: { value: true, message: "Please Enter Institute District !", }, })}
                                />
                                {errors.iDistrict && errors.iDistrict.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iDistrict.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Institute State</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Institute State' type={'text'}
                                    id='iState' name='iState'
                                    {...register('iState', { required: { value: true, message: "Please Enter Institute State !", }, })}
                                />
                                {errors.iState && errors.iState.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iState.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>
                        </Flex>

                        <Flex w={'100%'} p={4}>
                            <Box w={'60%'} >
                                <FormLabel>Institute Address</FormLabel>
                                <Textarea borderColor={'black'} placeholder='Enter Institute Addres' type={'text'}
                                    id='iAddress' name='iAddress'
                                    {...register('iAddress', { required: { value: true, message: "Please Enter Institute Addres !", }, })}
                                />
                                {errors.iAddress && errors.iAddress.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iAddress.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>
                            <Box w={'20%'} p={4}>
                                <FormLabel>Institute Pincode</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Pincode' type={'text'}
                                    id='iPin' name='iPin'
                                    {...register('iPin', { required: { value: true, message: "Please Enter Pincode!", }, })}
                                />
                                {errors.iPin && errors.iPin.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iPin.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>
                            <Box w={'20%'} p={4}>
                                <FormLabel>Institute STD Code</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter STD Code' type={'text'}
                                    id='iSTD' name='iSTD'
                                    {...register('iSTD', { required: { value: true, message: "Please Enter STD Code!", }, })}
                                />
                                {errors.iSTD && errors.iSTD.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iSTD.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>
                        </Flex>

                        <Flex w={'100%'}>
                            <Box w={'25%'} p={4}>
                                <FormLabel>Year of Establishment</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Year of Establishment' type={'text'}
                                    id='iYear' name='iYear'
                                    {...register('iYear', { required: { value: true, message: "Please Enter Year of Establishment !", }, })}
                                />
                                {errors.iYear && errors.iYear.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iYear.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Web Address</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Web Address' type={'text'}
                                    id='iWeb' name='iWeb'
                                    {...register('iWeb', { required: { value: true, message: "Please Enter Web Address !", }, })}
                                />
                                {errors.iWeb && errors.iWeb.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iWeb.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Institute Email</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Mail' type={'text'}
                                    id='iMail' name='iMail'
                                    {...register('iMail', { required: { value: true, message: "Please Enter Mail Id !", }, })}
                                />
                                {errors.iMail && errors.iMail.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iMail.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Institute University</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter University' type={'text'}
                                    id='iUniversity' name='iUniversity'
                                    {...register('iUniversity', { required: { value: true, message: "Please Enter University !", }, })}
                                />
                                {errors.iUniversity && errors.iUniversity.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iUniversity.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                        </Flex>

                        <Flex w={'100%'}>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Name of Director</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Director name' type={'text'}
                                    id='iDirector' name='iDirector'
                                    {...register('iDirector', { required: { value: true, message: "Please Enter Name !", }, })}
                                />
                                {errors.iDirector && errors.iDirector.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iDirector.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Director Email</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Mail' type={'text'}
                                    id='iDMail' name='iDMail'
                                    {...register('iDMail', { required: { value: true, message: "Please Enter Mail Id !", }, })}
                                />
                                {errors.iDMail && errors.iDMail.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iDMail.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Director Phone number</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Phone number' type={'text'}
                                    id='iDphone' name='iDphone'
                                    {...register('iDphone', { required: { value: true, message: "Please Enter Phone number !", }, })}
                                />
                                {errors.iDphone && errors.iDphone.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.iDphone.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                        </Flex>

                        <Flex w={'100%'} justifyContent={'center'}><Heading size={'lg'}>User Info</Heading></Flex>

                        <Flex w={'100%'}>
                            <Box w={'25%'} p={4}>
                                <FormLabel>Name</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Name of User' type={'text'}
                                    id='uName' name='uName'
                                    {...register('uName', { required: { value: true, message: "Please Enter name of Instiutute user !", }, })}
                                />
                                {errors.uName && errors.uName.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.uName.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Phone</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Phone number' type={'text'}
                                    id='uPhone' name='uPhone'
                                    {...register('uPhone', { required: { value: true, message: "Please Enter Phone number !", }, })}
                                />
                                {errors.uPhone && errors.uPhone.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.uPhone.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>User Login Id</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Phone number' type={'text'}
                                    id='uPhone' name='uPhone'
                                    {...register('uPhone', { required: { value: true, message: "Please Enter Phone number !", }, })}
                                />
                                {errors.uPhone && errors.uPhone.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.uPhone.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                            <Box w={'25%'} p={4}>
                                <FormLabel>Password</FormLabel>
                                <Input borderColor={'black'} placeholder='Enter Password' type={'text'}
                                    id='uPassword' name='uPassword'
                                    {...register('uPassword', { required: { value: true, message: "Please Enter Password !", }, })}
                                />
                                {errors.uPassword && errors.uPassword.message ? (
                                    <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                        {errors.uPassword.message}
                                    </Box>
                                ) : (null)
                                }
                            </Box>

                        </Flex>

                        <Flex w={'100%'} justifyContent={'center'} p={2}><Button bg={'#5A4FCF'}
                        type="submit"
                        color={'white'}>Add Institute and User</Button></Flex>
                    </FormControl>
                </form>
            </Flex>
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return {
        data:state.institute
    }
}

export default connect(mapStateToProps,actions)(RegisterNewCollage)