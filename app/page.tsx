import HeroBanner from "./components/HeroBanner";
import HomeAbout from "./components/HomeAbout";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="relative">
            <HeroBanner />
            <HomeAbout />
            <Footer />
        </main>
    )
}