import React, { useState } from 'react'
import PicModal from '../../../../components/PicModal'
import Nav from '../../../../components/Nav'
import Footer from '../../../../components/Footer'


export default function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    function handleImageClick(imageUrl: string) {
        setSelectedImage(imageUrl);
        setShowModal(true);
    }
    function closeImage() {
        setShowModal((prevShowModal) => !prevShowModal);
    }

    return (
        <div>
            <Nav />
            <h1 className='text-4xl ml-10'>GALLERY</h1>
            <h2 className='text-3xl ml-10 mt-3.5'>Sicilia 22</h2>
            <div className='mt-12 flex flex-col items-center'>

                <div className=' bg-slate-300 w-48 h-72'>
                </div>

                <p className='text-xl p-10'>During the sweltering summer of 2022, I returned to my ancestral homeland to partake in its rich cultural tapestry - from savoring the tantalizing cuisine, to immersing myself in the local dialect, and grappling with the complex politics of the region. It was a soul-stirring journey that left an indelible impression on me.</p>
                <div className='bg-slate-300 w-48 h-72 mb-9' onClick={() => handleImageClick("https://i.imgur.com/xIr9zQh.jpg")}>
                </div>
                {showModal && (
                    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white' onClick={() => closeImage()}>
                        <div className='absolute bg-white p-4'>
                            <PicModal imageUrl={selectedImage} />
                        </div>
                    </div>
                )}
                {/* <p onClick={() => {
            console.log('Close button clicked');
            setShowModal(false);
            console.log(showModal)
          }}>Close</p> */}

                <div className=' bg-slate-300 w-48 h-72 mb-9'>
                </div>
                <div className=' bg-slate-300 w-48 h-72 mb-9'>
                </div>
                <div className=' bg-slate-300 w-48 h-72 mb-9'>
                </div>
                <p className='text-xl p-10'>Now, I invite you to explore this captivating Italian island with me through my latest exhibition.
                    My carefully curated selection of 12 photos offers a glimpse into the timeless traditions, rustic sensibilities, and captivating anecdotes of a quintessential Sicilian town.
                </p>
                <div className=' bg-slate-300 w-48 h-72 mb-9'>
                </div>
                <p className='text-xl p-10'>Join me on this visual odyssey, and let us together savor the beauty of this enchanting island, and the warm hospitality of its people.</p>
                <div className=' bg-slate-300 w-48 h-72 mb-9'></div>
                <div className=' bg-slate-300 w-48 h-72 mb-9'></div>
                <div className=' bg-slate-300 w-48 h-72 mb-9'></div>
                <div className=' bg-slate-300 w-48 h-72 mb-9'></div>
                <div className=' bg-slate-300 w-48 h-72 mb-9'></div>
            </div>
            <Footer></Footer>
        </div>
    )
}