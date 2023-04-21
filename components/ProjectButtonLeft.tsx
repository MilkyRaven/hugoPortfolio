import React from 'react'
import Link from 'next/link'

type Props = {
  title: string;
  url: string;
}

const ProjectButtonLeft = (props: Props) => {

  return (
    <Link href={props.url}>
      <div className="flex justify-end items-center">
        <div className=" p-4">
          <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15.7324L15 0.732422L17.1 2.83242L4.2 15.7324L17.1 28.6324L15 30.7324L0 15.7324Z" fill="black" />
          </svg>
        </div>
        <div className="flex w-[164px] h-[77px] p-2 rounded-xl items-center">
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectButtonLeft