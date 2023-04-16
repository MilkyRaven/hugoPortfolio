import React from 'react'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
export default function project() {
    return (
        <div>
            <Nav></Nav>
            <div>
                <h2 className='text-4xl ml-8'>THE EU & UKRANIAN REFUGEES</h2>
                <div className='flex flex-col items-center'>
                    <div className='w-[373px] h-[228px] mt-4 mb-4 bg-slate-300'></div>
                </div>
                < div className='ml-10 mr-10 mt-9 mb-9'>
                    <div>
                        <p className='text-3xl'> Introduction</p>
                        <p className='text-xl'>Project Focus</p>
                        <p className='text-xl'>To invesitgate whether there is a relationship between EU member state&apos;s economic strength (understood in terms of GDP) and the amount of Ukrainian refugees hosted by these countries.</p>
                    </div>
                </div>
                < div className='ml-10 mr-10 mt-9 mb-9'>
                    <div>
                        <p className='text-xl'>Questions & Hypothesis</p>
                        <p className='text-xl'>
                            Do countries with a higher GDP accept larger quantites of refugees?
                            Is there a correlation between refugee numbers and distance to Ukraine?
                            Can larger EU economies accept more refugees?
                            Hypothesis: Countries with a closer proximity to Ukraine have a higher intake of refugees. However that have displayed an &apos;open boarder&apos; policy in recent to refugees would also accept higher numbers. I believe there to be a moral case for EU member states with a high GDP rate to accept more refugees.</p>
                    </div>
                </div>
                <div className='ml-10 mr-10 mt-9 mb-9'>
                    <div>
                        <p className='text-xl'>Tools & Method</p>
                        <p className='text-xl'>
                            For this particular project we had to demonstrate usage of APIs, webscraping or both. I scraped three websites for the data used for this project.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[384px] h-[192px] mt-4 mb-4 bg-slate-300'></div>
                </div>
                < div className='ml-10 mr-10 mt-9 mb-9'>
                    <div>
                        <p className='text-xl'>EU member state economic infomation: https://countryeconomy.com/countries/
                            groups/european-union
                            Refugee numbers: https://www.statista.com/statistics
                            /1312361/europe-temporary-protection-for-persons-fleeing-ukraine/
                            Distance from Ukraine: https://www.distancefromto.net/distance-from-ukraine-country</p>
                        <p className='text-xl m-'>
                            I imported the following tools to run the code:

                            import matplotlib.pyplot as plt
                            from matplotlib import rcParams
                            import requests
                            from bs4 import BeautifulSoup
                            import pandas as pd
                            import requests
                            import re
                            import seaborn as sns
                            import matplotlib.pyplot as plt
                            import numpy as np
                            from matplotlib import rcParams</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[384px] h-[192px] mt-4 mb-4 bg-slate-300'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[384px] h-[192px] mt-4 mb-4 bg-slate-300'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[384px] h-[192px] mt-4 mb-4 bg-slate-300'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[384px] h-[192px] mt-4 mb-4 bg-slate-300'></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}