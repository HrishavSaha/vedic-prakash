'use client'
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import { PiCaretDownBold } from "react-icons/pi";

export default function HeroBanner() {
    const [isClient, setIsClient] = useState(false);
    const isMobile = useMediaQuery( { maxWidth: 768 } )

    useEffect(() => {
        setIsClient(true); 
    })

    const handleSmoothScroll = (e: React.MouseEvent<HTMLDivElement>, targetId: string) => {
        e.preventDefault();
        const NAVBAR_HEIGHT = 88; // height of your navbar in pixels
        const element = document.getElementById(targetId);
        const elementPosition = element?.getBoundingClientRect().top ?? 0;
        const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <section className={`relative max-h-[800px] w-full overflow-hidden ${
            isClient && isMobile ? 'h-[70vh]' : 'h-[90vh]'
        }`}>
            
            {/* Background Video/Image with Overlay */}
            <div className="absolute inset-0 z-0 my-auto">
                <video
                src="./logo_reveal.mp4"
                autoPlay
                loop
                muted
                preload="auto"
                className="flex object-cover justify-center items-center w-full h-full"
                >
                    <Image
                    src='/images/hero-bg.jpg'
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                    />
                    <div className="backdrop-blur-sm"/>
                </video>
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            {/* <div className="container px-20 relative z-10 flex h-full w-fit flex-col justify-center items-center gap-8 text-white"> */}
            {isClient && !isMobile?
                <div className="py-24 relative z-10 flex h-full w-fit flex-col justify-end items-center mx-auto text-white">
                    {/* <div className="w-full max-w-[500px] md:max-w-[600px]">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={600}
                            height={300}
                            className="w-full h-auto object-contain rounded-xl"
                            priority
                        />
                    </div> */}
                    <p className="max-w-2xl text-xl md:text-xl text-center">
                        Discover our premium services tailored just for you
                    </p>

                    <div className="flex gap-4 mt-4 flex-col items-center">
                        <Link href="/contact-us" className="px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-700 text-lg text-gray-300 hover:text-white">
                            Book an appointment
                        </Link>
                        <Link href="/services" className="px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-700 text-lg text-gray-300 hover:text-white">
                            Learn More
                        </Link>
                    </div>
                </div>
                : <div></div>}

            {/* Scrolling Indicator */}
            <div
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce hover:cursor-pointer"
            >
                <PiCaretDownBold className="h-8 w-8 text-white"/>
            </div>
        </section>
    )
}
