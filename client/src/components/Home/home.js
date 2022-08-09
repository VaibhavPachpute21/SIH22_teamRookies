import React from "react";
import './Home.css';
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { Divider, Flex, Box, Image, Button, Center, GridItem, SimpleGrid, Heading, Grid, Text, Container, Icon } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {



    return (

        <Box w="100%" h="90vh">
            <Carousel
                onClickItem={()=>{}}
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
                        <Box bg="red.200">
                            Hello
                        </Box>
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

            <Flex w={'30%'} height={'60vh'} bg={'red.200'} alignSelf={"end"} position={'absolute'} marginTop={'-65vh'} right={10}>

            </Flex>
        </Box>

    );
}
