'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Image from "next/image";
import {
    PiPhoneFill,
    PiEnvelopeSimpleBold,
} from "react-icons/pi";

import { siteData } from "@/types/site-data";

export  default function Navbar() {
    const [isMounted, setIsMounted] = useState(false)
    const pathname = usePathname()
    const isMobile = useMediaQuery( { maxWidth: 768 } )
    
    const contactInfo = siteData.contactInfo
    const socials = siteData.socials
    const navLinks = siteData.navLinks
    const login_register = {name: "Login/Register", path: "/login"}

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <nav className="fixed top-0 z-50 w-full shadow-md bg-white">
            <div className="w-full border border-b-gray-600/60">
                <div className="px-4 mx-auto max-w-6xl">
                    <div className="flex justify-between p-1 sm:h-11 md:h-6">
                        <div className="flex flex-col space-x-8 md:flex-row md:items-center">

                            {/* Phone Number */}
                            <Link
                            href={`tel:${contactInfo.phone}`}
                            className="flex flex-row items-center px-3 text-sm font-bold rounded-md py-auto text-myblack hover:text-gray-300">
                                <PiPhoneFill className="text-xl"/>
                                {contactInfo.phone}
                            </Link>

                            {/* Email ID */}
                            <Link
                            href={`mailto:${contactInfo.email}`}
                            className="flex flex-row items-center px-3 text-sm font-bold rounded-md py-auto text-myblack hover:text-gray-300">
                                <PiEnvelopeSimpleBold className="text-xl"/>
                                {contactInfo.email}
                            </Link>
                        </div>
                        <div className="flex flex-col justify-end md:flex-row md:items-center md:space-x-8">

                            {/* Login/Register */}
                            <Link
                            href={login_register.path}
                            className="px-3 text-sm font-bold rounded-md py-auto text-myblack hover:text-gray-300">
                                {login_register.name}
                            </Link>

                            {/* Socials */}
                            <div className="flex flex-row justify-end pr-2 space-x-2 md:items-center">
                                {socials.map((acc) => {
                                    const Icon = acc.icon
                                    return (
                                    <Link
                                    key={`navlink-${acc.id}`}
                                    href={acc.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`rounded-xl px-auto py-auto text-black ${acc.color}`}>
                                        <Icon className={`text-xl`} />
                                    </Link>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 mx-auto max-w-6xl">
                <div className={`flex h-20 ${
                        isMobile && isMounted
                        ? 'justify-center'
                        : 'justify-between'
                    }`}>

                    {/* Logo */}
                    <Link href="/" className={`items-center ${
                        isMobile && isMounted
                        ? 'hidden'
                        : 'flex'
                    }`}>
                        <Image
                        src="/logo.png"
                        alt="Vedic Prakash"
                        width={200}
                        height={100}
                        priority
                        className="object-contain h-full"
                        />
                    </Link>

                    {/* Navigation Menu*/}
                    <div className={`flex items-center ${
                        isMobile && isMounted
                        ? ''
                        : 'space-x-8'
                    }`}>
                        {navLinks.map((link) => (
                            <Link
                            key={link.path}
                            href={link.path}
                            className={`px-2 py-2 rounded-md text-sm font-bold ${
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