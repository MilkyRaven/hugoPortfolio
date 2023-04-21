import React from 'react'
import Link from 'next/link'

type Props = {
    title: string;
    url: string;
}

const ProjectButtonRight = (props: Props) => {
    return (
        <Link href={props.url}>
            <div className="flex justify-end">
                <div className="flex w-[164px] h-[77px] p-2 rounded-xl items-center">
                    <p>{props.title}</p>
                    <div className=" p-4">
                        <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0004 15L3.00039 30L0.900391 27.9L13.8004 15L0.900391 2.1L3.00039 0L18.0004 15Z" fill="black" />
                        </svg>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectButtonRight