import { Box, Button, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import inputVariants from "../../shared/inputVariants";

interface PropsCrearNuevoProveedor {
    openCrearNuevoProveedor: boolean,
    setOpenCrearNuevoProveedor: React.Dispatch<React.SetStateAction<boolean>>
}
const RegistreProveedorModal:React.FC<PropsCrearNuevoProveedor> = ({openCrearNuevoProveedor, setOpenCrearNuevoProveedor}) => {
    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCrearNuevoProveedor}
                onClose={() => setOpenCrearNuevoProveedor(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        width: {
                            xs: 350,
                            md: 550
                        }
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Registrar nueva proveedor
                    </Typography>
                    <Grid container spacing={2} pt={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Razón social"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="razonSocial"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="identification-type-label" size="small">Tipo identificación</InputLabel>
                                <Select
                                    labelId="identification-type-label"
                                    id="identification-type"
                                    label="Tipo identificación"
                                    name="tipoIdentificacion"
                                    size="small"
                                    sx={inputVariants}
                                >
                                    <MenuItem value={0}>NIT</MenuItem>
                                    <MenuItem value={1}>Cédula de ciudadanía</MenuItem>
                                    <MenuItem value={1}>Cédula de extranjería</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Correo de contacto"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="correoContacto"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Teléfono de contacto"
                                variant="outlined"
                                size="small"
                                name="telefonoContacto"
                                sx={inputVariants}
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", justifyContent: "right" }}>
                                <Button variant="outlined" color={"danger"} sx={{ mr: 1 }}
                                    onClick={() => setOpenCrearNuevoProveedor(false)}>
                                    Cancelar
                                </Button>
                                <Button>
                                    Registrar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}

export default RegistreProveedorModal;