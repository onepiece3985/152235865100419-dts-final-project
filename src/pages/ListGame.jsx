import axios from "axios";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import BoxGame from "../components/BoxGame";
import "./ListGame.css";

const ListGame = ({YangDiBaca}) => {
    const [gameku, setGames] = useState([]);
    let HalamanJudul="";
    const iniHalaman=window.location.href;
    if(YangDiBaca==="tech"){
        HalamanJudul="Teknologi Pendukung Game";        
    }else if(YangDiBaca==="search"){
        const dicari=iniHalaman.split("=");
        HalamanJudul=`Data yang dicari : ${dicari[1]}` ;        
    }else{
        HalamanJudul="Game Terbaru";        
    }
    let urlFinis=YangDiBaca;
    if(YangDiBaca==="search"){
        const dicari=iniHalaman.split("=");
        urlFinis=`search?search=${dicari[1]}`;  
    }
    useEffect(
        () => {
            const fetchDataGame = async () => {
                try{
                    const responseGame=await axios.get(`https://the-lazy-media-api.vercel.app/api/${urlFinis}`);
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
            <Typography variant="h5">{HalamanJudul}</Typography>
            {gameku.map((game) => {
                return <BoxGame game={game} key={game.key}/>;
            })}
        </Box>
    );
};

export default ListGame;