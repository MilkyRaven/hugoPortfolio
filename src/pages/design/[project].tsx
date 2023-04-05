import React from 'react'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
export default function project() {
    return (
        <div>
            <Nav></Nav>
            <div className='p-8'>
                <h2 className='text-4xl'>Design Project 1</h2>
                <h3 className='text-3xl mt-10'>Rebranding for a Local Coffee Shop</h3>
                <div className='w-80 h-40 mt-4 mb-4 bg-slate-300'></div>
                <h4 className='font-bold'>Introduction</h4>
                <p>Introduction:
                    The local coffee shop, Java Junction, has been in business for over 10 years. While they have a loyal customer base, they have been struggling to attract new customers and keep up with the competition. They approached me to rebrand their coffee shop to attract a younger, more hip audience.</p>
                <div className='w-80 h-40 mt-4 mb-4 bg-slate-300'></div>
                <div className='flex place-content-evenly mt-8 mb-8'>
                    <div className='w-20 h-40 bg-slate-300'></div>
                    <div className='w-20 h-40 bg-slate-300'></div>
                    <div className='w-20 h-40 bg-slate-300'></div>
                </div>
                <div className='w-80 h-40 mt-4 mb-4 bg-slate-300'></div>
                <div className='flex justify-center'>
                <div className='w-52 h-40 mt-4 mb-4 bg-slate-300'></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}