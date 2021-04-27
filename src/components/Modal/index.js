import React from 'react';
import github from '../../assets/github.svg'

function Modal({onClose, currentPhoto}) {

    const{name, category, description, index  } = currentPhoto


  
    return(
        <div className="card" style="width 18rem;">
            <img className="card-img-top" src={require(`../../assets/webdev/${name}.png`)} alt="card img cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a hef="/" className="btn btn-primary">View on <img src={github} /></a>
            </div>
        </div>
        )
}

export default Modal;