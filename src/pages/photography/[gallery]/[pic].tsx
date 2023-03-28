import React from 'react'
import Link from 'next/link'
export default function Pic() {
    return (
        <div>
            <Link href={'/'}>Return Home</Link>
            <p>TITLE OF THE PIC</p>
            <p>Series</p>
            <div className='pic'></div>
            <p>Words about image</p>
        </div>
    )
}