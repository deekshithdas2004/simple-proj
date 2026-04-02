import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import Cookies from  "js-cookie";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigateTo=useNavigate();


    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev, [name]: value
        }))
    }
    console.log(loginData);

    function handleLoginClick() {
    console.log("Sending:", loginData); // debug

    axios.post("http://localhost:7000/login", loginData)
        .then((res) => {
            console.log(res);

            if (res.status === 200) {
                console.log(res.data);
                if (res.data?.email) {
                    Cookies.set("isUserVerified", "authorized");
                    Cookies.set("userName",res?.data?.name);
                    Cookies.set("email",res?.data?.email);
                    window.location.href = "/";
                } else {
                    alert(res.data);
                }
            }
        })
        .catch((exe) => {
            console.log("ERROR:", exe);
        });
}

    return (
        <div className='LoginWrapper'>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", width: "40%", backgroundColor: "#fffff", boxShadow: "0px 0px 3px 3px #f1f1f1", padding: "40px", borderRadius: "10px" }} >
                <h1>Login</h1>
                <TextField
                    id="standard-textarea"
                    label="User Name"
                    placeholder="User Name"
                    name='email'
                    onChange={handleChange}
                />
                <TextField
                    id="standard-textarea"
                    label="Password"
                    placeholder="Password"
                    name='password'
                    onChange={handleChange}
                />
                <Button variant='contained' color='primary' size='large' onClick={handleLoginClick} >Login</Button>
            </Box>
        </div>
    );
}

export default Login;
