// 'use client'
// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"

// type ContactInfo = {
//     phone: string,
//     email: string,
//     address: string,
//     mapEmbed: string
// }

// export default function ContactAdmin() {
//     const [formData, setFormData] = useState<ContactInfo>({
//         phone: "",
//         email: "",
//         address: "",
//         mapEmbed: ""
//     })
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [isLoading, setIsLoading] = useState(true)
//     const router = useRouter()

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch('/api/contact-info')
//             const data = await res.json()
//             if (data) setFormData(data)
//                 setIsLoading(false)
//         }
//         fetchData()
//     }, [])

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target
//         setFormData(prev => ({ ...prev, [name]: value }))
//     }

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault()
//         setIsSubmitting(true)

//         try {
//             const response = await fetch('/api/contact-info', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData)
//             })

//             if (response.ok) {
//                 router.push('/contact?updated=true')
//             }
//         } finally {
//             setIsSubmitting(false)
//         }
//     }

//     return (
//         <div className="max-w-2xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6">Update Contact Information</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name
//                     </label>
//                     <input
//                     type="text"
//                     id='name'
//                     {...register('name', { required: 'Name is required' })}
//                     className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus: border-blue-500 ${
//                     errors.name
//                                     ? 'border-red-500'
//                                     : 'border-gray-300'
//                                 }`}
//                                 />
//                                 {errors.name && (
//                                     <p className='mt-1 text-sm text-red-600'>{errors.name.message as string}</p>
//                                 )}
//                 </div>
//             </form>
//         </div>
//     )
// }