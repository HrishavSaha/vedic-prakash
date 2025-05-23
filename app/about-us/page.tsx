import Header from "@/app/components/Header"
import About from "@/app/components/About"

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