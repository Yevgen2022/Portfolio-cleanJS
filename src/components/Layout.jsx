import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


/**
 * @returns {JSX.Element}
 */

export default function Layout() {
    return (
        <>
            <Header />
            <main className="flex-grow max-w-6xl mx-auto px-6 pt-56 md:pt-24">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
