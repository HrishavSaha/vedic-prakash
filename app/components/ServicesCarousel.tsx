'use client'
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import CarouselCard from "./CarouselCard";

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Custom websites built with modern technologies for optimal performance.",
        image: "/globe.svg",
        readMoreLink: '/services/web-development'
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Custom websites built with modern technologies for optimal performance.",
        image: "/globe.svg",
        readMoreLink: '/services/web-development'
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Custom websites built with modern technologies for optimal performance.",
        image: "/globe.svg",
        readMoreLink: '/services/web-development'
    },
    {
        id: 4,
        title: "Cloud Solutions",
        description: "Custom websites built with modern technologies for optimal performance.",
        image: "/globe.svg",
        readMoreLink: '/services/web-development'
    },
    {
        id: 5,
        title: "Digital Marketing",
        description: "Custom websites built with modern technologies for optimal performance.",
        image: "/globe.svg",
        readMoreLink: '/services/web-development'
    },
]

export default function ServicesCarousel() {
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0])
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const duplicatedServices = [...services, ...services]
    const visibleCards = 2
    const startIndex = currentIndex % services.length
    const visibleItems = duplicatedServices.slice(startIndex, startIndex + visibleCards + 2)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex(([prev]) => [(prev + 1) % services.length, 1])
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToNext = () => {
        setCurrentIndex(([prev]) => [(prev + 1) % services.length, 1])
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToPrev = () => {
        setCurrentIndex(([prev]) => [(prev - 1 + services.length) % services.length, -1])
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional solutions tailored to your business needs
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Navigation Arrows */}
                    <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Previous services"
                    >
                        <PiCaretLeftBold className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Next services"
                    >
                        <PiCaretRightBold className="w-6 h-6 text-gray-700" />
                    </button>
                    
                    {/* Cards */}
                    <div className="relative h-[400px]">
                        <AnimatePresence custom={direction} initial={false}>
                            <div className="flex gap-8 absolute inset-0 px-8">
                                <CarouselCard
                                service={visibleItems[0]}
                                direction={direction}
                                />
                                <CarouselCard
                                service={visibleItems[1]}
                                direction={direction}
                                />
                            </div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 gap-2">
                    {services.map((_, idx) => (
                        <button
                        key={idx}
                        onClick={() => {
                            const direction = idx > currentIndex ? 1 : -1
                            setCurrentIndex([idx, direction])
                            setIsAutoPlaying(false)
                            setTimeout(() => setIsAutoPlaying(true), 10000)
                        }}
                        className={`rounded-full transition-all ${
                            idx === currentIndex || idx === (currentIndex + 1) % services.length
                            ? 'bg-blue-600 h-3 w-3 animate-pulse'
                            : 'bg-gray-300 w-2.5 h-2.5'
                        }`}
                        aria-label={`Go to service ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}