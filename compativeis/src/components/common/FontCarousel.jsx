import "./FontCarousel.css";
import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function FontCarousel({
    text = "Demonstration",
    direction = "right",
    speed = 10,
    className = "",
    containerClassName = "",
    colors = ["#3b82f6", "#9333ea"],
    gradientType = "linear",
    gradientPosition = ["50%", "50%"],
    gradientRadius = "75%",
    style,
    ...props
}) {
    const viewportRef = useRef(null);
    const svgRef = useRef(null);
    const textARef = useRef(null);
    const textBRef = useRef(null);
    const gradientId = useId().replace(/:/g, "");
    const gradientColors = colors.length > 0 ? colors : ["#3b82f6", "#9333ea"];
    const normalizedPosition = Array.isArray(gradientPosition)
        ? gradientPosition
        : String(gradientPosition).trim().split(/\s+/);
    const gradientX = normalizedPosition[0] || "50%";
    const gradientY = normalizedPosition[1] || "50%";

    useLayoutEffect(() => {
        const viewport = viewportRef.current;
        const svg = svgRef.current;
        const textA = textARef.current;
        const textB = textBRef.current;

        if (!viewport || !svg || !textA || !textB) {
            return undefined;
        }

        const isReverse = direction.toLowerCase() === "right";
        const resizeObserver = new ResizeObserver(() => initAnimation());
        let travel = 0;
        let posA = 0;
        let posB = 0;
        let velocity = 0;

        const tick = (_time, deltaMs) => {
            if (!travel) {
                return;
            }

            const delta = (deltaMs / 1000) * velocity;
            posA += delta;
            posB += delta;

            if (velocity < 0) {
                if (posA <= -travel) {
                    posA = posB + travel;
                }
                if (posB <= -travel) {
                    posB = posA + travel;
                }
            } else {
                if (posA >= travel) {
                    posA = posB - travel;
                }
                if (posB >= travel) {
                    posB = posA - travel;
                }
            }

            gsap.set(textA, { x: posA });
            gsap.set(textB, { x: posB });
        };

        const stopAnimation = () => {
            gsap.ticker.remove(tick);
        };

        const initAnimation = () => {
            stopAnimation();

            travel = Math.ceil(textA.getComputedTextLength());
            if (!travel) {
                return;
            }

            const box = textA.getBBox();
            const textHeight = Math.max(1, Math.ceil(box.height));
            viewport.style.height = `${textHeight}px`;
            svg.setAttribute(
                "viewBox",
                `0 0 ${Math.max(1, viewport.clientWidth)} ${textHeight}`,
            );

            const duration = Math.max(1, speed);
            velocity = (isReverse ? 1 : -1) * (travel / duration);
            posA = 0;
            posB = isReverse ? -travel : travel;

            gsap.set(textA, { x: posA });
            gsap.set(textB, { x: posB });
            gsap.ticker.add(tick);
        };

        resizeObserver.observe(viewport);
        resizeObserver.observe(svg);
        initAnimation();

        return () => {
            resizeObserver.disconnect();
            stopAnimation();
        };
    }, [direction, speed, text]);

    return (
        <div
            className={`font-carousel ${containerClassName}`.trim()}
            style={style}
            {...props}
        >
            <div className="font-carousel-viewport" ref={viewportRef}>
                <svg
                    ref={svgRef}
                    className="font-carousel-svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        {gradientType === "radial" ? (
                            <radialGradient
                                id={gradientId}
                                cx={gradientX}
                                cy={gradientY}
                                fx={gradientX}
                                fy={gradientY}
                                r={gradientRadius}
                            >
                                {gradientColors.map((color, index) => {
                                    const offset =
                                        gradientColors.length === 1
                                            ? "0%"
                                            : `${(index / (gradientColors.length - 1)) * 100}%`;

                                    return (
                                        <stop
                                            key={`${gradientId}-${color}-${offset}`}
                                            offset={offset}
                                            stopColor={color}
                                        />
                                    );
                                })}
                            </radialGradient>
                        ) : (
                            <linearGradient
                                id={gradientId}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                {gradientColors.map((color, index) => {
                                    const offset =
                                        gradientColors.length === 1
                                            ? "0%"
                                            : `${(index / (gradientColors.length - 1)) * 100}%`;

                                    return (
                                        <stop
                                            key={`${gradientId}-${color}-${offset}`}
                                            offset={offset}
                                            stopColor={color}
                                        />
                                    );
                                })}
                            </linearGradient>
                        )}
                    </defs>
                    <text
                        ref={textARef}
                        x="0"
                        y="0"
                        dominantBaseline="hanging"
                        fill={`url(#${gradientId})`}
                        className={`font-carousel-text ${className}`.trim()}
                    >
                        {text}
                    </text>
                    <text
                        ref={textBRef}
                        x="0"
                        y="0"
                        dominantBaseline="hanging"
                        fill={`url(#${gradientId})`}
                        className={`font-carousel-text ${className}`.trim()}
                        aria-hidden="true"
                    >
                        {text}
                    </text>
                </svg>
            </div>
        </div>
    );
}
