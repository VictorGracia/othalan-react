import Layout from '../components/layout/layout';
import { useEffect, useState } from 'react';
import BrandingLogo from '../components/layout/brandingLogo';
import ListadoProductos from '../components/productos/listadoProductos/listadoProductos';

const ListadoProductosPage = () => {
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
                <Layout page={"mis productos"}>
                    <ListadoProductos/>
                </Layout>
            )}

        </>
    );
}
export default ListadoProductosPage;