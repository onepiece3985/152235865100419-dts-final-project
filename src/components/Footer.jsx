import React from "react";
import {Grid, Typography, } from "@mui/material";

const Kaki=()=>{
   return( 
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ 
            bgcolor: 'primary.main', 
            color: 'primary.contrastText', 
            p: 2, position:'fixed', 
            left:0, 
            right:0, 
            bottom:0 }}
        >
        <Typography 
                variant="h6"
                sx={{
                    mr: 2,
                    display: { xs: 'flex' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
            >Rahmat Zulkifli-React@2002</Typography>
        </Grid>
            
    );
}
export default Kaki;