import { Outlet } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const Layout = () => {
    return (
        <div className="relative">
            <div className="grain-overlay" />
            <Navigation />
            <main className="relative">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
