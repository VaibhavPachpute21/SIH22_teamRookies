import {
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  IconButton,
  Flex,
  Tag,
  Text,
  Avatar,
} from "@chakra-ui/react";

import { MdPendingActions, MdOutlineMoreVert } from "react-icons/md";
import ChartComponent from "../Chart/index";
import { BsChat } from "react-icons/bs";
import { useEffect, useState } from "react";

const AdminHome = (props) => {
  const [dash, setDash] = useState([]);

  useEffect(() => {
    if (props.dashData) {
      let data = [];
      data.push(props?.dashData?.pendingGrievances);
      data.push(props?.dashData?.newGrievacestoday);
      data.push(props?.dashData?.totalOfficers);
      data.push(props?.dashData?.totalUniversity);
      setDash(data);
    }
  }, [props.dashData]);

  const fakeData = [
    {
      number: 5241,
      text: "Your pending grievances.",
    },
    {
      number: 341,
      text: "New Grievances today!",
    },
    {
      number: 5,
      text: "Total officers.",
    },
    {
      number: 7,
      text: "Total universities",
    },
  ];

  const RecentlyContacted = [
    {
      username: "Abhinav",
      email: "abhinav@gmail.com",
    },
    {
      username: "Saurabh",
      email: "saurabh@gmail.com",
    },
    {
      username: "Shahima",
      email: "shahima@gmail.com",
    },
    {
      username: "Jaimit",
      email: "Jaimit@gmail.com",
    },
  ];

  return (
    <Flex
      spacing={10}
      w="100%"
      h="max-content"
      overflowX={"hidden"}
      flexDirection={["column", "column", "column", "column"]}
    >
      <Flex
        flexDirection={["column"]}
        paddingLeft={8}
        w="100%"
        h={["100%", "100%", "10%", "10%"]}
      >
        <Heading fontFamily={"monospace"}>
          Good Morning,{props.userData.fullname}!
        </Heading>
      </Flex>
      {props.userData.role == "3" ?null:<Flex
        flexDirection={["column", "column", "row", "row"]}
        paddingLeft={8}
        spacing={10}
        w="100%"
        h={["100%", "100%", "100%", "30%"]}
      >
        {fakeData?.map((item, i) => (
          <Flex
            flexDirection={["column"]}
            key={i}
            w={["100%", "100%", "100%", "25%"]}
            h="100%"
            boxShadow="xl"
            padding={[2, 2, 0, 0]}
            borderRadius={20}
          >
            <HStack
              w="100%"
              h={["30%", "30%", "20%", "20%"]}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <HStack
                w="100%"
                h="100%"
                alignItems={"flex-start"}
                justifyContent={"space-around"}
              >
                <Icon color={"#5A4FCF"} w={20} h={20}>
                  <MdPendingActions />
                </Icon>

                <IconButton
                  color={"#5A4FCF"}
                  fontSize={"3xl"}
                  _hover={{}}
                  icon={<MdOutlineMoreVert />}
                  background={"none"}
                ></IconButton>
              </HStack>
            </HStack>

            <VStack w="100%" h={["100%", "100%", "100%", "80%"]}>
              <Box p={5} w="100%" h={["100%", "100%", "100%", "50%"]}>
                <Heading size={"xl"}>{dash[i]}</Heading>
              </Box>

              <Box p={0} w="80%" h={["100%", "100%", "100%", "50%"]}>
                <Text fontSize={"md"} fontWeight={500}>
                  {item.text}
                </Text>
              </Box>
            </VStack>
          </Flex>
        ))}
      </Flex>}

      {props.userData.role == "3" ? <iframe
        title="Grievances Portal - Page 1"
        width="100%"
        height="750px"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTE4NDk5OWEtM2IxOS00ODUxLWJiM2ItOWMyYmRhYTIzYmM0IiwidCI6ImUzNzJhNzI2LTNiYzMtNDdiOS05MWU0LWE0M2E5ZmU2YzQ2YyJ9" frameborder="0"
        allowFullScreen="true"
      ></iframe> :

        <Flex flexDirection={['column', 'column', 'row', 'row']}
          paddingLeft={8}
          marginTop={5}
          w="100%" h={["100%", "100%", "100%", "100%"]}>

          <Flex w={["100%", "100%", "100%", "20%"]} h="100%" marginTop={["65vh", 5, 5, 5]}
            flexDirection={['column', 'column', 'column', 'column']}
          >
            <Box
              borderRadius={20}
              boxShadow={'xl'}
              w="100%" h={["40%"]}>
              <VStack w="100%" h="100%">
                <Box w="100%" h="30%" px={10} py={10}>
                  <Text w="100%" h="100%"
                    fontFamily={'monospace'}
                    fontWeight={700} fontSize={'xl'}>
                    New users
                  </Text>
                </Box>
                <HStack w="100%" h="30%" px={10}>
                  <Text w="50%" h="100%"
                    fontFamily={'monospace'}
                    fontWeight={700} fontSize={'5xl'}>
                    43
                  </Text>


                  <Tag

                    w="50%" h="50%"
                    background={'green.100'}
                    fontWeight={500}
                    color={'green.700'}
                  >+4.3%</Tag>


                </HStack>
              </VStack>
            </Box>
            <Box
              borderRadius={20}
              boxShadow={'xl'}
              w="100%" h="40%">
              <VStack w="100%" h="100%">
                <Box w="100%" h="30%" px={10} py={10}>
                  <Text w="100%" h="100%"
                    fontFamily={'monospace'}
                    fontWeight={700} fontSize={'xl'}>
                    Missed grievances
                  </Text>
                </Box>
                <HStack w="100%" h="30%" px={10}>
                  <Text w="50%" h="100%"
                    fontFamily={'monospace'}

                    fontWeight={700} fontSize={'5xl'}>
                    21
                  </Text>


                  <Tag
                    w="50%" h="50%"
                    background={'red.100'}
                    fontWeight={500}
                    color={'red.700'}
                  >-5.2%</Tag>

                </HStack>
              </VStack>
            </Box>

          </Flex>

          <Flex w={["100%", "100%", "80%", "80%"]} h="100%" flexDirection={['column', 'column', 'row', 'row']} >
            <VStack w={["100%", "100%", "60%", "60%"]}>
              <Text px={5} w="100%" h="100%"
                fontFamily={'monospace'}
                fontWeight={700} fontSize={'xl'}>
                Recently contacted
              </Text>
              <ChartComponent />
            </VStack>

            <Box w={["100%", "100%", "40%", "40%"]} h="100%" paddingBottom={5}>
              <VStack w="100%" h="85%">
                <Text w="100%" h="100%"
                  fontFamily={'monospace'}
                  fontWeight={700} fontSize={'xl'}>
                  Recently contacted
                </Text>
                {
                  RecentlyContacted?.map((item, i) => (
                    <Box key={i} w="100%"
                      borderRadius={20}
                      boxShadow={'md'}
                      h={["100%", "100%", "25%", "25%"]}>
                      <HStack w="100%" h="100%">
                        <Box px={[2, 2, 6, 6]} py={[4, 4, 6, 8]} w={["100%", "100%", "20%", "20%"]} h="100%">
                          <Avatar

                            size={'sm'} />
                        </Box>
                        <VStack spacing={0} p={[0, 0, 4, 4]} w="60%" h="100%">
                          <Box w="100%" h="50%">
                            <Text
                              fontWeight={600}
                              fontSize={['md', 'xl', 'xl']}
                            >{item.username}</Text>
                          </Box>
                          <Box w="100%" h="30%">
                            <Text>{item.email}</Text>
                          </Box>
                        </VStack>

                        <IconButton
                          size={'sm'}
                          background={'#5A4FCF'}
                          color="white"
                          icon={<BsChat />}
                          w="10%">

                        </IconButton>
                      </HStack>
                    </Box>
                  ))
                }
              </VStack>
            </Box>
          </Flex>
        </Flex>}
    </Flex>
  );
};

export default AdminHome;
