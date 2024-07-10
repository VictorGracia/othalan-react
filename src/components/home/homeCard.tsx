import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

const HomeCard = () => {
    return (
        <Card sx={{boxShadow:"lg"}}> 
            <CardContent>
                <Typography level="title-md">Productos y proveedores</Typography>
                <Typography>Gestione acá sus productos y proveedores.</Typography>
            </CardContent>
        </Card>
    );
}

export default HomeCard;