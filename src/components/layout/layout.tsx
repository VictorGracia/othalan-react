import { useMediaQuery, useTheme } from "@mui/material";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';
import CustomBreadcrumbs from '../../components/layout/breadcrumsContainer';

interface AppLayoutProps {
    children: React.ReactNode;
    page: string;
}
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const Layout: React.FC<AppLayoutProps> = ({ children, page }: AppLayoutProps) => {
    const upperPage = capitalizeFirstLetter(page);
    return (
        <>
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                    <Header />
                    <Sidebar />
                    <Box
                        component="main"
                        className="MainContent"
                        sx={{
                            px: { xs: 2, md: 6 },
                            pt: {
                                xs: 'calc(12px + var(--Header-height))',
                                sm: 'calc(12px + var(--Header-height))',
                                md: 3,
                            },
                            pb: { xs: 2, sm: 2, md: 3 },
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: 0,
                            height: '100dvh',
                            gap: 1,
                        }}
                    >
                        <CustomBreadcrumbs window={upperPage} href={"/" + page} />
                        <Box
                            sx={{
                                display: 'flex',
                                mb: 1,
                                gap: 1,
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: { xs: 'start', sm: 'center' },
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography level="h2" component="h1">
                                {upperPage}
                            </Typography>
                        </Box>
                        {children}
                    </Box>
                </Box>
            </CssVarsProvider>
        </>
    );
}
export default Layout;