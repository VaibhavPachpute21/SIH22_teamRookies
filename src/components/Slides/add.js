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
import { Editor } from 'slate-react'
import { Value } from 'slate'




const content1 = (
    <Flex w="85vw" h="65vh" py={4}>
        <Box w="100%" h="100%">
        <TableContainer py={10} h="100%">
  <Table variant='striped' colorScheme='purple'>
    <TableCaption>Verify your personal details and proceed</TableCaption>

    <Tbody>
      <Tr w="100%" h="8vh">
        <Td
        fontWeight={600}
        w="50%">Name</Td>
        <Td
         fontWeight={600}
        w="50%">Forrest Gump</Td>
      </Tr>
      <Tr w="100%" h="8vh">
        <Td  
         fontWeight={600}
        w="50%">State/UT</Td>
        <Td 
         fontWeight={600}
        w="50%">Texas</Td>
      </Tr>
      <Tr w="100%" h="8vh">
        <Td  
         fontWeight={600}
        w="50%">Regional Office</Td>
        <Td  
         fontWeight={600}
        w="50%">Western</Td>
      </Tr>
      <Tr w="100%" h="8vh">
        <Td  
         fontWeight={600}
        w="50%">Phone Number</Td>
        <Td  
         fontWeight={600}
        w="50%">4938092052</Td>
      </Tr>
      <Tr w="100%" h="8vh">
        <Td  
         fontWeight={600}
        w="50%">Primary Email</Td>
        <Td  
         fontWeight={600}
        w="50%">gumpForrest@gmail.com</Td>
      </Tr>
      <Tr w="100%" h="8vh">
        <Td  
         fontWeight={600}
        w="50%">Type</Td>
        <Td  
         fontWeight={600}
        w="50%">Grievance</Td>
      </Tr>
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

const content3 = (
    <div>
        
    </div>
);


const steps = [
     content1 ,
     content2 ,
     content1 ,
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
                        w="100%" h="100%">
                            <VStack
                            maxH={'80vh'}
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
                        <Box>
                            May
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