import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";
const initialState = { now: {}, forecast: {} };

export const getWeather = createAsyncThunk("/", async (_, thunkAPI) => {
    const response = await api.getWeather();
    if (response.status != 200) thunkAPI.rejectWithValue(response);
    else return response;
});
export const getForecast = createAsyncThunk("/forecast", async (_, thunkAPI) => {
    const response = await api.getForecast();
    if (response.status != 200) thunkAPI.rejectWithValue(response);
    else return response;
});

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getWeather.fulfilled, (state, action) => {
                state.now.data = action.payload.data;
                state.now.status = "fulfilled";
                delete state.now.error;
            })
            .addCase(getWeather.pending, (state, action) => {
                state.now.status = "loading";
                delete state.now.data;
                delete state.now.error;
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.now.status = "failed";
                state.now.error = action.error.message;
                delete state.now.data;
            })
            .addCase(getForecast.fulfilled, (state, action) => {
                state.forecast.data = action.payload.data;
                state.forecast.status = "fulfilled";
                delete state.forecast.error;
            })
            .addCase(getForecast.pending, (state, action) => {
                state.forecast.status = "loading";
                delete state.forecast.data;
                delete state.forecast.error;
            })
            .addCase(getForecast.rejected, (state, action) => {
                console.log(action);
                state.forecast.status = "failed";
                state.forecast.error = action.error.message;
                delete state.forecast.data;
            });
    },
});

export default weatherSlice.reducer;
