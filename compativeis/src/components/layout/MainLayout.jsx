import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import NavBar from "../features/NavBar.jsx";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <NavBar className="fixed right-6 top-8 z-[80]" />
            <Outlet />
            <Footer />
        </div>
    );
}
