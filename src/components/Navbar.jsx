import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="bg-white  shadow-md sticky top-0 z-50 scroll-smooth">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/AE-logo.png" alt="Logo" className="h-30 w-30" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, i) => (
                            <NavLink key={i} to={item.path}>
                                {({ isActive }) => (
                                    <div className="relative pb-1">
                                        <span
                                            className={`absolute left-0 bottom-0 h-0.5 text-[#36566d] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"
                                                }`}
                                        />
                                        <span
                                            className={`transition-colors duration-300 ${isActive ? "text-[#36566d]" : "text-gray-700 hover:text-[#36566d]"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none text-2xl transition-transform duration-300"
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                style={{ transformOrigin: "top" }}
            >
                <div className="px-4 pb-3 space-y-2 animate-fadeIn">
                    {navItems.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md transform transition-all duration-300 ease-in-out ${isActive
                                    ? "bg-gray-100 text-[#36566d] scale-105"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#36566d] hover:scale-105"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
