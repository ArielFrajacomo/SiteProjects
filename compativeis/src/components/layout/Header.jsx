import NavBar from "../features/NavBar";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 z-50 w-full h-14 p-2 flex items-center justify-between bg-transparent">
            <h1 className="text-2xl font-bold">
                <span className="text-accent">Compatíveis</span>
            </h1>
            <NavBar />
        </header>
    );
}
