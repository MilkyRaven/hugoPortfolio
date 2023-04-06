import React from 'react'

type Props = {}

const Hi = (props: Props) => {
    return (
        <div>
            <div className='w-full h-64 bg-slate-300'>
                {/* <FaBars /> */}
                <h1 className='text-4xl p-4'>Hi, welcome to my portfolio</h1>
            </div>
        </div>
    )
}

export default Hi