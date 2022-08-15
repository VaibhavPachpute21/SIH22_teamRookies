import { Box, FormControl, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const FeedBackForm = () => {

    const [Run, setRun] = useState(true)
    const [pieces, Setpieces] = useState(200)
    useEffect(() => {

        setTimeout(() => {
            Setpieces(0)
        }, 4000)

    }, [])

    return (
        <Box w="100vw" h="100vh">
            <Confetti

                width={window.innerWidth || 300}
                height={window.innerHeight || 200}
                initialVelocityY={100}
                numberOfPieces={pieces}
            />

            <VStack w='100%' h="100%" bg="red.200" alignItems={'center'} justifyContent={'center'}>
                <form>
                    <FormControl>
                        <SimpleGrid>
                            <GridItem>
                                Hey
                            </GridItem>
                        </SimpleGrid>
                    </FormControl>
                </form>
            </VStack>

        </Box>
    )
}

export default FeedBackForm;