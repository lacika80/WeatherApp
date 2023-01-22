import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../features/weatherSlice'
export const store = configureStore({
    reducer: {
        weather: weatherReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }), //idk how to deal with the api response...
});
