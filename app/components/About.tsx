'use client'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { siteData } from "@/types/site-data";

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false)

    const about = siteData.about

    return (
        <section className="py-20" id="about">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="flex flex-col gap-12 items-center md:flex-row">

                    {/* Profile Image */}
                    <div className="overflow-hidden relative w-full max-w-md rounded-2xl shadow-xl aspect-square">
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
                            Hi, I'm {about.name}
                        </h2>

                        <p className="text-lg text-gray-600">
                            {about.p1}
                        </p>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">
                            {about.p2}
                            </p>

                            {/* Collapsible Content */}
                            <div className={`overflow-hidden transition-all duration-300 ${
                                isExpanded ? 'max-h-[500px]' : 'max-h-0'
                            }`}>
                                <p className="pb-4 text-gray-600">
                                {about.p3}
                                </p>
                                <p className="pb-4 text-gray-600">
                                {about.p4}
                                </p>
                            </div>

                            {/* Read More Button */}
                            <Button
                            variant='link'
                            className="p-0 h-auto font-medium text-primary"
                            onClick={() =>  setIsExpanded(!isExpanded)
                            }>
                                {isExpanded ? "Show Less" : "Show More"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}