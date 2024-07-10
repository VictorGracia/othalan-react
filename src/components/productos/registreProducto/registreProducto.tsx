import { Box, Button, Sheet } from "@mui/joy"
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import FormularioRegistreNuevoProducto from "./formularioRegistreNuevoProducto";
import FormularioRegistreProveedor from "./formularioRegistreProveedor";

const RegistreProducto = () => {
    return (
        <Sheet>
            <Tabs
                variant="outlined"
                defaultValue={0}
                sx={{
                    borderRadius: 'lg',
                    boxShadow: 'sm',
                    overflow: 'auto',
                    mb:2
                }}
            >
                <TabList
                    disableUnderline
                    tabFlex={1}
                    sx={{
                        [`& .${tabClasses.root}`]: {
                            fontSize: 'lg',
                            fontWeight: 'lg',
                            [`&[aria-selected="true"]`]: {
                                color: 'primary.500',
                                bgcolor: 'background.surface',
                            },
                            [`&.${tabClasses.focusVisible}`]: {
                                outlineOffset: '-4px',
                            },
                        },
                    }}
                >
                    <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                        Producto
                    </Tab>
                    <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                        Proveedores
                    </Tab>
                </TabList>
                <TabPanel value={0}>
                    <FormularioRegistreNuevoProducto />
                </TabPanel>
                <TabPanel value={1}>
                    <FormularioRegistreProveedor />
                </TabPanel>
                <Box p={3} pt={0} textAlign={"right"}>
                    <Button>
                        Continuar
                    </Button>
                </Box>
            </Tabs>
        </Sheet>
    )
}
export default RegistreProducto;