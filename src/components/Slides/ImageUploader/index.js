import React, { useEffect, useState } from "react";
import { Box, Flex, HStack, Icon, VStack, Select, Text, Button, Image, SimpleGrid, GridItem, FormLabel, Spinner, FormControl, Input, Grid } from "@chakra-ui/react";
import { AiOutlineCloud } from 'react-icons/ai'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ControlledEditor from '../editor'
import './cloud.css'
import { Step, Steps, useSteps } from 'chakra-ui-steps';



const content1 = (
    <form className="der-form">
        <FormControl
        py={5}
             w="100%">
            <SimpleGrid
                w="100%"
                spacing={5}
                columns={1} rows={2}>
                <GridItem>
                    <FormLabel
                        color={'black'}
                    >Grievance title</FormLabel>
                    <Input
                    placeholder="Title"
                    type="text" />
                </GridItem>


                <GridItem>
                    <FormLabel 
                    
                    color="black">Nature of query</FormLabel>
                    <Select color={'black'}>
                        <option style={{ color: "black" }}>Eligibility Criteria</option>
                        <option style={{ color: "black" }}>Scholarship Disbursement</option>
                        <option style={{ color: "black" }}>Fresh Application</option>
                        <option style={{ color: "black" }}>Renewal Application</option>
                        <option style={{ color: "black" }}>Name of institute {"&"} course on NSP</option>
                        <option style={{ color: "black" }}>Scholarship scheme not visible on NSP</option>
                        <option style={{ color: "black" }}>Document</option>
                        <option style={{ color: "black" }}>Merit list</option>
                        <option style={{ color: "black" }}>Bank account</option>
                        <option style={{ color: "black" }}>Any technical queries</option>
                        <option style={{ color: "black" }}>Other</option>
                    </Select>
                </GridItem>

                <GridItem>
                    <FormLabel color="black">Name of Principal</FormLabel>
                    <Input placeholder="Name of principal" type="text"/>
                </GridItem>

                <GridItem>
                    <FormLabel color="black">Module Name</FormLabel>
                    <Input placeholder="Enter module name" type="text"/>
                </GridItem>


            </SimpleGrid>
        </FormControl>
    </form>
);

const content2 = (
    <Box px={10} w="100%"  h="100%" >
        <ControlledEditor/>
    </Box>
)

const steps = [
    content1,
    content2
];

const ImageUpload = () => {

    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });


    useEffect(()=>{
        if(activeStep == 1) {
            console.log(activeStep)
        }
    },[activeStep])

    const inputRef = React.useRef(null)
    const [Files, SetFiles] = useState([])

    const [hiddenForm, sethiddenForm] = useState("form-hidden")



    const [spinner, setSpinner] = useState(false)

    const ActivateInput = (e) => {
        inputRef.current.click()
    }


    const UploadFile = (e) => {
        let cloneArray = [...Files]
        e.target.files[0].src = URL.createObjectURL(e.target.files[0])
        cloneArray.push(e.target.files[0])
        SetFiles(cloneArray)

    }

    useEffect(() => {
        if (Files.length > 0) {
            sethiddenForm("show-form")
        }
    }, [Files.length])



    return (
        <Box w="100%" h="100%">
            <Flex w="100%" h="100%" flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Box
                    className={hiddenForm}
                    borderRadius={'2xl'}
                    boxShadow={'dark-lg'}
                    w={hiddenForm === "form-hidden" ? "40%" : "80%"} h="80%" bg={hiddenForm === "show-form" ? "white" : "#5A4FCF"}>
                    <HStack
                        borderRadius={'2xl'}
                        w="100%" h="100%">
                        <Box
                            borderRadius={'2xl'}
                            border={hiddenForm === "show-form" ? "0px" : "5px solid #5A4FCF"}
                            bg="white"
                            display={hiddenForm === "full-form" ? "none":"flex"}
                            w={hiddenForm === "show-form" ? "45%" : "100%"} h="100%">
                            {
                                Files.length > 0 ? (
                                    Files?.map((item, i) => (
                                        <Flex
                                            key={i}
                                            bg={'#3c31b4'}
                                            w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>

                                            <Box
                                                py={5}
                                                w="60%" h="80%">
                                                <Image
                                                    boxShadow={'xl'}
                                                    src={item.src}
                                                />

                                            </Box>

                                            <Box>

                                            </Box>
                                        </Flex>
                                    ))
                                ) : (
                                    <Flex
                                        bg={'#3c31b4'}
                                        w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                        <Button
                                            onClick={(e) => { ActivateInput(e) }}
                                            boxShadow={'xl'}
                                            _hover={{}}
                                            borderRadius={'2xl'}
                                            background={'#5A4FCF'}
                                            w="50%" h="20%">

                                            <VStack
                                                py={3}
                                                w="100%" h="100%" spacing={5} alignItems={'center'}>
                                                <Icon
                                                    w={9}
                                                    h={9}
                                                    color={'white'}
                                                    as={AiOutlineCloud} />

                                                <Icon
                                                    className="arrow-up"
                                                    w={6}
                                                    h={6}
                                                    color={'white'}
                                                    as={AiOutlineArrowUp} />

                                                <Text color={'white'}
                                                    fontSize={'lg'}
                                                    fontFamily={'monospace'}>
                                                    Upload
                                                </Text>
                                                <input
                                                    onChange={(e) => UploadFile(e)}
                                                    type={'file'}
                                                    accept="image/png, image/gif, image/jpeg"
                                                    ref={inputRef}
                                                    style={{ width: '0px', height: '0px', display: 'none' }}
                                                />
                                            </VStack>


                                        </Button>
                                    </Flex>
                                )
                            }

                        </Box>

                        {
                            hiddenForm === "show-form" || hiddenForm === "full-form" ? (
                                <Box
                                p={5}
                                w={hiddenForm === "full-form" ? "100%":"55%"}h="100%" bg="white">

                                    <Flex
                                        flexDir="column" w="100%" h="100%">
                                        <Steps
                                        h="10%"
                                            colorScheme={'white'}
                                            activeStep={activeStep}>
                                            {steps.map((content, i) => (
                                                <Step
                                                    color={'#5A4FCF'} key={i}>
                                                    {content}
                                                </Step>
                                            ))}
                                        </Steps>
                                        {
                                        activeStep === steps.length ? (
                                            <Flex p={4}>
                                                <Button mx="auto" size="sm" onClick={reset}>
                                                    Reset
                                                </Button>
                                            </Flex>
                                        ) : (
                                            <Flex w="100%" justify="flex-end">
                                                <Button
                                                    isDisabled={activeStep === 0}
                                                    mr={4}
                                                    onClick={prevStep}
                                                    size="sm"
                                                    variant="ghost"
                                                >
                                                    Prev
                                                </Button>
                                                <Button size="sm" onClick={nextStep}>
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </Flex>
                                        )} 
                                        {
                                            activeStep == 1 ? (
                                                <Button mx="auto" size="sm" onClick={
                                                    hiddenForm === "full-form" ? ()=>sethiddenForm("show-form"):()=>sethiddenForm("full-form")}>
                                                    {"<>"}
                                                </Button>
                                            ):(null)
                                        }
                                    </Flex>
                                   
                                </Box>

                            ) : (null)
                        }
                    </HStack>
                </Box>

            </Flex>
        </Box>
    );
}

export default ImageUpload;