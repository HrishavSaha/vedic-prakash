'use client'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeAbout() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="py-20 bg-gray-50" id="about">
            <div className="container max-w-6xl px-4 mx-auto">
                <div className="flex flex-col items-center gap-12 md:flex-row">

                    {/* Profile Image */}
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <Image
                        src="/globe.svg"
                        alt="Sanjay Tiwari"
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Hi, I'm Sanjay Tiwari
                        </h2>

                        <p className="text-lg text-gray-600">
                        With over 10 years of experience in web development, I founded this company to deliver 
                        exceptional digital solutions. My passion for clean code and user-centric design drives 
                        every project.
                        </p>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">
                            Previously lead developer at TechCorp, I've helped over 50 clients transform their 
                            online presence. My expertise spans React, Node.js, and cloud architecture.
                            </p>

                            {/* Collapsible Content */}
                            <div className={`overflow-hidden transition-all duration-300 ${
                                isExpanded ? 'max-h-[500px]' : 'max-h-0'
                            }`}>
                                <p className="pb-4 text-gray-600">
                                When I'm not coding, you'll find me mentoring at local bootcamps or hiking with my 
                                golden retriever. I believe technology should empower businesses while maintaining 
                                human connection.
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