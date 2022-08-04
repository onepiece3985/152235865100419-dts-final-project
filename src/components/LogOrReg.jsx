import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, regEmailPass, logEmailPass } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {Box, TextField, Button, ButtonGroup } from '@mui/material';
const LogOrRegForm=({logOrReg})=> {
    const navigate=useNavigate();
    const [user, isLoading]=useAuthState(auth);
    const [credential, setCredential]=useState({
        email: "", password:"",
    });
    const textEmailOnChange=(event)=>{
        setCredential({...credential, email:event.target.value});
    };
    const textPassOnChange=(event)=>{
        setCredential({...credential, password:event.target.value});
    };
    const loginHandler = () =>{
        logEmailPass(credential.email, credential.password);
    };
    const regisHandler = () =>{
        regEmailPass(credential.email, credential.password);
    };
    const masukOnClick = () => {
        if (logOrReg === "login"){
            loginHandler();
        } else{
            regisHandler();
        }
    };
    const alihOnClick =() =>{
        if (logOrReg === "login"){
            navigate("/register");
        } else{
            navigate("/login");
        }
    }
    useEffect(
        () =>{
            if(isLoading){
                return;
            }
            if(user){
                navigate("/");
            }
        },
        [user, isLoading, navigate]
    );
    return(
        <Box 
        component="form"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
            <TextField 
                id="username" 
                label="Username" 
                variant="outlined" 
                type="email"
                value={credential.email}
                onChange={textEmailOnChange}
            />
            <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                type="password"
                value={credential.password}
                onChange={textPassOnChange}
            />
             <ButtonGroup fullWidth="true" color="primary" size="large" aria-label="large primary button group">
                <Button variant="contained" onClick={masukOnClick}>{logOrReg==="login" ? "Login" : "Daftar"}</Button>
                <Button variant="outlined" onClick={alihOnClick}>{logOrReg==="login" ? "Daftar" : "Masuk"}</Button>
             </ButtonGroup>
        </Box>
    )
}
export default LogOrRegForm;
