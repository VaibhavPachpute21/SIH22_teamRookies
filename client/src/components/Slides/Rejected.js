import React from 'react'
import {
    Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Textarea
  } from "@chakra-ui/react";


export default function Rejected() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex w={'100%'} h={'100%'} justifyContent={'center'} padding={2} overflowX={'hidden'}>
        <Flex w={"90%"}>

          <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>

            <AccordionItem
              mt={2} p={2} borderTop={'4px solid #5A4FCF'} borderBottom={'2px solid #5A4FCF'} borderTopRadius={15} shadow='dark-md' >
              <h2>
                <AccordionButton>
                  <Box flex='1'>
                    <Flex justifyContent={'space-evenly'}>
                      <Box>
                        Grievance Title: <strong>This is title</strong>
                      </Box>
                      <Box>
                        Rejected By: <strong>Rejecter</strong>
                      </Box>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box w={'100%'}>
                  <Flex w={'100%'} flexDirection={['column', 'column', 'row', 'row']} >
                    <Box w={["100%", "100%", "15%", "15%"]}>
                      <strong>Nature of Grievance</strong>
                    </Box>
                    <Box w={'80%'} textAlign={'justify'}>
                      <Text>Nature of Grievance</Text>
                    </Box>
                  </Flex>
                  <Flex w={'100%'} flexDirection={['column', 'column', 'row', 'row']} >
                    <Box w={["100%", "100%", "15%", "15%"]}>
                      <strong>Description</strong>
                    </Box>
                    <Box w={'80%'} textAlign={'justify'}>
                      <Text>
                        Description of Grievance
                      </Text>
                    </Box>
                  </Flex>
                  <Flex w={'100%'} flexDirection={['column', 'column', 'row', 'row']} >
                    <Box w={["100%", "100%", "15%", "15%"]}>
                      <strong>Reason To Reject</strong>
                    </Box>
                    <Box w={'80%'} textAlign={'justify'}>
                      <Text>
                        Rejected because...
                      </Text>
                    </Box>
                  </Flex>
                  <Flex w={'100%'} flexDirection={['column', 'column', 'row', 'row']}>
                    <Box w={["100%", "100%", "15%", "15%"]} >
                      <strong>Grievant Institute</strong>
                    </Box>
                    <Box w={'80%'} textAlign={'justify'}>
                      <Text>Grievant Institute</Text>
                    </Box>
                  </Flex>

                  <Flex w={'100%'} flexDirection={['column', 'column', 'row', 'row']}>
                    <Box w={["100%", "100%", "15%", "15%"]}>
                      <strong>Grievance Raised on</strong>
                    </Box>
                    <Box w={'80%'} textAlign={'justify'}>
                      <Text>12/2/22</Text>
                    </Box>
                  </Flex>

                  <Flex w={'100%'} flexDirection={['column', 'column', 'row', 'row']}>
                    <Box w={["100%", "100%", "15%", "15%"]}>
                      <strong>Grievance Rejected on</strong>
                    </Box>
                    <Box w={'80%'} textAlign={'justify'}>
                      <Text>13/2/22</Text>
                    </Box>
                  </Flex>

                  <Flex w={'100%'} justifyContent={'space-evenly'} >
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Send Reply</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Textarea/>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Send
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    <Box alignSelf={'center'}>
                      <Button bg={'#5A4FCF'} color='white'
                        onClick={onOpen}
                      >Reassign Grievance</Button>
                    </Box>
                    <Box alignSelf={'center'}>
                      <Button bg={'red'} color='white'
                      >Reject Grievance</Button>
                    </Box>
                  </Flex>

                </Box>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </Flex>
      </Flex>
  )
}
