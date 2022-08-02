import { Box, VStack, HStack, IconButton, Flex, Text, Avatar, Icon, FormLabel, Input, Checkbox, Link } from '@chakra-ui/react'
import { useState } from 'react';
import Chart from "react-apexcharts";

import { GrFormAttachment } from 'react-icons/gr'
const DashboardTracker = () => {

    const [filterTabs, setfilterTabs] = useState([])

    const chart = {
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }]
    }


    const FakeGrievances = [
        {
            grievance_status: "pending",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "solved",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "recieved",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "solved",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "pending",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "recieved",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "solved",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "pending",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        },
        {
            grievance_status: "solved",
            grievance_title: "Grievance _id: 28492309 is pending, please take action.",
            grievance_reciever: "abhinav@gmail.com",
            grievance_date: "2/4/2021",
        }
    ]

    const grievance_nature = [
        "Eligibility Criteria",
        "Scholarship Disbursement",
        "Fresh Application",
        "Renewal Application",
        "Name of institute & course on NSP",
        "Scholarship scheme not visible on NSP",
        "Document",
        "Merit list",
        "Bank acoount",
        "Any technical queries",
        "Other",
    ]


    const setTabsArray = (a, b) => {
        let cloneArray = [...filterTabs]
        if (b) {
            cloneArray.push(a)
            setfilterTabs(cloneArray)
        }
        else {
            let findVal = cloneArray.indexOf(a)
            if (findVal > -1) {
                cloneArray.splice(findVal, 1);
                setfilterTabs(cloneArray)
            }

        }

    }
    console.log(filterTabs)


    return (
        <VStack py={3} w="100%" h="100%">
            <HStack
                w="100%" h="5%">
                <Box w="80%"
                    h="100%">
                    <HStack
                        borderRadius={'md'}
                        w="100%" h="90%">
                        {
                            filterTabs?.map((item, i) => (
                                <Box 
                                key={i}
                                w="20%" h="100%" borderRadius={'2xl'}>
                                    <Flex w="100%" h="100%" alignItems={'center'} justifyContent={'center'}>
                                        <Text
                                        px={3}
                                        color={'white'}
                                        fontWeight={600}
                                        borderRadius={'2xl'}
                                        bg="#5A4FCF"
                                        noOfLines={1}>
                                            {item}
                                        </Text>
                                    </Flex>
                                </Box>
                            ))
                        }
                    </HStack>
                </Box>
            </HStack>

            <HStack w="100%" h="95%">
                <Box
                    w="30%" h="100%">
                    <VStack w="100%" h="100%">
                        <Box w="100%" h="10%">
                            <Flex
                                px={3}
                                w="100%" h="100%" alignItems={'center'} justifyContent={'flex-start'}>
                                <Box>
                                    <Text
                                        fontSize={'xl'}
                                        opacity={.8}
                                        fontFamily={'monospace'}
                                        fontWeight={600}
                                        color={'#5A4FCF'}>
                                        Refine by
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box
                            py={2}
                            borderTop={'1px'}
                            borderColor={'#5A4FCF'}
                            w="100%" h="50%">
                            <VStack
                                spacing={3} w="100%" h="100%">
                                <Box
                                    px={3}
                                    w="100%"
                                    h="10%"
                                >
                                    <Text
                                        fontSize={'lg'}
                                        opacity={.8}
                                        fontFamily={'monospace'}
                                        fontWeight={600}
                                        color={'#5A4FCF'}>
                                        Date
                                    </Text>
                                </Box>

                                <Box

                                    w="100%" h="60%">
                                    <Chart
                                        style={{ minWidth: "100%", height: "100%" }}
                                        options={chart.options}
                                        series={chart.series}
                                        type="area"
                                        width="100%"
                                        height="100%"

                                    />
                                </Box>

                                <Box py={10} w="90%" h="10%">
                                    <HStack w="100%" h="100%">
                                        <Box w="50%">
                                            <FormLabel fontSize={'sm'}>From</FormLabel>
                                            <Input
                                                size="sm"
                                                type={'date'} />
                                        </Box>
                                        <Box w="50%">
                                            <FormLabel fontSize={'sm'}>To</FormLabel>
                                            <Input
                                                size="sm"
                                                type={'date'} />
                                        </Box>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Box>

                        <Box
                            borderTop={'1px'}
                            borderColor={'#5A4FCF'}
                            w="100%" h="40%" >
                            <VStack w="100%" h="100%">
                                <Box
                                    py={3}
                                    px={3}
                                    w="100%" h="10%">
                                    <Text
                                        fontSize={'lg'}
                                        opacity={.8}
                                        fontFamily={'monospace'}
                                        fontWeight={600}
                                        color={'#5A4FCF'}>
                                        Nature of grievance
                                    </Text>
                                </Box>


                                <VStack
                                    spacing={3}
                                    px={3}
                                    py={3} w="100%" h="90%">
                                    {grievance_nature?.map((item, i) => (
                                        i < 6 ? (
                                            <HStack spacing={3} key={i} w="100%" h="10%">
                                                <Checkbox
                                                    value={item}
                                                    onChange={(e) => setTabsArray(e.target.value, e.target.checked)}
                                                    colorScheme='purple'
                                                    w="5%" />
                                                <Text
                                                    fontSize={'sm'}
                                                    fontWeight={600}
                                                    noOfLines={1}>
                                                    {item}
                                                </Text>
                                            </HStack>
                                        ) : (null)
                                    ))}
                                    <Box w="100%">
                                        <Flex w="100%" justifyContent={'flex-end'}>
                                            <Box>
                                                <Link color={'#5A4FCF'}>
                                                    +5 more
                                                </Link>
                                            </Box>
                                        </Flex></Box>
                                </VStack>
                            </VStack>
                        </Box>

                    </VStack>
                </Box>

                <Box
                    px={5}
                    borderLeft={'1px'}
                    borderColor={'#5A4FCF'}
                    w="80%"
                    h="100%" >
                    <VStack
                        maxH={'80vh'}
                        overflow={'scroll'}
                        w="100%">
                        {
                            FakeGrievances?.map((item, i) => (
                                <HStack w="100%" minH={"70vh"}>
                                    <Box
                                        w="25%" h="70vh">
                                        <VStack
                                            borderTop={'4px solid #5A4FCF'}
                                            w="90%" h="80%">
                                            <Box w="100%" h="10%">
                                                <HStack w="100%" h="100%">

                                                    <Text fontWeight={600} fontSize={'lg'}>
                                                        _ddkffj094j3fk
                                                    </Text>
                                                </HStack>
                                            </Box>

                                            <Box w="100%" h="20%">
                                                <VStack w="100%" h='100%'>
                                                    <Box w="100%" h="20%">
                                                        <Text
                                                            opacity={.8}
                                                            fontWeight={700} color={'#5A4FCF'}>
                                                            Grievance to
                                                        </Text>
                                                    </Box>
                                                    <Box w="100%" h="80%">
                                                        <Text
                                                            w="90%"
                                                            fontWeight={600}
                                                            fontSize={'md'}
                                                        >
                                                            {item.grievance_reciever}
                                                        </Text>
                                                    </Box>
                                                </VStack>
                                            </Box>
                                            <Box w="100%" h="20%">
                                                <VStack w="100%" h='100%'>
                                                    <Box w="100%" h="20%">
                                                        <Text
                                                            opacity={.8}
                                                            fontWeight={700} color={'#5A4FCF'}>
                                                            Grievance status
                                                        </Text>
                                                    </Box>
                                                    <Box w="100%" h="80%">
                                                        <Text
                                                            fontWeight={600}
                                                            fontSize={'md'}
                                                        >
                                                            {item.grievance_status}
                                                        </Text>
                                                    </Box>
                                                </VStack>
                                            </Box>
                                            <Box w="100%" h="20%">
                                                <VStack w="100%" h='100%'>
                                                    <Box w="100%" h="20%">
                                                        <Text
                                                            opacity={.8}
                                                            fontWeight={700} color={'#5A4FCF'}>
                                                            Grievance priority
                                                        </Text>
                                                    </Box>
                                                    <Box w="100%" h="80%">
                                                        <Text
                                                            fontWeight={600}
                                                            fontSize={'md'}
                                                        >
                                                            2
                                                        </Text>
                                                    </Box>
                                                </VStack>
                                            </Box>

                                            <Box w="100%" h="5%">
                                                <HStack w="100%" h='100%'>
                                                    <Icon marginTop={5} as={GrFormAttachment} w={6} h={6} />
                                                    <Box w="100%" h="20%">
                                                        <Text
                                                            opacity={.8}
                                                            fontWeight={700} color={'#5A4FCF'}>
                                                            3 Attachments
                                                        </Text>
                                                    </Box>

                                                </HStack>
                                            </Box>
                                        </VStack>
                                    </Box>

                                    <Box w="75%" h="70vh">
                                        <VStack
                                            py={3}
                                            px={5} w="100%" h="100%" alignItems={'flex-start'} justifyContent={'flex-start'}>
                                            <Box w="70%" h="7%">
                                                <HStack w="100%" h="100%">
                                                    <Box w="40%">
                                                        <Text
                                                            fontWeight={600} color={'#5A4FCF'}
                                                        >
                                                            Submission Date
                                                        </Text>
                                                    </Box>
                                                    <Box w="20%">
                                                        <Text>
                                                            {item.grievance_date}
                                                        </Text>
                                                    </Box>
                                                </HStack>
                                            </Box>

                                            <Box w="100%" h="20%">
                                                <Text
                                                    fontFamily={'monospace'}
                                                    fontSize={'2xl'}
                                                    fontWeight={600}>
                                                    {item.grievance_title}
                                                </Text>
                                            </Box>

                                            <Box w="70%" h="5%">
                                                <Text fontWeight={'400'}
                                                    opacity={.7}
                                                    color={'#5A4FCF'}>
                                                    The grievance
                                                </Text>
                                            </Box>

                                            <Box w="100%" h="68">
                                                <Text
                                                    noOfLines={14}
                                                    fontFamily={'monospace'}
                                                    fontSize={'md'}
                                                    fontWeight={500}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur aliquam dolor, id rhoncus erat fringilla vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam velit turpis, efficitur quis sem at, dictum gravida metus. Phasellus quam ligula, dignissim a fringilla vitae, cursus id arcu. Nulla a suscipit magna, in viverra nunc. Nam facilisis ligula sed nunc faucibus, sed rhoncus ante accumsan. Vestibulum tristique blandit ex, vitae sodales metus dictum at. Quisque ante tellus, tincidunt quis hendrerit vel, vulputate ullamcorper quam. Praesent eleifend nisi ac massa maximus, quis consequat justo scelerisque. Mauris at elit vel quam scelerisque tempor vitae ut velit. Sed sollicitudin lectus sed sapien scelerisque accumsan. Duis eu enim id neque efficitur facilisis nec sit amet mauris. Nam laoreet augue vel accumsan interdum. Praesent vel fermentum turpis. Nunc ultricies turpis lorem.
                                                </Text>
                                            </Box>

                                        </VStack>
                                    </Box>
                                </HStack>
                            ))
                        }
                    </VStack>
                </Box>
            </HStack>
        </VStack>
    );
}

export default DashboardTracker;