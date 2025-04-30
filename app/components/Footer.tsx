'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import {
    PiDownloadSimpleBold,
    PiCheckFatFill
} from "react-icons/pi";

import { siteData } from "@/types/site-data";

export default function Footer() {
    const [downloading, setDownloading] = useState<string | null>(null)
    
    const socials = siteData.socials
    const contactInfo = siteData.contactInfo
    const footerSections = siteData.footerSections
    const download_icon = <PiDownloadSimpleBold className="text-xl"/>
    const downloading_icon = <PiCheckFatFill className="text-xl"/>

    const handleFileDownload = (fileName: string) => {
        setDownloading(fileName)
        setTimeout(() => setDownloading(null), 3000)
    }

    return (
        <footer className="pt-16 pb-8 text-gray-300 bg-gray-900">
            <div className="container px-4 mx-auto max-w-7xl">

                {/* Main Footer Columns */}
                <div className="grid grid-cols-1 gap-12 pb-4 md:grid:cols-2 lg:grid-cols-4 md-12">

                    {/* Column 1: Quote and Socials */}
                    <div className="space-y-6">
                        <blockquote className="text-xl italix">
                        "Divine services for the divine being."
                        </blockquote>
                        <div className="flex space-x-4">
                            {socials.map((acc) => {
                                const Icon = acc.icon
                                return (
                                <Link
                                key={`navlink-${acc.id}`}
                                href={acc.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-300 rounded-xl px-auto py-auto ${acc.color}`}>
                                    <Icon className={`text-xl`} />
                                </Link>
                            )})}
                        </div>
                    </div>

                    {/* Column 2 & 3: Quick Links & Resources */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.footerlinks.map((link) => (
                                    <li key={link.name}><a href={link.path} className="transition-colors hover:text-white">{link.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 4: Location Map */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
                        <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                            <iframe
                                src={contactInfo.mapEmbed}
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-lg"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Download Links */}
                <div className="pt-4 border-t border-gray-800">
                    <div className="flex flex-wrap gap-20 justify-center">
                        <Link
                            href="/downloads/hi.txt"
                            download
                            onClick={() => handleFileDownload('KP Brochure')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                downloading === "KP Brochure"
                                ? 'bg-green-600 text-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}>
                            {downloading === "KP Brochure" ?
                            downloading_icon :
                            download_icon}
                            Download Brochure KP Astrology
                        </Link>
                        <Link
                            href="/downloads/hi.txt"
                            download
                            onClick={() => handleFileDownload('Numerology Brochure')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                downloading === "Numerology Brochure"
                                ? 'bg-green-600 text-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}>
                            {downloading === "Numerology Brochure" ?
                            downloading_icon :
                            download_icon}
                            Download Brochure Numerology
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-4 mt-8 text-sm text-center text-gray-500 border-t border-gray-800">
                    <p>Copyright Vedic Prakash 2025. All Rights Reserved. | Designed by MH Technologies</p>
                </div>
            </div>
        </footer>
    )
}