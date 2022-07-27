import React from 'react'
import { HStack, Link, Box, Flex } from '@chakra-ui/react'

export default function Header() {
    return (
        <HStack
        bg="#ededed"
            minH={'10vh'} w={"100vw"}>
            <Flex w={'100%'} h={'100%'} flexDirection={'row'} alignItems={'flex-start'} >
                <Box w={'20%'} h='100%' ></Box>
                <Box w={'80%'} h='100%'>
                    <Flex
                        w={'100%'} h='100%' flexDirection={'row'} alignItems={'flex-end'}>
                        <HStack
                            flexDirection={'row'}
                            alignItems={'flex-end'}
                            justifyContent={'flex-end'} spacing={10} w="90%">

                            <Link 
                            fontWeight={500}
                            _hover={{'textDecoration':'none'}}
                            href='/'>Home</Link>
                            <Link
                            fontWeight={500}
                            _hover={{'textDecoration':'none'}}
                            >About</Link>
                            <Link
                            fontWeight={500}
                            _hover={{'textDecoration':'none'}}
                            href='/Registration'>Register</Link>
                            <Link
                            fontWeight={500}
                            _hover={{'textDecoration':'none'}}
                            href='/Login'>Login</Link>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
            
        </HStack>
    )
}
