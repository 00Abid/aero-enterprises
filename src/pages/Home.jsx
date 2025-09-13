import React from 'react'

const Home = () => {
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
            name: 'AERO AUTOMOTIVE PARTS',
            desc: 'Precision Parts for Peak Performance',
            url: 'https://aeroautomotiveparts.vercel.app/',
        },
        {
            name: 'AERO LED',
            desc: 'Lighting the Way to a Brighter Tomorrow',
            url: 'https://aerolightrays.vercel.app',
        },
    ];

    return (
        <section className='bg-white'>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/hero-image.jpeg"
                >
                    <source src="/godown-video.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col justify-center md:items-center md:text-center px-4">
                    <h1 className="text-5xl md:text-6xl text-white">
                        AERO ENTERPRISES
                    </h1>
                    <p className="text-lg text-white mt-4">
                        Your Trusted Sheet Metal Supplier
                    </p>
                </div>
            </div>

            {/* Excellence section */}
            <div className="bg-white py-20">
                <div className="md:text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-3xl text-black">Our Excellence</h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-4">
                    {excellenceFeatures.map((feature, index) => (
                        <div key={index} className="w-auto h-auto">
                            <h3 className="text-lg sm:text-xl font-semibold text-black">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-black">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Capabilities Section */}
            <div className="py-16 bg-[#F5F7FA]">
                <div className="md:text-center max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl text-black">Our Capabilities</h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="bg-white p-6 rounded-lg md:text-center shadow-sm">
                        <h3 className="text-lg font-semibold text-black">Precision Cutting</h3>
                        <p className="mt-2 text-gray-600">Clean and precise cuts with technology.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg md:text-center shadow-sm">
                        <h3 className="text-lg font-semibold text-black">Material Sourcing</h3>
                        <p className="mt-2 text-gray-600">High-quality sheet metal from trusted suppliers.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg md:text-center shadow-sm">
                        <h3 className="text-lg font-semibold text-black">Quality Assurance</h3>
                        <p className="mt-2 text-gray-600">Reliable quality through strict checks.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-16 flex flex-col md:flex-row justify-evenly items-start gap-8">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl text-black">Why Choose Us</h2>
                    <p className="md:text-2xl text-black mt-8">
                        Source premium quality sheet metal with us, your reliable partner for diverse material needs and expert solutions.
                    </p>
                    <div className="flex flex-col gap-8 mt-8">
                        <div>
                            <h3 className="text-lg font-semibold text-black">Industry Leading Quality</h3>
                            <p className="text-gray-700">Exceeding industry norms with top-tier quality.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-black">Expert Team</h3>
                            <p className="text-gray-700">Skilled professionals delivering quality.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-black">On-Time Delivery</h3>
                            <p className="text-gray-700">Timely delivery without sacrificing quality.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mx-auto px-4 pt-8">
                    <img src="/hero-image.jpeg" alt="Sheet metal products" className="rounded-xl" />
                </div>
            </div>

            {/* Group of Companies Section */}
            <div className="py-16 bg-[#F5F7FA]">
                <div className="md:text-center max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl text-black">Group of Companies</h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-4 sm:px-6 lg:px-8 mt-12">
                    {companies.map((company, index) => (
                        <a
                            key={index}
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="bg-white p-6 rounded-lg md:text-center shadow-sm h-44 flex flex-col justify-center md:items-center">
                                <h3 className="text-lg font-semibold text-black">{company.name}</h3>
                                <p className="mt-2 text-gray-600">{company.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Download section */}
            <div className='flex items-center justify-center h-[60vh]'>
                <div className="w-11/12 md:w-2/3 rounded-xl flex justify-center items-center flex-col blue-metal-card mx-auto">
                    <h2 className="text-3xl p-5 text-center">Download our Catalogue</h2>
                    <p className="px-6 text-center">
                        Get detailed information about our products and specifications in our catalogue
                    </p>
                    <a href="/AE-catalogue.pdf" download>
                        <button className="cursor-pointer px-4 py-2 my-6 bg-gray-300 text-black rounded-lg font-semibold shadow-md mb-6">
                            Download
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
