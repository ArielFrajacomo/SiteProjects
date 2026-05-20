import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export default function VanishingCard({
    Title = "",
    children,
    className = "",
}) {
    const cardRef = useRef(null);
    const cardStyle = cn(
        "bg-[#1a171311] border-l-2 border-[var(--accent-golden)]/50 ring-1 ring-[var(--accent-golden)]/20",
        "backdrop-blur-sm p-1 sm:p-3 max-w-md mx-auto mt-10 h-[33vh] sm:h-[25vh] w-[40vw] min-w-[250px] p-5",
        "text-white text-md sm:text-lg font-medium text-left",
        className,
    );

    const vanishingTrigger = {
        // considering 1vh as the unit, the card will start vanishing when the top of the card is at 80% of the viewport height and will be completely vanished when it reaches 20% of the viewport height
        top: 0.6,
        bottom: 0.4,
    };

    function handleScroll() {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const cardTop = rect.top / windowHeight;
        const cardBottom = rect.bottom / windowHeight;
        let opacity = 0;
        let pointZero = 0;

        if (cardTop > vanishingTrigger.top) {
            pointZero = vanishingTrigger.top + 0.1;
            opacity =
                1 -
                (cardTop - vanishingTrigger.top) /
                    (pointZero - vanishingTrigger.top);
            opacity = Math.max(0, Math.min(1, opacity));
        } else if (cardBottom < vanishingTrigger.bottom) {
            pointZero = vanishingTrigger.bottom - 0.1;
            opacity =
                (cardBottom - pointZero) /
                (vanishingTrigger.bottom - pointZero);
            opacity = Math.max(0, Math.min(1, opacity));
        } else if (
            cardTop < vanishingTrigger.top &&
            cardBottom > vanishingTrigger.bottom
        ) {
            opacity = 1;
        }
        card.style.opacity = opacity;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll(); // set initial opacity
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div ref={cardRef} className={`vanishingCard ${cardStyle}`}>
            {Title && (
                <h2 className="text-2xl font-bold italic text-[var(--accent-golden)] mb-4">
                    {Title}
                </h2>
            )}
            {children}
        </div>
    );
}
