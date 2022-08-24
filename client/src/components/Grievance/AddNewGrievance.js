import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Input, Text, Select, FormControl, useToast, Textarea, AlertDialogOverlay } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/grievant_actions'
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie'
import axios from 'axios';
import ControlledEditor from '../Slides/editor'


function AddNewGrievance(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });


    const [authen, setAuthen] = useState(null)
    const auth = cookie.get('token');
    const [User, SetUser] = useState({})



    useEffect(() => {
        async function VerifyUser() {
            const request = await axios.get('http://localhost:3001/api/user/private', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth}`
                }
            })
            if (request.data) {
                let s = request.data?.success
                setAuthen(s)
                let user = request.data?.user
                if (user) {
                    SetUser(user)
                }
            }
        }
        VerifyUser()


    }, [auth])


    const [Files, SetFiles] = useState([])
    const toast = useToast()
    const [error, SetError] = useState('')
    const navigate = useNavigate()

    const HandleSubmit = async (data) => {

        try {
            let obj = {
                grievant_id: User?._id,
                grievance_nature: data.nature,
                principal_name: data.pName,
                grievant_name: User.fullname,
                grievance_title: data.title,
                grievance_description: data.description,
                grievant_university: "mu",
                imgs: Files,
                region: User?.region ? User.region : "east"

            }

            await props.AddGrievance(obj)

        } catch (error) {
            SetError(error.message)
        }

    }

    useEffect(()=>{

        if (props.data) {
            let alias = props.data
            if (alias.grievanceData) {
                let d = alias?.grievanceData?.newGrievance
                
                if (d) {

                        toast({
                            position: 'top',
                            render: () => (
                                <Box color='white' p={3} bg='green.500'>
                                    Grievance submitted
                                </Box>
                            ),
                        })
        
                    
                    // navigate('/TrackGrievance/34-20')
                }
                

            }

        }
    },[props.data])
    

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
        <Flex  overflowX={'hidden'} justifyContent={'center'} padding={[2,2,10,10]}
        >
            <Flex flexDirection={'column'} w={['100%', '90%', '80%', '80%']} border={'1px solid black'}
            >
                <form onSubmit={handleSubmit(HandleSubmit)}>
                    <FormControl>
                        <Box w={'100%'} bg='white' paddingTop={5}>
                            <Text textAlign={'center'} fontSize={'3xl'}>Grievant's Information</Text>
                        </Box>
                        <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>Name:</Text>
                                <Input variant={'filled'} value={props.User.fullname} readOnly={true} />
                            </Box>
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>Phone:</Text>
                                <Input variant={'filled'} value={props.User.phone_number} readOnly={true} />
                            </Box>
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>Mail:</Text>
                                <Input variant={'filled'} value={props.User.email} readOnly={true} />
                            </Box>
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>DOB:</Text>
                                <Input variant={'filled'} value={"22/3/2000"} readOnly={true} />
                            </Box>
                        </Flex>
                        <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>Collage:</Text>
                                <Input variant={'filled'} value={props.User.college_name} readOnly={true} />
                            </Box>
                            {/* <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>Enrollment no:</Text>
                                <Input variant={'filled'} value={props.User.enrollment} readOnly={true} />
                            </Box> */}
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>University:</Text>
                                <Input variant={'filled'} value={props.User.university} readOnly={true} />
                            </Box>
                            <Box w={['90%', '90%', '25%', '25%']}>
                                <Text fontSize={'18px'} paddingLeft={2}>State:</Text>
                                <Input variant={'filled'} value={props.User.state} readOnly={true} />
                            </Box>
                        </Flex>

                        <Box w={'100%'} bg='white' py={[5]} px={10}>
                            <Text textAlign={'center'} fontSize={'3xl'}>Enter Details To submit Grievance</Text>
                        </Box>

                        <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                            <Box w={['90%', '90%', '50%', '50%']}>
                                <Text fontSize={'18px'} paddingLeft={0}>Principal Name:</Text>
                                <Input variant={'flushed'} placeholder='Principal Name' name="pName" id="pName"
                                    {...register('pName', { required: { value: true, message: "Please enter principals name", } })}

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
                                    <option>Non-refund of fee by Institution</option>
                                    <option>Non-return of original certificates.</option>
                                    <option>Non-observation of laid down norms and standards.</option>
                                    <option>Delays in according approvals.</option>
                                    <option>Charging of capitation fee.</option>
                                    <option>Complaints against officers and staff.</option>
                                    <option>Non-refund of security amount.</option>
                                    <option>Demand of gratification.</option>
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
                            <Input type={'file'}
                                onChange={(e) => { HandleFileSubmit(e) }}
                                accept={'image/png, image/jpeg'} />
                        </Box>

                        

                        <Box alignItems={'center'} textAlign='center' w={'100%'} bg='white' py={[2, 2, 10, 10]}>
                            <Button w="30%" alignItems={'center'} bg='#5A4FCF' color='white' type="submit">
                                Submit
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            </Flex>
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.grievance
    }
}


export default connect(mapStateToProps, actions)(AddNewGrievance)