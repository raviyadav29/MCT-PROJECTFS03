import { useState } from 'react'
import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react';

function Login({ login }) {
    const [user, setUser] = useState({
        name: "",
        password: "",
    });

    const verifyCrendentials = () => {
        if (user.name === "admin" && user.password === "admin@123") {
            login();
        }
        else {
            alert("Invalid credentials");
        }
    }
    return (
        <Box boxShadow="0 0 10px black" width="50%" marginLeft="25%" marginTop="100px" padding="80px" border="2px solid red" borderRadius="30px" backgroundColor="black" color="white">
            <Box mb={10}>
                <Heading>Login Page</Heading>
            </Box>

            <Stack spacing={5}>
                <Box >
                    <Input type='text' placeholder='Enter Name' size='lg' htmlSize={70} width='auto' onChange={(event) => {
                        setUser({
                            ...user,
                            name: event.target.value,
                        })
                    }} />
                </Box>
                <Box>
                    <Input type='password' placeholder='Enter Password' size='lg' htmlSize={70} width='auto' onChange={(event) => {
                        setUser({
                            ...user,
                            password: event.target.value,
                        })
                    }} />
                </Box>
            </Stack>

            <Button mt={4} colorScheme='teal' variant='solid' onClick={verifyCrendentials}>
                Login
            </Button>
        </Box>
    )
}

export default Login;