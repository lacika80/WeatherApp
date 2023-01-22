import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";

const initialState = {};

export const getWeather = createAsyncThunk("/", async (_,thunkAPI) => {
    const response = await api.getWeather();
    if (response.statusCode == 403) {
        thunkAPI.dispatch(logout())
        return { error: "Forbidden" };
    } else return { data: response.data, status: response.status, error: response?.errormessage };
});

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getWeather.fulfilled, (state, action) => {
                console.log(action.payload);
                if (action.payload.error) {
                    state.status = "failed";
                    state.error = action.payload.error;
                    delete state.users;
                } else {
                    state.users = action.payload.data.users;
                    state.status = "succeeded";
                    delete state.error;
                }
            })
            .addCase(getWeather.pending, (state, action) => {
                state.status = "loading";
                delete state.users;
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                delete state.users;
            });
    },
});

export default weatherSlice.reducer;
