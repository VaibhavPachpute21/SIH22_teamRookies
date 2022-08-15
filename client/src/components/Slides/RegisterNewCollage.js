import React from 'react'
import { Box, Flex, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export default function RegisterNewCollage() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });


    return (
        <Flex w='100%' h={'100%'} justifyContent={'center'} padding={5}>
            <Flex w={'90%'} h={'100%'} border={'1px solid black'} flexDirection={'column'}>
                <Flex w={'100%'} justifyContent={'center'}><Heading>Add New Collage</Heading></Flex>

                <Flex w={'100%'} p={4}>
                    <Box w={'70%'} >
                        <FormLabel>Institute Name</FormLabel>
                        <Input borderColor={'black'} placeholder='Enter Institute Name' type={'text'} 
                        id='iName' name='iName'
                        {...register('iName', { required: { value: true, message: "Please Enter Institute Name !", },})}
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
                        {...register('iCode', { required: { value: true, message: "Please Enter Institute Code !", },})}
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
                        {...register('iRegion', { required: { value: true, message: "Please Enter Institute Region !", },})}
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
                        {...register('iDistrict', { required: { value: true, message: "Please Enter Institute District !", },})}
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
                        {...register('iState', { required: { value: true, message: "Please Enter Institute State !", },})}
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
                        {...register('iAddress', { required: { value: true, message: "Please Enter Institute Addres !", },})}
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
                        <Input borderColor={'black'} placeholder='Enter Institute State' type={'text'} 
                        id='iPin' name='iPin'
                        {...register('iPin', { required: { value: true, message: "Please Enter Institute State !", },})}
                        />
                        {errors.iPin && errors.iPin.message ? (
                            <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                {errors.iPin.message}
                            </Box>
                        ) : (null)
                        }
                    </Box>
                </Flex>

            </Flex>
        </Flex>
    )
}
