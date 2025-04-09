'use client'
import { section } from 'framer-motion/client';
import { useForm } from 'react-hook-form'
import Link from 'next/link';
import { 
    PiPhoneFill,
    PiEnvelopeSimpleBold,
    PiMapPinFill
} from "react-icons/pi";

export default function ContactSection() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <section className='py-16 bg-gray-50' id='contact'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>Contact Us</h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Get in touch with our team for any inquiries
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Left Card */}
                    <div className='bg-white rounded-xl shadow-md overflow-hidden'>
                        <div className='p-8'>
                            <h3 className='text-2xl font-semibold text-gray-900 mb-6'>Our Information</h3>

                            <div className='space-y-6'>
                                <div className='flex items-start'>
                                    <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                                        <PiPhoneFill className='text-blue-600 w-5 h-5'/>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium text-gray-900'>Phone</h4>
                                        <Link href="tel:+1234567890" className='text-gray-600 hover:text-blue-600 transition-colors'>
                                            +1 (234) 567-890
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                                        <PiEnvelopeSimpleBold className='text-blue-600 w-5 h-5'/>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium text-gray-900'>Email</h4>
                                        <Link href="mailto:info@yourcompany.com" className='text-gray-600 hover:text-blue-600 transition colors'>
                                        info@yourcompany.com
                                        </Link>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                                    <PiMapPinFill className='text-blue-600 w-5 h-5'/>
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium text-gray-900'>Address</h4>
                                        <p className='text-gray-600'>
                                            123 Business Ave, Suite 100 <br />
                                            San Francisco, CA 94107
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className='h-64 w-full'>
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.158170833922!2d-122.41990648468236!3d37.77492997975922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading='lazy'
                            className='rounded-b-cl'
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className='bg-white rounded-xl shadow-md overflow-hidden p-8'>
                        <h3 className='text-2xl dont-semibold, text-gray-900 mb-6'>Send Us a Message</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                type="text"
                                id='name'
                                {...register('name', { required: 'Name is required' })}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus: border-blue-500 ${
                                    errors.name
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                }`}
                                />
                                {errors.name && (
                                    <p className='mt-1 text-sm text-red-600'>{errors.name.message as string}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus: border-blue-500 ${
                                    errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                }`}
                                />
                                {errors.email && (
                                    <p className='mt-1 text-sm text-red-600'>{errors.email.message as string}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                type="tel"
                                id='phone'
                                {...register('phone')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus: border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                id="message"
                                rows={4}
                                {...register('message', { required: "Message is required" })}
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus: border-blue-500 ${
                                    errors.message
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                }`}
                                ></textarea>
                                {errors.message && (
                                    <p className='mt-1 text-sm text-red-600'>{errors.message.message as string}</p>
                                )}
                            </div>

                            <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium'
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