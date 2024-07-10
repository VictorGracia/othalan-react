import React from 'react';
import { useMediaQuery, Box, styled } from '@mui/material';
import logo from '../../media/TO_THE_STARS.gif';

export default function BrandingLogo() {
    const isMobile = useMediaQuery('(max-width:300px)');
    
    const Img = styled("img")({
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: "contain" 
    });

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                background: '#f1f1f1',
                display: "flex",
                justifyContent: 'center',
                alignItems:'center'
            }}
        >
            <Box sx={{ 
                width: isMobile ? '80%' : '30%', 
                height: isMobile ? '80%' : '30%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Img src={logo} />
            </Box>
        </Box>
    );
}
