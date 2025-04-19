import { IconType } from "react-icons"

// Types

type ContactInfo = {
    phone: string
    email: string
    address: string
    mapEmbed: string
}

type Service = {
    id: number
    title: string
    description: string
    image: string
    readMoreLink: string
}

type Path = {
    name: string
    url: string
}

type Social = {
    id: number
    name: string
    link: string
    color: string
    icon: IconType
}

type Blog = {
    title: string
    content: string
}

type AboutData = {
    name: string
    p1: string
    p2: string
    p3: string
    p4: string
}

type NavLink = {
    name: string
    path: string
}

type FooterLink = {
    name: string
    path: string
}

type FooterSection = {
    title: string
    footerlinks: FooterLink[]
}

// Site Data
export type SiteData = {
    services: Service[]
    socials: Social[]
    blogs: Blog[]
    navLinks: NavLink[]
    footerSections: FooterSection[]
    about: AboutData
    contactInfo: ContactInfo
}

// Interfaces

export interface HeaderProps {
    heading: string
    path: Array<Path>
}

export interface CarouselCardProps {
    service: Service
    direction: number
}