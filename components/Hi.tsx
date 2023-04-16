import React from 'react'
import Image from 'next/image'

type Props = {}

const Hi = (props: Props) => {
    return (
        <div className="relative w-full h-[639px]">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-400 opacity-80"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-end justify-left">
                <h1 className="text-3xl text-white ml-10 mb-5 z-10 font-crimson">
                    WELCOME TO <br /> MY PORTFOLIO, <br /> I'M
                </h1>
                {/* <Image
                    alt="hugo"
                    src="/pics/hugo.jpeg"
                    className="object-cover w-full h-full"
                    layout='fill'
                    objectFit='cover'
                /> */}
            </div>
        </div>
    )
}

export default Hi