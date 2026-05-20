import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function NavBar({ className = "" }) {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);
    const linkClass =
        "block px-3 py-2 hover:text-[var(--accent-golden)] transition-colors";

    // Close when clicking outside the nav
    useEffect(() => {
        if (!open) return;
        function handleOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [open]);

    function scrollTo(id) {
        setOpen(false);
        // Delay scroll to next frame so the menu closes first and the
        // browser's smooth-scroll state doesn't swallow the next click.
        requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
    }

    return (
        <nav ref={navRef} className={className}>
            {/* Hamburger button */}
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[80] relative"
            >
                <span
                    className={cn(
                        "block h-0.5 w-6 bg-current transition-all duration-300",
                        open && "rotate-45 translate-y-2",
                    )}
                />
                <span
                    className={cn(
                        "block h-0.5 w-6 bg-current transition-all duration-300",
                        open && "opacity-0",
                    )}
                />
                <span
                    className={cn(
                        "block h-0.5 w-6 bg-current transition-all duration-300",
                        open && "-rotate-45 -translate-y-2",
                    )}
                />
            </button>

            {/* Dropdown */}
            <ul
                className={cn(
                    "absolute right-0 top-full mt-2 min-w-[160px] rounded-lg py-2 text-lg font-medium",
                    "bg-black/80 backdrop-blur-sm border border-[var(--accent-golden)]/20",
                    "flex flex-col transition-all duration-300 origin-top-right",
                    open
                        ? "scale-100 opacity-100 pointer-events-auto"
                        : "scale-95 opacity-0 pointer-events-none",
                )}
            >
                {[
                    { id: "home", label: "Home" },
                    { id: "forYou", label: "Para Você" },
                    { id: "about", label: "Sobre" },
                    { id: "opportunity", label: "Oportunidade" },
                    { id: "prova", label: "Prova" },
                ].map(({ id, label }) => (
                    <li key={id}>
                        <button
                            type="button"
                            className={linkClass}
                            onClick={() => scrollTo(id)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
