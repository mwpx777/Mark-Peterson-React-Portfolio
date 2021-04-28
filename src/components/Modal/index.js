import React from 'react';
import github from '../../assets/github.svg'

function Modal({onClose, currentPhoto}) {

    const{name, category, description } = currentPhoto
    console.log(currentPhoto.name);


  
    return(
        <div className="card">
            <img className="card-img-top" src={require(`../../assets/${category}/${name}.png`)} alt="card img cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a hef="https://github.com/mwpx777" target="_blank" rel="noreferrer" className="btn btn-primary">View on <img src={github} alt="github" /></a>
           
            </div>
        </div>
        )
}

export default Modal;