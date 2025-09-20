import React from 'react'
import { Linkedin, ShoppingBag } from "lucide-react";


const Footer = () => {
    return (
        <footer className="blue-metal">
            <div className="w-full py-5 mx-auto flex items-center justify-around ">
                <div className=''>
                    <a
                        href="https://aeroenterprises.shop/"
                        className=" text-white "
                    ><img src="/AE-logo.webp" alt="logo" className='w-30 h-30 cover' />
                    </a>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/aero-enterprisess/" target='_blank'>
                        <button
                            className="dark-metal-card px-3 py-3">
                            <Linkedin className="w-5 h-5" />
                        </button>
                    </a>


                    <a href="#">
                        <button
                            className="dark-metal-card px-3 py-3">
                            <ShoppingBag className="w-5 h-5" />
                        </button>
                    </a>
                </div>
            </div>
            <div className='w-11/12  border-t-1 border-black mx-auto'>
                <p className='text-xs m-5 text-white text-center'>
                    © {new Date().getFullYear()} AERO ENTERPRISES <br />All Rights Reserved
                </p>
            </div>
        </footer>

    );
}

export default Footer
