import { Box, VStack, HStack, IconButton, Flex, Text, Avatar, Icon, FormLabel, Input, Checkbox, Link, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useNavigate } from 'react-router-dom'
import { GrFormAttachment } from 'react-icons/gr'
import { connect } from 'react-redux'
import * as actions from '../../actions/grievant_actions'

import cookie from 'js-cookie'

const DashboardTracker = (props) => {

    const [filterTabs, setfilterTabs] = useState([])
    const [error, SetError] = useState('')
    const [Grievances, SetGrievances] = useState([])



    const [authen, setAuthen] = useState(null)
    const auth = cookie.get('token');
    const [User, setUser] = useState({})

    const [dates,setDates] = useState([])
    const [counts,setCounts] = useState([])

    const [FromTo,setFromTo] = useState([])
   

    const chart = {
        options: {
            chart: {
              id: "basic-bar"

            },
            xaxis: {
              categories: dates
            }
          },
          series: [
            {
              name: "Number of grievances",
              data: counts
            }
          ]
        };
            
        
    


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

    const nav = useNavigate()

    


    useEffect(() => {
        if (props.User) {
            setUser(props.User)
        }
    }, [props.User])

    useEffect(() => {
        const GetAllGrievances = async () => {
            try {
                await props.GetAllGrievances(User._id)
            } catch (error) {
                SetError(error.message)
            }
        }
        GetAllGrievances()
    }, [User._id, props.grievance])

    useEffect(() => {
        if (props.data) {
            let d = props.data
            if (d.grievanceData) {
                let f = d?.grievanceData
                
                if (f) {
                    SetGrievances(f.allGrievances)
                }
            }
        }
    }, [props.data])

    useEffect(() => {
        if (Grievances?.length > 0) {

            
              let obj = [];
              
              Grievances.forEach((item, i) => {
                const date = item?.createdAt?.split("T")[0];
                const newObj = {
                  date,
                  count: 1
                };
                const found = obj.find((doc) => doc.date === date);
                if (found) {
                  const count = found.count + 1;
                  console.log(count);
                  obj = obj.map((doc) => doc.date === date ? { ...doc, count } : doc
                  );
                } else {
                  obj.push(newObj);
                }
              });
              let dat = []
              let cou = []
              obj.forEach((item,i)=>{
                let alias = Object.values(item)
                dat.push(alias[0])
                cou.push(alias[1])
              })

              setDates(dat)
              setCounts(cou)
              
        }
    }, [Grievances])

   

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
                {User.role=="0P"?null: <Box
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
                                            onChange={(e)=>{setFromTo(e.target.value)}}
                                                size="sm"
                                                type={'date'} />
                                        </Box>
                                        <Box w="50%">
                                            <FormLabel fontSize={'sm'}>To</FormLabel>
                                            <Input
                                            onChange={(e)=>{setFromTo(e.target.value)}}
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
                </Box>}

                <Box
                    px={5}
                    borderLeft={'1px'}
                    borderColor={'#5A4FCF'}
                    w={User.role=="0P"?"100%": "80%"}
                    h="100%" >
                    <VStack
                        maxH={'80vh'}
                        overflowY={'hidden'}
                        overflow={'scroll'}
                        w="100%">
                        {
                            Grievances && Grievances.length > 0 ? (
                                Grievances?.map((item, i) => (
                                    <HStack key={i} w="100%" minH={"75vh"}>
                                        <Box
                                            w="25%" h="70vh">
                                            <VStack
                                                borderTop={'4px solid #5A4FCF'}
                                                w="90%" h="80%">
                                                <Box w="100%" h="10%">
                                                    <HStack w="100%" h="100%">

                                                        <Text
                                                            w="80%"
                                                            fontWeight={600} 
                                                            fontSize={'sm'}>
                                                            {item._id}
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
                                                                fontSize={'sm'}
                                                            >
                                                                {item.reciever_id}
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
                                                                {
                                                                    item.satisfied ? (
                                                                        "Solved"
                                                                    ) : ("Pending")
                                                                }
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
                                                                {
                                                                    item.imgs?.length
                                                                } Attachments
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
                                                        <Box w="40%">
                                                            <Text w="100%">
                                                                {item.createdAt?.split('T')[0]}
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

                                                <Box w="100%" h="68%">
                                                    <Text
                                                        noOfLines={14}
                                                        fontFamily={'monospace'}
                                                        fontSize={'md'}
                                                        fontWeight={500}>
                                                        {item.grievance_description}
                                                    </Text>
                                                </Box>

                                                <Box w="100%" h="5%">
                                                    <Button
                                                        onClick={() => { nav(`/TrackGrievance/${item._id}`, { state: { url: item._id } }) }}
                                                        bg="#5A4FCF"
                                                        color="white"
                                                        size="sm">
                                                        Track your grievance
                                                    </Button>
                                                </Box>

                                            </VStack>
                                        </Box>
                                    </HStack>
                                ))
                            ) : (<Box>
                                No Grievances found
                            </Box>)


                        }
                    </VStack>
                </Box>
            </HStack>
        </VStack>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.grievance
    }
}

export default connect(mapStateToProps, actions)(DashboardTracker);