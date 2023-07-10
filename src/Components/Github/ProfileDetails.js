import React from 'react'
import Details from './Details'
import Profile from './Profile'
import Search from './Search'
import { Box, Container, Flex } from "@chakra-ui/react"

function ProfileDetails() {
    return (
        <Container boxShadow='dark-lg' maxW="1200px" mt="10px" backgroundColor="black" color="white" borderRadius="20px" border= "2px solid red">
            <Box mb="10px">
                <Search />
            </Box>

            <Flex>
                <Box w="30%"  >
                    <Profile />
                </Box>
                <Box w="70%" >
                    <Details />
                </Box>
            </Flex>
        </Container>
    )
}

export default ProfileDetails