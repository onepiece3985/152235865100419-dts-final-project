import axios from "axios";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import BoxGame from "../components/BoxGame";
import "./ListGame.css";

const ListGame = () => {
    const [gameku, setGames] = useState([]);
    useEffect(
        () => {
            const fetchDataGame = async () => {
                try{
                    const responseGame=await axios.get("https://the-lazy-media-api.vercel.app/api/games");
                    setGames(responseGame.data);
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
            <Typography variant="h5">Data Game</Typography>
            {gameku.map((game) => {
                return <BoxGame game={game} />;
            })}
        </Box>
    );
};

export default ListGame;