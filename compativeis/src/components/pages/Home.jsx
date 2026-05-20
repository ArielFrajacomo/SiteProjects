import { useEffect } from "react";
import FontCarousel from "../common/FontCarousel";
import logoImage from "../../assets/marcio-transparent-small-cut.png";
import VanishingCard from "../ui/VanishingCard";
import { cn } from "../../lib/utils";

const DIAGNOSTICO_URL = "https://form.respondi.app/eW9PPMu8";

export default function Home() {
    useEffect(() => {
        const about = document.getElementById("about");
        if (!about) return;
        const reveals = about.querySelectorAll("[data-reveal]");
        reveals.forEach((node, i) => {
            node.style.setProperty("--reveal-delay", `${i * 90}ms`);
        });
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
        );
        reveals.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Hero */}
            <hero
                id="home"
                className="bg-gradient relative w-full h-screen flex flex-col items-center justify-center text-center"
            >
                <img
                    src={logoImage}
                    alt="Márcio Conceição"
                    className="absolute bottom-0 left-1/2 z-20 w-full h-full -translate-x-1/2 origin-bottom object-cover"
                />
                <FontCarousel
                    text="Márcio"
                    direction="left"
                    speed={56}
                    colors={["#d4a017", "#ffd700", "#d4a017"]}
                    strokeColors={["#ffd700", "transparent"]}
                    strokeWidth={2.2}
                    gradientType="radial"
                    gradientPosition={["50%", "80%"]}
                    gradientRadius="85%"
                    className="text-[60vh] uppercase font-semibold"
                    containerClassName="position-relative p-1 z-10"
                />
                <FontCarousel
                    text="Compatíveis"
                    direction="right"
                    speed={96}
                    colors={["#d4a017", "#ffd700", "#d4a017"]}
                    strokeColors={["#ffd700", "transparent"]}
                    strokeWidth={2.2}
                    gradientType="radial"
                    gradientPosition={["50%", "80%"]}
                    gradientRadius="85%"
                    className="text-[60vh] mt-[10vh] uppercase font-semibold"
                    containerClassName="position-relative p-1 z-10"
                />
            </hero>

            {/* forYou */}
            <div
                id="forYou"
                className={cn(
                    "relative min-h-[220vh] w-full bg-black overflow-visible",
                    "border-t border-4 border-[var(--accent-golden)]/50 sepia-50",
                )}
            >
                <div className="topic">01 · Para Você.</div>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[url(@/assets/dark-wall-with-ornaments.jpg)] bg-fixed bg-cover bg-center"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 hidden sm:block bg-[url(@/assets/Marcio-Side-transparent.png)] bg-fixed bg-contain bg-right bg-no-repeat [mask-image:linear-gradient(to_left,white_40%,white_70%,transparent_80%)] [-webkit-mask-image:linear-gradient(to_left,white_25%,white_55%,transparent_70%)]"
                />

                <div className="grid grid-cols-7 w-full sm:w-2/3 justify-start my-30 p-5 sm:p-10 gap-4 relative z-10">
                    <VanishingCard
                        className="relative z-10 grid col-start-1 col-end-6"
                        Title="Você fez terapia?"
                    >
                        <p>Já tentou de tudo?</p>
                        <p>
                            Melhorou por um mês. Depois voltou pro mesmo lugar,
                            com o mesmo nó, na mesma conversa circular.
                        </p>
                    </VanishingCard>
                    <VanishingCard
                        className="relative z-10 grid col-start-2 col-end-7"
                        Title='Já tiveram "a conversa"'
                    >
                        <p>
                            Prometeram mudança. Cumpriram por três semanas. Aí
                            tudo recaiu, e a briga de agora parece mais pesada
                            ainda.
                        </p>
                    </VanishingCard>
                    <VanishingCard
                        className="relative z-10 grid col-start-3 col-end-8"
                        Title="Viajaram pra reacender"
                    >
                        <p>
                            Reacendeu no hotel. Na segunda de manhã, tudo igual.
                            Como se nada tivesse acontecido.
                        </p>
                    </VanishingCard>
                    <VanishingCard
                        className="relative z-10 grid col-start-2 col-end-7"
                        Title="Leu os livros"
                    >
                        <p>
                            Seguiu os terapeutas de casal no Instagram. Salvou
                            os reels de comunicação. Nada disso virou mudança
                            real dentro de casa.
                        </p>
                    </VanishingCard>
                    <VanishingCard
                        className="relative z-10 grid col-start-1 col-end-6"
                        Title="Vocês vivem como colegas?"
                    >
                        <p>
                            Conversam sobre boleto, filho, agenda. Mas não
                            conversam mais. O toque sumiu ou ficou protocolar.
                        </p>
                    </VanishingCard>
                    <VanishingCard
                        className="relative z-10 grid col-start-2 col-end-7"
                        Title="Dois medos ao mesmo tempo"
                    >
                        <p>
                            Medo do casamento acabar. E medo, igual, de não
                            acabar — e viver mais 20 anos exatamente assim.
                        </p>
                    </VanishingCard>
                </div>
            </div>

            {/* About */}
            <section
                id="about"
                className="relative w-full border-t border-[var(--accent-golden)]/40 bg-[#0f0d0a]"
            >
                <p className="topicB">02 · Quem Sou</p>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,169,97,0.14),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(212,160,23,0.12),transparent_45%)]"
                />

                <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-10 lg:grid-cols-12">
                        <article className="rounded-2xl border border-[var(--accent-golden)]/35 bg-black/35 p-7 shadow-[0_0_0_1px_rgba(201,169,97,0.05)] lg:col-span-5">
                            <h2
                                data-reveal=""
                                className="reveal-on-scroll mb-4 text-3xl font-semibold text-[var(--accent-yellow-gold)] sm:text-4xl"
                            >
                                Clareza para casais em crise.
                            </h2>
                            <div data-reveal="" className="reveal-on-scroll">
                                <p className="mb-4 text-lg leading-relaxed text-gray-200">
                                    Meu nome é Márcio Conceição, sou analista
                                    corporal e mentor de relacionamentos. Em
                                    milhares de horas de atendimento, observei
                                    que a crise costuma se repetir por um padrão
                                    invisível, não por falta de amor.
                                </p>
                                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                                    O foco do trabalho é sair do ciclo de briga,
                                    silêncio e recaída, atacando a raiz do
                                    conflito com método e prática concreta.
                                </p>
                            </div>

                            <div
                                data-reveal=""
                                className="reveal-on-scroll grid grid-cols-2 gap-3"
                            >
                                <div className="rounded-xl border border-[var(--accent-golden)]/30 bg-[#16120d]/80 p-4">
                                    <p className="text-2xl font-bold text-[var(--accent-yellow-gold)]">
                                        3.960+
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        horas de consultório
                                    </p>
                                </div>
                                <div className="rounded-xl border border-[var(--accent-golden)]/30 bg-[#16120d]/80 p-4">
                                    <p className="text-2xl font-bold text-[var(--accent-yellow-gold)]">
                                        3 Rs
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        revelar, romper, restaurar
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="rounded-2xl border border-[var(--accent-golden)]/35 bg-black/30 p-7 lg:col-span-7">
                            <h3
                                data-reveal=""
                                className="reveal-on-scroll mb-5 text-2xl font-semibold text-[var(--accent-yellow-gold)] sm:text-3xl"
                            >
                                O método em 3 movimentos
                            </h3>

                            <div className="space-y-4 text-gray-200">
                                <div
                                    data-reveal=""
                                    className="reveal-on-scroll rounded-xl border border-[var(--accent-golden)]/25 bg-[#17120d]/70 p-4"
                                >
                                    <p className="mb-1 text-base font-semibold uppercase tracking-wide text-[var(--accent-golden)]">
                                        1. Revelar
                                    </p>
                                    <p>
                                        Identificar o padrão que aciona as
                                        mesmas brigas, mesmo quando o assunto
                                        muda.
                                    </p>
                                </div>

                                <div
                                    data-reveal=""
                                    className="reveal-on-scroll rounded-xl border border-[var(--accent-golden)]/25 bg-[#17120d]/70 p-4"
                                >
                                    <p className="mb-1 text-base font-semibold uppercase tracking-wide text-[var(--accent-golden)]">
                                        2. Romper
                                    </p>
                                    <p>
                                        Interromper a reação automática com
                                        ferramenta prática, em vez de apenas
                                        "entender" o problema.
                                    </p>
                                </div>

                                <div
                                    data-reveal=""
                                    className="reveal-on-scroll rounded-xl border border-[var(--accent-golden)]/25 bg-[#17120d]/70 p-4"
                                >
                                    <p className="mb-1 text-base font-semibold uppercase tracking-wide text-[var(--accent-golden)]">
                                        3. Restaurar
                                    </p>
                                    <p>
                                        Construir uma nova dinâmica de casa com
                                        práticas semanais para transformação
                                        duradoura.
                                    </p>
                                </div>
                            </div>

                            <p
                                data-reveal=""
                                className="reveal-on-scroll mt-6 border-l-2 border-[var(--accent-golden)]/45 pl-4 text-base italic leading-relaxed text-gray-300 sm:text-lg"
                            >
                                "Não se trata de descobrir quem está certo na
                                briga. Se trata de mapear o que trava a relação
                                e devolver clareza para os dois."
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            {/* ── opportunity ── */}
            <section
                id="opportunity"
                className="bg-gradient px-4 py-24 flex flex-col gap-8"
            >
                <p className="topicB">03 · Oportunidade</p>

                <div className="flex flex-col items-center text-center gap-8 w-full">
                    <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white max-w-2xl leading-tight">
                        Continuar igual, ou entender o que está travando?
                    </h2>

                    <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                        Em 30 minutos, você vai enxergar o padrão invisível que
                        está destruindo o seu relacionamento — e descobrir se o
                        meu método é o caminho certo pra vocês. Sem compromisso.
                        Sem custo.
                    </p>

                    <a
                        href={DIAGNOSTICO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block bg-[var(--accent-golden)] text-gray-950 font-heading font-bold
                                   text-base sm:text-lg tracking-wide px-10 py-4 rounded-sm
                                   hover:brightness-110 transition-all duration-200"
                    >
                        AGENDAR DIAGNÓSTICO GRATUITO
                    </a>

                    <div className="flex gap-8 text-sm text-gray-400 font-medium tracking-wider">
                        <span>100% GRATUITO</span>
                        <span>·</span>
                        <span>SEM COMPROMISSO</span>
                        <span>·</span>
                        <span>ONLINE</span>
                    </div>
                </div>
            </section>

            {/* ── Testimonials bar ── */}
            <div
                id="prova"
                className="relative bg-black/60 border-t border-[var(--accent-golden)]/10
                           px-6 py-16 flex flex-col gap-10"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 backdrop-blur-sm pointer-events-none"
                />
                <p className="topicB">04 · Prova</p>

                <div className="relative z-[1] flex flex-col items-center gap-10 w-full">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                        {[
                            {
                                quote: "Márcio, eu não tô num casamento novo. Eu tô no mesmo casamento, com outros olhos. E isso é melhor do que eu imaginava.",
                                author: "A.",
                                detail: "38 anos · Casada há mais de 10 anos",
                            },
                            {
                                quote: "Eu passei quinze anos achando que o problema era ele. Em uma aula eu vi que o problema era uma dor que eu carrego desde pequena.",
                                author: "T.",
                                detail: "42 anos · Paciente de alinhamento de casal",
                            },
                            {
                                quote: "Eu cheguei considerando o divórcio. Saí entendendo que eu não queria separar dela, eu queria separar de uma automação minha.",
                                author: "R.",
                                detail: "45 anos · Casado há 17 anos",
                            },
                        ].map(({ quote, author, detail }) => (
                            <blockquote
                                key={author}
                                className="bg-[#1a171340] border-l-2 border-[var(--accent-golden)]/50
                                       backdrop-blur-sm p-6 rounded-sm text-gray-300 text-base leading-relaxed"
                            >
                                <p className="mb-4">&ldquo;{quote}&rdquo;</p>
                                <footer className="text-[var(--accent-golden)] font-semibold text-sm">
                                    {author}{" "}
                                    <span className="text-gray-400 font-normal">
                                        · {detail}
                                    </span>
                                </footer>
                            </blockquote>
                        ))}
                    </div>

                    <a
                        href={DIAGNOSTICO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-[var(--accent-golden)]/60 text-[var(--accent-golden)]
                               font-heading font-semibold text-sm tracking-widest px-8 py-3 rounded-sm
                               hover:bg-[var(--accent-golden)]/10 transition-all duration-200"
                    >
                        AGENDAR DIAGNÓSTICO GRATUITO
                    </a>
                </div>
            </div>
        </>
    );
}
