import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import CustomBreadcrumbs from '../components/layout/breadcrumsContainer';
import Layout from '../components/layout/layout';
import { useEffect, useState } from 'react';
import BrandingLogo from '../components/layout/brandingLogo';
import HomeContent from '../components/home/homeContent';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>

            {loading ? (
                <>
                    <BrandingLogo />
                </>
            ) : (
                <Layout page={"home"}>
                    <HomeContent/>
                </Layout>
            )}

        </>
    );
}
export default HomePage;