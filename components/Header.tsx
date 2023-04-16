import React from 'react'
import Button from './Button'


export default function Header() {
    return (
        <header>
            <div className='w-full h-64 bg-white'>
                {/* <FaBars /> */}
                <h1 className='text-3xl p-4 font-jost'>Data Analyst, Designer & Photographer</h1>
                <div className='m-6 flex justify-end'>
                    <Button></Button>
                </div>
            </div>
            <div>
                <h1 className='text-xl p-4 font-jost'>Check out what I do.</h1>
            </div>
        </header>
    )
}