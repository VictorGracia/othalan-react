import { Box, styled } from "@mui/joy";
import React from "react";
import img from '../../media/undraw_outer_space_re_u9vd.svg';
import { Grid } from "@mui/material";
import HomeCard from "./homeCard";

const HomeContent = () => {
    return (
        <React.Fragment>
            <Box sx={{
                minWidth: "60vw",
                minHeight: "80vh",
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${img})`, 
                backgroundSize: 'contain', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    width: '100%',
                    padding: '8px',
                    boxSizing: 'border-box'
                }}>
                    <Grid container>
                        <Grid item xs={12} md={6} >
                            <HomeCard />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default HomeContent;
