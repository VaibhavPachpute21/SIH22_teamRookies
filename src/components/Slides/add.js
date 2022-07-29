import {Box, VStack, HStack, Text, Select} from '@chakra-ui/react'


const DashboardAdd = () => {
    return ( 
        <Box
      
        w="100%" h="100%">
           <VStack w="100%" h="100%">
                <Box
                h="5%"
                w="100%"
                px={6}
                >
                    <Text fontSize={'xl'} fontWeight={500}>
                        Submit Grievance
                    </Text>
                </Box>
                <Box w="100%" h="10%">
                    <HStack
                    px={5}
                    w="100%" h="100%">
                        <Select
                        borderColor={"#5A4FCF"}
                        
                        w="20%"
                        placeholder='Select Committee'>
                            <option>CSGRC</option>
                            <option>DSGRC</option>
                            <option>ISGRC</option>
                            <option>USGRC</option>
                        </Select>

                        <Select
                        borderColor={"#5A4FCF"}
                        
                        w="20%"
                        placeholder='Select '>
                            <option>CSGRC</option>
                            <option>DSGRC</option>
                            <option>ISGRC</option>
                            <option>USGRC</option>
                        </Select>

                        <Select
                        borderColor={"#5A4FCF"}
                        
                        w="20%"
                        placeholder='Select Committee'>
                            <option>CSGRC</option>
                            <option>DSGRC</option>
                            <option>ISGRC</option>
                            <option>USGRC</option>
                        </Select>
                    </HStack>
                </Box>
           </VStack>
        </Box>
     );
}
 
export default DashboardAdd;