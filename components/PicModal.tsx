import React from 'react'
import Image from 'next/image';

interface ModalProps {
    imageUrl: string;
}


const PicModal: React.FC<ModalProps> = ({ imageUrl }) => {
    return (
        <div className="modal">
            <Image alt='modal' src={imageUrl} />
        </div>
    );
}

export default PicModal