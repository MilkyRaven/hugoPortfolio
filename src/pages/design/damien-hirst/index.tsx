import React from 'react'
import Link from 'next/link'
import Nav from '../../../../components/Nav'
import Footer from '../../../../components/Footer'
import ProjectButtonLeft from '../../../../components/ProjectButtonLeft'

export default function project() {
    return (
        <div>
            <Nav></Nav>
            <div>
                <h2 className='text-4xl ml-8'>DAMIEN HIRST</h2>
                <h3 className='text-3xl mt-4 ml-8'>A life in art
                </h3>
                <div className='flex flex-col items-center'>
                    <div className='w-[376px] h-[536px] mt-4 mb-4 bg-slate-300'></div>
                </div>
                <p className='ml-10 mr-10 mt-9 mb-9'>For this project I was to design the visual identity for artist Damien Hirst&apos;s upcoming exhibition. I researched Hirst&apos;s previous work and the target audience to create a cohesive design language that would work across mediums like logo, posters and banners.</p>
                <div className='flex flex-col items-center'>
                    <div className='w-[281px] h-[398px] mt-4 mb-4 bg-slate-300'></div>
                    <p>Poster 2</p>
                </div>
                <p className='ml-10 mr-10 mt-9 mb-9'>Using a bold color palette of pink green and yellow, exploring desaturated neon and striking black and white imagery, I developed a series of posters and banners that captured the essence of Hirst&apos;s art.</p>
                <div className='flex flex-col items-center'>
                    <div className='w-[355px] h-[238px] mt-4 mb-4 bg-slate-300'></div>
                    <p>Logo</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[356px] h-[506px] mt-4 mb-4 bg-slate-300'></div>
                    <p>Poster 3</p>
                </div>
                <p className='ml-10 mr-10 mt-9 mb-9'>Closing statement for extra coolness
                    the real damian hirst are the friends we made along the way idk your the artist think of something.</p>
            </div>
            <ProjectButtonLeft title='Reimagining 
Urban Spaces' url='/design/reimagining-urban-spaces'></ProjectButtonLeft>
            <Footer></Footer>
        </div>
    )
}