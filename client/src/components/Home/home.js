import React, { useState } from "react";
import { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5'
import { ThemeProvider } from 'styled-components';
import {
    Table, Flex, Box, Th, Td, Tbody, Tr, TableContainer, Thead, Button, Image, GridItem, SimpleGrid, Heading,
    Grid, Text, Container, Icon, VStack, FormControl, Input, HStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Link
} from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ChatBot from 'react-simple-chatbot';

const theme = {
    headerBgColor: '#5A4FCF',
    headerFontSize: '20px',
    botBubbleColor: '#5A4FCF',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#5A4FCF',
    userFontColor: 'white',
};


export default function Home() {

    const [SlideIndex, setSlideIndex] = useState(0)


    return (

        <Box w="100%" minH="100%">
            <Carousel onChange={(i) => { setSlideIndex(i) }}
                autoPlay={true} infiniteLoop={true} showArrows={true}
                showStatus={false} showIndicators={false} showThumbs={false}
            >
                <div style={{ height: "70vh" }}>
                    <img
                        style={{ "background-size": 'cover', "background-position": "center", "height": "100%", "width": "100%" }}
                        src="./image/s1.jpg" />
                    {
                        SlideIndex == 0 ? (
                            <Flex borderTop={'6px solid #5A4FCF'} w={'30%'} height={'40vh'} bg={'white'}
                                borderRadius={'xl'} alignSelf={"end"} position={'absolute'} marginTop={'-55vh'} right={10}>
                                <VStack w="100%" h="100%" >
                                    <form style={{ width: "90%", height: "80%", display: 'flex', alignItems: 'center' }}>
                                        <FormControl w="100%" h="100%" py={10}>
                                            <SimpleGrid spacing={10} columns={1}>
                                                <GridItem colSpan={1}>
                                                </GridItem>

                                                <GridItem colSpan={1}>
                                                    <Input
                                                        size="lg"
                                                        type="email"
                                                        placeholder="Enter email"
                                                    />
                                                </GridItem>

                                                <GridItem colSpan={1}>
                                                    <Input
                                                        size="lg"
                                                        type="email"
                                                        placeholder="Enter password"
                                                    />
                                                </GridItem>

                                                <GridItem colSpan={1}>
                                                    <Button
                                                        bg="#5A4FCF"
                                                        w="100%"
                                                        color={'white'}
                                                    >Login</Button>
                                                </GridItem>
                                            </SimpleGrid>
                                        </FormControl>
                                    </form>
                                </VStack>
                            </Flex>
                        ) : (null)
                    }

                </div>
                <div style={{ height: "70vh" }}>
                    <img
                        style={{ "background-size": 'cover', "background-position": "center", "height": "100%", "width": "100%" }}
                        src="./image/s2.jpg" />
                </div>
                <div style={{ height: "70vh" }}>
                    <img
                        style={{ "background-size": 'cover', "background-position": "center", "height": "100%", "width": "100%" }}
                        src="./image/s3.jpg" />
                </div>
            </Carousel>

            <HStack w="100%" h="90vh" align={'start'} >
                <Box w="70%" h="100%">

                    <VStack spacing={5} py={2} w="100%" h="max-content">
                        <VStack borderTop={'4px solid #5A4FCF'} padding={5}
                            borderRadius={'2xl'} boxShadow={'xl'} alignItems={'center'}
                            justifyContent={'center'} bg="white" w="90%" h="50%">
                            <Box w="100%" h="30%">
                                <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                    <Box w="100%" h="100%">
                                        <Heading size='xl'> ABOUT UNIVERSITY GRANTS COMMISSION </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                            <Box w="100%" h="50%">
                                The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of Parliament in 1956, for the coordination,determination and maintenance of standards of teaching, examination and research in university educatio
                            </Box>
                            <Box alignSelf={'start'}>
                                <Button bg={'#5A4FCF'} color='white' >Know More</Button>
                            </Box>
                        </VStack>
                    </VStack>

                    <VStack spacing={5} py={2} w="100%" h="max-content">
                        <VStack borderTop={'4px solid #5A4FCF'} padding={5}
                            borderRadius={'2xl'} boxShadow={'xl'} alignItems={'center'}
                            justifyContent={'center'} bg="white" w="90%" h="50%">
                            <Box w="100%" h="30%">
                                <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                    <Box w="100%" h="100%">
                                        <Heading size='xl'> HELPLINE @ UGC </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                            <Box w="100%" h="50%">
                                <TableContainer>
                                    <Table size='sm'>
                                        <Thead>
                                            <Tr>
                                                <Th>Name of Department</Th>
                                                <Th>Email ID</Th>
                                                <Th>Contact Number</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>Scholarship/Fellowship Helpline</Td>
                                                <Td>netjrf-ugc@gov.in</Td>
                                                <Td>011-23604505</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>National Scholarship Portal Helpline</Td>
                                                <Td>helpdesk@nsp.gov.in</Td>
                                                <Td>0120-6619540</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Saksham Helpline</Td>
                                                <Td>gssec.ugc@nic.in</Td>
                                                <Td>1800-111-656</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Anti-ragging Helpline</Td>
                                                <Td>helpline@antiragging.in</Td>
                                                <Td>1800-180-5522</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </VStack>
                    </VStack>

                    <VStack spacing={5} py={2} w="100%" h="max-content">
                        <VStack borderTop={'4px solid #5A4FCF'} padding={5}
                            borderRadius={'2xl'} boxShadow={'xl'} alignItems={'center'}
                            justifyContent={'center'} bg="white" w="90%" h="50%">
                            <Box w="100%" h="30%">
                                <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                    <Box w="100%" h="100%">
                                        <Heading size='xl'> OUR WORKFLOW </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                            <Flex w="100%" h="50%">
                                <Box maxW="25%" p={2}>
                                    <Image src="https://grievance.ugc.ac.in/images/ugc1.png" />
                                </Box>
                                <Box maxW="25%" p={2}>
                                    <Image src="https://grievance.ugc.ac.in/images/grievance.png" />
                                </Box>
                                <Box maxW="25%" p={2}>
                                    <Image src="https://grievance.ugc.ac.in/images/reminder.png" />
                                </Box>
                                <Box maxW="25%" p={2}>
                                    <Image src="https://grievance.ugc.ac.in/images/status.png" />
                                </Box>
                            </Flex>
                        </VStack>
                    </VStack>

                    <VStack spacing={5} py={2} w="100%" h="max-content">
                        <VStack borderTop={'4px solid #5A4FCF'} padding={5}
                            borderRadius={'2xl'} boxShadow={'xl'} alignItems={'start'}
                            justifyContent={'center'} bg="white" w="90%" h="50%">
                            <Box w="100%" h="30%">
                                <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                    <Box w="100%" h="100%">
                                        <Heading size='xl'> FAQ </Heading>
                                    </Box>
                                </HStack>
                            </Box>
                            <Box w="100%" h="50%">
                                <Accordion>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize={25}>
                                                    FAQ 1
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} fontSize={18}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize={25}>
                                                    FAQ 2
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} fontSize={18}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left' fontSize={25}>
                                                    FAQ 3
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} fontSize={18}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        </VStack>
                    </VStack>

                </Box>

                <Box w="30%" h="100%" marginTop={0} padding={2} >
                    <Box w={'100%'} padding={5} border={'1px solid black'} borderRadius={15} boxShadow={'dark-lg'} marginBottom={15} >
                        <Text fontSize="2xl" fontWeight={600}>Contact Us</Text>
                        <HStack>
                            <Box w={'20%'}>
                                <Icon as={IoLocationSharp} w={25} size={50} h={50} />
                            </Box>
                            <Box w={'80%'}>University Grants Commission (UGC)
                                Bahadur Shah Zafar Marg,
                                New Delhi - 110002.</Box>
                        </HStack>
                        <HStack>
                            <Box w={'20%'}>
                                <Icon as={FiPhone} w={25} size={50} h={50} />
                            </Box>
                            <Box w={'80%'}>011-23604446, 011-23604200</Box>
                        </HStack>
                        <HStack>
                            <Box w={'20%'}>
                                <Icon as={AiOutlineMail} w={25} size={50} h={50} />
                            </Box>
                            <Box w={'80%'}>contact.ugc@nic.in</Box>
                        </HStack>

                    </Box>
                    <Box w={'100%'} height={'100%'} alignSelf={"end"}>
                        <ThemeProvider theme={theme}>
                            <ChatBot
                                headerTitle="Grievance Bot"
                                steps={[
                                    {
                                        id: '0',
                                        message: 'Welcome to grievance portal!',
                                        trigger: '1',
                                    },
                                    {
                                        id: '1',
                                        message: 'How can I help you',
                                        trigger: '2'
                                    }, {
                                        id: '2',
                                        options: [
                                            { value: 1, label: 'Track Grievance', trigger: 'track-grievance' },
                                            { value: 2, label: 'Register New Grievance', trigger: 'register-grievance' },
                                            { value: 3, label: 'Process Of Solving Grievances', trigger: 'process-grievance' },
                                            { value: 4, label: 'Sign Up', trigger: 'signUp' },
                                        ],
                                    },
                                    {
                                        id:'process-grievance',
                                        component:(
                                            <>
                                            <p>1.Login to your account </p>
                                            <p>2.Click on Add tab </p>
                                            <p>3.Enter Detais and send Grievance</p>
                                            <p>4.Officers will check grievance and solve all queries.</p>
                                            </>
                                        ),
                                        asMessage:true,
                                        trigger: 'restart'
                                    },
                                    {
                                        id: 'signUp',
                                        component: (
                                            <>
                                                <Link
                                                    fontWeight={500}
                                                    _hover={{ 'textDecoration': 'none' }}
                                                    href='/Registration'>Click here to Register</Link>
                                            </>
                                        ),
                                        trigger: 'restart'
                                    },
                                    {
                                        id: 'register-grievance',
                                        component: (
                                            <>
                                                <Link
                                                    fontWeight={500}
                                                    _hover={{ 'textDecoration': 'none' }}
                                                    href='/Login'>Add Grievance</Link>
                                            </>
                                        ),
                                        trigger: 'restart'
                                    },
                                    {
                                        id: 'track-grievance',
                                        message: "Enter grievance id",
                                        trigger: 'grievance_id'
                                    }, {
                                        id: 'grievance_id',
                                        user: true,
                                        trigger: 4
                                    },
                                    {
                                        id: '4',
                                        message: "Checking Status of {previousValue}",
                                        trigger: 'status'
                                    },
                                    {
                                        id: "status",
                                        component: <GStatus />,
                                        asMessage: true,
                                        trigger: 'restart'
                                    },
                                    {
                                        id: 'restart',
                                        message: "Need more help?",
                                        trigger: "restartopt"
                                    },
                                    {
                                        id: 'restartopt',
                                        options: [
                                            { value: 1, label: 'Yes', trigger: '2' },
                                            { value: 2, label: 'No', trigger: 'last' },
                                        ],
                                    },
                                    {
                                        id: 'last',
                                        message: "Thank You!",
                                        end: true
                                    }
                                ]} />
                        </ThemeProvider>
                    </Box>

                </Box>
            </HStack>



        </Box>

    );
}



class GStatus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grievance_id: ''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { grievance_id } = steps;

        this.setState({ grievance_id, grievance_id, grievance_id });
    }

    render() {
        const { grievance_id } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Status of {grievance_id.value}</h3>
                <p>The grievance {grievance_id.value} was sent to Nodal officer at 2:30PM</p>
            </div>
        );
    }
}

GStatus.propTypes = {
    steps: PropTypes.object,
};

GStatus.defaultProps = {
    steps: undefined,
};