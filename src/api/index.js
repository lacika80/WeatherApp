import axios from "axios";
import dataNow from "../dataNow.json";
import dataForecast from "../dataForecast.json";

/*export const getWeather = () => API.get(process.env.REACT_APP_API_URL_NOW); 
export const getForecast = () => API.get(process.env.REACT_APP_API_URL_FORECAST);*/

export const getWeather = () => {
    return dataNow;
};

export const getForecast = () => {
    return dataForecast;
}; 
