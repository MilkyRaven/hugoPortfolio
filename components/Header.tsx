import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            <div className='hero'>
                {/* <FaBars /> */}
                <h1 className=" sticky top-0 text-3xl font-bold underline">Hi, welcome to my portfolio</h1>
            </div>
        </header>
    )
}