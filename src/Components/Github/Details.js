import React from 'react'
import { Box, Heading, Card, CardBody, Stack, CardHeader, Text, StackDivider } from "@chakra-ui/react"
import { useContext } from 'react'
import githubContext from './Context'

function Details() {
  const { data } = useContext(githubContext);
  return (
    <Box>
      <Card>
        <CardHeader>
          <Heading size='md'>Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Repo
              </Heading>
              <Text pt='2' fontSize='sm'>
                {data.public_repos || "No Public Repo"}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Email
              </Heading>
              <Text pt='2' fontSize='sm'>
                {data.email || "abc@gmail.com"}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Follower
              </Heading>
              <Text pt='2' fontSize='sm'>
                {data.followers || "100"}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Following
              </Heading>
              <Text pt='2' fontSize='sm'>
                {data.following || "100"}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Details