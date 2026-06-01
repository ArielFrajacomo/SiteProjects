

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
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
        <div className="w-full bg-[#070708] pt-16 pb-8 px-6 md:px-12 border-t border-gold-500/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Column 1: Brand */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-gold-300 to-gold-700 flex items-center justify-center">
                            <span className="font-serif font-bold text-black text-sm">WB</span>
                        </div>
                        <span className="text-md font-serif font-bold tracking-wider gold-text-gradient">
                            DR. WAGNER BERNARDO
                        </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                        Referência em odontologia digital e reabilitação de alta complexidade. Capacitação de alto nível científico e profissional para cirurgiões-dentistas.
                    </p>
                </div>

                {/* Column 2: Navigation Links */}
                <div>
                    <h4 className="text-xs font-sans font-bold tracking-[0.2em] text-gold-400 uppercase mb-6">
                        Navegação
                    </h4>
                    <ul className="space-y-3 font-sans text-xs">
                        {[
                            { label: "O Curso", id: "curso" },
                            { label: "Grade Curricular", id: "modulos" },
                            { label: "Os 3 Pilares", id: "pilares" },
                            { label: "Métricas e Credenciamento", id: "credenciamento" },
                            { label: "Preço e Matrícula", id: "inscricao" }
                        ].map((link, idx) => (
                            <li key={idx}>
                                <button 
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-zinc-400 hover:text-gold-300 transition-colors duration-200 cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact & Venue */}
                <div>
                    <h4 className="text-xs font-sans font-bold tracking-[0.2em] text-gold-400 uppercase mb-6">
                        Contato e Local
                    </h4>
                    <ul className="space-y-3 font-sans text-xs text-zinc-400">
                        <li className="flex items-start space-x-2">
                            <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>
                                Clínica Ortovita Odontologia Especializada<br />
                                Ribeirão Preto - SP
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:contato@ortovita.com.br" className="hover:text-gold-300 transition-colors">
                                contato@ortovita.com.br
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Redes Sociais */}
                <div>
                    <h4 className="text-xs font-sans font-bold tracking-[0.2em] text-gold-400 uppercase mb-6">
                        Acompanhe
                    </h4>
                    <div className="flex space-x-3 mb-6">
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:bg-zinc-800 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 text-zinc-400 hover:text-gold-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a 
                            href="https://wa.me/5516999999999" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:bg-zinc-800 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 text-zinc-400 hover:text-gold-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.45L0 24zm6.59-4.846c1.66.986 3.288 1.498 4.76 1.499 5.239 0 9.502-4.261 9.505-9.5.002-2.54-1-4.929-2.818-6.75A9.433 9.433 0 0012.008 1.64c-5.242 0-9.51 4.262-9.513 9.501-.001 1.848.498 3.553 1.488 5.12l-.99 3.616 3.714-.973zm12.18-6.195c-.3-.15-1.77-.874-2.045-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.077-.175-.3-.018-.462.13-.611.134-.134.3-.349.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.587-.492-.507-.675-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.523.716.31 1.274.496 1.71.636.72.229 1.375.196 1.892.119.576-.086 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z" />
                            </svg>
                        </a>
                    </div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                        Credenciamento Técnico<br />
                        Certificação DSP Biomedical
                    </span>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between font-sans text-[11px] text-zinc-600">
                <p>© {currentYear} Dr. Wagner Luis de Carvalho Bernardo. Todos os direitos reservados.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#politica" className="hover:text-zinc-400 transition-colors">Política de Privacidade</a>
                    <a href="#termos" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
                </div>
            </div>
        </div>
    );
}