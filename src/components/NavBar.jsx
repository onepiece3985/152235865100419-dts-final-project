import React, { useEffect }  from "react";
import { auth, outApps } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const Kepala=(props) =>{
  const navigate=useNavigate();
	const [user, isLoading]=useAuthState(auth);
	const fungsiLogout= async () =>{
		await outApps();
		navigate("/login");
	};
	useEffect(
        () =>{
            if(isLoading){
                return;
            }
            // if(user){
            //     navigate("/");
            // }
        },
        [user, isLoading, navigate]
    )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} href="/">
            Game
          </Typography>
          <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} href="/teknologi">
            Teknologi
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Halo, {user?user.email:"Tamu"}
          </Typography>
          <TextField id="filled-basic" label="Kata kunci" variant="filled" color="primary"/>
          <Button
            color="inherit"
            component="a"
            href="./search?"
          > Cari
          </Button>
          {user?(
            <Button 
              color="inherit"
              onClick={fungsiLogout}
            >LogOut</Button>
          ):(
            <Button 
              color="inherit"
              component="a"
              href="./login"
            >Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Kepala;