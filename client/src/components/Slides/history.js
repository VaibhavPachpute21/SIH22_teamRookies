import {
  Box,
  VStack,
  HStack,
  Flex,
  Text,
  Checkbox,
  IconButton,
  Avatar,
  Heading,
  Tag,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import cookie from "js-cookie";
import "./styles/drawer.css";
import * as actions from "../../actions/user_actions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const DashboardHistory = (props) => {
  const Filters = [
    "All",
    "Institute",
    "Student",
    "Employee",
    "Solved",
    "Unsolved",
  ];

  const [Error, SetError] = useState("");

  const auth = cookie.get("token");
  const [User, SetUser] = useState({});

  const [forwards, setForwards] = useState([]);
  const [currentGrievances, setcurrentGrievances] = useState([]);
  const [instituteGrievances, setinstituteGrievances] = useState([]);

  useEffect(() => {
    SetUser(props.User);
  }, [props.User]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyGrievances = async () => {
      try {
        if (User.institute_name && User.role === "0I") {
          await props.GetMyGrievances(User._id, User.role, User.institute_name);
        } else {
          await props.GetMyGrievances(User._id, User.role, "nan");
        }
      } catch (error) {
        SetError(error.message);
      }
    };
    fetchMyGrievances();
  }, [User._id, User.role, props.GetMyGrievances]);

  useEffect(() => {
    if (props.data) {
      let alias = props.data;
      console.log(alias);
      if (alias.userData) {
        let d = alias.userData;
        if (d.forwards) {
          setForwards(d.forwards);
        }
        if (d.myGrievances) {
          setcurrentGrievances(d.myGrievances);
        }
        if (d.grievances) {
          setinstituteGrievances(d.grievances);
        }
      }
    }
  }, [props.data]);

  return (
    <Box w="100%" h="100%">
      <Flex w="100%" h="100%" flexDirection={"column"}>
        <Box w="100%" h="10%">
          <Flex
            w="100%"
            h="100%"
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
          >
            <Select w="20%">
              <option>All</option>
              <option>Solved</option>
              <option>Unsolved</option>
              <option>Latest</option>
            </Select>
          </Flex>
        </Box>

        <Box w="100%" h="90%" overflow={"scroll"}>
          <Text fontWeight={600} fontSize={"xl"} py={3}>
            {forwards && forwards.length > 0
              ? "Some grievances you've missed"
              : null}
            {instituteGrievances && instituteGrievances.length > 0
              ? "Grievances related to your institute"
              : "No grievances"}
          </Text>
          <Flex w="100%" minH={"70vh"} spacing={5} flexDirection={"column"}>
            {forwards && forwards.length > 0
              ? forwards?.map((item, i) => (
                  <VStack
                    spacing={8}
                    boxShadow={"md"}
                    borderTop={"3px solid #5A4FCF"}
                    key={i}
                    w="100%"
                    h="15vh"
                  >
                    <HStack
                      marginTop={2}
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                      w="100%"
                      h="20%"
                    >
                      <HStack w="40%" h="100%">
                        <Text fontWeight={600}>Grievance id</Text>
                        <Text>{item?.short_id}</Text>
                      </HStack>

                      <HStack w="15%" h="100%" alignItems={"center"}>
                        <Button
                          Py={5}
                          onClick={() =>
                            navigate(`/TrackGrievance/${item?.grievance_id}`)
                          }
                          color={"white"}
                          bg="#5A4FCF"
                          h="100%"
                        >
                          Check status
                        </Button>
                      </HStack>
                    </HStack>

                    <HStack w="100%" h="5%">
                      <HStack w="40%" h="100%">
                        <Text fontWeight={600}>Forwarded to you on</Text>
                        <Text>{item?.updatedAt.split("T")[0]}</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                ))
              : null}

            {currentGrievances?.map((item, i) => (
              <VStack
                spacing={8}
                boxShadow={"md"}
                borderTop={"3px solid #5A4FCF"}
                key={i}
                w="100%"
                h="max-content"
              >
                <HStack
                  marginTop={2}
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  w="100%"
                  h="20%"
                >
                  <HStack w="40%" h="100%">
                    <Text fontWeight={600}>Grievance id</Text>
                    <Text>{item?.short_id}</Text>
                  </HStack>

                  <HStack w="15%" h="100%" alignItems={"center"}>
                    <Button
                      py={5}
                      color={"white"}
                      onClick={() => navigate(`/TrackGrievance/${item?._id}`)}
                      bg="#5A4FCF"
                      h="100%"
                    >
                      Check status
                    </Button>
                  </HStack>
                </HStack>

                <HStack w="100%" h="5%">
                  <HStack w="40%" h="100%">
                    <Text fontWeight={600}>{15 - item?.day_counter}</Text>
                    <Text>days to forward</Text>
                  </HStack>
                </HStack>

                <VStack
                  py={2}
                  alignItems={"flex-start"}
                  w="100%"
                  h="max-content"
                >
                  <Text fontWeight={600}>{item?.grievance_title}</Text>

                  <Text w="100%" h="max-content">
                    {item?.grievance_description}
                  </Text>
                </VStack>
              </VStack>
            ))}

            {instituteGrievances?.map((item, i) => (
              <Flex
                flexDirection={"column"}
                spacing={8}
                boxShadow={"md"}
                padding={2}
                borderTop={"3px solid #5A4FCF"}
                key={i}
                w="100%"
                h="max-content"
              >
                <Flex
                  flexDirection={["column", "column", "row", "row"]}
                  marginTop={2}
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  w="100%"
                  h="20%"
                >
                  <Box w={["100%", "100%", "40%", "40%"]} h="100%">
                    <Text fontWeight={600}>
                      <strong>Grievance id</strong>
                    </Text>
                    <Text>{item?.short_id}</Text>
                    <VStack
                      py={2}
                      alignItems={"flex-start"}
                      w="100%"
                      h="max-content"
                    >
                      <Text fontWeight={600}>
                        <strong>Title:-</strong>
                        {item?.grievance_title}
                      </Text>

                      <Text w="100%" h="max-content">
                        <strong>Description:-</strong>{" "}
                        {item?.grievance_description}
                      </Text>
                    </VStack>
                    <HStack w="100%" h="5%">
                      <HStack w={["100%", "100%", "40%", "40%"]} h="100%">
                        <Text fontWeight={600}>{15 - item?.day_counter}</Text>
                        <Text>days to forward</Text>
                      </HStack>
                    </HStack>
                  </Box>

                  <Box w="15%" h="100%" alignItems={"center"}>
                    <Button
                      py={2}
                      onClick={() => navigate(`/TrackGrievance/${item?._id}`)}
                      color={"white"}
                      bg="#5A4FCF"
                      h="100%"
                    >
                      Check status
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.users,
  };
};

export default connect(mapStateToProps, actions)(DashboardHistory);
