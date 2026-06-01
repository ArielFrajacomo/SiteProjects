import { useState, useEffect } from "react";

export default function CourseLandingPage() {
    // 1. Countdown Timer State
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set target date: 4 days from now for real-time urgency
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

    // 2. Apex Deviation Simulator State
    const [deviationSlider, setDeviationSlider] = useState(0.85); // initial value in mm
    
    // Derived values from the slider
    const apicalDeviation = parseFloat(deviationSlider).toFixed(2);
    const angularDeviation = parseFloat(deviationSlider * 2.2).toFixed(1);
    const isApproved = apicalDeviation < 1.00;

    // 3. Curriculum Tabs State
    const [activeTab, setActiveTab] = useState("estrategico");

    // 4. FAQ Accordion State
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // 5. Checkout / Form States
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        cro: "",
        email: "",
        whatsapp: "",
        pagamento: "pix"
    });
    const [enrollmentStep, setEnrollmentStep] = useState("form"); // 'form' -> 'success'

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEnroll = (e) => {
        e.preventDefault();
        if (!formData.nome || !formData.cro || !formData.email || !formData.whatsapp) {
            alert("Por favor, preencha todos os campos obrigatórios (incluindo CRO).");
            return;
        }
        setEnrollmentStep("success");
    };

    return (
        <div className="w-full relative overflow-x-hidden">
            
            {/* BACKGROUND GRADIENT DECORATIONS */}
            <div className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[25vw] h-[25vw] rounded-full bg-gold-400/5 blur-[100px] pointer-events-none"></div>

            {/* SECTION 1: HERO AREA */}
            <section id="curso" className="relative pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 text-left">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-900/30 border border-gold-500/20">
                        <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                        <span className="text-xs font-sans tracking-widest text-gold-300 font-bold uppercase">
                            Credenciamento Oficial & Hands-on Presencial
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
                        Domine a <span className="gold-text-gradient font-bold">Odontologia Digital</span> & Cirurgia Guiada Navegada
                    </h1>

                    {/* Subtitle */}
                    <p className="text-md md:text-lg text-zinc-400 leading-relaxed font-sans font-light">
                        Capacitação cirúrgica de alta performance: da venopunção, PRF e enxertia 3D ao fluxo 100% digital com cirurgia guiada por computador. Saia credenciado com precisão submilimétrica.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                            <span className="block text-2xl font-serif font-bold text-white">07 e 08/03</span>
                            <span className="text-xs text-zinc-500 font-sans">Março de 2026</span>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                            <span className="block text-2xl font-serif font-bold gold-text-gradient">Presencial</span>
                            <span className="text-xs text-zinc-500 font-sans">Vagas Restritas</span>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900 col-span-2 sm:col-span-1">
                            <span className="block text-2xl font-serif font-bold text-white">&lt; 1.0mm</span>
                            <span className="text-xs text-zinc-500 font-sans">Margem de Precisão</span>
                        </div>
                    </div>

                    {/* CTA and Timer */}
                    <div className="space-y-6 pt-4">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button
                                onClick={() => document.getElementById("inscricao").scrollIntoView({ behavior: "smooth" })}
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black font-sans font-extrabold text-center tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                            >
                                QUERO ME INSCREVER
                            </button>
                            <button
                                onClick={() => document.getElementById("modulos").scrollIntoView({ behavior: "smooth" })}
                                className="px-8 py-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-gold-500/40 hover:bg-zinc-900/60 text-zinc-300 font-sans font-bold text-center tracking-wide transition-all duration-300 cursor-pointer"
                            >
                                VER GRADE COMPLETA
                            </button>
                        </div>

                        {/* Urgency Countdown Timer */}
                        <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gold-500/10 flex items-center justify-between max-w-md">
                            <div className="flex flex-col">
                                <span className="text-[10px] tracking-widest text-gold-400 font-bold uppercase leading-none mb-1">
                                    Encerramento das Inscrições:
                                </span>
                                <span className="text-xs text-zinc-500 font-sans font-light">
                                    Lote promocional se encerra em:
                                </span>
                            </div>
                            <div className="flex space-x-3 text-center">
                                {[
                                    { value: timeLeft.days, label: "d" },
                                    { value: timeLeft.hours, label: "h" },
                                    { value: timeLeft.minutes, label: "m" },
                                    { value: timeLeft.seconds, label: "s" }
                                ].map((time, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="w-10 h-10 rounded bg-[#0b0b0d] border border-zinc-800 flex items-center justify-center">
                                            <span className="font-sans font-bold text-white text-md">
                                                {String(time.value).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <span className="text-[9px] text-zinc-600 mt-1 uppercase">{time.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Navigation Software Mockup */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-[4/3] rounded-2xl border border-zinc-800 overflow-hidden bg-black shadow-2xl shadow-gold-500/5 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    
                    {/* Header of navigation simulator */}
                    <div className="w-full bg-zinc-950 px-4 py-2 border-b border-zinc-900 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                        <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                            <span className="text-gold-400 font-bold">DYNAMIC NAVIGATION SYSTEM v4.1</span>
                        </div>
                        <span>PATIENT_ID: #8893-W</span>
                    </div>

                    {/* Screen Panels */}
                    <div className="grid grid-cols-2 h-[calc(100%-30px)] p-2 gap-2 bg-[#020203] font-mono text-[9px]">
                        {/* Panel 1: Coronal Plan */}
                        <div className="rounded border border-zinc-900 relative overflow-hidden flex flex-col justify-between p-2">
                            <span className="text-[8px] text-zinc-600">CORONAL SECTION (Y-Z)</span>
                            
                            {/* Animated Scanner Slices */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="30" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3"/>
                                    <path d="M50 0v100M0 50h100" stroke="#1f1f22" strokeWidth="0.5"/>
                                    <path d="M20 70 C40 30, 60 30, 80 70" fill="none" stroke="#C5A059" strokeWidth="2"/>
                                    {/* Virtual Implant Target */}
                                    <line x1="50" y1="20" x2="50" y2="70" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2"/>
                                </svg>
                            </div>
                            
                            <div className="flex justify-between items-end z-10">
                                <span className="text-zinc-600">ZOOM: 250%</span>
                                <span className="text-green-500 font-bold">SAFETY ZONE</span>
                            </div>
                        </div>

                        {/* Panel 2: Axial Scan */}
                        <div className="rounded border border-zinc-900 relative overflow-hidden flex flex-col justify-between p-2">
                            <span className="text-[8px] text-zinc-600">AXIAL DENSITY SCAN (X-Y)</span>
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <path d="M50 0v100M0 50h100" stroke="#1f1f22" strokeWidth="0.5"/>
                                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="#27272a" strokeWidth="1"/>
                                    <circle cx="50" cy="50" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
                                    <line x1="50" y1="50" x2="68" y2="68" stroke="#ef4444" strokeWidth="1.5"/>
                                </svg>
                            </div>

                            <div className="flex justify-between items-end z-10">
                                <span className="text-zinc-600">APEX REF: #13</span>
                                <span className="text-gold-400 font-bold">BONE BOUNDARY</span>
                            </div>
                        </div>

                        {/* Panel 3: Live Drill Path Tracker */}
                        <div className="rounded border border-zinc-900 relative overflow-hidden flex flex-col justify-between p-2 col-span-2">
                            <div className="flex justify-between items-center text-zinc-400 z-10">
                                <span>TARGET COORDINATES</span>
                                <span className="text-red-500 animate-pulse font-bold">● TRACKING SYSTEM ONLINE</span>
                            </div>

                            {/* Center Coordinate Target */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-24 h-24 rounded-full border border-dashed border-zinc-800 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-gold-400"></div>
                                    </div>
                                </div>
                                {/* Diagonal scanning laser lines */}
                                <div className="absolute w-[80%] h-[1px] bg-gold-500/10 rotate-12 animate-pulse"></div>
                                <div className="absolute w-[80%] h-[1px] bg-gold-500/10 -rotate-45 animate-pulse-slow"></div>
                            </div>

                            <div className="grid grid-cols-4 gap-2 text-center z-10 pt-8">
                                <div className="p-1 rounded bg-[#0b0b0d] border border-zinc-900">
                                    <span className="block text-[7px] text-zinc-600">ANGULAR</span>
                                    <span className="text-[11px] font-bold text-gold-300">0.4°</span>
                                </div>
                                <div className="p-1 rounded bg-[#0b0b0d] border border-zinc-900">
                                    <span className="block text-[7px] text-zinc-600">CORONAL</span>
                                    <span className="text-[11px] font-bold text-white">0.22mm</span>
                                </div>
                                <div className="p-1 rounded bg-[#0b0b0d] border border-zinc-900">
                                    <span className="block text-[7px] text-zinc-600">APICAL</span>
                                    <span className="text-[11px] font-bold text-gold-400">0.38mm</span>
                                </div>
                                <div className="p-1 rounded bg-[#0b0b0d] border border-zinc-900">
                                    <span className="block text-[7px] text-zinc-600">ZYGOMA</span>
                                    <span className="text-[11px] font-bold text-green-500">ACTIVE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE 100% DIGITAL WORKFLOW */}
            <section className="w-full bg-[#070708] py-24 px-6 md:px-12 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif">
                            Workflow Digital <span className="gold-text-gradient font-bold">100% Integrado</span>
                        </h2>
                        <p className="text-sm md:text-md text-zinc-400 font-sans font-light">
                            Não perdemos tempo com noções básicas de informática. O curso é focado em elevar o seu nível operacional direto na cirurgia navegada de alta precisão.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Importação & Fusão",
                                desc: "Domine a importação de arquivos DICOM (tomografia) e STL (escaneamento) para o software de navegação, calibrando a sobreposição de malhas com exatidão cirúrgica.",
                                num: "01",
                                icon: (
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                )
                            },
                            {
                                title: "Protocolo Zigomático",
                                desc: "Configure e planeje o Zygoma-Protocol dentro do ambiente de navegação cirúrgica dinâmica, dominando as ancoragens ósseas mais desafiadoras da implantodontia moderna.",
                                num: "02",
                                icon: (
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Prevenção de Colisão",
                                desc: "Aprenda a mapear e verificar limites ósseos estritos e a proximidade de estruturas anatômicas nobres (nervo alveolar, seio maxilar) com alarmes sonoros/visuais do navegador cirúrgico.",
                                num: "03",
                                icon: (
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-900 hover:border-gold-500/20 hover:bg-zinc-900/30 transition-all duration-300 relative text-left group">
                                <span className="absolute top-4 right-6 text-4xl font-serif font-black text-zinc-900 group-hover:text-gold-500/10 transition-colors">
                                    {item.num}
                                </span>
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-serif text-white font-bold mb-4">{item.title}</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE 3 PILLARS OF HANDS-ON */}
            <section id="pilares" className="max-w-7xl mx-auto py-24 px-6 md:px-12 text-center space-y-16">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <div className="inline-block text-xs font-sans tracking-widest text-gold-400 uppercase font-bold">
                        Metodologia Prática Ativa
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif">
                        Hands-on de Elite: A Regra dos <span className="gold-text-gradient font-bold">"3 Pilares"</span>
                    </h2>
                    <p className="text-sm text-zinc-400 font-sans font-light">
                        Garantimos o seu credenciamento através de uma avaliação focada estritamente nos três gargalos cruciais da navegação cirúrgica dinâmica.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Calibração Precisa",
                            subtitle: "Se a calibração falha, a cirurgia falha",
                            desc: "Enfatizamos a conferência de calibração repetida durante o hands-on. Você aprenderá o passo a passo científico para calibrar os sensores e trackers da peça cirúrgica e garantir desvios inferiores a frações de milímetro.",
                            badge: "Erro Tolerado: 0mm"
                        },
                        {
                            title: "Registro Maxilar/Mandibular",
                            subtitle: "O epicentro dos desvios cirúrgicos",
                            desc: "O registro anatômico da maxila e mandíbula é o momento de maior erro humano. Você treinará exaustivamente o mapeamento dos pontos de referência física e sua sincronização matemática com a tomografia do paciente.",
                            badge: "Foco Clínico Máximo"
                        },
                        {
                            title: "Percepção Visual",
                            subtitle: "Treinamento neurocognitivo guiado",
                            desc: "Treinamos você a não olhar para a boca do paciente, mas sim 100% para o monitor de navegação. Esse exercício neurocognitivo desenvolve a orientação espacial tridimensional e a memória cinestésica do operador.",
                            badge: "Orientação 3D Ativa"
                        }
                    ].map((pilar, index) => (
                        <div key={index} className="flex flex-col justify-between p-8 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-gold-500/10 transition-all duration-300 text-left relative overflow-hidden group">
                            {/* Accent Glow */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gold-500/5 blur-2xl group-hover:bg-gold-500/15 transition-all"></div>
                            
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 rounded bg-[#0b0b0d] border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                                    Pilar 0{index + 1}
                                </span>
                                <h3 className="text-2xl font-serif text-white font-bold">{pilar.title}</h3>
                                <h4 className="text-xs text-gold-400 uppercase tracking-wider font-sans font-semibold">{pilar.subtitle}</h4>
                                <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light pt-2">{pilar.desc}</p>
                            </div>

                            <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                                <span>PARADIGMA OPERATOR</span>
                                <span className="text-gold-300 font-bold">{pilar.badge}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: APEX DEVIATION SIMULATOR (THE WOW FACTOR) */}
            <section id="credenciamento" className="w-full bg-[#070708] py-24 px-6 md:px-12 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left details */}
                    <div className="flex-1 space-y-8 text-left">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-900/30 border border-gold-500/20">
                            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                            <span className="text-[10px] font-sans tracking-widest text-gold-300 font-bold uppercase">
                                Critérios Científicos de Aprovação
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif">
                            Avaliação Quantitativa de Desempenho
                        </h2>

                        <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                            Para certificar você profissionalmente ao final do curso, utilizamos métricas rigorosas via software de sobreposição (superimposition). Comparamos a broca final com o seu planejamento virtual em tempo real.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mt-1">✓</div>
                                <div>
                                    <h4 className="text-white font-sans text-sm font-bold">Desvio Angular</h4>
                                    <p className="text-xs text-zinc-500">Medição do desvio de inclinação tridimensional entre o plano virtual planejado e o executado.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mt-1">✓</div>
                                <div>
                                    <h4 className="text-white font-sans text-sm font-bold">Desvio Coronal e Apical</h4>
                                    <p className="text-xs text-zinc-500">Comparação sobreposta milimétrica entre a ponta da broca no ápice anatômico e o projeto virtual.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 mt-1">✓</div>
                                <div>
                                    <h4 className="text-white font-sans text-sm font-bold">Selo de Credenciamento Presencial</h4>
                                    <p className="text-xs text-zinc-500">Nota de aprovação restrita: apenas cirurgiões com margem de segurança comprovada de desvio inferior a 1mm no ápice recebem a certificação técnica oficial.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Simulator (Right Panel) */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none p-8 rounded-2xl bg-zinc-950 border border-zinc-900 shadow-2xl relative">
                        <div className="absolute top-4 right-6 flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">Interactive Calibration Module</span>
                        </div>

                        <h3 className="text-xl font-serif text-white font-bold mb-2">Simulador de Precisão Apical</h3>
                        <p className="text-xs text-zinc-500 font-sans mb-8">Arraste o controle para simular o desvio do ápice cirúrgico e verificar o status do credenciamento profissional.</p>

                        {/* Interactive Drill SVG Canvas */}
                        <div className="w-full aspect-[2/1] rounded-xl bg-black border border-zinc-900 relative overflow-hidden flex items-center justify-center mb-8">
                            <svg className="w-full h-full p-4" viewBox="0 0 200 100">
                                {/* Anatomical Bone Profile */}
                                <path d="M10 90 Q100 10 190 90" fill="none" stroke="#27272a" strokeWidth="2" strokeDasharray="3 3"/>
                                <text x="10" y="85" fill="#52525b" className="font-mono text-[7px]">LIMITES ÓSSEOS</text>

                                {/* Virtual Planned Path (Dashed Gold) */}
                                <line x1="100" y1="10" x2="100" y2="80" stroke="#c58d20" strokeWidth="2.5" strokeDasharray="3 2" opacity="0.6"/>
                                <circle cx="100" cy="80" r="4" fill="none" stroke="#c58d20" strokeWidth="1.5"/>
                                <text x="60" y="25" fill="#c58d20" className="font-mono text-[6px]">PLANEJAMENTO VIRTUAL</text>

                                {/* Drill Path (Executed) - changes rotation/position based on slider */}
                                <g transform={`translate(${ (deviationSlider - 0.85) * 25 }, 0) rotate(${ (deviationSlider - 0.85) * 8 }, 100, 10)`}>
                                    <line x1="100" y1="10" x2="100" y2="80" stroke={isApproved ? "#22c55e" : "#ef4444"} strokeWidth="3"/>
                                    <polygon points="98,80 102,80 100,86" fill={isApproved ? "#22c55e" : "#ef4444"}/>
                                    <text x="110" y="60" fill={isApproved ? "#22c55e" : "#ef4444"} className="font-mono text-[6px] font-bold">BROCA REALIZADA</text>
                                </g>

                                {/* Apex Target Circle */}
                                <circle cx="100" cy="80" r="10" fill="none" stroke="#eab308" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.3"/>
                            </svg>

                            {/* Glowing Status Overlay */}
                            <div className="absolute top-4 left-4">
                                {isApproved ? (
                                    <span className="px-2.5 py-1 rounded bg-green-500/10 border border-green-500/30 text-[9px] font-mono text-green-500 font-bold tracking-wider uppercase animate-fade-in shadow-md shadow-green-500/5">
                                        APROVADO & CREDENCIADO ✓
                                    </span>
                                ) : (
                                    <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30 text-[9px] font-mono text-red-500 font-bold tracking-wider uppercase animate-fade-in shadow-md shadow-red-500/5">
                                        REPROVADO - RISCO CIRÚRGICO ✖
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Slider controls */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center text-xs font-mono">
                                <span className="text-zinc-400">DESVIO APICAL ESTIMADO:</span>
                                <span className={`text-sm font-bold ${isApproved ? "text-green-500" : "text-red-500 animate-pulse"}`}>
                                    {apicalDeviation} mm
                                </span>
                            </div>

                            <input 
                                type="range" 
                                min="0.10" 
                                max="2.20" 
                                step="0.05"
                                value={deviationSlider}
                                onChange={(e) => setDeviationSlider(parseFloat(e.target.value))}
                                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                            />

                            {/* Live calculations readout */}
                            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/60 border border-zinc-900">
                                <div>
                                    <span className="block text-[8px] text-zinc-500 font-mono uppercase">Desvio Angular</span>
                                    <span className={`text-md font-serif font-bold ${isApproved ? "text-zinc-300" : "text-zinc-600"}`}>
                                        {angularDeviation}° <span className="text-[9px] font-mono font-light">(Tolerância: 2.0°)</span>
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-[8px] text-zinc-500 font-mono uppercase">Selo de Habilitação</span>
                                    <span className={`text-xs font-mono font-bold tracking-wider uppercase ${isApproved ? "text-gold-400" : "text-zinc-600"}`}>
                                        {isApproved ? "QUALIFICAÇÃO OK" : "FORA DE MARGEM"}
                                    </span>
                                </div>
                            </div>

                            <p className="text-[10px] text-zinc-500 font-sans leading-relaxed text-center italic">
                                *O credenciamento presencial exige avaliação real via software com desvio restrito a <strong className="text-gold-400">&lt; 1.0mm no ápice</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: FULL CURRICULUM ACCORDIONS (TABS) */}
            <section id="modulos" className="max-w-7xl mx-auto py-24 px-6 md:px-12 text-center space-y-16">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <div className="inline-block text-xs font-sans tracking-widest text-gold-400 uppercase font-bold">
                        Conteúdo Científico Completo
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif">
                        Grade Curricular do <span className="gold-text-gradient font-bold">Curso Presencial</span>
                    </h2>
                    <p className="text-sm text-zinc-400 font-sans font-light">
                        Alinhe conhecimentos biológicos e tecnológicos com os nossos módulos detalhados para cirurgiões de elite.
                    </p>
                </div>

                {/* Tabs header */}
                <div className="flex justify-center border-b border-zinc-900 max-w-2xl mx-auto p-1 bg-zinc-950/60 rounded-xl">
                    <button
                        onClick={() => setActiveTab("estrategico")}
                        className={`flex-1 py-3 text-xs md:text-sm font-sans tracking-wider rounded-lg font-bold cursor-pointer transition-all duration-300 ${
                            activeTab === "estrategico" ? "bg-gradient-to-r from-gold-600 to-gold-400 text-black shadow-md shadow-gold-500/10" : "text-zinc-400 hover:text-white"
                        }`}
                    >
                        CIRURGIA NAVEGADA
                    </button>
                    <button
                        onClick={() => setActiveTab("teorico")}
                        className={`flex-1 py-3 text-xs md:text-sm font-sans tracking-wider rounded-lg font-bold cursor-pointer transition-all duration-300 ${
                            activeTab === "teorico" ? "bg-gradient-to-r from-gold-600 to-gold-400 text-black shadow-md shadow-gold-500/10" : "text-zinc-400 hover:text-white"
                        }`}
                    >
                        MÓDULO TEÓRICO (13)
                    </button>
                    <button
                        onClick={() => setActiveTab("pratico")}
                        className={`flex-1 py-3 text-xs md:text-sm font-sans tracking-wider rounded-lg font-bold cursor-pointer transition-all duration-300 ${
                            activeTab === "pratico" ? "bg-gradient-to-r from-gold-600 to-gold-400 text-black shadow-md shadow-gold-500/10" : "text-zinc-400 hover:text-white"
                        }`}
                    >
                        MÓDULO PRÁTICO (8)
                    </button>
                </div>

                {/* Tabs Content */}
                <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-zinc-950/40 border border-zinc-900/60 text-left min-h-[300px]">
                    {activeTab === "estrategico" && (
                        <div className="space-y-8 animate-fade-in">
                            <h3 className="text-xl font-serif text-gold-400 font-bold mb-4">Aprofundamento em Tecnologia e Navegação 3D</h3>
                            <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-8">
                                O diferencial competitivo que separa cirurgiões comuns de autoridades em reabilitações avançadas.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { t: "Fusão de Arquivos DICOM e STL", d: "Mapeamento e correlação tridimensional de imagens tomográficas com o escaneamento introral do paciente." },
                                    { t: "Aferição e Calibração Dinâmica", d: "Protocolo repetitivo de aferição e checagem de erros dos trackers óticos do sistema." },
                                    { t: "Configuração do Protocolo Zigoma", d: "Planejamento estruturado para implantes zigomáticos e reabilitações extremas." },
                                    { t: "Métricas de Superimposição", d: "Controle quantitativo dos desvios apical, coronal e angular ao término de cada cirurgia." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-black border border-zinc-900/80">
                                        <h4 className="text-white text-xs font-bold font-sans uppercase mb-2 text-gold-300">{item.t}</h4>
                                        <p className="text-[11px] text-zinc-400 leading-relaxed font-sans font-light">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "teorico" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in font-sans text-xs">
                            {[
                                "01. Introdução à coleta de sangue venoso: conceitos e aplicações na área da saúde.",
                                "02. Anatomia e fisiologia do sistema venoso periférico clínico.",
                                "03. Normas de biossegurança estritas e uso correto de EPIs.",
                                "04. Materiais e equipamentos: seringas, agulhas, tubos e torniquete.",
                                "05. Ética e aspectos legais envolvidos na coleta de sangue venoso.",
                                "06. Complicações mais comuns (hematoma, punção arterial, síncope).",
                                "07. Transporte, conservação e preservação de amostras biológicas.",
                                "08. Introdução completa à regeneração tecidual guiada.",
                                "09. Conceitos e diferenciações de concentrados plaquetários: PRP x PRF.",
                                "10. Bases biológicas do PRF: plaquetas, fatores de crescimento e fibrina.",
                                "11. Indicações e contraindicações clínicas em implantodontia.",
                                "12. Biomateriais e usos específicos para regeneração óssea.",
                                "13. Apresentação da tecnologia avançada em 3D e cirurgia navegada robótica."
                            ].map((item, idx) => (
                                <div key={idx} className="p-3.5 rounded-lg bg-black/60 border border-zinc-900 flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"></span>
                                    <span className="text-zinc-300 font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "pratico" && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                                {[
                                    "01. Demonstração e prática guiada da técnica de punção venosa.",
                                    "02. Identificação táctil e visual dos principais sítios de coleta.",
                                    "03. Prática clínica supervisionada individualmente.",
                                    "04. Protocolo e descarte correto de materiais perfurocortantes.",
                                    "05. Demonstração operacional de centrífuga, tubos e agulhas.",
                                    "06. Processamento de sangue total: centrifugação e separação de fases.",
                                    "07. Obtenção, prensa e manipulação da membrana de fibrina estável.",
                                    "08. Aplicação cirúrgica simulada em modelos de maxila/mandíbula."
                                ].map((item, idx) => (
                                    <div key={idx} className="p-3.5 rounded-lg bg-black/60 border border-zinc-900 flex items-center space-x-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"></span>
                                        <span className="text-zinc-300 font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 rounded-xl bg-gold-900/10 border border-gold-500/20 text-center font-sans text-xs text-gold-400 uppercase font-bold tracking-wider">
                                * Observação: É estritamente indispensável o uso de EPI completo durante toda a prática cirúrgica.
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 6: INSTRUCTOR PROFILE */}
            <section id="professor" className="w-full bg-[#070708] py-24 px-6 md:px-12 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Simulated Premium Photo */}
                    <div className="flex-1 w-full max-w-md relative aspect-[3/4] rounded-2xl border border-gold-500/20 overflow-hidden bg-zinc-950 shadow-2xl flex items-center justify-center group">
                        {/* CSS-designed avatar silhouette since image tool isn't needed for high-end graphic design */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-left">
                            <span className="text-xs text-gold-400 uppercase font-mono font-bold tracking-widest mb-1">
                                COORDENAÇÃO CIENTÍFICA
                            </span>
                            <h3 className="text-2xl font-serif text-white font-bold leading-none mb-2">
                                Prof. Dr. Wagner Bernardo
                            </h3>
                            <span className="text-xs text-zinc-400 font-sans">
                                PhD & Consultor de Cirurgia Guiada Avançada
                            </span>
                        </div>
                        {/* Geometric gold-tech background design */}
                        <div className="w-[140%] h-[140%] rotate-45 border border-gold-500/5 absolute bg-gradient-to-br from-gold-500/5 to-transparent pointer-events-none rounded-[100px]"></div>
                        <div className="w-24 h-24 rounded-full border border-gold-500/10 flex items-center justify-center text-gold-300 font-serif text-3xl font-extrabold shadow-lg shadow-gold-500/10">
                            WB
                        </div>
                    </div>

                    {/* Bio text details */}
                    <div className="flex-grow space-y-8 text-left max-w-2xl">
                        <div className="space-y-4">
                            <span className="text-xs text-gold-400 uppercase tracking-widest font-sans font-bold">
                                Currículo de Excelência
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif">
                                Dr. Wagner Luis de Carvalho Bernardo
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                                Autoridade internacional em implantodontia de alta complexidade e reabilitações 3D guiadas por computador. Sua atuação acadêmica e clínica garante excelência metodológica e credenciamento cirúrgico reconhecido nacionalmente.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs">
                            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                                <span className="block font-bold text-white uppercase text-[10px] text-gold-400 mb-1">DOUTORADO</span>
                                <p className="text-zinc-300 font-light leading-relaxed">Doutor em Odontologia pela conceituada UNESP - Araraquara.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                                <span className="block font-bold text-white uppercase text-[10px] text-gold-400 mb-1">MESTRADO</span>
                                <p className="text-zinc-300 font-light leading-relaxed">Mestre em Biologia e Patologia Buco Dental pela UNICAMP - Piracicaba.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                                <span className="block font-bold text-white uppercase text-[10px] text-gold-400 mb-1">FILIAÇÃO INTERNACIONAL</span>
                                <p className="text-zinc-300 font-light leading-relaxed">Membro ativo do renomado ITI - International Team for Implantology.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900">
                                <span className="block font-bold text-white uppercase text-[10px] text-gold-400 mb-1">CREDENCIAMENTO</span>
                                <p className="text-zinc-300 font-light leading-relaxed">Credenciado Nobel Biocare Implants pela prestigiada APCD Ribeirão Preto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: CHECKOUT & ENROLLMENT FORM */}
            <section id="inscricao" className="max-w-7xl mx-auto py-24 px-6 md:px-12 flex flex-col lg:flex-row items-stretch gap-12 relative">
                
                {/* Visual pricing showcase (Left) */}
                <div className="flex-1 p-8 md:p-12 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-gold-500/20 flex flex-col justify-between text-left relative overflow-hidden">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold-400/5 blur-3xl pointer-events-none"></div>

                    <div className="space-y-6">
                        <span className="inline-block px-3 py-1 rounded bg-gold-900/30 border border-gold-500/20 text-[10px] text-gold-400 font-mono tracking-widest uppercase font-bold">
                            Inscrição Lote Promocional
                        </span>
                        
                        <h2 className="text-3xl md:text-4xl font-serif">
                            Faça agora a <br />sua <span className="gold-text-gradient font-bold">Matrícula</span>
                        </h2>

                        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                            Garanta o seu credenciamento clínico com o Dr. Wagner. O investimento cobre todos os materiais cirúrgicos, acesso aos softwares de simulação navegada, coffees-breaks e certificação oficial.
                        </p>
                    </div>

                    <div className="my-10 space-y-4">
                        <div className="flex items-baseline space-x-2">
                            <span className="text-zinc-500 text-sm font-sans font-light">R$</span>
                            <span className="text-5xl font-serif font-black text-white tracking-tight">1.200,00</span>
                        </div>
                        <p className="text-xs text-gold-400 font-sans">
                            ou <strong>10% de desconto à vista (R$ 1.080,00 no PIX)</strong> ou parcelado em até <strong>6x de R$ 200,00</strong> sem juros.
                        </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-zinc-800 text-zinc-400 font-sans text-xs">
                        <div className="flex items-center space-x-2">
                            <span className="text-gold-500 font-bold">✓</span>
                            <span>Acesso individual ao Software de Navegação Cirúrgica</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gold-500 font-bold">✓</span>
                            <span>Dispositivos para calibração e registros</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gold-500 font-bold">✓</span>
                            <span>Certificado Presencial de Credenciamento Técnico</span>
                        </div>
                    </div>
                </div>

                {/* Form Wrapper (Right) */}
                <div className="flex-1 p-8 rounded-2xl bg-zinc-950 border border-zinc-900 flex flex-col justify-center">
                    
                    {enrollmentStep === "form" ? (
                        <form onSubmit={handleEnroll} className="space-y-6 text-left">
                            <h3 className="text-xl font-serif text-white font-bold mb-4">Dados de Matrícula</h3>
                            
                            <div className="space-y-4 font-sans text-xs">
                                <div>
                                    <label className="block text-zinc-400 mb-2 uppercase tracking-wider text-[10px] font-bold">
                                        Nome Completo *
                                    </label>
                                    <input 
                                        type="text" 
                                        name="nome"
                                        required
                                        value={formData.nome}
                                        onChange={handleFormChange}
                                        placeholder="Dr(a). Seu Nome Completo"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-900 focus:border-gold-500 focus:outline-none text-zinc-200"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-zinc-400 mb-2 uppercase tracking-wider text-[10px] font-bold">
                                            Registro CRO *
                                        </label>
                                        <input 
                                            type="text" 
                                            name="cro"
                                            required
                                            value={formData.cro}
                                            onChange={handleFormChange}
                                            placeholder="CRO-SP 000000"
                                            className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-900 focus:border-gold-500 focus:outline-none text-zinc-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-zinc-400 mb-2 uppercase tracking-wider text-[10px] font-bold">
                                            WhatsApp / Celular *
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleFormChange}
                                            placeholder="(00) 99999-0000"
                                            className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-900 focus:border-gold-500 focus:outline-none text-zinc-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-zinc-400 mb-2 uppercase tracking-wider text-[10px] font-bold">
                                        E-mail para confirmação *
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        placeholder="contato@seudominio.com.br"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-900 focus:border-gold-500 focus:outline-none text-zinc-200"
                                    />
                                </div>

                                <div>
                                    <label className="block text-zinc-400 mb-2 uppercase tracking-wider text-[10px] font-bold">
                                        Método de Pagamento Preferencial
                                    </label>
                                    <select 
                                        name="pagamento"
                                        value={formData.pagamento}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-900 focus:border-gold-500 focus:outline-none text-zinc-200 cursor-pointer"
                                    >
                                        <option value="pix">PIX - 10% Desconto (À vista R$ 1.080,00)</option>
                                        <option value="cartao">Cartão de Crédito - Até 6x de R$ 200,00</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black font-sans font-extrabold text-center tracking-wider shadow-lg shadow-gold-500/20 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                            >
                                CONFIRMAR MINHA RESERVA
                            </button>
                        </form>
                    ) : (
                        <div className="space-y-8 animate-fade-in text-center py-6">
                            <div className="w-16 h-16 rounded-full bg-gold-900/40 border border-gold-500 flex items-center justify-center mx-auto shadow-lg shadow-gold-500/10">
                                <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-2xl font-serif text-white font-bold">Reserva Solicitada!</h3>
                                <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                                    Prezado(a) <strong>{formData.nome}</strong>, seu cadastro para o credenciamento de odontologia digital foi processado com sucesso.
                                </p>
                            </div>

                            {formData.pagamento === "pix" ? (
                                <div className="p-6 rounded-xl bg-black border border-zinc-900 space-y-4 max-w-xs mx-auto">
                                    <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                                        PAGAMENTO CHAVE PIX
                                    </span>
                                    <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto shadow">
                                        {/* CSS QR-Code Simulator representation */}
                                        <div className="grid grid-cols-4 gap-1 p-2 w-full h-full bg-[#111] border border-white">
                                            {[...Array(16)].map((_, i) => (
                                                <div 
                                                    key={i} 
                                                    className={`w-full h-full ${i % 3 === 0 || i % 7 === 0 ? "bg-white" : "bg-black"}`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="block text-[10px] font-bold text-gold-400">R$ 1.080,00</span>
                                    <button 
                                        type="button"
                                        onClick={() => alert("Chave copiada para a área de transferência!")}
                                        className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-[10px] font-mono text-white rounded border border-zinc-800 transition cursor-pointer animate-pulse"
                                    >
                                        COPIAR PIX COPIA E COLA
                                    </button>
                                </div>
                            ) : (
                                <div className="p-6 rounded-xl bg-black border border-zinc-900 text-xs text-zinc-400 max-w-xs mx-auto">
                                    Link para o pagamento seguro no cartão enviado para o e-mail: <strong>{formData.email}</strong>.
                                </div>
                            )}

                            <p className="text-[10px] text-zinc-500 leading-relaxed font-sans">
                                O coordenador clínico de suporte entrará em contato via WhatsApp no número <strong>{formData.whatsapp}</strong> para confirmar a recepção da documentação.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 8: VENUE LOCATION MAP */}
            <section className="w-full bg-[#070708] py-24 px-6 md:px-12 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 text-left">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block text-xs font-sans tracking-widest text-gold-400 uppercase font-bold">
                            Infraestrutura
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                            Local do Evento:<br />Clínica Ortovita
                        </h2>
                        <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                            Desenvolva a sua prática clínica em uma infraestrutura cirúrgica de excelência máxima. A Clínica Ortovita conta com consultórios totalmente equipados com sistemas de tomografia integrados e os scanners mais modernos da odontologia digital, oferecendo conforto absoluto aos alunos.
                        </p>
                        <p className="text-xs text-zinc-500 font-mono">
                            📌 R. Napoleão Selmi Dei, Ribeirão Preto - SP (DSP Biomedical Group)
                        </p>
                    </div>

                    {/* Simulated Styled Map */}
                    <div className="flex-1 w-full max-w-md relative aspect-[4/3] rounded-2xl border border-zinc-800 overflow-hidden bg-black/60 shadow-2xl flex items-center justify-center group">
                        {/* Map design with clinical overlays */}
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1f1f22_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute w-[60%] h-[60%] border border-gold-500/10 rounded-full animate-pulse pointer-events-none"></div>
                        <div className="absolute w-[40%] h-[40%] border border-gold-500/10 rounded-full animate-pulse-slow pointer-events-none"></div>
                        
                        {/* Styled Clinical GPS Pin */}
                        <div className="z-10 flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gold-900/60 border-2 border-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="text-gold-300 font-serif font-black">ORTOVITA</span>
                            </div>
                            <span className="mt-3 text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                                CLINICAL HEADQUARTERS
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9: FAQ SECTION & 7-DAY GUARANTEE */}
            <section id="faq" className="max-w-4xl mx-auto py-24 px-6 text-center space-y-16">
                <div className="space-y-4">
                    <div className="inline-block text-xs font-sans tracking-widest text-gold-400 uppercase font-bold">
                        FAQ do Aluno
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif">
                        Dúvidas <span className="gold-text-gradient font-bold">Frequentes</span>
                    </h2>
                </div>

                {/* FAQ list */}
                <div className="space-y-4 text-left font-sans">
                    {[
                        {
                            q: "Quem é qualificado para participar do curso?",
                            a: "O curso é voltado para cirurgiões-dentistas e profissionais de saúde graduados que desejam ingressar ou se especializar em fluxos digitais, venopunção, uso do PRF, biomateriais e reabilitação guiada de alta precisão."
                        },
                        {
                            q: "Como funciona o teste de credenciamento prático?",
                            a: "Ao final do dia prático, utilizamos o software de sobreposição quantitativa. O aluno que conseguir realizar a perfuração com precisão de desvio apical menor que 1.0mm e desvio angular menor que 2.0° receberá a certificação de operador autorizado do sistema."
                        },
                        {
                            q: "Os materiais cirúrgicos e EPIs estão inclusos?",
                            a: "Todos os insumos do hands-on (como biomateriais, centrífugas, agulhas de punção e simuladores físicos de maxila/mandíbula) estão inclusos no investimento. O aluno deverá portar apenas seu EPI completo conforme as normas clínicas vigentes."
                        },
                        {
                            q: "Quais são as datas e locais reais do treinamento?",
                            a: "O treinamento teórico e prático será realizado presencialmente nos dias 07 e 08 de março de 2026 nas instalações de excelência da Clínica Ortovita em Ribeirão Preto, São Paulo."
                        }
                    ].map((faq, index) => (
                        <div 
                            key={index}
                            className="rounded-xl bg-[#09090b] border border-zinc-900 overflow-hidden transition-all duration-300"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFaq(index)}
                                className="w-full p-6 text-left flex justify-between items-center text-sm font-bold text-white hover:text-gold-300 transition-colors focus:outline-none cursor-pointer"
                            >
                                <span>{faq.q}</span>
                                <span className={`text-gold-400 text-lg transition-transform duration-300 ${openFaqIndex === index ? "rotate-45" : ""}`}>
                                    ＋
                                </span>
                            </button>
                            {openFaqIndex === index && (
                                <div className="px-6 pb-6 text-xs text-zinc-400 font-light leading-relaxed animate-fade-in">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Unconditional 7-Day Guarantee Card */}
                <div className="p-8 md:p-12 rounded-2xl bg-zinc-950 border border-gold-500/10 flex flex-col md:flex-row items-center gap-8 text-left max-w-3xl mx-auto">
                    <div className="w-20 h-20 rounded-full bg-gold-900/30 border-2 border-gold-500 flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/20 relative">
                        {/* Ribbon decoration inside the badge */}
                        <span className="font-serif font-black text-gold-400 text-2xl">7</span>
                        <span className="absolute bottom-4 text-[7px] font-sans text-gold-500 font-bold uppercase tracking-widest">
                            DIAS
                        </span>
                    </div>

                    <div className="space-y-3 font-sans">
                        <h4 className="text-lg font-serif text-white font-bold">Garantia Incondicional de 7 Dias</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                            Temos plena convicção científica na qualidade técnica do nosso treinamento. Se em até 7 dias da compra você decidir que o conteúdo não condiz com sua atuação clínica, basta solicitar o estorno e devolveremos 100% do seu investimento sem questionamentos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
