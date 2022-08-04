import axios from "axios";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import BoxGame from "../components/BoxGame";
import "./ListGame.css";

const ListGame = ({YangDiBaca}) => {
    const [gameku, setGames] = useState([]);
    useEffect(
        () => {
            const fetchDataGame = async () => {
                try{
                    const responseGame=await axios.get(`https://the-lazy-media-api.vercel.app/api/${YangDiBaca}`);
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
            <Typography variant="h5">{YangDiBaca==="tech"?"Teknologi Pendukung Game":"Game terbaru"}</Typography>
            {gameku.map((game) => {
                return <BoxGame game={game} key={game.key}/>;
            })}
        </Box>
    );
};

export default ListGame;