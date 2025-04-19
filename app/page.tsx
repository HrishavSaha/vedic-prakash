import HeroBanner from "@/app/components/HeroBanner";
import About from "@/app/components/About";
import ServicesCarousel from "@/app/components/ServicesCarousel";
import ContactSection from "@/app/components/ContactSection";

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