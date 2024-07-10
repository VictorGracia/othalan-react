import { useMediaQuery, useTheme } from "@mui/material";
import ListadoProductosTable from "./listadoProductosTable";
import { Box, Button, Sheet } from "@mui/joy";
import React from "react";

const ListadoProductos = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const tableRowsData = [
        {
            id: "1",
            nombre: "Producto A Producto A Producto A",
            sku: "SKU001",
            categoria: "Electrónica",
            estado: "Activo",
            precioCompra: "$100.00",
            precioVenta: "$150.00",
            perecedero: false,
            cantidadMinima: 5,
            cantidadMaxima: 100,
            fechaCreacion: "2024-07-06",
        },
        {
            id: "2",
            nombre: "Producto B",
            sku: "SKU002",
            categoria: "Ropa",
            estado: "Inactivo",
            precioCompra: "$50.00",
            precioVenta: "$80.00",
            perecedero: false,
            cantidadMinima: 10,
            cantidadMaxima: 200,
            fechaCreacion: "2024-07-06",
        },
        {
            id: "3",
            nombre: "Producto C",
            sku: "SKU003",
            categoria: "Hogar",
            estado: "Activo",
            precioCompra: "$80.00",
            precioVenta: "$120.00",
            perecedero: true,
            cantidadMinima: 2,
            cantidadMaxima: 50,
            fechaCreacion: "2024-07-06",
        },
        {
            id: "4",
            nombre: "Producto D",
            sku: "SKU004",
            categoria: "Juguetes",
            estado: "Activo",
            precioCompra: "$20.00",
            precioVenta: "$30.00",
            perecedero: false,
            cantidadMinima: 3,
            cantidadMaxima: 80,
            fechaCreacion: "2024-07-06",
        },
    ];

    return (
        <React.Fragment>
            <Box>
                <Button onClick={() => (window.location.href = "./nuevo-producto")}>Agregar producto</Button>
            </Box>
            <Sheet sx={{ mt: 2 }}>
                <ListadoProductosTable tableRowsData={tableRowsData} />
            </Sheet>
        </React.Fragment>
    );
}

export default ListadoProductos;
