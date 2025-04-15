'use client'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="py-20 bg-gray-50" id="about">
            <div className="container max-w-6xl px-4 mx-auto">
                <div className="flex flex-col items-center gap-12 md:flex-row">

                    {/* Profile Image */}
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <Image
                        src="/globe.svg"
                        alt="Sanjiv Tiwari"
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Hi, I'm Sanjiv Tiwari
                        </h2>

                        <p className="text-lg text-gray-600">
                        Sanjiv Tiwari is a versatile individual with a diverse educational background and professional experience that shape his unique approach to occult subjects like Vedic Astrology, Vedic Numerology, and Vedic Vastu. He holds a Bachelor’s degree in Commerce and a Master’s in Business Administration (MBA) specializing in Materials Management, giving him a broad knowledge base in analytical and managerial domains. Throughout his career, he has worked with esteemed organizations like ACC and Ambuja Cement in roles involving research, development, and analytical processes.
                        </p>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">
                            Sanjiv Tiwari has a true passion for Vedic sciences, especially Astrology, Numerology, and Vastu. Fascinated by ancient wisdom, he systematically explores these occult disciplines, dedicating himself to unraveling their mysteries through expertise and exploration.
                            </p>

                            {/* Collapsible Content */}
                            <div className={`overflow-hidden transition-all duration-300 ${
                                isExpanded ? 'max-h-[500px]' : 'max-h-0'
                            }`}>
                                <p className="pb-4 text-gray-600">
                                He has earned a reputation as a renowned astrologer, offering insightful guidance and accurate predictions. His expertise enables him to analyze planetary positions, numbers in individuals’ lives, and Vastu directions, providing advice on relationships, career, health, and personal growth. His process interprets celestial bodies, zodiac signs, and planetary movements to deliver valuable insights into various life aspects. His specialized teachings highlight the interconnectedness of cosmic energies and their impact on well-being, empowering individuals to align with positive energies, make informed choices, and face life’s challenges confidently.
                                </p>
                                <p className="pb-4 text-gray-600">
                                In summary, Sanjiv Tiwari is an expert astrologer who blends technical skills with a deep understanding of occult sciences. His passion for unraveling Vedic secrets and sharing insights for individuals’ betterment reflects his commitment to holistic well-being and personal growth.
                                </p>
                            </div>

                            {/* Read More Button */}
                            <Button
                            variant='link'
                            className="text-primary p-0 h-auto font-medium"
                            onClick={() =>  setIsExpanded(!isExpanded)
                            }>
                                {isExpanded ? "Show Less" : "Read More"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}