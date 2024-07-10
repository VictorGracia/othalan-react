import { Typography, useTheme } from "@mui/joy";
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import inputVariants from "../../shared/inputVariants";
import AddIcon from '@mui/icons-material/Add';
import RegistreProveedorModal from "../../proveedores/registreProveedor/registreProveedorModal";
import ConfirmacionProveedoresProducto from "./confirmacionProveedoresProducto";

const FormularioRegistreProveedor = () => {

    const [openNuevoProveedor, setOpenNuevoProveedor] = useState(false);
    const handleClickOpenNewProveedor = () => {
        setOpenNuevoProveedor(true);
    }
    return (
        <React.Fragment>
            <Typography level="h4" p={1}>
                Información del producto
            </Typography>
            <Grid container>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <FormControl fullWidth>
                        <InputLabel id="identification-type-label" size="small">Proveedor</InputLabel>
                        <Select
                            labelId="identification-type-label"
                            id="identification-type"
                            label="Subcatergoría"
                            name="tipoIdentificacion"
                            size="small"
                            sx={inputVariants}
                            endAdornment={
                                <InputAdornment position="end" sx={{ pr: 1 }}>
                                    <IconButton onClick={handleClickOpenNewProveedor}>
                                        <AddIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        >
                            <MenuItem value="0">Seleccionar</MenuItem>
                        </Select>
                    </FormControl>
                    <RegistreProveedorModal openCrearNuevoProveedor={openNuevoProveedor} setOpenCrearNuevoProveedor={setOpenNuevoProveedor} />
                </Grid>
                <Grid item xs={12} md={8} p={1}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Descripción"
                        variant="outlined"
                        name="descripcionProducto"
                        sx={inputVariants}
                        multiline
                    />
                </Grid>
            </Grid>
            <ConfirmacionProveedoresProducto />
        </React.Fragment>
    );
}

export default FormularioRegistreProveedor;