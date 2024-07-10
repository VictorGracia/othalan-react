import { Box, Button, Chip, IconButton, Table, Tooltip } from "@mui/joy";
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

type TableRow = {
    id: string;
    nombre: string;
    sku: string;
    categoria: string;
    estado: string | null;
    precioCompra: string;
    precioVenta: string;
    perecedero: boolean;
    cantidadMinima: number;
    cantidadMaxima: number;
    fechaCreacion: string;
};

const ListadoProductosTable = ({ tableRowsData }: { tableRowsData: TableRow[] }) => {
    const [tableData, setTableData] = useState<TableRow[]>(tableRowsData);

    return (
        <Table
            aria-labelledby="tableTitle"
            stickyHeader
            hoverRow
            sx={{
                "--TableCell-headBackground":
                    "var(--joy-palette-background-level1)",
                "--Table-headerUnderlineThickness": "1px",
                "--TableRow-hoverBackground":
                    "var(--joy-palette-background-level1)",
                "--TableCell-paddingY": "10px",
                "--TableCell-paddingX": "20px",
                boxShadow: "sm"
            }}
        >
            <thead>
                <tr>
                    <th>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            SKU
                            <Tooltip title="Unidad de control en stock" sx={{ fontSize: '15px', ml: '5px' }} color="neutral">
                                <InfoIcon color="info" />
                            </Tooltip>
                        </Box>
                    </th>
                    <th style={{ minWidth: '600px' }}>Nombre</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                    <th>Precio compra</th>
                    <th>Precio venta</th>
                    <th>Perecedero</th>
                    <th>Cantidad mínima</th>
                    <th>Cantidad máxima</th>
                    <th>Fecha creación</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.sku}</td>
                        <td>{row.nombre}</td>
                        <td>{row.categoria}</td>
                        <td>
                            <Chip color={row.estado === "Activo" ? "success" : "danger"} size="md" variant="soft">
                                {row.estado}
                            </Chip>
                        </td>
                        <td>{row.precioCompra}</td>
                        <td>{row.precioVenta}</td>
                        <td>
                            <Box sx={{display:"flex", alignItems:"center"}}>
                                {row.perecedero ? (
                                    <Tooltip title="Perecedero" sx={{ fontSize: '15px', ml: '5px' }} color="neutral">
                                        <CheckIcon color="success" />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="No perecedero" sx={{ fontSize: '15px', ml: '5px' }} color="neutral">
                                        <CloseIcon color="error" />
                                    </Tooltip>
                                )}
                            </Box>
                        </td>
                        <td>{row.cantidadMinima}</td>
                        <td>{row.cantidadMaxima}</td>
                        <td>{row.fechaCreacion}</td>
                        <td>
                            <Button variant="plain" size="sm" sx={{ fontSize: '10px' }}>
                                Ver proveedores
                            </Button>
                            <IconButton size="sm" sx={{ fontSize: '10px' }}>
                                <Delete color="error" />
                            </IconButton>
                            <IconButton size="sm" sx={{ fontSize: '10px' }}>
                                <Edit color="primary" />
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ListadoProductosTable;
