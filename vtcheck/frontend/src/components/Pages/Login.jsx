import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

import logo from '../Assets/vitesco.png';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = async () => {
        if (!Email || !password) {
            enqueueSnackbar('Please fill all the fields!', { variant: 'error' });
        }
        else {
            try {
                const response = await axios.post('https://scheq.in/api/auth/login', { Email, password });
                if (response.status >= 200 && response.status < 300) {
                    const { dashboardUrl, name, token } = response.data;
                    localStorage.setItem('Email', Email);
                    localStorage.setItem('name', name);
                    localStorage.setItem('token', token);
                    enqueueSnackbar('Logged in successfully!', { variant: 'success' });
                    navigate(dashboardUrl);
                } else {
                    enqueueSnackbar('Incorrect Login Credentials!', { variant: 'error' });
                    setEmail('');
                    setPassword('');
                }
            } catch (error) {
                console.error('Error during login:', error);
                if (error.response && error.response.status === 401) {
                    enqueueSnackbar('Incorrect Login Credentials!', { variant: 'error' });
                } else {
                    enqueueSnackbar('An Error Occurred During Login!', { variant: 'error' });
                }
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className='w-full max-w-lg p-8 bg-white shadow-2xl rounded-lg border border-gray-200'>
                <div className='flex justify-center'>
                    <img className='w-1/2' src={logo} alt="Logo" />
                </div>
                <hr /><hr /><br />
                <h1 className='text-4xl text-center font-extrabold'><span className='text-green-600'>SC</span><span className='text-black'>heq</span></h1>
                <br /><hr /><hr /><br />
                
                <div className='flex items-center mb-4 px-20'>
                    <FaUser size={20} className='text-gray-900 mr-2' />
                    <input className='w-full border border-gray-300 rounded-md p-2 shadow-md outline-none focus:ring-1 focus:ring-blue-800' value={Email} type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className='flex items-center mb-6 px-20'>
                    <FaLock size={20} className='text-gray-900 mr-2' />
                    <input className='w-full border border-gray-300 rounded-md p-2 shadow-md outline-none focus:ring-1 focus:ring-blue-800' value={password} type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div className='flex justify-center'>
                    <h1 onClick={handleLogin} className='w-20 py-2 text-center rounded-sm cursor-pointer text-white bg-blue-600 hover:bg-blue-950 transition-colors'>Login</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;