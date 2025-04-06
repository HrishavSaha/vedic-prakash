'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    PiPhoneFill,
    PiEnvelopeSimpleBold,
    PiFacebookLogoFill,
    PiInstagramLogoFill,
    PiYoutubeLogoFill,
} from "react-icons/pi";

export  default function Navbar() {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)
    
    const contact_details = ["+91 8423323232", "vedic.prakash@gmail.com"]
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Our Services", path: "/services" },
        { name: "Contact Us", path: "/contact-us" },
    ]
    const login_register = {name: "Login/Register", path: "/login"}
    const socials = [
        {
            id:1,
            name: "Facebook",
            link: "https://facebook.com",
            color: "blue-700",
            icon: <PiFacebookLogoFill className="text-xl hover:text-blue-700"/>,
        },
        {
            id:2,
            name: "Instagram",
            link: "https://instagram.com",
            color: "pink-700",
            icon: <PiInstagramLogoFill className="text-xl hover:text-pink-500"/>,
        },
        {
            id:3,
            name: "Youtube",
            link: "https://youtube.com",
            color: "rose-700",
            icon: <PiYoutubeLogoFill className="text-xl hover:text-rose-700"/>,
        }
    ]

    useEffect(() => {
        setIsMounted(true)
    }, [])

    

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="w-full bg-amber-300">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between h-6">
                        <div className="md:flex items-center space-x-8">

                            {/* Phone Number */}
                            <Link
                            href="/" 
                            className="md:flex items-center px-3 py-auto rounded-md text-sm font-bold text-gray-700 hover:text-fuchsia-800">
                                <PiPhoneFill className="text-xl"/>
                                {contact_details[0]}
                            </Link>

                            {/* Email ID */}
                            <Link
                            href="/" 
                            className="md:flex items-center px-3 py-auto rounded-md text-sm font-bold text-gray-700 hover:text-fuchsia-800">
                                <PiEnvelopeSimpleBold className="text-xl"/>
                                {contact_details[1]}
                            </Link>
                        </div>
                        <div className="md:flex items-center space-x-8">

                            {/* Login/Register */}
                            <Link
                            href={login_register.path}
                            className="px-3 py-auto rounded-md text-sm font-bold text-gray-700 hover:text-fuchsia-800">
                                {login_register.name}
                            </Link>

                            {/* Socials */}
                            {socials.map((acc) => (
                                <Link
                                key={`navlink-${acc.id}`}
                                href={acc.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-auto py-auto rounded-xl  text-gray-700`}>
                                    {acc.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                        src="/images/navbar_logo.png"
                        alt="Vedic Prakash"
                        width={160}
                        height={60}
                        priority
                        className="h-full object-contain"
                        />
                    </Link>

                    {/* Navigation Menu*/}
                    <div className="md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                            key={link.path}
                            href={link.path}
                            className={`px-3 py-2 rounded-md text-sm font-bold ${
                                isMounted && pathname === link.path
                                ? 'text-fuchsia-700 '
                                : 'text-neutral-700 hover:bg-gray-100'
                            }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}