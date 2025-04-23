import Header from "@/app/components/Header"
import Services from "@/app/components/ServicesSection"

export default function ServicesPage() {
    return (
        <main className="relative">
            <Header
            heading="Our Services"
            path={[
                {name: "Home", url: "/"},
                {name: "Services", url: "/services"}
            ]}/>
            <Services />
        </main>
    )
}