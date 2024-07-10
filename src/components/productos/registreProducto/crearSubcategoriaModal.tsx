import { Box, Button, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import inputVariants from "../../shared/inputVariants";

interface PropsCrearSubCategoria {
    openCrearSubCategoria : boolean,
    setOpenCrearSubCategoria : React.Dispatch<React.SetStateAction<boolean>>
}
const CreaSubCategoriaModal: React.FC<PropsCrearSubCategoria> = ({openCrearSubCategoria, setOpenCrearSubCategoria}) => {
    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCrearSubCategoria}
                onClose={() => setOpenCrearSubCategoria(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
                        Registrar nueva subcategoría
                    </Typography>
                    <Grid container xs={12} spacing={2} pt={2}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="identification-type-label" size="small">Categoría</InputLabel>
                                <Select
                                    labelId="identification-type-label"
                                    id="identification-type"
                                    label="Categoría"
                                    name="tipoIdentificacion"
                                    size="small"
                                    sx={inputVariants}
                                    disabled
                                >
                                    <MenuItem value="0">Seleccionar</MenuItem>
                                    <MenuItem value="0">Seleccionar</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Código categoría"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="codigoCategoría"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Nombre subcategoría"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="nombreCategoria"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Código subcategoría"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="nombreCategoria"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Descripción subcategoría"
                                variant="outlined"
                                size="small"
                                name="rfc"
                                sx={inputVariants}
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: "flex", justifyContent: "right" }}>
                                <Button variant="outlined" color={"danger"} sx={{ mr: 1 }}
                                    onClick={() => setOpenCrearSubCategoria(false)}>
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

export default CreaSubCategoriaModal;