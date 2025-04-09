import HeroBanner from "./components/HeroBanner";
import HomeAbout from "./components/HomeAbout";
import ServicesCarousel from "./components/ServicesCarousel";

export default function Home() {
    return (
        <main className="relative">
            <HeroBanner />
            <HomeAbout />
            <ServicesCarousel />
        </main>
    )
}