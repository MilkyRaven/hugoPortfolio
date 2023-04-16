import Link from 'next/link'
import React from 'react'



export default function Header() {
    return (
        <header>
            <div className='w-full h-64 bg-white'>
                {/* <FaBars /> */}
                <h1 className='text-3xl m-10 font-jost'>Data Analyst, Designer & Photographer</h1>
                <div className='m-6 flex justify-end'>
                    <Link href={'/contact'}>
                        <button className='bg-dark-blue text-white rounded-xl shadow-lg'>
                            <p className='pt-2 pb-2 pl-3 pr-3 text-lg'>contact me</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <h1 className='text-3xl m-10 font-jost'>Check out what I do.</h1>
            </div>
        </header>
    )
}