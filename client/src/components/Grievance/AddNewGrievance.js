import React from 'react'
import { Box, Button, Flex, Input, Text,Select } from '@chakra-ui/react'

export default function AddNewGrievance() {
    return (
        <Flex w='100vw' h='100%' bg='grey.200' alignItems={'center'} justifyContent={'center'} padding={2}
        overflowX={'none'}
        >
            <Flex flexDirection={'column'} w={['100%', '90%', '80%', '80%']} boxShadow={'dark-lg'}>
                <Box w={'100%'} bg='white' paddingTop={5}>
                    <Text textAlign={'center'} fontSize={'3xl'}>Grievant's Information</Text>
                </Box>
                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>Name:</Text>
                        <Input variant={'filled'} value='Vaibhav Pachpute' readOnly={true} />
                    </Box>
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>Phone:</Text>
                        <Input variant={'filled'} value='1234567890' readOnly={true} />
                    </Box>
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>Mail:</Text>
                        <Input variant={'filled'} value='vaibhva@mail.com' readOnly={true} />
                    </Box>
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>DOB:</Text>
                        <Input variant={'filled'} value='07-02-2002' readOnly={true} />
                    </Box>
                </Flex>
                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>Collage:</Text>
                        <Input variant={'filled'} value='Universal Collage of Enginnering,Kaman' readOnly={true} />
                    </Box>
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>Enrollment no:</Text>
                        <Input variant={'filled'} value='07022002' readOnly={true} />
                    </Box>
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>University:</Text>
                        <Input variant={'filled'} value='Mumbai University' readOnly={true} />
                    </Box>
                    <Box w={['90%', '90%', '25%', '25%']}>
                        <Text fontSize={'18px'} paddingLeft={2}>State:</Text>
                        <Input variant={'filled'} value='Maharashtra' readOnly={true} />
                    </Box>
                </Flex>

                <Box w={'100%'} bg='white' py={[5]} px={10}>
                    <Text textAlign={'center'} fontSize={'3xl'}>Enter Details To submit Grievance</Text>
                </Box>

                <Flex w={'100%'} h='100%' bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} gap={[2, 2, 5, 5]} flexDirection={['column', 'column', 'row', 'row']} >
                    <Box w={['90%', '90%', '50%', '50%']}>
                        <Text fontSize={'18px'} paddingLeft={0}>Principal Name:</Text>
                        <Input variant={'flushed'} placeholder='Principal Name' />
                    </Box>
                    <Box w={['90%', '90%', '50%', '50%']}>
                        <Text fontSize={'18px'} paddingLeft={0}>Nature of Grievance:</Text>
                        <Select variant={'flushed'}>
                                <option>Select Nature of Grievance</option>
                                <option>Eligibility Criteria</option>
                                <option>Scholarship Disbursement</option>
                                <option>Fresh Application</option>
                                <option>Renewal Application</option>
                                <option>Name of institute {"&"} course on NSP</option>
                                <option>Scholarship scheme not visible on NSP</option>
                                <option>Document</option>
                                <option>Merit list</option>
                                <option>Bank acoount</option>
                                <option>Any technical queries</option>
                                <option>Other</option>
                            </Select>
                    </Box>
                </Flex>

                <Box w={'100%'} bg='white' py={[5, 5, 5, 5]} px={[2, 2, 10, 10]} >
                    <Text fontSize={'18px'} paddingLeft={0}>Title of Grievance:</Text>
                    <Input variant={'flushed'} placeholder='Give title for Grievance' />
                </Box>

                <Box w={'100%'} bg='white' px={[2, 2, 10, 10]} >
                    <Text fontSize={'18px'} pb={2} paddingLeft={0}>Discription of Grievance:</Text>
                    <textarea variant={'flushed'} placeholder='Add discription of your Grievance...' wrap='true' cols={95} rows={5} style={{border:'1px solid grey',padding:'5px',borderRadius:'5px'}}  />
                </Box>

                <Box w={'100%'} bg='white' py={3} px={[2, 2, 10, 10]} >
                <Text fontSize={'18px'} pb={2} paddingLeft={0}>Please upload image related to grievance if any:</Text>
                <input type={'file'}></input>
                </Box>

                <Box alignItems={'center'} textAlign='center' w={'100%'} bg='white' py={[2, 2, 10, 10]}>
                    <Button w="30%" alignItems={'center'} bg='#5A4FCF' color='white'>
                        Submit
                    </Button>
                </Box>

            </Flex>
        </Flex>
    )
}
