import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function Header() {
    return (
        <header>
            <div className='hero'>
                {/* <FaBars /> */}
                <div className='temporaryMenu'>
                    <Link href={"/data"}><span>Data</span></Link>
                    <Link href={"/design"}><span>Design</span></Link>
                    <Link href={"/photography"}><span>Photography</span></Link>
                    <Link href={"/about"}><span>About</span></Link>
                    <Link href={"/contact"}><span>Contact</span></Link>
                    <p>(This is a temporary menu)</p>
                </div>
                <h1>HUGO</h1>
                <h1>Hi, welcome to my portfolio</h1>
            </div>
        </header>
    )
}