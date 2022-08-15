import {
    Box, FormControl, GridItem, Heading, HStack, SimpleGrid, VStack, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Checkbox,
    FormLabel,
    Textarea,
    Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const FeedBackForm = () => {

    const [pieces, Setpieces] = useState(150)
    useEffect(() => {

        setTimeout(() => {
            Setpieces(0)
        }, 4000)

    }, [])

    const [firstsliderValue, setfirstSliderValue] = React.useState(5)
    const [fshowTooltip, fsetShowTooltip] = React.useState(false)

    const [secondsliderValue, setSecondSliderValue] = React.useState(5)
    const [sshowTooltip, ssetShowTooltip] = React.useState(false)

    const [thirdsliderValue, setThirdSliderValue] = React.useState(5)
    const [tshowTooltip, tsetShowToolTip] = React.useState(false)

    const [fourthsliderValue, setFourthSliderValue] = React.useState(5)
    const [foshowTooltip, fosetShowToolTip] = React.useState(false)

    const [fifthsliderValue, setfifthSliderValue] = React.useState(5)
    const [fishowTooltip, fisetShowToolTip] = React.useState(false)


    return (
        <Box w="100vw" h="max-content" overflowX={'hidden'}>
            <Confetti
                gravity={.6}
                width={window.innerWidth || 300}
                height={window.innerHeight || 200}
                initialVelocityY={300}
                numberOfPieces={pieces}
            />

            <VStack overflowX={'hidden'} w='100%' h="100%" alignItems={'center'} justifyContent={'center'}>
                <form style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <FormControl w="85%" h="100%">
                        <SimpleGrid
                            py={5}
                            spacing={10} columns={1}>
                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        How happy are you with the response time?
                                    </Heading>
                                    <Slider
                                        id='slider'
                                        defaultValue={1}
                                        min={1}
                                        max={5}
                                        colorScheme='teal'
                                        onChange={(v) => setfirstSliderValue(v)}
                                        onMouseEnter={() => fsetShowTooltip(true)}
                                        onMouseLeave={() => fsetShowTooltip(false)}
                                    >

                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={fshowTooltip}
                                            label={`${firstsliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        How helpful enough is the reply?
                                    </Heading>
                                    <Slider
                                        id='slider'
                                        defaultValue={1}
                                        min={1}
                                        max={5}
                                        colorScheme='teal'
                                        onChange={(v) => setSecondSliderValue(v)}
                                        onMouseEnter={() => ssetShowTooltip(true)}
                                        onMouseLeave={() => ssetShowTooltip(false)}
                                    >

                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={sshowTooltip}
                                            label={`${secondsliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        Rate the overall experience out of 5.
                                    </Heading>
                                    <Slider
                                        id='slider'
                                        defaultValue={1}
                                        min={1}
                                        max={5}
                                        colorScheme='teal'
                                        onChange={(v) => setThirdSliderValue(v)}
                                        onMouseEnter={() => tsetShowToolTip(true)}
                                        onMouseLeave={() => tsetShowToolTip(false)}
                                    >

                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={tshowTooltip}
                                            label={`${thirdsliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        How many times were the notifications on time out of 5?
                                    </Heading>
                                    <Slider
                                        id='slider'
                                        defaultValue={1}
                                        min={1}
                                        max={5}
                                        colorScheme='teal'
                                        onChange={(v) => setFourthSliderValue(v)}
                                        onMouseEnter={() => fosetShowToolTip(true)}
                                        onMouseLeave={() => fosetShowToolTip(false)}
                                    >

                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={foshowTooltip}
                                            label={`${fourthsliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        Rate behaviour of officer on call?
                                    </Heading>
                                    <Slider
                                        id='slider'
                                        defaultValue={1}
                                        min={1}
                                        max={5}
                                        colorScheme='teal'
                                        onChange={(v) => setfifthSliderValue(v)}
                                        onMouseEnter={() => fisetShowToolTip(true)}
                                        onMouseLeave={() => fisetShowToolTip(false)}
                                    >

                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={fishowTooltip}
                                            label={`${fifthsliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        Was the response within 15 days?
                                    </Heading>
                                    <HStack>
                                        <Box>


                                            <FormLabel>
                                                Yes
                                            </FormLabel>
                                            <Checkbox />
                                        </Box>

                                        <Box>


                                            <FormLabel>
                                                No
                                            </FormLabel>
                                            <Checkbox />
                                        </Box>
                                    </HStack>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        Which officer was the most helpful?
                                    </Heading>
                                    <HStack>

                                    </HStack>
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack alignItems={'flex-start'} spacing={3}>
                                    <Heading size={'md'}>
                                        Any suggestions?
                                    </Heading>

                                    <Textarea
                                    height={300}
                                    placeholder="Constructive feedback is required..."/>

                                </VStack>
                            </GridItem>

                            <GridItem>
                                <Button color={'white'} bg="#5247cd">
                                    Submit
                                </Button>
                            </GridItem>
                        </SimpleGrid>
                    </FormControl>
                </form>
            </VStack>

        </Box>
    )
}

export default FeedBackForm;