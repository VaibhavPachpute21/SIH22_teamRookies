import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
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
      <Flex flexDirection={["column", "column", "row", "row"]} padding={2} >
        <Box w={['100%', '100%', '40%', '40%']}>
          <Image src={"https://grievance.ugc.ac.in/images/building.jpg"} width={'100%'} />
        </Box>
        <Box w={['100%', '100%', '60%', '60%']} textAlign="justify" px={[2, 2, 14, 14]}>
          <Text>
            Every organisation must evolve a system for redressal of public grievances arising from its work. The grievance redressal mechanism should form an integral part of the machinery of any organisation. No organisation can claim to be accountable,responsible and user-friendly unless it has established an efficient and effective grievance redressal system. In fact, the
            grievances redressal mechanism of an organisation is the gauge to measure its efficiency and effectiveness as it provides important feedback on the working of the organisation. It helps the organisation to deliver quality service to the public and other stakeholders in a hassle-free manner and in eliminating then cause of grievances.

          </Text>
          <Text>
            UGC has a more extensive public interface. It is especially crucial to establish a strong public grievances mechanism because we are the paramount head of the government of India's regulatory body for the coordinated development of education. This will allow you to act as a facilitator and regulator and will also increase the organisation's responsiveness to the needs of the public. As a result, we are the centralised assistance cell for UGC. Higher education institutions and individuals can file complaints and have them resolved within a set time frame.

          </Text>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
