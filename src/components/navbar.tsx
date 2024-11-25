'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Contact from './contact-form'; // Import the Contact component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // For navbar toggle
    const [isContactOpen, setIsContactOpen] = useState(false); // For Contact form toggle

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle navbar visibility
    };

    const toggleContactForm = () => {
        setIsContactOpen(!isContactOpen); // Toggle Contact form visibility
    };

    return (
        <div className="relative">
            {/* Menu icon button aligned to the left */}
            <span
                onClick={toggleNavbar}
                className="fixed top-4 left-4 text-white cursor-pointer text-[1.8em] z-50"
            >
                <i className="bi bi-list"></i> {/* Hamburger menu icon */}
            </span>

            {/* Navbar */}
            <nav
                className={`fixed left-0 top-0 z-20 bg-[#808385] mt-[20vh] rounded-2xl text-gray-100 w-[70px] py-10 px-2 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className="flex flex-col items-center space-y-6 text-[1.5em]">
                    <Link href='/'>
                        <li className="hover:text-[#a0a0a0]">
                            <i className="bi bi-house-door-fill"></i> {/* Home icon */}
                        </li>
                    </Link>
                    <Link href='/about'>
                        <li className="hover:text-[#a0a0a0]">
                            <i className="bi bi-person-circle"></i> {/* Profile/About icon */}
                        </li>
                    </Link>
                    <Link href='/projects'>
                        <li className="hover:text-[#a0a0a0]">
                            <i className="bi bi-briefcase-fill"></i> {/* Portfolio/My Work icon */}
                        </li>
                    </Link>
                    <li
                        className="hover:text-[#a0a0a0] cursor-pointer"
                        onClick={toggleContactForm}
                    >
                        <i className="bi bi-envelope-fill"></i> {/* Contact icon */}
                    </li>
                </ul>
            </nav>

            {/* Contact Form Overlay */}
            {isContactOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                    <Contact closeForm={toggleContactForm} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
