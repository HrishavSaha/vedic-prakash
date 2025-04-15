import Header from "../components/Header"
import About from "../components/About"

export default function AboutUsPage() {
    return (
        <main className="relative">
            <Header
            heading="About Us"
            path={[
                {name: "Home", url: "/"},
                {name: "About Us", url: "/about-us"}
            ]}/>
            <About />
        </main>
    )
}