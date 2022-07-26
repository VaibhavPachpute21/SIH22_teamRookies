import React from 'react'
import { HStack, Divider, Link, Box, Flex } from '@chakra-ui/react'

export default function Header() {
    return (
        <HStack
            bg={'red.200'}
            minH={'10vh'} w={"100vw"}>
            <Flex w={'100%'} h={'100%'} flexDirection={'row'} alignItems={'flex-start'} >
                <Box w={'20%'} h='100%' >Logo</Box>
                <Box w={'80%'} h='100%'>
                    <Flex
                        w={'100%'} h='100%' flexDirection={'row'} alignItems={'flex-end'}>
                        <HStack
                            flexDirection={'row'}
                            alignItems={'flex-end'}
                            justifyContent={'flex-end'} spacing={10} w="90%">

                            <Link href='/'>Home</Link>
                            <Link>About</Link>
                            <Link>Register</Link>
                            <Link href='/Login'>Login</Link>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </HStack>
    )
}
