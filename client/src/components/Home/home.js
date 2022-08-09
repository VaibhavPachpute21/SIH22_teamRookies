import React from "react";
import './Home.css';
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { Divider, Flex, Box, Image, Button, Center, GridItem, SimpleGrid, Heading, Grid, Text, Container, Icon } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Home() {

  

  return (
    
        <Box w="100%" h="90vh">
          <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          >
                <div style={{height:"70vh"}}>
                    <img
                    style={{"background-size":'cover',"background-position":"center","height":"100%","width":"100%"}}
                    src="./image/backimg1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{height:"50vh"}}>
                    <img src="./image/bg1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{height:"50vh"}}>
                    <img src="./image/hacker.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </Box>
   
  );
}
