import Link from "next/link"

export default function NotFound() {
    return (
        <section className="flex py-30 bg-gray-50 gap-5" >
            <div className="container flex flex-col py-30 rounded-3xl w-full gap-8 text-center mx-auto bg-gray-100">
                <h1 className="text-9xl font-bold text-gray-900">404</h1>
                <h2 className="text-5xl font-bold text-gray-900">Page not found</h2>
                <Link href="/" className="text-2xl text-gray-500 hover:text-gray-700">Navigate to Home</Link>
            </div>
        </section>
    )
}