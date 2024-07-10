import { Box, Typography } from "@mui/joy";
import { Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import inputVariants from "../../shared/inputVariants";
import AddIcon from '@mui/icons-material/Add';
import CrearCategoriaModal from "./crearCategoriaModal";
import CreaSubCategoriaModal from "./crearSubcategoriaModal";

const FormularioRegistreNuevoProducto = () => {
    const [openCrearCategoria, setOpenCrearCategoria] = useState(false);
    const handleClickOpenCrearCategoria = () => {
        setOpenCrearCategoria(true);
    };
    const [openCrearSubCategoria, setOpenCrearSubCategoria] = useState(false);
    const handleClickOpenCrearSubCategoria = () => {
        setOpenCrearSubCategoria(true);
    };
    return (
        <React.Fragment>
            <Typography level="h4" p={1}>
                Información del producto
            </Typography>
            <Grid container>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <TextField
                        label="Nombre producto"
                        size="small"
                        fullWidth
                        name="rfc"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={8} p={1}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Descripción"
                        variant="outlined"
                        name="descripcionProducto"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={4} p={1}>
                    <FormControl fullWidth>
                        <InputLabel id="identification-type-label" size="small">Categoría</InputLabel>
                        <Select
                            labelId="identification-type-label"
                            id="identification-type"
                            label="Categoría"
                            name="tipoIdentificacion"
                            size="small"
                            sx={inputVariants}
                            endAdornment={
                                <InputAdornment position="end" sx={{ pr: 1 }}>
                                    <IconButton onClick={handleClickOpenCrearCategoria}>
                                        <AddIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        >
                            <MenuItem value="0">Seleccionar</MenuItem>
                        </Select>
                    </FormControl>
                    <CrearCategoriaModal openCrearCategoria={openCrearCategoria} setOpenCrearCategoria={setOpenCrearCategoria} />
                </Grid>
                <Grid item xs={12} md={4} p={1}>
                    <FormControl fullWidth>
                        <InputLabel id="identification-type-label" size="small">Subcategoría</InputLabel>
                        <Select
                            labelId="identification-type-label"
                            id="identification-type"
                            label="Subcatergoría"
                            name="tipoIdentificacion"
                            size="small"
                            sx={inputVariants}
                            endAdornment={
                                <InputAdornment position="end" sx={{ pr: 1 }}>
                                    <IconButton onClick={handleClickOpenCrearSubCategoria}>
                                        <AddIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        >
                            <MenuItem value="0">Seleccionar</MenuItem>
                        </Select>
                    </FormControl>
                    <CreaSubCategoriaModal openCrearSubCategoria={openCrearSubCategoria} setOpenCrearSubCategoria={setOpenCrearSubCategoria}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <TextField
                        label="SKU(Unidad de control en stock)"
                        size="small"
                        fullWidth
                        name="rfc"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <TextField
                        label="Precio de compra"
                        size="small"
                        fullWidth
                        name="rfc"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <TextField
                        label="Precio de venta"
                        size="small"
                        fullWidth
                        name="rfc"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={4} p={1}>
                    <FormControl fullWidth>
                        <InputLabel id="identification-type-label" size="small"> Moneda
                        </InputLabel>
                        <Select
                            labelId="identification-type-label"
                            id="identification-type"
                            label="Categoría"
                            name="tipoIdentificacion"
                            size="small"
                            sx={inputVariants}
                        >
                            <MenuItem value="0">Seleccionar</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <TextField
                        label="Cantidad mínima en inventario"
                        size="small"
                        fullWidth
                        name="rfc"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} p={1}>
                    <TextField
                        label="Cantidad máxima en inventario"
                        size="small"
                        fullWidth
                        name="rfc"
                        sx={inputVariants}
                    />
                </Grid>
                <Grid item xs={12} md={4} p={1}>
                    <FormControl fullWidth>
                        <InputLabel id="identification-type-label" size="small"> Unidad de medida
                        </InputLabel>
                        <Select
                            labelId="identification-type-label"
                            id="identification-type"
                            label="Categoría"
                            name="tipoIdentificacion"
                            size="small"
                            sx={inputVariants}
                        >
                            <MenuItem value="0">Seleccionar</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: 'center' }} pl={1}>
                    <Box >
                        <FormControlLabel control={<Checkbox defaultChecked />} label="El producto es perecedero" />
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default FormularioRegistreNuevoProducto;