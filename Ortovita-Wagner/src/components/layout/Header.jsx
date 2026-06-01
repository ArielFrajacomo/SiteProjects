import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Countdown Timer State
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set target date: 4 days from now for urgency
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 4);
        targetDate.setHours(23, 59, 59, 0);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference < 0) {
                clearInterval(timer);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // heightened for the dual banner + nav header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="w-full flex flex-col">
            {/* Premium Gold Countdown Banner */}
            <div className="w-full bg-[#0a0a0c] border-b border-gold-500/10 py-2.5 px-4 flex items-center justify-center text-center font-sans text-[10px] md:text-xs tracking-wider space-x-1.5 sm:space-x-3 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse shrink-0"></span>
                <span className="font-extrabold text-gold-400 uppercase shrink-0">Inscrições Encerram em:</span>
                
                {/* Timer Readout */}
                <div className="flex items-center space-x-1 font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded border border-zinc-800">
                    <span className="text-gold-400">{String(timeLeft.days).padStart(2, "0")}d</span>
                    <span className="text-zinc-600">:</span>
                    <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
                    <span className="text-zinc-600">:</span>
                    <span className="text-gold-400">{String(timeLeft.minutes).padStart(2, "0")}m</span>
                    <span className="text-zinc-600">:</span>
                    <span className="text-zinc-100">{String(timeLeft.seconds).padStart(2, "0")}s</span>
                </div>
                
                <span className="text-[10px] text-zinc-500 hidden lg:inline">— Lote Promocional com 10% de desconto à vista</span>
                
                <button
                    onClick={() => scrollToSection("inscricao")}
                    className="text-[9px] md:text-[10px] text-black font-extrabold bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-1 rounded hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer uppercase tracking-widest shrink-0"
                >
                    Matricule-se
                </button>
            </div>

            {/* Sticky Navigation Bar */}
            <nav className={`w-full py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
                isScrolled ? "glass-panel bg-black/85 shadow-lg border-b border-gold-500/10" : "bg-transparent border-b border-transparent"
            }`}>
                {/* Logo */}
                <div 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center space-x-2 cursor-pointer group"
                >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-800 flex items-center justify-center shadow-md shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
                        <span className="font-serif font-bold text-black text-lg">WB</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-serif tracking-widest font-bold gold-text-gradient leading-none">
                            DR. WAGNER BERNARDO
                        </span>
                        <span className="text-[10px] tracking-[0.25em] font-sans text-zinc-500 uppercase leading-normal">
                            ODONTOLOGIA DIGITAL
                        </span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {[
                        { label: "O Curso", id: "curso" },
                        { label: "Cronograma", id: "modulos" },
                        { label: "Os 3 Pilares", id: "pilares" },
                        { label: "Métricas", id: "credenciamento" },
                        { label: "Ministrante", id: "professor" },
                        { label: "FAQ", id: "faq" }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-sans tracking-wide text-zinc-400 hover:text-gold-300 transition-colors duration-200 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <button
                        onClick={() => scrollToSection("inscricao")}
                        className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black font-sans font-bold text-sm tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden group"
                    >
                        <span className="relative z-10">GARANTIR MINHA VAGA</span>
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-zinc-400 hover:text-white focus:outline-none cursor-pointer p-1"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Sidebar Navigation */}
                {isOpen && (
                    <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 z-40 bg-black/95 backdrop-blur-xl border-t border-zinc-800 flex flex-col p-8 space-y-6 animate-fade-in">
                        {[
                            { label: "O Curso", id: "curso" },
                            { label: "Cronograma", id: "modulos" },
                            { label: "Os 3 Pilares", id: "pilares" },
                            { label: "Métricas de Credenciamento", id: "credenciamento" },
                            { label: "Ministrante", id: "professor" },
                            { label: "Dúvidas Frequentes", id: "faq" }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left font-serif text-lg tracking-wide text-zinc-300 hover:text-gold-400 transition-colors duration-200 py-2 border-b border-zinc-900/50"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("inscricao")}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 text-black font-sans font-bold text-center tracking-wider shadow-lg shadow-gold-500/20 active:scale-[0.98] transition-all duration-300"
                        >
                            INSCREVA-SE JÁ
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}