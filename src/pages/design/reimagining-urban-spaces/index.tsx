import React from 'react'
import Link from 'next/link'
import Nav from '../../../../components/Nav'
import Footer from '../../../../components/Footer'
import ProjectButtonRight from '../../../../components/ProjectButtonRight'
import ProjectButtonLeft from '../../../../components/ProjectButtonLeft'

export default function project() {
    return (
        <div>
            <Nav></Nav>
            <div>
                <h2 className='text-4xl ml-8'>REIMAGINING URBAN SPACES</h2>
                <h3 className='text-3xl mt-4 ml-8'>Challenging the orthodoxy
                </h3>
                <div className='flex flex-col items-center'>
                    <div className='w-[361px] h-[606px] mt-4 mb-4 bg-slate-300'></div>
                </div>
                <p className='ml-10 mr-10 mt-9 mb-9'>The idea behind this collection was to create a series of posters which sought to challenge our conception of urban spatial orthodoxy.</p>
                <div className='flex flex-col items-center'>
                    <div className='w-[272px] h-[403px] mt-4 mb-4 bg-slate-300'></div>
                    <p>Posters in abandoned space.</p>
                </div>
                <p className='ml-10 mr-10 mt-9 mb-9'>Where I live in Gracia, there are no green spaces. Just a couple of trees and concrete plazas. </p>
                {/* Add carousel */}
                <p className='ml-10 mr-10 mt-9 mb-9'>Using photos of the Catalan countryside I wanted to design the posters with a focus of mimicking the sense of a window and looking into an alternative version of the given urban space. Together with a tag line and prompt below to guide the users.</p>
                {/* Add carousel */}
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row'>
                        <div className='w-[170px] h-[241px] m-1 bg-slate-300'></div>
                        <div className='w-[170px] h-[241px] m-1  bg-slate-300'></div>
                    </div>
                    <p className='m-2'>Posters: interactive questionnaire.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[272px] h-[403px] mt-4 mb-4 bg-slate-300'></div>
                    <p>Posters and interactive questionnaire</p>
                </div>
                <div className='flex flex-col items-center mt-12 '>
                    <div className='flex flex-row'>
                        <div className=' m-1 bg-slate-300 w-[158px] h-[224px]'></div>
                        <div className=' m-1 bg-slate-300 w-[158px] h-[224px]'></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='m-1 bg-slate-300 w-[158px] h-[224px]'></div>
                        <div className='m-1 bg-slate-300 w-[158px] h-[224px]'></div>
                    </div>
                    <p>Booklet: reimagining urban spaces.</p>
                </div>
                <p className='text-xl m-10'>Closing statement for extra coolness
                    postals son vida, vida son postals idk your the artist think of something.</p>
            </div>
            <div className='flex justify-between'>
                <ProjectButtonLeft title='BCN Postals' url='/design/bcn-postals'></ProjectButtonLeft>
                <ProjectButtonRight title='Damien Hirst' url='/design/damien-hirst'></ProjectButtonRight>
            </div>
            <Footer></Footer>
        </div>
    )
}