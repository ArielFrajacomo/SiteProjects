import FontCarousel from "../common/FontCarousel";
import logoImage from "../../assets/marcio-transparent-small-cut.png";

export default function Home() {
    return (
        <>
            <div className="bg-gradient relative w-full h-screen flex flex-col items-center justify-center text-center">
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
            </div>

            <h1 className="text-4xl mb-4">Márcio Conceição</h1>
            <p className="text-lg mb-6">
                Your one-stop solution for compatibility checks and comparisons.
            </p>
            <p className="text-lg">
                Explore our tools to find out how different technologies,
                software, and hardware stack up against each other.
            </p>
        </>
    );
}
