import React from 'react'
import Link from 'next/link'

export default function Gallery() {
    return (
        <div>
            <Link href={'/'}>Return Home</Link>
            <h1>GALLERY</h1>
            <h2>Series 1</h2>
            <div className='galleryDisplay'>
                <div className='pic'>
                    <Link href={'/photography/gallery/pic'}>This is a pic</Link>
                </div>
                <div className='pic'>
                    <Link href={'/photography/gallery/pic'}>This is a pic</Link>
                </div>
                <div className='pic'>
                    <Link href={'/photography/gallery/pic'}>This is a pic</Link>
                </div>
            </div>
            <p>Small Text</p>
        </div>
    )
}