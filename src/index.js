import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
//maretial ui dark theme switcher
const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
{
    /* <React.StrictMode>
    </React.StrictMode> */
}
root.render(
    <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                   <App/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);