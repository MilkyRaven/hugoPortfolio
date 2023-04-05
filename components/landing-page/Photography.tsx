import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Photography(props: Props) {
    return (
        <div className='text-box'>
            <Link href={'/photography'}>
                <div className="flex pl-6 mt-8 mb-20 place-content-between">
                    <div>
                        <h2 className="text-4xl">PHOTOGRAPHY</h2>
                        <h3 className="text-2xl">Here you will find a sample of my work in data</h3>
                    </div>
                    <div className="w-full h-36 bg-slate-300"></div>
                </div>
            </Link>
        </div>
    )
}