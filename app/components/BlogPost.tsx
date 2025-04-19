'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi"

const blogs = [
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
]

export default function BlogPost () {
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentBlog, setCurrentBlog] = useState<number | null>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleClick = (idx: number) => {
        if (currentBlog == idx) {
            setIsExpanded(!isExpanded)
        } else {
            setCurrentBlog(idx)
            setIsExpanded(true)
        }
    }

    return (
        <section className="flex flex-col py-20 bg-gray-50 gap-5" id="blog">
            {blogs.map((blog, index) => (
                <div
                key={index}
                className={`container flex flex-col w-full h-fit mx-auto p-4 transition-all duration-500 bg-white rounded-xl ${
                    isExpanded && currentBlog == index && isClient
                    ? "gap-4"
                    : "gap-0"
                }`}>
                    <div className="flex">
                        <Button
                        className="bg-transparent w-full flex justify-start shadow-none hover:bg-transparent text-black text-6xl p-0"
                        onClick={() => handleClick(index)}
                        >
                            {isExpanded && currentBlog == index && isClient ? 
                            <PiCaretUpBold className="w-10 h-10"/> :
                            <PiCaretDownBold className="w-10 h-10"/>}
                            <h2 className="text-2xl font-bold">
                                {blog.title}
                            </h2>
                        </Button>
                    </div>
                    <div className={`pl-10 transition-all duration-500 ${
                        isExpanded && currentBlog == index && isClient
                        ? "max-h-[200px] overflow-auto"
                        : "max-h-0 overflow-hidden"
                    }`}>
                        <p className="text-gray-500 text-xl">
                            {blog.content}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}