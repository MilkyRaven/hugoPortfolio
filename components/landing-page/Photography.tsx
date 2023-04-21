import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Photography(props: Props) {
    return (
        <div>
            <Link href={'/photography'}>
                <div className="flex-col h-[354px] pl-6 mt-8 ml-8 mb-8 pb-6 place-content-between rounded-md shadow-md">
                    <div className='mr-16'>
                        <h2 className="text-4xl pt-4 font-light">PHOTOGRAPHY</h2>
                        <h3 className="text-2xl pb-4">Here you will find a sample of my work in photography</h3>
                    </div>
                    <div className="mt-5 h-36 w-fill bg-slate-300"></div>
                </div>
            </Link>
        </div>
    )
}