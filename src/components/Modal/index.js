import React from 'react';
import github from '../../assets/github.svg'

function Modal({ onClose, currentPhoto }) {

    const { name, index, image, description } = currentPhoto
    console.log(currentPhoto.index);



    return (
        <div className="modalCard">
        <div className="card">
            <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/${currentPhoto.index}.png`} alt="card img cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <span>View repository on </span>
                <a href={`${currentPhoto.repo}`} target="_blank" rel="noreferrer">
                    <img src={github} alt="Github" id="icon" />
                </a>
                <button onClick={onClose} type="button" id="closeModal">Close this modal</button>
            </div>
        </div>
        </div>
    )
}

export default Modal;