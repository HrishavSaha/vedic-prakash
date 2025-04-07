import Image from "next/image";
import { Button } from '@/components/ui/button'
import { PiCaretDownBold } from "react-icons/pi";

export default function HeroBanner() {
    return (
        <section className="relative h-[80vh] max-h-[800px] w-full overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                src='/images/hero-bg.jpg'
                alt="Hero Background"
                fill
                priority
                className="object-cover"
                quality={100}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="container pl-22 relative z-10 flex h-full flex-col justify-center gap-8 text-white">
                <div className="w-full max-w-[500px] md:max-w-[600px]">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={600}
                        height={300}
                        className="w-full h-auto object-contain rounded-xl"
                        priority
                    />
                </div>
                <p className="max-w-2xl text-xl md:text-xl">
                    Discover our premium services and innovative solutions tailored just for you
                </p>

                <div className="flex gap-4 mt-8">
                    <Button size="lg" className="text-lg">
                        Book an Appointment
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg bg-transparent">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Scrolling Indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
                <PiCaretDownBold className="h-8 w-8 text-white"/>
            </div>
        </section>
    )
}
