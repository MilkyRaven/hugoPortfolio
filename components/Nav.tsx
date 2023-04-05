import React from 'react'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
    return (
        <div className='flex place-items-center place-content-between p-5 mt-6 mb-8 mr-3 sticky top-0 bg-white z-30'>
            {/* <div className='temporaryMenu'>
                    <Link href={"/data"}><span>Data</span></Link>
                    <Link href={"/design"}><span>Design</span></Link>
                    <Link href={"/photography"}><span>Photography</span></Link>
                    <Link href={"/about"}><span>About</span></Link>
                    <Link href={"/contact"}><span>Contact</span></Link>
                    <p>(This is a temporary menu)</p>
                </div> */}
            <h1 className='text-4xl'>HUGO</h1>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 13L3 13" stroke="#999999" stroke-width="3" stroke-linecap="round" />
                <path d="M45 24L3 24" stroke="#999999" stroke-width="3" stroke-linecap="round" />
                <path d="M45 35L3 35" stroke="#999999" stroke-width="3" stroke-linecap="round" />
            </svg>


        </div>
    )
}

export default Nav