'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type ContactInfo = {
    phone: string,
    email: string,
    address: string,
    mapEmbed: string
}

export default function ContactAdmin() {
    const [formData, setFormData] = useState<ContactInfo>({
        phone: "",
        email: "",
        address: "",
        mapEmbed: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/contact-info')
            const data = await res.json()
            if (data) setFormData(data)
                setIsLoading(false)
        }
        fetchData()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                router.push('/contact?updated=true')
            }
        } finally {
            setIsSubmitting(false)
        }
    }
}