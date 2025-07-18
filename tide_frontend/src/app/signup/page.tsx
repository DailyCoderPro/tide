'use client';
import React, { useState } from 'react'
import styles from './signup.module.scss';
import { Button, Card, CardContent, TextField, Typography, Box, Link } from '@mui/material';

type LoginFormData = {
    name: string;
    email: string;
    password: string;
}

const Signup = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        name: '',
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
        console.log(formData);
    }

    return (
        <div className={styles.signup_container}>
            <Card className={styles.signup_card}>
                <CardContent>
                    <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField 
                                label="Name" 
                                variant="outlined" 
                                fullWidth 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
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
                                Signup
                            </Button>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                Already have an account? <Link href="/login" sx={{ textDecoration: 'none', color: 'primary.main' }}>Login</Link>
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Signup;