import React from 'react'
import Image from 'next/image'

type Props = {}

const Hi = (props: Props) => {
    return (
        <div className="relative w-full h-64">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-300 opacity-80"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                <h1 className="text-4xl text-white p-4 z-10">
                    Hi, welcome to my portfolio
                </h1>
                <Image
                    alt="hugo"
                    src="/pics/hugo.jpeg"
                    className="object-cover w-full h-full"
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
    )
}

export default Hi