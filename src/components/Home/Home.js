import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../../features/weatherSlice";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getForecast());
    }, []);

    return (
        <Paper elevation={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2 }}>
            <Typography variant="h6">teszt</Typography>
        </Paper>
    );
};

export default Home;
