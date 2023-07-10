import { useEffect, useState } from 'react'
import axios from "axios";
import { Card, Stack, Text, Heading, CardBody, Button, Box, Flex, CardHeader, StackDivider } from '@chakra-ui/react';
import ProfileDetails from '../Github/ProfileDetails';



function Home() {
    const [getData, setGetData] = useState([]);
    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then((res) => {
                console.log(res.data);
                setGetData(res.data);
            })
            .catch(() => {
                alert("Failed To Fetch Data")
            })
    }, [])

    return (
        <>
        <Box>
            <ProfileDetails/>
        </Box>
            <Box display="grid" gridTemplateColumns="1fr 1fr 1fr " gridGap=" 25px" >
                {
                    getData.map((ele) => {
                        return (
                            <Box border="2px solid red" borderRadius="20px" boxShadow="0 0 10px black" width="500px" height="350px" backgroundColor="black">
                                <Flex>
                                    <Box  >
                                        <img src={ele.avatar_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59FI47FE02xesR8DhmzX56t2ENpAcWXafvw&usqp=CAU"} height="150px" />
                                        {/* <Heading size="lg">{ele.login || "No Name"}</Heading>
                                    <p>
                                        {ele.bio || "No Bio"}
                                    </p> */}
                                        <Box spacing="10px" mt="5px" mb="5px">
                                            <Button colorScheme='teal' variant='solid'>Profile Details</Button>
                                        </Box>

                                    </Box>
                                    <Box width="400px" >
                                        <Card>
                                            <CardHeader>
                                                <Heading size='md'>{ele.login || "No Name"}</Heading>
                                            </CardHeader>

                                            <CardBody>
                                                <Stack divider={<StackDivider />} spacing='4'>
                                                    <Box>
                                                        <Heading size='xs' textTransform='uppercase'>
                                                            Repo
                                                        </Heading>
                                                        <Text pt='2' fontSize='sm'>
                                                            {ele.public_repos || "No Public Repo"}
                                                        </Text>
                                                    </Box>
                                                    {/* <Box>
                                                    <Heading size='xs' textTransform='uppercase'>
                                                        Email
                                                    </Heading>
                                                    <Text pt='2' fontSize='sm'>
                                                        {ele.email || "abc@gmail.com"}
                                                    </Text>
                                                </Box> */}
                                                    <Box>
                                                        <Heading size='xs' textTransform='uppercase'>
                                                            Follower
                                                        </Heading>
                                                        <Text pt='2' fontSize='sm'>
                                                            {ele.followers || "100"}
                                                        </Text>
                                                    </Box>
                                                    <Box>
                                                        <Heading size='xs' textTransform='uppercase'>
                                                            Following
                                                        </Heading>
                                                        <Text pt='2' fontSize='sm'>
                                                            {ele.followers || "100"}
                                                        </Text>
                                                    </Box>
                                                    {/* <Button variant='outline' color="green">Profile</Button> */}
                                                </Stack>
                                            </CardBody>
                                        </Card>
                                    </Box>

                                </Flex>
                            </Box>
                        )
                    })
                }
                {/* <Box >
                <ProfileDetails/>
            </Box> */}
            </Box>
        </>
    )
}

export default Home;