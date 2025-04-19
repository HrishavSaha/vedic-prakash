import Header from "@/app/components/Header"

export default function ServicesPage() {
    return (
        <main className="relative">
            <Header
            heading="Our Services"
            path={[
                {name: "Home", url: "/"},
                {name: "Services", url: "/services"}
            ]}/>
        </main>
    )
}