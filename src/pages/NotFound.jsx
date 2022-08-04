import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const NotFound = () =>{
    return(
        <Box>
            <Typography variant="h4">Halaman tidak ditemukan</Typography>
            <Link to="/">Kembali ke Halaman Utama</Link>
            <Typography variant="h1">Error 404</Typography>
        </Box>
    )
};
export default NotFound