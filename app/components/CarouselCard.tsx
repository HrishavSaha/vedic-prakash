import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiCaretRightBold } from "react-icons/pi";

import { CarouselCardProps } from "@/types";

export default function CarouselCard({ service, direction }: CarouselCardProps) {
    const x_drift = 50
    
    return (
        <motion.div
        key = {service.id}
        custom={direction}
        initial={{
            opacity: 0,
            x: direction === 1 ? x_drift : -x_drift
        }}
        animate={{
            opacity: 1,
            x: 0,
        }}
        className='w-full md:w-1/2'
        >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48">
                    <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                    href={service.readMoreLink}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Read More
                        <PiCaretRightBold className="ml-1"/>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}