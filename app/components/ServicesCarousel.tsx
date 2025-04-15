'use client'
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion";
import {useMediaQuery} from "react-responsive";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import CarouselCard from "./CarouselCard";
import { Service } from "@/types";

const services = [
    {
        id: 1,
        title: "Astrology",
        description: "Astrology is a range of divinatory practices, recognized as pseudoscientific since the 18th century, that propose that information about human affairs and terrestrial events may be discerned by studying the apparent positions of celestial objects.",
        image: "/globe.svg",
        readMoreLink: '/services/astrology'
    },
    {
        id: 2,
        title: "Numerology",
        description: "Numerology is the study of the mystical relationship between numbers and events, often used to gain insights into personality traits, life paths, and potential future events. It involves assigning numerical values to letters in names and dates and interpreting the resulting numbers to understand a person's core essence.",
        image: "/globe.svg",
        readMoreLink: '/services/numerology'
    },
    {
        id: 3,
        title: "Vastu Shastra",
        description: "Vastu Shastra is the shastra of rules and regulations laid down to live in harmony with the nature and its energies. If we dwell in accordance to the natural laws we are bound to be successful in every sphere of life.",
        image: "/globe.svg",
        readMoreLink: '/services/vastu-shastra'
    },
]

export default function ServicesCarousel() {
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0])
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const isMobile = useMediaQuery( { maxWidth: 768 } )
    const duplicatedServices = [...services, ...services]
    const visibleCards = isMobile ? 1 : 3
    const startIndex = currentIndex % services.length
    const visibleItems = duplicatedServices.slice(startIndex, startIndex + visibleCards + 2)

    const visibleServices: Service[] = []
    for (let i = 0; i < visibleCards; i++) {
        visibleServices.push(services[(currentIndex + i) % services.length])
    }

    useEffect(() => {
        if (!isMobile) return
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
                        Professional solutions tailored to your needs
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Navigation Arrows */}
                    <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors md:hidden"
                    aria-label="Previous services"
                    >
                        <PiCaretLeftBold className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors md:hidden"
                    aria-label="Next services"
                    >
                        <PiCaretRightBold className="w-6 h-6 text-gray-700" />
                    </button>
                    
                    {/* Cards */}
                    <div className="relative h-[500px]">
                        <AnimatePresence custom={direction} initial={false}>
                            <div className="flex gap-8 absolute inset-0 px-10">
                                {visibleServices.map((service, index) => (
                                    <CarouselCard
                                    key={`${service.id}-${currentIndex}`}
                                    service={service}
                                    direction={direction}
                                    />
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 gap-2 md:hidden">
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
                            ((idx === currentIndex || idx === (currentIndex + 1) % services.length  || idx === (currentIndex + 2) % services.length) && !isMobile) || (idx === currentIndex && isMobile)
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