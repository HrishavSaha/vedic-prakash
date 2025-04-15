import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import ServicesCarousel from "./components/ServicesCarousel";
import ContactSection from "./components/ContactSection";

export default function Home() {
    return (
        <main className="relative">
            <HeroBanner />
            <About />
            <ServicesCarousel />
            <ContactSection />
        </main>
    )
}