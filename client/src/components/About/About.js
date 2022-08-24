import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../navbar/Header";
import Footer from "../footer/Footer";

export default function About() {
  return (
    <Box w={"100%"} h={"100%"}>
      <Header />
      <Box w={"100%"} textAlign="center">
        <Heading>About Us</Heading>
      </Box>
      <Flex flexDirection={["column","column","row","row"]} padding={2} >
        <Box w={['100%','100%','40%','40%']}>
          <Image src={"https://grievance.ugc.ac.in/images/building.jpg"} width={'100%'} />
        </Box>
        <Box w={['100%','100%','60%','60%']} textAlign="justify" px={[2,2,14,14]}>
          <Text>
            The Online Student's Grievance Redressal System is a initiative
            taken by the University Grants Commission that facilitates students
            / complainants to lodge his or her grievance, send reminder and view
            status on action taken with regard to their grievance(s). The basic
            aim of the portal is to ensure transparency in admissions, prevent
            unfair practices in higher educational institutions and provide a
            mechanism for redressal of their grievances.
          </Text>
          <Text>
            The system also facilitates the universities to search and browse
            grievances lodged against their university and post action taken
            against the complaints on the portal as well as contact the
            complainant directly through e-mail, phone or by post.
          </Text>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
