import React from 'react'
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box w={'100%'} bg="grey" p={5} mt={10} >
            <Flex flexDirection={'row'}>
                <Flex w={'30%'} bg={'white'} alignitems={'center'} justifyContent={'center'}>
                    <Image src='./image/logo.png' height={'200px'} alignSelf={'center'} />
                </Flex>
                <Flex w={'40%'} padding={2} flexDirection={'column'} color={'white'}>
                    <Heading>About Us</Heading>
                    <Text textAlign={'justify'}>
                    India, the country of the Vedas and the most magnificent fusion of diverse perspectives, has one of the most well-known educational systems in the world. The efficient and orderly operation of a system is essential for its growth. By maintaining effective communication across the system's many components, we can make sure of this. The UGC's Centralised Assistance Cell takes this responsibility. Any complaints from the institution, students, professors, or employed personnel are appreciated.
                    </Text>
                </Flex>
                <Flex w={'30%'} textAlign={'start'} flexDirection={'column'} px={3} paddingLeft={5} color={'white'} >
                    <Heading>Quick Links</Heading>
                    <Link
                    p={2}
                        fontWeight={500}
                        _hover={{ 'textDecoration': 'none' }}
                        href='/'>Home</Link>
                    <Link
                    p={2}
                        fontWeight={500}
                        _hover={{ 'textDecoration': 'none' }}
                        href='/'>About</Link>
                    <Link
                    p={2}
                        fontWeight={500}
                        _hover={{ 'textDecoration': 'none' }}
                        href='/Login'>Login</Link>

                    <Link
                    p={2}
                        fontWeight={500}
                        _hover={{ 'textDecoration': 'none' }}
                        href='/Registration'>Register</Link>
                </Flex>
               
            </Flex>
        </Box>
    )
}
