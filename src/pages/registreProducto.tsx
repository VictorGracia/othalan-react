import Layout from '../components/layout/layout';
import { useEffect, useState } from 'react';
import BrandingLogo from '../components/layout/brandingLogo';
import RegistreProducto from '../components/productos/registreProducto/registreProducto';

const RegistreProductoPage = () => {
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
                <Layout page={"nuevo producto"}>
                    <RegistreProducto/>
                </Layout>
            )}

        </>
    );
}
export default RegistreProductoPage;