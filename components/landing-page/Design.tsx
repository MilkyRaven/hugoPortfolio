import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Design(props: Props) {
    return (
        <div className='text-box'>
        <Link href={'/design'}>
            <div className="flex pl-6 mt-10 mb-10 place-content-between">
                <div>
                    <h2 className="text-4xl">DESIGN</h2>
                    <h3 className="text-2xl">Here you will find a sample of my work in data</h3>
                </div>
                <div className="w-3/4 h-36 bg-slate-300"></div>
            </div>
        </Link>
    </div>
    )
}