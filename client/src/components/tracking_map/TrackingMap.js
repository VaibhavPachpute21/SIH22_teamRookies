import React from 'react'
import { Box, Divider, Flex, Heading, VStack, Text, StyledStepper, Icon } from '@chakra-ui/react'
import { ImLocation } from 'react-icons/im'
import './TrackingMap.css'

const timeline = [
    {
        title: "2020",
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "09-08-2020"
    },
    {
        title: "2020",
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "09-08-2020"
    },
    {
        title: "2020",
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "09-08-2020"
    },
    {
        title: "2020",
        remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "09-08-2020"
    } 
]


export default function TrackingMap() {
    return (
        <Box h={"100%"} w={"100vw"} padding={10} >
            <Box>
                <Heading>Timeline of Grievance</Heading>
            </Box>

            <Flex w={'100%'} padding={5} flexDirection={'column'} justifyContent={'center'}
                alignContent={'center'} alignItems={'center'}>
                <Flex w={'70%'} padding={5} flexDirection={'column'} justifyContent={'center'}
                    alignContent={'center'} alignItems={'center'}>
                    <Box w={'60%'}>
                        <Text fontSize={'32px'} fontWeight={'bold'} >Start</Text>
                    </Box>
                    {timeline.map((item, i) => {
                        return i % 2 == 0 ? <Flex marginLeft={150} bg={'whitesmoke'} w={"80%"} padding={5} flexDirection={'row'}
                            borderTop={'8px solid black'} borderRight={'8px solid black'} borderBottom={'8px solid black'}
                            borderEndRadius={"100px"} >
                            <Box width={"80%"} height={"100%"} >
                                <Text fontSize={25} >{item.title}</Text>
                                <Text>{item.remark}</Text>
                                <Text fontWeight={'bold'}>{item.date}</Text>
                            </Box>
                            <Box width={"20%"} height={"100%"}>
                                <Icon as={ImLocation} w={100} h={100} color='red.500' />
                            </Box>
                        </Flex> : 
                        <Flex bg={'whitesmoke'} w={"80%"} padding={5} flexDirection={'row'}
                            borderTop={'8px solid black'} borderLeft={'8px solid black'} borderBottom={'8px solid black'}
                            borderStartRadius={"100px"}>
                            <Box width={"20%"} height={"100%"}>
                                <Icon as={ImLocation} w={100} h={100} color='red.500' />
                            </Box>
                            <Box width={"80%"} height={"100%"} >
                                <Text fontSize={25} >{item.title}</Text>
                                <Text>{item.remark}</Text>
                                <Text fontWeight={'bold'}>{item.date}</Text>
                            </Box>

                        </Flex>
                        
                    })}

                    {/* <Flex marginLeft={150} bg={'whitesmoke'} w={"70%"} padding={5} flexDirection={'row'}
                        borderTop={'8px solid black'} borderRight={'8px solid black'} borderBottom={'8px solid black'}
                        borderEndRadius={"100px"} >
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

                    </Flex> */}
                    <Box w={'70%'} textAlign={timeline.length %2 ==0 ?'end':'start'} >
                        <Text fontSize={'32px'} fontWeight={'bold'} >End</Text>
                    </Box>

                    

                </Flex>
            </Flex>
        </Box>
    )
}
