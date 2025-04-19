import Image from "next/image"
import Link from "next/link"

import { HeaderProps } from "@/types"

export default function Header({ heading, path }: HeaderProps) {
    return (
        <section className="relative h-[20vh] w-full overflow-hidden">

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

            {/* Heading */}
            <div className="container z-10 relative h-full mx-auto flex flex-col justify-center items-center gap-4 text-white">
                <h1 className="max-w-2xl text-2xl">{heading}</h1>
                <div>
                    {path.map((elem, index, arr) => (
                        <Link
                        key={`${elem.url}-${index}`}
                        href={elem.url}
                        className="max-w-2xl text-2xl "
                        >{elem.name}{index !== (path.length - 1) ? " / " : "" }</Link>
                    ))}
                </div>
            </div>
        </section>
    )
}