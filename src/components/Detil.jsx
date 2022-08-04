import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

const DetGame = (props) => {
    // const baseUrlGame="https://the-lazy-media-api.vercel.app/";
    return (
        <Card className="boxy">
            <Box>
                <Button 
                    variant="outlined"
                    >Kembali</Button>
            </Box>
            <Box className="boxy" sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <CardContent sx={{display:"flex", flexDirection:"column",gap:2,width:1,}}>
                    <Typography component="div" variant="body1">
                        {props.game.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.game.content}
                    </Typography>
                </CardContent>               
            </Box>
        </Card>
    )
}
export default DetGame;