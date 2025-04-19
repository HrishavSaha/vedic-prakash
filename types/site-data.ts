import { SiteData } from "@/types";
import {
    PiFacebookLogoFill,
    PiInstagramLogoFill,
    PiYoutubeLogoFill
} from "react-icons/pi";

export const siteData: SiteData = {
    services: [
        {
            id: 1,
            title: "Astrology",
            description: "Astrology is a range of divinatory practices, recognized as pseudoscientific since the 18th century, that propose that information about human affairs and terrestrial events may be discerned by studying the apparent positions of celestial objects.",
            image: "/globe.svg",
            readMoreLink: '/services/astrology'
        },
        {
            id: 2,
            title: "Numerology",
            description: "Numerology is the study of the mystical relationship between numbers and events, often used to gain insights into personality traits, life paths, and potential future events. It involves assigning numerical values to letters in names and dates and interpreting the resulting numbers to understand a person's core essence.",
            image: "/globe.svg",
            readMoreLink: '/services/numerology'
        },
        {
            id: 3,
            title: "Vastu Shastra",
            description: "Vastu Shastra is the shastra of rules and regulations laid down to live in harmony with the nature and its energies. If we dwell in accordance to the natural laws we are bound to be successful in every sphere of life.",
            image: "/globe.svg",
            readMoreLink: '/services/vastu-shastra'
        },
    ],
    socials: [
        {
            id:1,
            name: "Facebook",
            link: "https://facebook.com",
            color: "blue-700",
            icon: PiFacebookLogoFill
        },
        {
            id:2,
            name: "Instagram",
            link: "https://instagram.com",
            color: "pink-500",
            icon: PiInstagramLogoFill
        },
        {
            id:3,
            name: "Youtube",
            link: "https://youtube.com",
            color: "rose-700",
            icon: PiYoutubeLogoFill
        }
    ],
    blogs: [
        {
            title: "Manglik Dosha in Astrology",
            content: "Manglik Dosha, also known as Mangal Dosha or Kuja Dosha, is identified in a natal chart, particularly for marriage compatibility and Kundali matching. This astrological flaw arises from the placement of Mars in the chart, depending on its strength and degree."
        }, 
        {
            title: "How to Determine Manglik Dosha?",
            content: "Manglik Dosha occurs when Mars is in the 1st, 2nd, 4th, 7th, 8th, or 12th house of the natal chart. Mars' presence or aspect in these houses affects relationships, often causing extreme anger in the individual, leading to marriage and relationship issues."
        }, 
        {
            title: "The Influence of Mars",
            content: "Mars is linked to energy, assertiveness, passion, and aggression. When positioned in the mentioned houses, these traits may manifest in the person’s personality, impacting marital interactions. Potential negative effects include conflict in relationships, delayed marriage, marital challenges and health issues."
        },
        {
            title: "Remedies for Manglik Dosha",
            content: "Manglik Dosha can cause problems, especially during Mars’ Mahadasha or Antardasha. Common remedies to reduce its negative effects include Mangal Dosha Nivaran Pooja, wearing a coral gemstone, fasting on tuesdays, offering chola to Hanuman Temple on Thursdays, donating red items on tuesdays, chanting Hanuman Chalisa daily."
        },
    ],
    navLinks: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Our Services", path: "/services" },
        { name: "Contact Us", path: "/contact-us" },
    ],
    footerSections: [
        {
            title: "Quick Links",
            footerlinks: [
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact", path: "/contact-us" },
            ]
        },
        {
            title: "Resources",
            footerlinks: [
                { name: "Blog", path: "/resources/blog" },
                { name: "Documentation", path: "/docs" },
                { name: "FAQ", path: "/faq" },
                { name: "Support", path: "/support" },
            ]
        },
    ],
    about: {
        name: "Sanjiv Tiwari",
        p1: "Sanjiv Tiwari is a versatile individual with a diverse educational background and professional experience that shape his unique approach to occult subjects like Vedic Astrology, Vedic Numerology, and Vedic Vastu. He holds a Bachelor’s degree in Commerce and a Master’s in Business Administration (MBA) specializing in Materials Management, giving him a broad knowledge base in analytical and managerial domains. Throughout his career, he has worked with esteemed organizations like ACC and Ambuja Cement in roles involving research, development, and analytical processes.",
        p2: "Sanjiv Tiwari has a true passion for Vedic sciences, especially Astrology, Numerology, and Vastu. Fascinated by ancient wisdom, he systematically explores these occult disciplines, dedicating himself to unraveling their mysteries through expertise and exploration.",
        p3: "He has earned a reputation as a renowned astrologer, offering insightful guidance and accurate predictions. His expertise enables him to analyze planetary positions, numbers in individuals’ lives, and Vastu directions, providing advice on relationships, career, health, and personal growth. His process interprets celestial bodies, zodiac signs, and planetary movements to deliver valuable insights into various life aspects. His specialized teachings highlight the interconnectedness of cosmic energies and their impact on well-being, empowering individuals to align with positive energies, make informed choices, and face life’s challenges confidently.",
        p4: "In summary, Sanjiv Tiwari is an expert astrologer who blends technical skills with a deep understanding of occult sciences. His passion for unraveling Vedic secrets and sharing insights for individuals’ betterment reflects his commitment to holistic well-being and personal growth."
    },
    contactInfo: {
        phone: "+91 95099 43567",
        email: "info@vedicprakash.com",
        address: "Kanak Vihar, Jaipur-302024",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.530656233951!2d75.71194501205284!3d26.88664896111099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5003c9e348b%3A0x8932ff647efc93fd!2sAaradhya%20Govind%20residency!5e0!3m2!1sen!2sin!4v1744736860224!5m2!1sen!2sin"
    }
}