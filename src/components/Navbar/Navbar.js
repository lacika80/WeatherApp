import { AppBar, Box, Button, Toolbar} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <AppBar position="static" sx={{ mb: 2 }}>
                <Toolbar>
                    <Grid justifyContent="space-between" container  alignItems="center">
                        <Grid item>
                            <Button color="inherit" component={Link} to="/">
                                Étterem választó 
                            </Button>
                            <Button color="inherit" component={Link} to="/userlist">
                               Felhasználók
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar> */}
            <Outlet />
        </Box>
    );
}
