import React, { useState } from 'react'
import { Container, Paper, TextField, Button, Typography } from '@mui/material'

function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(isLogin ? 'Logging in' : 'Registering', { username, password })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center",justifyContent:'center' }}>
                <Typography variant="h5">{isLogin ? 'Login' : 'Register'}</Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Username"
                        fullWidth
                        required
                        margin='normal'
                        variant='outlined'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        margin='normal'
                        variant='outlined'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        sx={{ marginTop: '1rem' }}
                        variant="contained"
                        color="primary"
                        fullWidth
                        type='submit'
                    >
                        login
                    </Button>
                    <Typography>or</Typography>
                    <Button sx={{ marginTop: '1rem' }} variant="contained" color="secondary" fullWidth type='submit' onChange={() => setIsLogin(!isLogin)}>
                        Register
                    </Button>
                </form>
                <Button
                    sx={{ marginTop: '1rem' }}
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? 'Need to register?' : 'Already have an account?'}
                </Button>
            </Paper>
        </Container>
    )
}

export default Login