import { Box, Button, Heading, Input, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState, useContext } from "react";
import axios from "axios";
import githubContext from './Context';

function Search(props) {
    const [username, setUsername] = useState("");
    let { addData } = useContext(githubContext);

    const getUserData = () => {
        axios
            .get(`https://api.github.com/users/${username}`)
            .then((res) => {
                console.log(res.data);
                addData(res.data);
            })
            .catch(() => {
                alert("Failed to fetch User Details");
            });
    };

    return (
        <Box>
            <Box mb="15px" color="green">
                <Heading>GITHUB PROJECT</Heading>
            </Box>

            <Flex>
                <Input placeholder='Enter Github User Id' onChange={(e) => {
                    setUsername(e.target.value);
                }} />

                <Button onClick={getUserData} variant='outline' p="10px 70px" color="green">Search</Button>
            </Flex>
        </Box>
    )
}

export default Search