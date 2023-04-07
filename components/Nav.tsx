import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
                <h1 className='text-5xl'>HUGO</h1>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 text-gray-300"
                    onClick={toggleMenu}
                >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45 13L3 13" stroke="#999999" stroke-width="3" stroke-linecap="round" />
                        <path d="M45 24L3 24" stroke="#999999" stroke-width="3" stroke-linecap="round" />
                        <path d="M45 35L3 35" stroke="#999999" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow">
                    <Link href="/">
                        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            HOME
                        </p>
                    </Link>
                    <Link href="/data">
                        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            DATA
                        </p>
                    </Link>
                    <Link href="/design">
                        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            DESIGN
                        </p>
                    </Link>
                    <Link href="/photography">
                        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            PHOTOGRAPHY
                        </p>
                    </Link>
                    <Link href="/about">
                        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            ABOUT
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            CONTACT
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;