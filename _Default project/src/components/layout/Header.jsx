
export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Compativeis</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                    </li>
                </ul>
            </nav>  
        </div>
    );
}