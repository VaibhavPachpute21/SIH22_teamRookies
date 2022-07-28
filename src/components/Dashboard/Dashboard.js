import React, { useState } from 'react'
import { HStack, Flex, Box, VStack, IconButton, Divider } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import {MdOutlineRecentActors} from 'react-icons/md'
import {MdPendingActions} from 'react-icons/md'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

export default function Dashboard() {

  const [shutter,setShutter] = useState(0)
  

  return (
    <HStack
      w={'100vw'}
      h={'90vh'}
      padding={6}
    >
      <VStack
      boxShadow={'2xl'}
        spacing={3}
        w="10%" h="100%" bg="#5A4FCF" borderRadius={'2xl'}>
        <Box

          w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
            p={5}
            borderRadius={10}
              background={'transparent'}
              _hover={{ background: '#5247cd' }}
              color={'white'}
              fontSize={'3xl'}
              icon={<AiOutlineHome />} />
          </Flex>

        </Box>

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
            p={5}
               borderRadius={10}
              background={'transparent'}
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<MdOutlineRecentActors />} />
          </Flex>
        </Box>

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
            p={5}
               borderRadius={10}
              background={'transparent'}
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<MdPendingActions />} />
          </Flex>
        </Box>

        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
            p={5}
               borderRadius={10}
              background={'transparent'}
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<IoMdAddCircleOutline />} />
          </Flex>
        </Box>
        
        <Divider w="50%"/>
        
        <Box w="100%" h="10%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <IconButton
            p={5}
               borderRadius={10}
              background={'transparent'}
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'2xl'}
              icon={<FiSettings />} />
          </Flex>
        </Box>

        <Box w="100%" h="50%">
          <Flex w="100%" h="100%" flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'}>
          <IconButton
              marginBottom={5}
              p={5}
               borderRadius={10}
              background={'transparent'}
              color={'white'}
              _hover={{ background: '#5247cd' }}
              fontSize={'3xl'}
              icon={<AiOutlineUser />} />
          </Flex>
        </Box>
        

      </VStack>
    </HStack>
  )
}
