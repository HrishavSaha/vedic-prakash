import Image from "next/image";
import Link from "next/link";

import { siteData } from "@/types/site-data";

export default function Services() {
    const services = siteData.services
    
    return (
        <section className="flex flex-col py-20 bg-gray-50 gap-5" id="services">
            {services.map((service, index) => (
                <div
                key={index}
                className="container w-full p-4 mx-auto bg-gray-100 rounded-2xl"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Profile Image */}
                        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl">
                            <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                {service.title}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {service.description}
                            </p>
                            <Link
                            href={service.readMoreLink}
                            className="px-3 py-2 rounded-2xl text-lg md:text-xl bg-amber-300 hover:bg-amber-400 hover:text-amber-900 transition-all duration-300"
                            >
                            Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}