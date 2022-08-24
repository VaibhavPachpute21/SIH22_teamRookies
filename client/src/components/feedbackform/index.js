import {
  Box,
  FormControl,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  Checkbox,
  useToast,
  FormLabel,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { connect } from "react-redux";
import * as actions from "../../actions/feedback_actions";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const FeedBackForm = (props) => {
  const [pieces, Setpieces] = useState(20);
  const { pathname } = useLocation();
  const [suggestions, Setsuggestions] = useState("");

  const toast = useToast()

  useEffect(() => {
    setTimeout(() => {
      Setpieces(0);
    }, 4000);
  }, []);

  const [relatedOfficers, setrelatedOfficers] = useState([]);
  const [regionalRelatedOfficers, setRegionalRelatedOfficers] = useState([]);

  const [firstsliderValue, setfirstSliderValue] = React.useState(5);
  const [fshowTooltip, fsetShowTooltip] = React.useState(false);

  const [secondsliderValue, setSecondSliderValue] = React.useState(5);
  const [sshowTooltip, ssetShowTooltip] = React.useState(false);

  const [thirdsliderValue, setThirdSliderValue] = React.useState(5);
  const [tshowTooltip, tsetShowToolTip] = React.useState(false);

  const [fourthsliderValue, setFourthSliderValue] = React.useState(5);
  const [foshowTooltip, fosetShowToolTip] = React.useState(false);

  const [fifthsliderValue, setfifthSliderValue] = React.useState(5);
  const [fishowTooltip, fisetShowToolTip] = React.useState(false);

  const [within15days, setwithin15days] = useState("");
  const [most_helpful_officer, setMosthelpful] = useState("");

  const [Error, SetError] = useState("");
  const navigate = useNavigate()

  const SendFeedback = async () => {
    let obj = {
      happy_with_response_time: firstsliderValue,
      reply_helpful_enough: secondsliderValue,
      experience: thirdsliderValue,
      notifications_on_time: fourthsliderValue,
      officer_behaviour_on_call: fifthsliderValue,
      response_within_15days: within15days,
      grievance_id: pathname?.split("/")[2],
      most_helpful_officer: most_helpful_officer,
      suggestions: suggestions,
    };
    try {
      await props.CreateFeedback(obj);
    } catch (error) {
      SetError(error.message);
    }
  };

  useEffect(() => {
    if (pathname) {
      try {
        props.GetHelpfulOfficers(pathname?.split("/")[2]);
      } catch (error) {
        SetError(error.message);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (props.data) {
      const alias = props.data?.feedbackData;
      if (alias?.officers?.length > 0) {
        setrelatedOfficers(alias?.officers);
      }
      if (alias?.regional?.length > 0) {
        setRegionalRelatedOfficers(alias?.regional);
      }
    }
  }, [props.data]);

  useEffect(() => {
    if (props.data) {
      const alias = props.data?.feedbackData;
      
      if(alias?.feedback){
        let success = alias?.success
        console.log(success)
        if (success) {
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='green.500'>
                Thank you for the feedback!
              </Box>
            ),
          })
          navigate('/')
        }
        else {
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='red.500'>
                {Error}
              </Box>
            ),
          })
        }
      }
    }
  }, [props.data]);

  return (
    <Box w="100vw" h="max-content" overflowX={"hidden"}>
      <Confetti
        gravity={0.7}
        width={window.innerWidth || 300}
        height={window.innerHeight || 200}
        initialVelocityY={300}
        numberOfPieces={pieces}
      />

      <VStack
        overflowX={"hidden"}
        w="100%"
        h="100%"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <form
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <FormControl w="85%" h="100%">
            <SimpleGrid py={5} spacing={10} columns={1}>
              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    How happy are you with the response time?
                  </Heading>
                  <Slider
                    id="slider"
                    defaultValue={1}
                    min={1}
                    max={5}
                    colorScheme="teal"
                    onChange={(v) => setfirstSliderValue(v)}
                    onMouseEnter={() => fsetShowTooltip(true)}
                    onMouseLeave={() => fsetShowTooltip(false)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={fshowTooltip}
                      label={`${firstsliderValue}`}
                    >
                      <SliderThumb />
                    </Tooltip>
                  </Slider>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    How helpful enough is the reply?
                  </Heading>
                  <Slider
                    id="slider"
                    defaultValue={1}
                    min={1}
                    max={5}
                    colorScheme="teal"
                    onChange={(v) => setSecondSliderValue(v)}
                    onMouseEnter={() => ssetShowTooltip(true)}
                    onMouseLeave={() => ssetShowTooltip(false)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={sshowTooltip}
                      label={`${secondsliderValue}`}
                    >
                      <SliderThumb />
                    </Tooltip>
                  </Slider>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    Rate the overall experience out of 5.
                  </Heading>
                  <Slider
                    id="slider"
                    defaultValue={1}
                    min={1}
                    max={5}
                    colorScheme="teal"
                    onChange={(v) => setThirdSliderValue(v)}
                    onMouseEnter={() => tsetShowToolTip(true)}
                    onMouseLeave={() => tsetShowToolTip(false)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={tshowTooltip}
                      label={`${thirdsliderValue}`}
                    >
                      <SliderThumb />
                    </Tooltip>
                  </Slider>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    How many times were the notifications on time out of 5?
                  </Heading>
                  <Slider
                    id="slider"
                    defaultValue={1}
                    min={1}
                    max={5}
                    colorScheme="teal"
                    onChange={(v) => setFourthSliderValue(v)}
                    onMouseEnter={() => fosetShowToolTip(true)}
                    onMouseLeave={() => fosetShowToolTip(false)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={foshowTooltip}
                      label={`${fourthsliderValue}`}
                    >
                      <SliderThumb />
                    </Tooltip>
                  </Slider>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    Rate behaviour of officer on call?
                  </Heading>
                  <Slider
                    id="slider"
                    defaultValue={1}
                    min={1}
                    max={5}
                    colorScheme="teal"
                    onChange={(v) => setfifthSliderValue(v)}
                    onMouseEnter={() => fisetShowToolTip(true)}
                    onMouseLeave={() => fisetShowToolTip(false)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={fishowTooltip}
                      label={`${fifthsliderValue}`}
                    >
                      <SliderThumb />
                    </Tooltip>
                  </Slider>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    Was the response within 15 days?
                  </Heading>
                  <HStack>
                    <Box>
                      <FormLabel>Yes</FormLabel>
                      <Checkbox onChange={() => setwithin15days("Yes")} />
                    </Box>

                    <Box>
                      <FormLabel>No</FormLabel>
                      <Checkbox onChange={() => setwithin15days("No")} />
                    </Box>
                  </HStack>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>
                    Which officer was the most helpful?
                  </Heading>
                  <HStack>
                    {relatedOfficers && relatedOfficers.length > 0
                      ? relatedOfficers?.map((item, i) =>
                          item !== null ? (
                            <VStack key={i} w="100%">
                              <Checkbox
                                fontWeight={600}
                                w="100%"
                                h="20%"
                                onChange={() => {
                                  setMosthelpful(item._id);
                                }}
                              >
                                {item?.fullname}
                              </Checkbox>
                              <Box>
                                <Text>{item?.role} officer</Text>
                              </Box>
                            </VStack>
                          ) : null
                        )
                      : "No related officers"}
                    {regionalRelatedOfficers &&
                    regionalRelatedOfficers.length > 0
                      ? regionalRelatedOfficers?.map((item, i) =>
                          item !== null ? (
                            <VStack key={i} w="100%">
                              <Checkbox
                                fontWeight={600}
                                w="100%"
                                h="20%"
                                onChange={() => {
                                  setMosthelpful(item._id);
                                }}
                              >
                                {item?.fullname}
                              </Checkbox>
                              <Box>
                                <Text>
                                  {item?.role} {item?.region} officer
                                </Text>
                              </Box>
                            </VStack>
                          ) : null
                        )
                      : "No related officers"}
                  </HStack>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack alignItems={"flex-start"} spacing={3}>
                  <Heading size={"md"}>Any suggestions?</Heading>

                  <Textarea
                    height={300}
                    placeholder="Constructive feedback is required..."
                    value={suggestions}
                    onChange={(e) => Setsuggestions(e.target.value)}
                  />
                </VStack>
              </GridItem>

              <GridItem>
                <Button
                  onClick={() => SendFeedback()}
                  color={"white"}
                  bg="#5247cd"
                >
                  Submit
                </Button>
              </GridItem>
            </SimpleGrid>
          </FormControl>
        </form>
      </VStack>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.feedback,
  };
};

export default connect(mapStateToProps, actions)(FeedBackForm);
