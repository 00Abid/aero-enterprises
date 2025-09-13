import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#36566d]">
            <div className="container py-5 mx-auto flex items-center justify-evenly ">
                <a
                    href="#"
                    className="flex title-font font-medium items-center md:justify-start justify-center text-white "
                ><img src="/AE-logo.png" alt="" className='w-30 h-30 cover' />
                </a>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="#" className="ml-3 text-white hover:text-gray-300">
                        IndiaMart
                    </a>
                    <a href="https://www.linkedin.com/company/aero-enterprisess/" target='_blank' className="ml-3 text-white hover:text-gray-300">
                        LinkedIn
                    </a>
                </span>
            </div>
            <div className='w-11/12  border-t-1 border-black mx-auto'>
                <p className=' m-5 text-white text-center'>
                    © {new Date().getFullYear()} AERO ENTERPRISES <br />All Rights Reserved
                </p>
            </div>
        </footer>

    );
}

export default Footer
