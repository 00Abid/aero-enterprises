import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {

    const items = [
        {
            icon: <MapPin size={20} />,
            title: 'Our Location',
            description: (
                <>
                    Gala No. 1 , Khan Compound ,<br />
                    Near Gausiya Weight Kata , Dhumal Nagar <br />
                    Vasai - 401208 Palghar
                </>
            ),
        },
        {
            icon: <Phone size={20} />,
            title: 'Call Us',
            description: (
                <>
                    +91 9096105019 <br />
                    +91 7972547196 <br />
                    Mon-Sat, 9AM-9PM
                </>
            ),
        },
        {
            icon: <Mail size={20} />,
            title: 'Email Us',
            description: (
                <>
                    aeroenterprises00@gmail.com
                </>
            ),
        },
    ];

    return (

        <div className='bg-white'>
            <section className=' blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4'>
                    <h2 className="text-3xl text-white  pb-4">
                        Contact Us
                    </h2>
                    <p className=' text-white'>
                        Get in touch with our team for inquiries, quotes about our sheet metals.
                    </p>
                </div>
            </section>




            {/* Address Section */}
            <section className="overflow-hidden shadow-lg rounded-lg h-full flex flex-col w-[90vw] md:w-1/2 mt-16 mb-3 mx-auto" data-aos="zoom-in-up">
                <div className="bg-blue-50 p-6">
                    <h2 className="text-2xl font-medium text-[#36566d]">Get In Touch</h2>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#36566d]">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col">
                                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>




            {/* map Section */}
            <section className="bg-white py-16 shadow-lg" data-aos="zoom-in-up">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="overflow-hidden shadow-lg rounded-lg border-none w-full">
                            <div className="bg-blue-50 p-6">
                                <h2 className="text-2xl font-medium text-[#36566d]">Find Us</h2>
                            </div>
                            <div className="h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4474.682414511289!2d72.86275475252646!3d19.423446580849866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9b747bf5dc7%3A0x25cd218db9d15dc7!2sAERO%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1746014066999!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="AERO ENTERPRISES Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
