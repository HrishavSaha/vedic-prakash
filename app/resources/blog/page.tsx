import Header from "@/app/components/Header"

export default function BlogPage () {
    return (
        <main className="relative">
                    <Header
                    heading="Blog"
                    path={[
                        {name: "Home", url: "/"},
                        {name: "Resources", url: "/resources"},
                        {name: "Blog", url: "/resources/blog"}
                    ]}/>
                </main>
    )
}