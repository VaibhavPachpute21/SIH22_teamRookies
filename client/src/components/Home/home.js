import React, { useState } from "react";
import './Home.css';
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { Divider, Flex, Box, Image, Button, Center, GridItem, SimpleGrid, Heading, Grid, Text, Container, Icon, VStack, FormControl, Input, HStack } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {

    const [SlideIndex, setSlideIndex] = useState(0)


    const cards = [
        {
            font:"font1",
            title:"title1",
            desc:"text"
        },
        {
            font:"font1",
            title:"title1",
            desc:"text"
        },
        {
            font:"font1",
            title:"title1",
            desc:"text"
        },
        {
            font:"font1",
            title:"title1",
            desc:"text"
        }
    ]


    return (

        <Box w="100%" overflowX={'hidden'} minH="140vh">
            <Carousel
                onChange={(i) => { setSlideIndex(i) }}
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                <div style={{ height: "70vh" }}>
                    <img
                        style={{ "background-size": 'cover', "background-position": "center", "height": "100%", "width": "100%" }}
                        src="./image/s1.jpg" />
                    {
                        SlideIndex == 0 ? (
                            <Flex
                                borderTop={'6px solid #5A4FCF'}

                                w={'30%'} height={'40vh'} bg={'white'}
                                borderRadius={'xl'}
                                alignSelf={"end"} position={'absolute'} marginTop={'-55vh'} right={10}>
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

            <HStack w="100%" h="90vh" >
                <Box
                    w="70%" h="100%">
                    <VStack spacing={5} py={9} w="100%" h="100%">
                        {
                           cards?.map((item,i)=>(
                            <VStack
                            borderTop={'4px solid #5A4FCF'}
                            borderRadius={'2xl'}
                            boxShadow={'xl'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            bg="white"
                            w="90%" 
                            h="50%">
                                <Box w="100%" h="30%">
                                    <HStack w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                        <Box w="20%" h="100%">
                                            Font
                                        </Box>

                                        <Box w="80%" h="100%">
                                            Title
                                        </Box>
                                    </HStack>
                                </Box>
                                <Box w="100%" h="50%">Text</Box>
                        </VStack>
                          )) 
                        }
                    </VStack>
                </Box>

                <Box w="30%" h="100%">
                    Hello
                </Box>
            </HStack>




            <Flex w={'30%'} height={'60vh'} bg={'red.200'} alignSelf={"end"} position={'absolute'} marginTop={'-65vh'} right={10}>

            </Flex>

        </Box>

    );
}