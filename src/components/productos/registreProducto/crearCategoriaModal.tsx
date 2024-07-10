import { Box, Button, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { Grid, TextField } from "@mui/material";
import React from "react";
import inputVariants from "../../shared/inputVariants";

interface PropsCrearCategoria {
    openCrearCategoria: boolean,
    setOpenCrearCategoria: React.Dispatch<React.SetStateAction<boolean>>
}

const CrearCategoriaModal: React.FC<PropsCrearCategoria> = ({ openCrearCategoria, setOpenCrearCategoria }) => {
    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openCrearCategoria}
                onClose={() => setOpenCrearCategoria(false)}
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
                        Registrar nueva categoría
                    </Typography>
                    <Grid container spacing={2} pt={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Nombre categoría"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="nombreCategoria"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Código categoría"
                                variant="outlined"
                                size="small"
                                sx={inputVariants}
                                name="nombreCategoria"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Descripción categoría"
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
                                    onClick={() => setOpenCrearCategoria(false)}>
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

export default CrearCategoriaModal;