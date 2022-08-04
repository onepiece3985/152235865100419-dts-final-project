import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Box, Typography} from "@mui/material";
import DetGame from "../components/Detil";

function Detailku(props) {
	let params = useParams();
    const [gamemu, detGames] = useState([]);
    useEffect(
        () => {
            const fetchDataGame = async () => {
                try{
                    const responseGame=await axios.get("https://the-lazy-media-api.vercel.app/api/detail/"+params?.linkId);
                    detGames(responseGame.data.results);
                } catch (err) {
                    console.warn(err);
                }
            };
            fetchDataGame();
        },
        []
    );
	return (
        <Box className="boxy">
            <Typography variant="h5">Detail Game</Typography>
            <DetGame game={gamemu} />;
        </Box>
	);
}

export default Detailku;
