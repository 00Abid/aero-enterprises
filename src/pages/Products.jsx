import React from 'react'
import { Link } from "react-router-dom";


const Products = () => {

    const Patra = [
        {
            type: "COLD ROLLED COIL - CRC SHEET",
            description: "CRC sheets offer a smooth surface and precise thickness for superior formability. Ideal for automotive, appliances, and precision engineering applications.",
            img: "/crc-sheet.png"
        },
        {
            type: "HOT ROLLED - HR SHEET",
            description: "HR sheets provide cost-effective strength and ductility for structural uses. Perfect for construction, pipelines, and heavy machinery fabrication.",
            img: "hr-sheet.png "
        },
        {
            type: "GALVANIZED IRON - GI Sheet",
            description: "GI sheets feature a zinc coating for excellent corrosion resistance. Widely used in roofing, cladding, and HVAC systems.",
            img: "/gi-sheet.png"
        },
        {
            type: "PICKLED AND OILED - PICKLE SHEET",
            description: "Pickle sheets have a clean, scale-free surface for enhanced workability. Suitable for automotive, tubing, and structural fabrications.",
            img: "pickle-sheet.png"
        },
        {
            type: "STAINLESS STEEL - SS SHEET",
            description: "SS sheets deliver corrosion resistance and a sleek finish for diverse applications. Ideal for kitchen equipment, architecture, and marine environments.",
            img: "ss-sheet.png"
        }
    ];


    return (
        <section className='bg-white'>
            {/* Title Section */}
            <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4'>
                    <h2 className="text-3xl text-white  pb-4">
                        Our Products
                    </h2>
                    <p className=' text-white'>
                        Premium sheet metal products for various industrial applications.
                    </p>
                </div>
            </div>

            {/* products Section */}
            <div className="grid md:grid-cols-3  gap-6 pt-20">
                {Patra.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col mx-4 md:mx-10"
                        data-aos="zoom-in-up"
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.type}
                                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-lg font-medium mb-2 text-[#36566d]">
                                {product.type}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                            <div className="mt-auto">
                                <button
                                    className="w-full dark-metal-card hover:scale-101 text-white py-2 px-4 rounded transition"
                                >
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Download section */}
            <div className='flex items-center justify-center h-[50vh]'>
                <div className="w-11/12 md:w-2/3 rounded-xl flex justify-center items-center flex-col blue-metal-card mx-auto" data-aos="zoom-in-up">
                    <h2 className="text-3xl p-5 text-center">Looking for Assistance?</h2>
                    <p className="px-6 text-center">
                        We offer custom sheet metal solutions tailored to your requirements
                    </p>
                    <Link to="/contact">
                        <button className="cursor-pointer px-4 py-2 my-6 dark-metal-card  rounded-lg font-semibold shadow-md mb-6">
                            Contact Our Team
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Products
