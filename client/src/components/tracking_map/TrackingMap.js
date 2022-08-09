import React from 'react'
import { Box, Divider, Flex, Heading, VStack, Text, StyledStepper, Icon } from '@chakra-ui/react'
import { ImLocation } from 'react-icons/im'
import './TrackingMap.css'

export default function TrackingMap() {
    return (
        <Box h={"100%"} w={"100vw"} padding={10} >
            <Box>
                <Heading>Timeline of Grievance</Heading>
            </Box>

            <Flex w={'100%'} padding={5} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} bg={'red.200'}>
                <Flex w={'70%'} padding={5} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} bg={'red'}>
                    <Box w={'70%'}>
                    <Text fontSize={'32px'} color={'white'} fontWeight={'bold'} >Start</Text>
                    </Box>
                    <Flex marginLeft={150} bg={'whitesmoke'} w={"70%"} padding={5} flexDirection={'row'}
                        borderTop={'8px solid black'} borderRight={'8px solid black'} borderBottom={'8px solid black'}
                        borderEndRadius={"100px"}>
                        <Box width={"80%"} height={"100%"} >
                            <Text fontSize={25} >2020</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                            <Text fontWeight={'bold'}>09-08-2020</Text>
                        </Box>
                        <Box width={"20%"} height={"100%"}>
                            <Icon as={ImLocation} w={100} h={100} color='red.500' />
                        </Box>
                    </Flex>

                    <Flex bg={'whitesmoke'} w={"70%"} padding={5} flexDirection={'row'}
                        borderTop={'8px solid black'} borderLeft={'8px solid black'} borderBottom={'8px solid black'}
                        borderStartRadius={"100px"}>
                        <Box width={"20%"} height={"100%"}>
                            <Icon as={ImLocation} w={100} h={100} color='red.500' />
                        </Box>
                        <Box width={"80%"} height={"100%"} >
                            <Text fontSize={25} >2020</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                            <Text fontWeight={'bold'}>09-08-2020</Text>
                        </Box>

                    </Flex>

                    <Flex marginLeft={150} bg={'whitesmoke'} w={"70%"} padding={5} flexDirection={'row'}
                        borderTop={'8px solid black'} borderRight={'8px solid black'} borderBottom={'8px solid black'}
                        borderEndRadius={"100px"}>
                        <Box width={"80%"} height={"100%"} >
                            <Text fontSize={25} >2020</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                            <Text fontWeight={'bold'}>09-08-2020</Text>
                        </Box>
                        <Box width={"20%"} height={"100%"}>
                            <Icon as={ImLocation} w={100} h={100} color='red.500' />
                        </Box>
                    </Flex>

                    <Flex bg={'whitesmoke'} w={"70%"} padding={5} flexDirection={'row'}
                        borderTop={'8px solid black'} borderLeft={'8px solid black'} borderBottom={'8px solid black'}
                        borderStartRadius={"100px"}>
                        <Box width={"20%"} height={"100%"}>
                            <Icon as={ImLocation} w={100} h={100} color='red.500' />
                        </Box>
                        <Box width={"80%"} height={"100%"} >
                            <Text fontSize={25} >2020</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                            <Text fontWeight={'bold'}>09-08-2020</Text>
                        </Box>

                    </Flex>
                    <Box w={'70%'} textAlign={'end'} >
                    <Text  fontSize={'32px'} color={'white'} fontWeight={'bold'} >End</Text>
                    </Box>


                </Flex>
            </Flex>
        </Box>
    )
}
