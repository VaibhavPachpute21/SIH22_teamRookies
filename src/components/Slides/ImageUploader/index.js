import React from "react";
import { Box, Flex, HStack, Icon, VStack, Text, Button, SimpleGrid, GridItem, FormLabel, FormControl, Input } from "@chakra-ui/react";
import {AiOutlineCloud} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
import './cloud.css'

const ImageUpload = () => {

    const inputRef = React.useRef(null)


    const ActivateInput = (e) => {
        inputRef.current.click()
    }

    return ( 
        <Box w="100%" h="100%">
            <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box
                borderRadius={'2xl'}
                boxShadow={'dark-lg'}
                w="40%" h="80%" bg="#5A4FCF">
                    <HStack 
                    borderRadius={'2xl'}
                    w="100%" h="100%">


                        <Box 
                        borderRadius={'2xl'}
                        border={'5px solid #5A4FCF'}
                        bg="white"
                        w="100%" h="100%">
                            <Flex
                            bg={'#3c31b4'}
                            w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Button
                                onClick={(e)=>{ActivateInput(e)}}
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
                                        as={AiOutlineCloud}/>

                                        <Icon 
                                        className="arrow-up"
                                        w={6}
                                        h={6}
                                        color={'white'}
                                        as={AiOutlineArrowUp}/>

                                        <Text color={'white'}
                                        fontSize={'lg'}
                                        fontFamily={'monospace'}>
                                            Upload
                                        </Text>
                                        <input
                                        type={'file'}
                                        accept="image/png, image/gif, image/jpeg"
                                        ref={inputRef}
                                        style={{width:'0px',height:'0px',display:'none'}}
                                        />
                                    </VStack>
                                </Button>
                            </Flex>
                        </Box>

                       
                    </HStack>
                </Box>
            </Flex>
        </Box>
     );
}
 
export default ImageUpload;