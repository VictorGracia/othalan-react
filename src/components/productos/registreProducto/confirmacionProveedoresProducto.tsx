import { Delete } from "@mui/icons-material";
import { Box, Button, Table, Typography, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';

type TableRow = {
    id: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    razonSocial: string | null;
    email: string;
    telefono: string;
};


const ConfirmacionProveedoresProducto = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tableRowsData = [
        {
            id: "1",
            tipoIdentificacion: "NIT",
            numeroIdentificacion: "1234567890",
            razonSocial: "Juan Pérez",
            email: "juan.perez@example.com",
            telefono: "123-456-7890"
        },
        {
            id: "2",
            tipoIdentificacion: "Cédula de ciudadanía",
            numeroIdentificacion: "9876543210",
            razonSocial: "Empresa XYZ",
            email: "contacto@empresa.xyz",
            telefono: "098-765-4321",
        },
        {
            id: "3",
            tipoIdentificacion: "Cédula de extranjería",
            numeroIdentificacion: "4561237890",
            razonSocial: "Ana Gómez",
            email: "ana.gomez@example.com",
            telefono: "321-654-9870"
        }
    ];
    if (isMobile) {
        return (
            <ConfirmacionProveedoresProductoOrderList tableRowsData={tableRowsData} />
        );
    }
    return (
        <ConfirmacionProveedoresProductoTable tableRowsData={tableRowsData} />
    );
}

const ConfirmacionProveedoresProductoTable = ({ tableRowsData }: any) => {
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
                p: 1,
                mt: 3
            }}
        >
            <thead>
                <tr>
                    <th>Tipo de documento</th>
                    <th>Número de documento</th>
                    <th>Razón social</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.tipoIdentificacion}</td>
                        <td>{row.numeroIdentificacion}</td>
                        <td>{row.razonSocial}</td>
                        <td style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{row.email}</td>
                        <td>{row.telefono}</td>
                        <td>
                            <Button
                                color="danger"
                                size="sm"
                                variant="plain"
                                startDecorator={<Delete />}
                            >
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

const ConfirmacionProveedoresProductoOrderList = ({ tableRowsData }: any) => {
    return (
        <Box sx={{p:1}}>
            {tableRowsData.map((listItem: any) => (
                <List
                    key={listItem.id}
                    size="sm"
                    sx={{
                        '--ListItem-paddingX': 0,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                        }}
                    >
                        <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                            <ListItemDecorator>
                                <Avatar size="sm">L</Avatar>
                            </ListItemDecorator>
                            <div>
                                <Typography fontWeight={600} gutterBottom>
                                    {listItem.razonSocial}
                                </Typography>
                                <Typography level="body-xs" gutterBottom>
                                    {listItem.numeroIdentificacion}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 0.5,
                                        mb: 1,
                                    }}
                                >
                                    <Typography level="body-xs">{listItem.email}</Typography>
                                    <Typography level="body-xs">&bull;</Typography>
                                    <Typography level="body-xs">{listItem.id}</Typography>
                                </Box>
                            </div>
                        </ListItemContent>
                        <Button
                            color="danger"
                            size="sm"
                            variant="plain"
                            startDecorator={<Delete />}
                        >
                        </Button>
                    </ListItem>
                    <ListDivider />
                </List>
            ))}
        </Box>
    );
}
export default ConfirmacionProveedoresProducto;