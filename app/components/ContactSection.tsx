"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Link from 'next/link';
import { 
    PiPhoneFill,
    PiEnvelopeSimpleBold,
    PiMapPinFill
} from "react-icons/pi";

import { siteData } from '@/types/site-data';

export default function ContactSection() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const contactInfo = siteData.contactInfo;

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            setSubmitStatus('success');
            reset();
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error creating query record:', error);
            setSubmitStatus('error');
        }
    }

    return (
        <section className='py-16' id='contact'>
            <div className='container px-4 mx-auto'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-2 text-3xl font-bold text-gray-900'>Contact Us</h2>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Get in touch with our team for any inquiries
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    {/* Left Card */}
                    <div className='overflow-hidden bg-white rounded-xl shadow-md'>
                        <div className='p-8'>
                            <h3 className='mb-6 text-2xl font-semibold text-gray-900'>Our Information</h3>

                            <div className='space-y-6'>
                                <div className='flex items-start'>
                                    <div className='p-3 mr-4 bg-blue-100 rounded-lg'>
                                        <PiPhoneFill className='w-5 h-5 text-blue-600'/>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium text-gray-900'>Phone</h4>
                                        <Link href={`tel:${contactInfo.phone}`} className='text-gray-600 transition-colors hover:text-blue-600'>
                                            {contactInfo.phone}
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <div className='p-3 mr-4 bg-blue-100 rounded-lg'>
                                        <PiEnvelopeSimpleBold className='w-5 h-5 text-blue-600'/>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium text-gray-900'>Email</h4>
                                        <Link
                                        href={`mailto:${contactInfo.email}`}
                                        className='text-gray-600 transition hover:text-blue-600 colors'>
                                        {contactInfo.email}
                                        </Link>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='p-3 mr-4 bg-blue-100 rounded-lg'>
                                    <PiMapPinFill className='w-5 h-5 text-blue-600'/>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium text-gray-900'>Address</h4>
                                        <p className='text-gray-600'>
                                        {contactInfo.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className='w-full h-64'>
                            <iframe
                            src={contactInfo.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            className='rounded-b-cl'
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className='overflow-hidden p-8 bg-white rounded-xl shadow-md'>
                        <h3 className='text-2xl dont-semibold, text-gray-900 mb-6'>Send Us a Message</h3>

                        {submitStatus === "success" &&
                        <div
                        className='p-4 mb-6 text-green-700 bg-green-100 rounded-lg'>
                            Message sent successfully! We'll get back to you soon.
                        </div>
                        }

                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                type="text"
                                id='name'
                                {...register('name', { required: 'Name is required' })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-blue-300 ${
                                    errors.name
                                    ? 'border-red-500'
                                    : 'border-blue-300'
                                }`}
                                />
                                {errors.name && (
                                    <p className='mt-1 text-sm text-red-600'>{errors.name.message as string}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                type="email"
                                id='email'
                                {...register('email',{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-blue-300 ${
                                    errors.email
                                    ? 'border-red-500'
                                    : 'border-blue-300'
                                }`}
                                />
                                {errors.email && (
                                    <p className='mt-1 text-sm text-red-600'>{errors.email.message as string}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                type="tel"
                                id='phone'
                                {...register('phone')}
                                className="px-4 py-2 w-full rounded-lg border border-blue-300 focus:outline-blue-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                id="message"
                                rows={4}
                                {...register('message', { required: "Message is required" })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-blue-300 ${
                                    errors.message
                                    ? 'border-red-500'
                                    : 'border-blue-300'
                                }`}
                                ></textarea>
                                {errors.message && (
                                    <p className='mt-1 text-sm text-red-600'>{errors.message.message as string}</p>
                                )}
                            </div>

                            <button
                            type='submit'
                            className='px-4 py-3 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}