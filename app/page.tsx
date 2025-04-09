import HeroBanner from "./components/HeroBanner";
import HomeAbout from "./components/HomeAbout";
import ServicesCarousel from "./components/ServicesCarousel";
import ContactSection from "./components/ContactSection";

export default function Home() {
    return (
        <main className="relative">
            <HeroBanner />
            <HomeAbout />
            <ServicesCarousel />
            <ContactSection />
        </main>
    )
}