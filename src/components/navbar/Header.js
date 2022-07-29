import React from 'react'
import { HStack, Link, Box, Flex, Icon,Image } from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Header() {
    return (
        <HStack
      minH={[
                '5vh','7vh','10vh'
            ]} w={"100vw"}>
            <Flex w={'100%'} h={'100%'} flexDirection={'row'} alignItems={'flex-start'} >
               {/*  <Box w={'20%'} h='100px' paddingLeft={5} ><Image src='./image/logo.png' height={'100px'} /> </Box> */}
                <Box w={'80%'} h='100%'>
                    <Flex
                        w={'100%'} h='100%' flexDirection={'row'} alignItems={'flex-end'}>
                        <HStack paddingTop={5}
                        display={{md:'flex',base:'none'}}
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

                            <Link
                            fontWeight={500}
                            _hover={{'textDecoration':'none'}}
                            href='/Dashboard'>Dashboard</Link>
                        </HStack>

                        <Flex
                        flexDirection={'row'}
                        justifyContent={
                            'flex-end'
                        }
                        alignItems={'flex-end'}
                        paddingTop={3}
                        w="90%">
                        <Icon
                        
                        display={{md:'none',base:'flex'}}
                        w={8} h={8}>
                            <GiHamburgerMenu/>
                        </Icon>
                        </Flex>

                    </Flex>
                </Box>
            </Flex>
            
        </HStack>
    )
}
