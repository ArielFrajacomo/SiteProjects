import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
    const logoRef = useRef(null);
    const headerRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const header = headerRef.current;
        const logo = logoRef.current;

        // Non-home pages: logo is already minimized, always show glass header.
        if (pathname !== "/") {
            header?.classList.add("header-glass");
            return () => header?.classList.remove("header-glass");
        }

        if (!logo) return undefined;

        let rafId = 0;
        let wasMinimized = false;
        let transitionTimeout = null;

        const updateLogoPosition = () => {
            const forYou = document.getElementById("forYou");
            const travelDistance = Math.max(window.innerHeight, 1);
            const progress = Math.min(window.scrollY / travelDistance, 1);
            // "minimized" = bottom of #forYou has reached the bottom of the viewport
            const minimized = forYou
                ? window.scrollY >= forYou.offsetTop + forYou.offsetHeight - 100
                : progress >= 1;

            // Vertical position: 80vh → 3vh.
            const logoY = 80 - 77 * progress;

            if (minimized) {
                if (transitionTimeout) clearTimeout(transitionTimeout);
                logo.style.transition =
                    "left 0.3s ease, transform 0.3s ease, font-size 0.3s ease";
                logo.style.fontSize = "1.5rem";
                logo.style.left = `${window.innerWidth - 230}px`;
                logo.style.transform = `translate3d(0, 2.5rem, 0)`;
                headerRef.current?.classList.add("header-glass");
            } else {
                if (wasMinimized) {
                    // Returning from minimized — animate back, then stop tracking.
                    logo.style.transition =
                        "left 0.3s ease, transform 0.3s ease, font-size 0.3s ease";
                    transitionTimeout = setTimeout(() => {
                        logo.style.transition = "";
                    }, 350);
                } else {
                    // Normal scroll tracking — no transition delay.
                    logo.style.transition = "";
                }
                logo.style.fontSize = "";
                logo.style.left = "50%";
                logo.style.transform = `translate3d(-50%, ${logoY}vh, 0)`;
                headerRef.current?.classList.remove("header-glass");
            }
            wasMinimized = minimized;
        };

        const onScroll = () => {
            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                updateLogoPosition();
                rafId = 0;
            });
        };

        updateLogoPosition();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (rafId) window.cancelAnimationFrame(rafId);
            if (transitionTimeout) clearTimeout(transitionTimeout);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [pathname]);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 flex w-full h-24 transition-all duration-400"
        >
            <h1
                ref={logoRef}
                className={
                    pathname !== "/"
                        ? "fixed left-4 top-4 z-50 text-2xl font-bold"
                        : "fixed logo left-1/2 z-50 text-5xl sm:text-7xl font-bold will-change-transform"
                }
            >
                <span>C⚤MPATÍVEIS</span>
            </h1>
        </header>
    );
}
