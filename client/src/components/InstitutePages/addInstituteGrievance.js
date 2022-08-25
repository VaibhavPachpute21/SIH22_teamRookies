import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Input, Text, useToast, Select, FormControl, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import * as actions from '../../actions/institute_actions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddInstituteGrievance(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });
    const [Error, SetError] = useState('')
    const [User, SetUser] = useState({})
    const [Institute, SetInstitute] = useState([])
    const toast = useToast()
    const [Files, SetFiles] = useState([])
    const navigate = useNavigate()

    const HandleSubmit = async (data) => {
        const date = Date.now();
        console.log(date); // 👉️ Wed Jun 22 2022

        // const timestampInMs = date.getTime();

        const unixTimestamp = Math.floor(date / 1000);
        console.log(unixTimestamp);
        let obj = {
            grievant_id: User._id,
            grievance_nature: data.nature,
            principal_name: data.pName,
            grievant_name: User.user_name,
            grievance_title: data.title,
            grievance_description: data.discription,
            grievant_university: "mu",
            imgs: Files,
            grievant_institute: User.institute_name,
            region: User.institute_region,
            short_id: `GRIEV_${unixTimestamp}`,
        };
        try {
            const newGrievance = await axios.post('http://localhost:3001/api/grievance/make-grievance', obj)

            console.log(newGrievance)
            let d = newGrievance.data
            if (d.success) {
                let success = d?.success
                if (success) {
                    toast({
                        position: 'top',
                        render: () => (
                            <Box color='white' p={3} bg='green.500'>
                                Grievance submitted {d.newGrievance._id}
                            </Box>
                        ),
                    })
                    console.log(d.newGrievance.grievant_id)

                    navigate('/trackGrievance/' + `${d.newGrievance._id}`)
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

        } catch (error) {
            SetError(error.message)
        }

    }
    useEffect(() => {
        if (props.User) {
            SetUser(props.User)
        }
    }, [props.User])

    const HandleFileSubmit = (e) => {
        let file = e.target.files[0]
        if (Files.length < 2) {
            let cloneArr = [...Files]
            cloneArr.push(file)
            SetFiles(cloneArr)
        }
        else {
            toast({
                position: 'top',
                render: () => (
                    <Box color='white' p={3} bg='red.500'>
                        Max upload exceeded
                    </Box>
                ),
            })
        }
    }




    return (
        <Flex h='100%' overflowX={'hidden'} justifyContent={'center'} padding={[2, 2, 10, 10]}>
            {
                User ? (

                    <Flex flexDirection={'column'} w={['100%', '90%', '80%', '80%']} h={'max-content'} boxShadow={'dark-lg'}>
                        <form onSubmit={handleSubmit(HandleSubmit)}>
                            <FormControl>
                                <Box w={'100%'} bg='white' paddingTop={5}>
                                    <Text textAlign={'center'} fontSize={['xl', '3xl', '3xl']}>Institute's Information</Text>
                                </Box>
                                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                                    <Box w={['90%', '90%', '50%', '50%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Institute Name:</Text>
                                        <Input variant={'filled'} value={User?.institute_name} readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Institute Code:</Text>
                                        <Input variant={'filled'} value={User?.institute_code} readOnly={true} />
                                    </Box>
                                </Flex>

                                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Institute Region:</Text>
                                        <Input variant={'filled'} value={User?.institute_region} readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>District :</Text>
                                        <Input variant={'filled'} value={User?.institute_district} readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Taluka :</Text>
                                        <Input variant={'filled'} value='Vasai' readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Pincode:</Text>
                                        <Input variant={'filled'} value={User?.institute_std_code} readOnly={true} />
                                    </Box>
                                </Flex>
                                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Collage Representative:</Text>
                                        <Input variant={'filled'} value={User?.user_name} readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>Enrollment no:</Text>
                                        <Input variant={'filled'} value='07022002' readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>University:</Text>
                                        <Input variant={'filled'} value={User?.institute_university} readOnly={true} />
                                    </Box>
                                    <Box w={['90%', '90%', '25%', '25%']}>
                                        <Text fontSize={'18px'} paddingLeft={2}>State:</Text>
                                        <Input variant={'filled'} value={User?.institute_state} readOnly={true} />
                                    </Box>
                                </Flex>

                                <Box w={'100%'} bg='white' py={[5]} px={[2, 2, 10, 10]}>
                                    <Text textAlign={'center'} fontSize={['xl', '3xl', '3xl']}>Enter Details To submit Grievance</Text>
                                </Box>

                                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                                    <Box w={['90%', '90%', '50%', '50%']}>
                                        <Text fontSize={'18px'} paddingLeft={0}>Principal Name:</Text>
                                        <Input variant={'flushed'} value={User?.name_of_director} readOnly={true} // name="pName" id="pName"
                                        // {...register('pName', { required: { value: true, message: "Please enter principals name", } })}

                                        />
                                        {errors.pName && errors.pName.message ? (
                                            <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                                {errors.pName.message}
                                            </Box>
                                        ) : (null)
                                        }
                                    </Box>
                                    <Box w={['90%', '90%', '50%', '50%']}>
                                        <Text fontSize={'18px'} paddingLeft={0}>Nature of Grievance:</Text>
                                        <Select variant={'flushed'} name="nature" id="nature" placeholder='Select Nature of Grievance'
                                            {...register('nature', { required: { value: true, message: "Please choose Nature of Grievance", } })}
                                        >
                                            <option>Eligibility Criteria</option>
                                            <option>Scholarship Disbursement</option>
                                            <option>Fresh Application</option>
                                            <option>Renewal Application</option>
                                            <option>Name of institute {"&"} course on NSP</option>
                                            <option>Scholarship scheme not visible on NSP</option>
                                            <option>Document</option>
                                            <option>Merit list</option>
                                            <option>Bank acoount</option>
                                            <option>Any technical queries</option>
                                            <option>Other</option>
                                        </Select>
                                        {errors.nature && errors.nature.message ? (
                                            <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                                {errors.nature.message}
                                            </Box>
                                        ) : (null)
                                        }
                                    </Box>
                                </Flex>

                                <Box w={'100%'} bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} >
                                    <Text fontSize={'18px'} paddingLeft={0}>Title of Grievance:</Text>
                                    <Input variant={'flushed'} placeholder='Give title for Grievance' name="title" id="title"
                                        {...register('title', { required: { value: true, message: "Please enter Title", } })}
                                    />
                                    {errors.title && errors.title.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.title.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </Box>

                                <Box w={'100%'} bg='white' px={[2, 2, 10, 10]} >
                                    <Text fontSize={'18px'} pb={2} paddingLeft={0}>Discription of Grievance:</Text>
                                    <Textarea variant={'flushed'} id="discription" name="discription"
                                        placeholder='Add discription of your Grievance...' wrap='true'
                                        cols={95} rows={5} style={{ border: '1px solid grey', padding: '5px', borderRadius: '5px' }}
                                        {...register('discription', { required: { value: true, message: "Discription is required!", } })} />
                                    {errors.discription && errors.discription.message ? (
                                        <Box textAlign={'left'} fontSize={'12px'} py={1} maxH={'0px'} color={'red'}>
                                            {errors.discription.message}
                                        </Box>
                                    ) : (null)
                                    }
                                </Box>

                                <Box w={'100%'} bg='white' py={3} px={[2, 2, 10, 10]} >
                                    <Text fontSize={'18px'} pb={2} paddingLeft={0}>Please upload image related to grievance if any:</Text>
                                    <input name="file1" type="file"
                                        onChange={(e) => { HandleFileSubmit(e) }}
                                        accept="application/pdf"></input>
                                </Box>

                                <Box alignItems={'center'} textAlign='center' w={'100%'} bg='white' py={[2, 2, 10, 10]}>
                                    <Button w="30%" alignItems={'center'} bg='#5A4FCF' color='white' type="submit">
                                        Submit
                                    </Button>
                                </Box>
                            </FormControl>
                        </form>
                    </Flex>

                ) : (null)



            }

        </Flex>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.institute
    }
}

export default connect(mapStateToProps, actions)(AddInstituteGrievance)
