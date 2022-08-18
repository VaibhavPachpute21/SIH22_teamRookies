import React, { useEffect, useState } from 'react'
import { Box, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Button } from '@chakra-ui/react'
import * as actions from '../../actions/superadmin_actions'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function SolvedGrievance(props) {

    const [Error, SetError] = useState('')
    const [grievances, setGrievances] = useState([])

    useEffect(() => {
        try {
            props.GetSolvedGrievances()
        } catch (error) {
            SetError(error.message)
        }
    }, [])

    useEffect(() => {
        if (props.data) {
            let alias = props.data?.superData
            if (alias) {
                setGrievances(alias?.solvedGrievances)
            }
        }
    }, [props.data])

    const navigate = useNavigate()


    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} padding={2} overflowX={'hidden'}>
            <Flex w={"90%"}>

                <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
                    {
                        grievances && grievances.length > 0 ? (
                            grievances?.map((item,i)=>(
                                <AccordionItem 
                                key={i}
                                mt={2} p={2} borderTop={'4px solid #5A4FCF'} borderBottom={'2px solid #5A4FCF'} borderTopRadius={15} shadow='dark-md' >
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1'>
                                            <Flex justifyContent={'space-evenly'}>
                                                <Box>
                                                    Grievance Title: <strong>{item?.grievance_title}</strong>
                                                </Box>
                                                <Box>
                                                    Solved By: <strong>{item?.reciever_id}</strong>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Box w={'100%'}>
                                        <Flex w={'100%'}>
                                            <Box w={"15%"}>
                                                <strong>Nature of Grievance</strong>
                                            </Box>
                                            <Box w={'80%'} textAlign={'justify'}>
                                                <Text>{item?.grievance_nature}</Text>
                                            </Box>
                                        </Flex>
                                        <Flex w={'100%'}>
                                            <Box w={"15%"}>
                                                <strong>Description</strong>
                                            </Box>
                                            <Box w={'80%'} textAlign={'justify'}>
                                                <Text>
                                                    {item?.grievance_description}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Flex w={'100%'}>
                                            <Box w={"15%"}>
                                                <strong>Grievant Institute</strong>
                                            </Box>
                                            <Box w={'80%'} textAlign={'justify'}>
                                                <Text>{item?.grievance_institute}</Text>
                                            </Box>
                                        </Flex>

                                        <Flex w={'100%'}>
                                            <Box w={"15%"}>
                                                <strong>Grievance Raised on</strong>
                                            </Box>
                                            <Box w={'80%'} textAlign={'justify'}>
                                                <Text>{item?.createdAt.split("T")[0]}</Text>
                                            </Box>
                                        </Flex>

                                        <Flex w={'100%'}>
                                            <Box w={"15%"}>
                                                <strong>Grievance Solved on</strong>
                                            </Box>
                                            <Box w={'80%'} textAlign={'justify'}>
                                                <Text>{item?.updatedAt.split("T")[0]}</Text>
                                            </Box>
                                        </Flex>

                                        <Flex w={'100%'} justifyContent={'center'} >
                                            <Box alignSelf={'center'}>
                                                <Button bg={'#5A4FCF'} color='white' 
                                                onClick={()=>navigate(`/TrackGrievance/${item._id}`)}
                                                >Track Grievance</Button>
                                            </Box>
                                        </Flex>

                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                            ))
                            
                        ) : ("No grievances")
                    }

                </Accordion>
            </Flex>
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.superadmin
    }
}


export default connect(mapStateToProps, actions)(SolvedGrievance) 