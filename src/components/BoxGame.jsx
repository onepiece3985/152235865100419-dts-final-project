import React from "react";
import {
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";

const BoxGame = (props) => {
    // const baseUrlGame="https://the-lazy-media-api.vercel.app/";
    const toDetail="/detail/"+props.game.key;
    return (
        <Card className="boxy">
            <Box>
                <Button 
                    variant="outlined"
                    component="a"
                    href={toDetail}
                >Lihat Detail</Button>
            </Box>
            <Box className="boxy" sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <CardMedia component="img" sx={{width:1}} image={`${props.game.thumb}`} alt={props.game.title}></CardMedia>
                <CardContent sx={{display:"flex", flexDirection:"column",gap:2,width:1,}}>
                    <Typography component="div" variant="body1">
                        {props.game.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.game.time}
                    </Typography>
                    <Typography variant="body2">
                        {props.game.desc}
                    </Typography>
                </CardContent>               
            </Box>
        </Card>
    )
}
export default BoxGame;