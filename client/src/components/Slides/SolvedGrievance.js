import React from 'react'
import { Box, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text,Button } from '@chakra-ui/react'

export default function SolvedGrievance() {
    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} padding={2} overflowX={'hidden'}>
            <Flex w={"90%"}>
                <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
                    <AccordionItem mt={2} p={2} borderTop={'4px solid #5A4FCF'} borderBottom={'2px solid #5A4FCF'} borderTopRadius={15} shadow='dark-md' >
                        <h2>
                            <AccordionButton>
                                <Box flex='1'>
                                    <Flex justifyContent={'space-evenly'}>
                                        <Box>
                                            Grievance Title: <strong>Grievance related to fees</strong>
                                        </Box>
                                        <Box>
                                            Solved By: <strong>Nodal Officer1</strong>
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
                                        <Text>Fees related Grievance</Text>
                                    </Box>
                                </Flex>
                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Description</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievant Institute</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>UCOE</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievance Raised on</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>22/08/2022</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievance Solved on</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>24/08/2022</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'} justifyContent={'center'} >
                                    <Box alignSelf={'center'}>
                                        <Button bg={'#5A4FCF'} color='white' >Track Grievance</Button>
                                    </Box>
                                </Flex>

                            </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem mt={2} p={2} borderTop={'4px solid #5A4FCF'} borderBottom={'2px solid #5A4FCF'} borderTopRadius={15} shadow='dark-md' >
                        <h2>
                            <AccordionButton>
                                <Box flex='1'>
                                    <Flex justifyContent={'space-evenly'}>
                                        <Box>
                                            Grievance Title: <strong>Grievance related to fees</strong>
                                        </Box>
                                        <Box>
                                            Solved By: <strong>Nodal Officer1</strong>
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
                                        <Text>Fees related Grievance</Text>
                                    </Box>
                                </Flex>
                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Description</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievant Institute</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>UCOE</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievance Raised on</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>22/08/2022</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievance Solved on</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>24/08/2022</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'} justifyContent={'center'} >
                                    <Box alignSelf={'center'}>
                                        <Button bg={'#5A4FCF'} color='white' >Track Grievance</Button>
                                    </Box>
                                </Flex>

                            </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem mt={2} p={2} borderTop={'4px solid #5A4FCF'} borderBottom={'2px solid #5A4FCF'} borderTopRadius={15} shadow='dark-md' >
                        <h2>
                            <AccordionButton>
                                <Box flex='1'>
                                    <Flex justifyContent={'space-evenly'}>
                                        <Box>
                                            Grievance Title: <strong>Grievance related to fees</strong>
                                        </Box>
                                        <Box>
                                            Solved By: <strong>Nodal Officer1</strong>
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
                                        <Text>Fees related Grievance</Text>
                                    </Box>
                                </Flex>
                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Description</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievant Institute</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>UCOE</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievance Raised on</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>22/08/2022</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'}>
                                    <Box w={"15%"}>
                                        <strong>Grievance Solved on</strong>
                                    </Box>
                                    <Box w={'80%'} textAlign={'justify'}>
                                        <Text>24/08/2022</Text>
                                    </Box>
                                </Flex>

                                <Flex w={'100%'} justifyContent={'center'} >
                                    <Box alignSelf={'center'}>
                                        <Button bg={'#5A4FCF'} color='white' >Track Grievance</Button>
                                    </Box>
                                </Flex>

                            </Box>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </Flex>
        </Flex>
    )
}
