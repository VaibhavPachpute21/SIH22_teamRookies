import React, { useState } from 'react';
import {
    Box, VStack, HStack, Text, Select, Flex, Button, Tabs,
    Icon,
    TableContainer,
    TableCaption,
    Table,
    Th,
    Thead,
    Tr,
    Tbody,
    Tfoot,
    Td,
    Tab, TabList, TabPanel, TabPanels, Spacer, Avatar, SimpleGrid, GridItem, FormControl, Input, Checkbox, FormLabel, Textarea
} from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { BsFilePostFill, BsFillFileImageFill } from 'react-icons/bs'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import ControlledEditor from './editor'
import ImageUpload from './ImageUploader';



const tableKeys = [
    
        "Name",
        "State",
        "Office",
        "Phone",
        "Email",
        "Type"
  
]

const tableValues = [
        "Forrest Gump",
        "Colorado",
        "Western",
        "43298502",
        "gumpForrest@gmail.com",
        "Grievance"
]

const content1 = (
    <Flex w="85vw" h="65vh" py={4}>
        <Box w="100%" h="100%">
        <TableContainer py={10} h="100%">
  <Table variant='striped'>
    <TableCaption>Verify your personal details and proceed</TableCaption>

    <Tbody>
        {
            tableKeys?.map((item,i)=>(
        <Tr key={i} background={i%2==0 ? "#5A4FCF":"white"} w="100%" h="8vh">
        <Td
        fontWeight={600}
        w="50%">{item}</Td>
        <Td
         fontWeight={600}
        w="50%">{tableValues[i]}</Td>
      </Tr>
      
            ))
        }
      
    </Tbody>
  </Table>
</TableContainer>
        </Box>
    </Flex>
);

const content2 = (
    <Flex w="85vw" h="65vh" py={4} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Box w="80%" h="100%">
            <form>
                <FormControl p={3}>
                    <SimpleGrid spacing={12} columns={2} rows={6}>
                        <GridItem colSpan={1}>
                            <FormLabel>Application number</FormLabel>
                            <Input type="text" placeholder='Number'/>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormLabel>Principal Name</FormLabel>
                            <Input type="text" placeholder='Name'/>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormLabel>Module Name</FormLabel>
                            <Input type="text" placeholder='Module'/>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormLabel>Nature of query</FormLabel>
                            <Select>
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
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder='Title of your grievance'/>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Explain in few words</FormLabel>
                            <Textarea 
                            h={100}
                            placeholder='Few words'/>
                        </GridItem>
                    </SimpleGrid>
                </FormControl>
            </form>
        </Box>
    </Flex>
);




const steps = [
     content1 ,
     content2 ,
     <ControlledEditor/>
];




const DashboardAdd = () => {


    const [index, SetIndex] = useState(0)

    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });

    return (
        <Box
            w="100%" h="100%">
            <VStack w="100%" h="100%">
                <Box
                    h="5%"
                    w="100%"
                    px={6}
                >
                    <Text fontSize={'xl'} fontWeight={500}>
                        Submit Grievance
                    </Text>
                </Box>

                <Tabs
                    onChange={(index) => { SetIndex(index) }}
                    w="100%"
                    h="5%"
                    variant='unstyled'>
                    <TabList>
                        <Tab
                            borderRadius={'2'}
                            borderBottom={'1px'}
                            borderColor={'#5A4FCF'}
                            w="40%"
                            _selected={{ color: 'white', bg: '#5A4FCF' }}>
                            <Icon
                                as={BsFilePostFill}
                                w={6} h={6} />


                        </Tab>
                        <Tab
                            borderBottom={'1px'}
                            borderColor={'#5A4FCF'}
                            borderRadius={''}
                            w="40%"
                            _selected={{ color: 'white', bg: '#5A4FCF' }}>
                            <Icon
                                as={BsFillFileImageFill}
                                w={6} h={6} />
                        </Tab>
                        <Tab
                            borderBottom={'1px'}
                            borderColor={'#5A4FCF'}
                            borderRadius={'5'}
                            w="40%"
                            _selected={{ color: 'white', bg: '#5A4FCF' }}>
                            <Icon
                                as={AiOutlineVideoCamera}
                                w={6} h={6} />
                        </Tab>
                    </TabList>
                </Tabs>


                {
                    index == 0 ? (
                        <Box 
                        py={5}
                        w="100%" h="90%">
                            <VStack
                            maxH={'70vh'}
                            w="100%" h="100%">

                                <Flex
                                flexDir="column" w="97%">
                    <Steps
                    colorScheme={'white'}
                    activeStep={activeStep}>
                        {steps.map(( content ,i) => (
                            <Step 
                            color={'#5A4FCF'} key={i}>
                                {content}
                            </Step>
                        ))}
                    </Steps>
                         


                    {activeStep === steps.length ? (
                        <Flex p={4}>
                            <Button mx="auto" size="sm" onClick={reset}>
                                Reset
                            </Button>
                        </Flex>
                    ) : (
                        <Flex w="100%" justify="flex-end">
                            <Button
                                isDisabled={activeStep === 0}
                                mr={4}
                                onClick={prevStep}
                                size="sm"
                                variant="ghost"
                            >
                                Prev
                            </Button>
                            <Button size="sm" onClick={nextStep}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Flex>
                    )}
                </Flex> 
                            </VStack>
                        </Box>
                    ) : (null)
                }

                {
                    index == 1 ? (
                        <Box w="100%" h="90%">
                            <ImageUpload/>
                        </Box>
                    ) : (null)
                }

                {
                    index == 2 ? (
                        <Box>
                            Jay
                        </Box>
                    ) : (null)
                }




                {/*       <Flex flexDir="column" w="90%">
                    <Steps activeStep={activeStep}>
                        {steps.map(({ label, content }) => (
                            <Step label={label} key={label}>
                                {content}
                            </Step>
                        ))}
                    </Steps>
                    {activeStep === steps.length ? (
                        <Flex p={4}>
                            <Button mx="auto" size="sm" onClick={reset}>
                                Reset
                            </Button>
                        </Flex>
                    ) : (
                        <Flex w="100%" justify="flex-end">
                            <Button
                                isDisabled={activeStep === 0}
                                mr={4}
                                onClick={prevStep}
                                size="sm"
                                variant="ghost"
                            >
                                Prev
                            </Button>
                            <Button size="sm" onClick={nextStep}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Flex>
                    )}
                </Flex> */}
            </VStack>
        </Box>
    );
}

export default DashboardAdd;