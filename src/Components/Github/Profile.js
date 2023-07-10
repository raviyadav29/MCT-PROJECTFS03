import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import githubContext from './Context'

function Profile() {
  const {data} =useContext(githubContext);

  return (
    <Box p="10px">
      <img src={data.avatar_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59FI47FE02xesR8DhmzX56t2ENpAcWXafvw&usqp=CAU"} height="150px" />
      <Heading size="lg">{data.name || "No Name"}</Heading>
      <p>
        {data.bio || "No Bio"}
      </p>
      <Button variant='outline' color="green">Profile</Button>
    </Box>
  )
}

export default Profile