import React,{useEffect, useState} from 'react'
import { HStack, Link, Box, Flex, Icon, Image, Accordion, Select,Input } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import cookie from 'js-cookie'


export default function Header() {
    const [language,setLang]=useState('English')

    useEffect(()=>{
        
    },[language])
    return (
        <HStack
            minH={[
                '5vh', '7vh', '10vh'
            ]} w={"100vw"}>
            <Flex w={'100%'} h={'100%'} flexDirection={'row'} alignItems={'flex-start'} >
                 <Box w={'20%'} h='100%' paddingLeft={5} ><Image src='./image/logo.png' height={'100px'} /> </Box>
                <Box w={'80%'} h='100%'>
                    <Flex
                        w={'100%'} h='100%' flexDirection={'row'} alignItems={'flex-end'}>
                        <HStack paddingTop={5}
                            display={{ md: 'flex', base: 'none' }}
                            flexDirection={'row'}
                            alignItems={'flex-end'}
                            pt={[0,0,5,9]}
                            verticalAlign={'center'}
                            justifyContent={'flex-end'} spacing={10} w="90%">

                            <Link
                                fontWeight={500}
                                _hover={{ 'textDecoration': 'none' }}
                                href='/'>Home</Link>
                            <Link
                                fontWeight={500}
                                _hover={{ 'textDecoration': 'none' }}
                                href='/About'>About</Link>

                            <Link
                                fontWeight={500}
                                _hover={{ 'textDecoration': 'none' }}
                                href='/Login'>Login</Link>
                            
                            <Link
                                fontWeight={500}
                                _hover={{ 'textDecoration': 'none' }}
                                href='/Registration'>Register</Link>

                            
                            <Select defaultValue={'English'}  w={'10%'} onChange={((e)=>{setLang(e.target.value) })} >
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            </Select>
                            
                            
                            
                            {/* <Link
                                fontWeight={500}
                                _hover={{ 'textDecoration': 'none' }}
                                href='/Dashboard'>Dashboard</Link> */}

                            {/* <Link
                                fontWeight={500}
                                onClick={()=>{cookie.remove('token')}}
                                _hover={{ 'textDecoration': 'none' }}
                                href='/Dashboard'>Logout</Link> */}


                        </HStack>
                        <Flex
                            flexDirection={'row'}
                            justifyContent={
                                'flex-end'
                            }
                            alignItems={'flex-end'}
                            paddingTop={3}
                            w={["90%","90%","0%","0%"]}>
                            <Icon

                                display={{ md: 'none', base: 'flex' }}
                                w={8} h={8}>
                                <GiHamburgerMenu />
                            </Icon>
                        </Flex>

                    </Flex>
                </Box>
            </Flex>

        </HStack>
    )
}
