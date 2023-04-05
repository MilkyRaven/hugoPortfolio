import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            <div className='w-full h-64 bg-slate-300'>
                {/* <FaBars /> */}
                <h1 className='text-4xl p-4'>Hi, welcome to my portfolio</h1>
            </div>
            <div className='w-full h-64 bg-white'>
                {/* <FaBars /> */}
                <h1 className='text-4xl p-4'>Im a data designer, photographer person</h1>
            </div>
            <div>
            <h1 className='text-3xl p-4'>Check out what I do.</h1>
            </div>
        </header>
    )
}