'use client';
import React, { useState } from 'react'
import styles from './login.module.scss';
import { Button, Card, CardContent, TextField, Typography, Box, Link } from '@mui/material';
import { login } from '@/services/authApiService';

type LoginFormData = {
    email: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(formData.email, formData.password).then((res)=>{
            console.log(res);
        });
    }

    return (
        <div className={styles.login_container}>
            <Card className={styles.login_card}>
                <CardContent>
                    <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField 
                                label="Email" 
                                variant="outlined" 
                                fullWidth 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField 
                                label="Password" 
                                variant="outlined" 
                                fullWidth 
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                type="submit"
                            >
                                Login
                            </Button>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                Don&apos;t have an account? <Link href="/signup" sx={{ textDecoration: 'none', color: 'primary.main' }}>Sign up</Link>
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;