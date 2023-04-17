import React from 'react'

interface ModalProps {
    imageUrl: string;
}


const PicModal: React.FC<ModalProps> = ({ imageUrl }) => {
    return (
        <div className="modal">
            <img src={imageUrl} />
        </div>
    );
}

export default PicModal