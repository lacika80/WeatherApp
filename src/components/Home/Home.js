import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../../features/weatherSlice";
const Home = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    useEffect(() => {
        dispatch(getWeather());
        dispatch(getForecast());
    }, []);
    const iconPicker = (status) => {
        switch (status) {
            case "Clouds":
                return "fa-cloud";
                break;

            default:
                break;
        }
    };

    return (
        <Paper elevation={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, m: 2 }}>
            <Paper elevation={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, mb: 2 }}>
                {weather.now.status != "fulfilled" ? (
                    <Typography variant="h6">{weather.now.error}</Typography>
                ) : (
                    <>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Most
                        </Typography>
                        <Typography variant="h6">{Math.round(weather.now.data.main.temp)} °C</Typography>
                        {/* ide kerül az ikon */}
                        {weather.now.data.weather[0].main == "something" && "then write out the perception"}
                        <Typography variant="h6">{weather.now.data.weather[0].description}</Typography>
                    </>
                )}
            </Paper>
            <Paper elevation={2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2 }}>
                {weather.forecast.status != "fulfilled" ? (
                    <Typography variant="h6">Előrejelzés: {weather.forecast.error}</Typography>
                ) : (
                    <>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Előrejelzés
                        </Typography>

                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>idő</TableCell>
                                    <TableCell>°C</TableCell>
                                    <TableCell>Kondíció</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {weather.forecast.data.list.map((weather) => (
                                    <TableRow key={weather.dt}>
                                        <TableCell>{weather.dt_txt.slice(5,7)}.{weather.dt_txt.slice(8,10)} {weather.dt_txt.slice(11, 13)} óra</TableCell>
                                        <TableCell>{Math.round(weather.main.temp)}</TableCell>
                                        <TableCell>{weather.weather[0].description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </>
                )}
            </Paper>
        </Paper>
    );
};

export default Home;
