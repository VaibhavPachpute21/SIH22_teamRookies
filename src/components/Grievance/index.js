import {Avatar, Box, Flex, HStack, VStack, Image, Heading, Text, Spacer} from '@chakra-ui/react'


const Grievance = () => {

    return (
        <Box w="100vw" 
        h="90vh">
            <Flex w="100%" h="100%" flexDir={'column'} alignItems={'center'} justifyContent={'center'}> 
                    <Box w="80%" h="100%" >
                        <VStack w="100%" h="100%">
                            <HStack
                            spacing={5}
                            w="100%" h="20%">
                                <Flex w="15%" h="100%" flexDir={'row'} alignItems={'center'} justifyContent={'center'}>
                                <Image 
                                maxW={'100%'}
                                maxH={'100%'}
                                src="../image/logo.png"/>
                                </Flex>

                                <Box w="85%" h="100%">
                                    <VStack spacing={0} w="100%" h="100%">
                                        <HStack 
                                        py={10}
                                         justifyContent={'flex-start'} w="100%" h="20%">
                                         <Heading
                                        pt={4}
                                        fontSize={'5xl'}
                                         fontFamily={'monospace'}
                                         fontWeight={600}>
                                            Grievance form
                                         </Heading>
                                         <Text
                                         pt={5}
                                         h="100%">
                                            {"_id: 4328920852"}
                                         </Text>

                                        </HStack>

                                        <HStack w="100%" h="20%">
                                            <Text 
                                            
                                            fontWeight={700}
                                            w="100%" textAlign={'flex-start'} h="50%"> 
                                            University Grants Commission (UGC) Bahadur Shah Zafar Marg, New Delhi - 110002.
                                            </Text>
                                        </HStack>
                                    
                                        <HStack w="100%" h="10%">
                                            <Box py={5} h="100%">
                                                <Text h="100%">
                                                    <strong>Phone number</strong>: 2498-108-01824
                                                </Text>
                                            </Box>

                                            <Box py={5}  h="100%">
                                                <Text h="100%">
                                                    <strong>Email address</strong>: vaibhav@gmail.com
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </HStack>
                        </VStack>
                    </Box>
            </Flex>
        </Box>
      );
}
 
export default Grievance;