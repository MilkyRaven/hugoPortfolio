import Link from 'next/link'
import React from 'react'

type Props = {}

const Button = (props: Props) => {
    return (
        <Link href={'/contact'}>
            <button className='bg-blue-900 text-white rounded-lg'>
                <p className='pt-2 pb-2 pl-3 pr-3 text-lg'>contact me</p>
            </button>
        </Link>
    )
}

export default Button