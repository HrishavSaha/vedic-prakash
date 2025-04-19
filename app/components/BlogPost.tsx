'use client'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi"

import { siteData } from "@/types/site-data"

export default function BlogPost () {
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentBlog, setCurrentBlog] = useState<number | null>(null)
    const [isClient, setIsClient] = useState(false)

    const blogs = siteData.blogs

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