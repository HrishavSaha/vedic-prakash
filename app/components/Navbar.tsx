'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export  default function Navbar() {
    const pathname = usePathname()

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Cards", path: "/cards" },
        { name: "Contact", path: "/contact " },
    ]

    return (
        <nav>
            <div></div>
        </nav>
    )
}