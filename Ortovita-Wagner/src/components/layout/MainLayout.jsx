import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-zinc-100 select-none">
            <header className="sticky top-0 z-50 w-full transition-all duration-300">
                <Header />
            </header>
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            <footer className="w-full bg-[#09090b] border-t border-gold-500/10">
                <Footer />
            </footer>
        </div>
    );
}
