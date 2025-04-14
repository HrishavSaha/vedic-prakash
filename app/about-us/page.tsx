import Header from "../components/Header"

export default function AboutUsPage() {
    return (
        <main className="relative">
            <Header
            heading="About Us"
            path={[
                {name: "Home", url: "/"},
                {name: "About Us", url: "/about-us"}
            ]}
            />
        </main>
    )
}