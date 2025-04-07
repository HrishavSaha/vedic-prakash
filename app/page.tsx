import HeroBanner from "./components/HeroBanner";
import HomeAbout from "./components/HomeAbout";

export default function Home() {
    return (
        <main className="relative">
            <HeroBanner />
            <HomeAbout />
        </main>
    )
}