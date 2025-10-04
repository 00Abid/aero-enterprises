import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MoveRight, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden" data-aos="fade-up">
            <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-sm font-semibold text-black">{question}</h3>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
            </button>
            {isOpen && (
                <div className="dark-metal-card m-4 rounded-lg">
                    <p className="text-sm text-white p-4">{answer}</p>
                </div>
            )}
        </div>
    );
};

const Home =
    () => {
        const excellenceFeatures = [
            {
                title: 'State-of-the-Art Facilities',
                description: 'Source quality sheet metal through our reliable network.',
            },
            {
                title: 'Expert Engineering',
                description: 'Get the right sheet metal with our in-depth knowledge.',

            },
            {
                title: 'Quality Materials',
                description: 'Quality sheet metal for superior product performance.',


            },
        ];

        const companies = [
            {
                name: 'SAGAR METAL CUTTING WORKS',
                desc: 'Turning Sheet Metals into Precision Masterpieces',
                url: 'https://smcw.netlify.app/',
            },
            {
                name: 'AERO MOTOLITE',
                desc: 'Your Trusted Source for Automotive, Lights and Accesories ',
                url: 'https://aeromotolite.vercel.app/',
            },
        ];

        return (
            <>
                <SEOHead
                    title="AERO ENTERPRISES - Premium Sheet Metal Supplier in Vasai, Maharashtra"
                    description="AERO ENTERPRISES is your trusted partner for precision sheet metal supply. We offer high-quality CRC, HR, GI, SS, and Pickle sheets for automotive, construction, and industrial applications in Vasai, Maharashtra."
                    canonical="https://www.aeroenterprises.shop/"
                />
                <section className='bg-white overflow-hidden'>

                    {/* Hero Section */}
                    <div className="relative w-full h-screen min-h-[100vh] overflow-hidden hero-section">
                        <img src='/hero-image.webp' alt="Premium sheet metal coils and steel products at AERO ENTERPRISES manufacturing facility in Vasai"
                            className="absolute inset-0 w-full h-full object-cover object-center hero-image">
                        </img>

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Text overlay */}
                        <div className="absolute inset-0 flex flex-col justify-center md:items-center md:text-center px-4 z-10" data-aos="zoom-in-up">
                            <h1 className="text-5xl text-white leading-tight">
                                AERO ENTERPRISES
                            </h1>
                            <p className="text-lg text-white mt-4 max-w-4xl">
                                Your Trusted Sheet Metal Supplier
                            </p>
                        </div>
                    </div>

                    {/* Excellence section */}
                    <div className="bg-white py-20">
                        <div className="md:text-center max-w-3xl mx-auto mb-16 px-4">
                            <h2 className="text-3xl text-black">Our Excellence</h2>
                        </div>

                        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-15 px-4">
                            {excellenceFeatures.map((feature, index) => (
                                <div key={index} className="w-auto h-auto md:mx-6" data-aos="fade-left">
                                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-black"> {feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Capabilities Section */}
                    <div className="py-16 bg-[#F5F7FA]">
                        <div className="md:text-center max-w-3xl md:mx-auto px-4 mb-8">
                            <h2 className="text-3xl text-black">Our Capabilities</h2>
                        </div>

                        <div className="md:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                            <div className="h-32 dark-metal-card p-6 rounded-lg md:text-center shadow-sm" data-aos="fade-right">
                                <h3 className="text-lg font-semibold">Precision Cutting</h3>
                                <p className="mt-2 ">Clean and precise cuts with technology.</p>
                            </div>

                            <div className="h-32 dark-metal-card p-6 rounded-lg md:text-center shadow-sm" data-aos="fade-right">
                                <h3 className="text-lg font-semibold">Material Sourcing</h3>
                                <p className="mt-2 ">High-quality sheet metal from trusted suppliers.</p>
                            </div>

                            <div className="h-32 dark-metal-card p-6 rounded-lg md:text-center shadow-sm" data-aos="fade-right">
                                <h3 className="text-lg font-semibold">Quality Assurance</h3>
                                <p className="mt-2 ">Reliable quality through strict checks.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="py-16 flex flex-col md:flex-row justify-evenly items-start gap-8">
                        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-10">
                            <div>
                                <h2 className="text-3xl text-black">Why Choose Us</h2>
                            </div>
                            <div className="flex flex-col gap-8 mt-8">
                                <div data-aos="fade-left">
                                    <h3 className="text-lg font-semibold text-black">Industry Leading Quality</h3>
                                    <p className="text-gray-700">Exceeding industry norms with top-tier quality.</p>
                                </div>
                                <div data-aos="fade-left">
                                    <h3 className="text-lg font-semibold text-black">Expert Team</h3>
                                    <p className="text-gray-700">Skilled professionals delivering quality solutions for all your sheet metal needs.</p>
                                </div>
                                <div data-aos="fade-left">
                                    <h3 className="text-lg font-semibold text-black">On-Time Delivery</h3>
                                    <p className="text-gray-700">Timely delivery without sacrificing quality.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 mx-auto px-4 pt-8" data-aos="zoom-in-up">
                            <img src="/about-us.webp" alt="AERO ENTERPRISES team working with precision sheet metal fabrication equipment and quality steel products" className="rounded-xl" loading="lazy" />
                        </div>
                    </div>

                    {/* Group of Companies Section */}
                    <div className="pt-16 bg-[#F5F7FA]">
                        <div className="md:text-center max-w-3xl mx-auto px-4 mb-8">
                            <h2 className="text-3xl text-black">Group of Companies</h2>
                        </div>

                        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 ">
                            {companies.map((company, index) => (
                                <a
                                    key={index}
                                    href={company.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="dark-metal-card p-6 rounded-lg md:text-center shadow-sm h-48 flex flex-col justify-center md:items-center" data-aos="fade-right">
                                        <h3 className="text-lg font-semibold ">{company.name}</h3>
                                        <p className="pt-1">{company.desc}</p>
                                        <button className="pt-3 md:pt-5 text-white flex gap-4 md:justify-center items-center transition-all duration-500 hover:scale-105 focus:scale-105 active:scale-105">
                                            Visit Site
                                            <MoveRight className='animate-bounce' />
                                        </button>

                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="py-16 bg-white">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="text-3xl text-black md:text-center mb-12">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <FAQItem
                                    question="What types of sheet metal do you supply?"
                                    answer="We supply CRC (Cold Rolled Coil), HR (Hot Rolled), GI (Galvanized Iron), SS (Stainless Steel), and Pickle sheets for various industrial applications including automotive, construction, and manufacturing."
                                />
                                <FAQItem
                                    question="Do you provide custom sheet metal cutting services?"
                                    answer="Yes, we offer precision cutting services with advanced technology to meet your exact specifications. Our expert team ensures clean and accurate cuts for all types of sheet metal."
                                />
                                <FAQItem
                                    question="What is your delivery area?"
                                    answer="We are based in Vasai, Maharashtra, and serve customers across India. We ensure timely delivery without compromising on quality, with our reliable logistics network."
                                />
                                <FAQItem
                                    question="How do you ensure quality in your sheet metal products?"
                                    answer="We maintain strict quality assurance protocols, source materials from trusted suppliers, and conduct thorough quality checks at every stage to ensure industry-leading standards."
                                />
                                <FAQItem
                                    question="What industries do you serve?"
                                    answer="We serve diverse industries including automotive manufacturing, construction, HVAC systems, appliance manufacturing, aerospace components, marine applications, and general engineering projects."
                                />
                                <FAQItem
                                    question="What are the minimum order quantities?"
                                    answer="We accommodate both small and large orders. Our minimum order quantities vary by product type and thickness. Contact us to discuss your specific requirements and we'll provide flexible solutions."
                                />
                                <FAQItem
                                    question="Do you offer technical support and consultation?"
                                    answer="Yes, our experienced engineering team provides technical consultation to help you select the right materials and specifications for your projects. We offer guidance on material properties, applications, and cost optimization."
                                />
                                <FAQItem
                                    question="What payment methods do you accept?"
                                    answer="We accept various payment methods including bank transfers, credit cards, cash payments, and for established customers, we offer flexible credit terms with proper documentation."
                                />
                                <FAQItem
                                    question="How long does delivery typically take?"
                                    answer="Delivery times vary based on order size and location. For standard products within Maharashtra, we typically deliver within 2-3 days. For custom orders or distant locations, delivery may take 5-7 days."
                                />
                                <FAQItem
                                    question="Do you provide material certificates and test reports?"
                                    answer="Yes, we provide material certificates, mill test certificates, and quality test reports for all our products. This ensures complete traceability and compliance with industry standards and customer requirements."
                                />
                            </div>
                        </div>

                        {/* FAQ Schema */}
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "FAQPage",
                                    "mainEntity": [
                                        {
                                            "@type": "Question",
                                            "name": "What types of sheet metal do you supply?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We supply CRC (Cold Rolled Coil), HR (Hot Rolled), GI (Galvanized Iron), SS (Stainless Steel), and Pickle sheets for various industrial applications including automotive, construction, and manufacturing."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Do you provide custom sheet metal cutting services?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes, we offer precision cutting services with advanced technology to meet your exact specifications. Our expert team ensures clean and accurate cuts for all types of sheet metal."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What is your delivery area?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We are based in Vasai, Maharashtra, and serve customers across India. We ensure timely delivery without compromising on quality, with our reliable logistics network."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How do you ensure quality in your sheet metal products?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We maintain strict quality assurance protocols, source materials from trusted suppliers, and conduct thorough quality checks at every stage to ensure industry-leading standards."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What industries do you serve?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We serve diverse industries including automotive manufacturing, construction, HVAC systems, appliance manufacturing, aerospace components, marine applications, and general engineering projects."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What are the minimum order quantities?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We accommodate both small and large orders. Our minimum order quantities vary by product type and thickness. Contact us to discuss your specific requirements and we'll provide flexible solutions."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Do you offer technical support and consultation?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes, our experienced engineering team provides technical consultation to help you select the right materials and specifications for your projects. We offer guidance on material properties, applications, and cost optimization."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What payment methods do you accept?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We accept various payment methods including bank transfers, credit cards, cash payments, and for established customers, we offer flexible credit terms with proper documentation."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How long does delivery typically take?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Delivery times vary based on order size and location. For standard products within Maharashtra, we typically deliver within 2-3 days. For custom orders or distant locations, delivery may take 5-7 days."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Do you provide material certificates and test reports?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes, we provide material certificates, mill test certificates, and quality test reports for all our products. This ensures complete traceability and compliance with industry standards and customer requirements."
                                            }
                                        }
                                    ]
                                })
                            }}
                        />
                    </div>

                    {/* Download section */}
                    <div className='bg-[#F5F7FA] flex items-center justify-center h-[50vh]'>
                        <div className="w-11/12 md:w-2/3 h-auto rounded-xl flex justify-center items-center flex-col blue-metal-card mx-auto" data-aos="zoom-in-up">
                            <h2 className="text-3xl p-5 text-center">Download our Catalogue</h2>
                            <p className="px-6 text-center">
                                Get detailed information about our products and specifications in our catalogue
                            </p>
                            <a href="/AE-catalogue.pdf" download>
                                <button className="cursor-pointer px-4 py-2 my-6 dark-metal-card rounded-lg font-semibold shadow-md mb-6">
                                    Download
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </>
        )
    }

export default Home
