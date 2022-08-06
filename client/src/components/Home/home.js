import React from "react";
import './Home.css';
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { Divider, Flex, Box, Image, Button, Center, GridItem, SimpleGrid, Heading, Grid, Text, Container, Icon } from '@chakra-ui/react'

export default function Home() {


  return (
    <>
        <div className="bg1 myDiv">
        </div>
        <Flex flexDirection={'row'} justifyContent={'space-around'} minH={{md:'100%',base:'92vh'}} >
          <Box paddingLeft={{md:'30vh',base:'10px' }} paddingTop={{md:'20vh',base:'10vh'}}>
          <Text fontSize='2xl' color="blue">Welcome to the</Text>
          <Text fontSize='3xl' color={'#F5822E'}>Centralized assistance cell</Text>
          <Text  fontSize='2xl' color="blue">of University Grants Commission.</Text>
          <Text fontSize='2xl' color='black' width={{md:'600px'}}>Resolution of all grievances, complaints, and malpractices brought by individuals,
             organisations, the administration,  governmental and  professional bodies.</Text>
             <Button className="mt-5" bg={'#F5822E'} color='white' >Register Grievance</Button>
          </Box>
          <Box maxH={'87vh'} display={{md:'block',base:'none'}} >
            <Image src="../../image/college-student.png" minH={['87vh']} height={"100%"} />
          </Box>
        </Flex>

        <Box minH={'50vh'} className="secTwo"
          backgroundImage={'../../image/backimg1.jpg'}
          backgroundPosition={'center center'}
          backgroundSize={'cover'} backgroundColor={'#141111D6'}
          backgroundBlendMode={'darken'}
        >
          <p>India, the country of the Vedas and the most magnificent fusion of diverse perspectives, has one of the most well-known educational systems in the world. The efficient and orderly operation of a system is essential for its growth. By maintaining effective communication across the system's many components, we can make sure of this. The UGC's Centralized Assistance Cell takes this responsiblity. Any complaints or grievances from the institution, students, professors, or employed personnel are appreciated.
          </p>
        </Box>

        <Box h={'100%'} padding={[5, 10, 50]}
          backgroundImage={'../../image/reception.png'}
          backgroundSize={'cover'} backgroundBlendMode={'darken'}
          backgroundPosition={'center center'}
          backgroundColor={'#130F26CF;'}>
          <Heading textAlign={'center'} color={'white'} >Goodbye to manual process and delayed Solutions!</Heading>
          <SimpleGrid
            padding={5}
            columns={[1, 1, 4]}
            row={1}
          >
            <GridItem
              w={"100%"} h={'100%'} padding={[1, 2, 10]}
            >
              <Box bg={'white'} height={'100%'}
                paddingBottom={5}
              >
                <Image src="../../image/clock.jpg" />
                <Heading padding={'1'}>QUICK REGISTRATION</Heading>
                <Text padding={'1'}>Register quickly with the required details and you have alreadry take the 1st step to get your grievances solved.</Text>
              </Box>
            </GridItem>

            <GridItem
              w={"100%"} h={'100%'} padding={[1, 2, 10]}
            >
              <Box bg={'white'} height={'100%'}
                paddingBottom={5}
              >
                <Image src="../../image/hacker.jpg" />
                <Heading padding={'1'}>DATA SECURITY</Heading>
                <Text padding={'1'}>User data is handled securely and the confidentiality of the data is maintained.</Text>
              </Box>
            </GridItem>

            <GridItem
              w={"100%"} h={'100%'} padding={[1, 2, 10]}
            >
              <Box bg={'white'} height={'100%'}
                paddingBottom={5}
              >
                <Image src="../../image/postit.jpg" />
                <Heading padding={'1'}>TRACK YOUR GRIEVANCE</Heading>
                <Text padding={'1'}>We provide customers a monitoring mechanism so they may monitor the status of grievance resolution in order to preserve the system's transparency.</Text>
              </Box>
            </GridItem>

            <GridItem
              w={"100%"} h={'100%'} padding={[1, 2, 10]}
            >
              <Box bg={'white'} height={'100%'}
                paddingBottom={5}
              >
                <Image src="../../image/books.jpg" />
                <Heading padding={'1'}>TIME BOUND SYSTEM</Heading>
                <Text padding={'1'}>Grievances are resolved quickly and methodically to guarantee little delay using a time bound automated system.
                </Text>
              </Box>
            </GridItem>

          </SimpleGrid>
        </Box>

        <Box minH={'80vh'} h={'100%'} backgroundImage={'../../image/computer.png'}
          backgroundColor={'#000000DE'} backgroundBlendMode={'darken'} backgroundSize={'cover'}
          textAlign={'start'}
          padding={10}
        >
          <Box textAlign={'left'} w={'100vw'} color={'white'} >
            <Heading color={'white'} paddingBottom={30}>Contact Us</Heading>
            <hr></hr>
            <Box padding={10} >
              <div className="mt-5">
                <span><Icon color={'white'} fontSize={30} as={GrLocation}></Icon>University Grants Commission (UGC) Bahadur Shah Zafar Marg,
                  New Delhi - 110002.</span>
              </div>
              <div class="mt-5">
              <span><Icon color={'white'} fontSize={30} as={FiPhone}></Icon> 011-23604446, 011-23604200</span>
              </div>
              <div class='mt-5'>
              <span><Icon color={'white'} fontSize={30} as={AiOutlineMail}></Icon> contact.ugc@nic.ac</span>
              </div>
            </Box>
          </Box>
        </Box>
    </>
  );
}
