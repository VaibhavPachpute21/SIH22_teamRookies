import React from 'react'
import { Box, Flex, Text, Heading, Td, Tr, Table, Thead, Th, Tbody, TableContainer, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function InstituteProfile() {



  return (
    <Flex h={'100%'} w={"100%"} alignContent={'center'} justifyContent={'center'} padding={2}>
      <Flex w={"90%"} flexDirection={"column"} bg="white" padding={10}>
        <Flex w={"100%"} flexDirection='column'>
          <Box w="100%">

            <Heading size={'md'} fontWeight={'semibold'} bg={'purple.400'} padding={2} color={'white'} border={'1px solid black'} >Institute information</Heading>

            <Box w="100%" padding={2} border={'1px'}>
              <Text fontSize={'18px'}>Institute Name - <strong style={{ fontWeight: "600" }}>Universal College of Engineering,Kaman Dist. Palghar</strong></Text>
            </Box>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>Institute Code - <strong style={{ fontWeight: "600" }}>3460</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>Institute Region - <strong style={{ fontWeight: "600" }}>Mumbai</strong></Text>
              </Box>
            </Flex>

            <Box w="100%" padding={2} border={'1px'}>
              <Text fontSize={'18px'}>Address - <strong style={{ fontWeight: "600" }}>Kaman Bhiwandi Road, S.N. 146(Part), Kaman, Vasai</strong></Text>
            </Box>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>District - <strong style={{ fontWeight: "600" }}>Palghar</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>Taluka - <strong style={{ fontWeight: "600" }}>Vasai</strong></Text>
              </Box>
            </Flex>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>Pincode - <strong style={{ fontWeight: "600" }}>401208</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>STD Code - <strong style={{ fontWeight: "600" }}>0250</strong></Text>
              </Box>
            </Flex>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>Year of Establishment - <strong style={{ fontWeight: "600" }}>2012</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>Web Address - <strong style={{ fontWeight: "600" }}>www.ucoe.edu.in</strong></Text>
              </Box>
            </Flex>

            <Box w="100%" padding={2} border={'1px'}>
              <Text fontSize={'18px'}>E-Mail Address - <strong style={{ fontWeight: "600" }}>moses.lopes@universal.edu.in</strong></Text>
            </Box>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>Login ID - <strong style={{ fontWeight: "600" }}>ucoeadmin@ugc.ac.in</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>Password -<Input w={"25%"} type="password" value={"123456"} /> </Text>
              </Box>
            </Flex>

          </Box>

          <Box w="100%" pt='5'>

            <Heading size={'md'} fontWeight={'semibold'} bg={'purple.400'} padding={2}
              color={'white'} border={'1px solid black'} >Contact Information (Director / Principal)</Heading>

            <Box w="100%" padding={2} border={'1px'}>
              <Text fontSize={'18px'}>Name - <strong style={{ fontWeight: "600" }}>Dr. Jitendra B Patil</strong></Text>
            </Box>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>Office Phone No. - <strong style={{ fontWeight: "600" }}>28817189</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>Personal Phone No. - <strong style={{ fontWeight: "600" }}>8407979167</strong></Text>
              </Box>
            </Flex>
          </Box>

          <Box w="100%" pt='5'>

            <Heading size={'md'} fontWeight={'semibold'} bg={'purple.400'} padding={2}
              color={'white'} border={'1px solid black'} >Status Information</Heading>

            <Flex w="100%">
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'} w={"50%"}>Status - <strong style={{ fontWeight: "600" }}>Un-Aided</strong></Text>
              </Box>
              <Box w="50%" padding={2} border={'1px'}>
                <Text fontSize={'18px'}>Autonomy Status - <strong style={{ fontWeight: "600" }}>Non-Autonomous</strong></Text>
              </Box>
            </Flex>

            <Box w="100%" padding={2} border={'1px'}>
              <Text fontSize={'18px'}>Minority Status - <strong style={{ fontWeight: "600" }}>Linguistic Minority - Gujarathi</strong></Text>
            </Box>

          </Box>

          <Box w="100%" pt='5'>

            <Heading size={'md'} fontWeight={'semibold'} bg={'purple.400'} padding={2}
              color={'white'} border={'1px solid black'} >AICTE Approved Bachelor of Engineering (B. E.) Affiliated to Mumbai University</Heading>

            <Box border={'1px solid black'}>
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <Thead>
                  <Tr>
                    <Th>Sr.no</Th>
                    <Th>Course Name</Th>
                    <Th>Start Year</Th>
                    <Th>Intake</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Civil Engineering</Td>
                    <Td>2012</Td>
                    <Td>60</Td>
                  </Tr>

                  <Tr>
                    <Td>2</Td>
                    <Td>Computer Engineering</Td>
                    <Td>2012</Td>
                    <Td>120</Td>
                  </Tr>

                  <Tr>
                    <Td>3</Td>
                    <Td>Information Technology</Td>
                    <Td>2012</Td>
                    <Td>60</Td>
                  </Tr>

                  <Tr>
                    <Td>4</Td>
                    <Td>Artificial Intelligence and Machine Learning</Td>
                    <Td>2020</Td>
                    <Td>120</Td>
                  </Tr>

                  <Tr>
                    <Td>5</Td>
                    <Td>Data Engineering</Td>
                    <Td>2020</Td>
                    <Td>60</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            </Box>
          </Box>

        </Flex>
      </Flex>
    </Flex>
  )
}
