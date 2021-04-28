// PHOTOLIST

// import React, {useState} from 'react';
import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {
    console.log("this is " + category + " in PhotoList");
    const [photos] = useState([
        {
            name: "Movie Streaming Search",
            category: 'webdev',
            description: "This was a group project. This application utilizes two third party APIS to fetch movie data and which streaming services have the movie to stream.  We utilized HTML, CSS and JavaScript to create this application."
        },
        {
            name: "Weather Dashboard",
            category: 'webdev',
            description: 'This application utilizes a third party API to fetch weather data.  I utilized HTML, CSS and JavaScript to create this application.'
        },
        {
            name: "Run Buddy",
            category: 'webdev',
            description: "This is a landing page I built for the Run Buddy Company.  This landing page utilizes HTML and CSS."
        },
        // NEED 3 MORE HERE
    ]);

    // this will filter the photos based on their category
    const currentPhotos = photos.filter((photo) => photo.category === category);

    const [currentPhoto, setCurrentPhoto] = useState();

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i })
        // this will set modal to true or false depening on its state
        setIsModalOpen(!isModalOpen);
    }
    // this hook manages if modal is open
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
            <div className="flex-row">
                {currentPhotos.map((image, i) => {
                    return (
                        <img
                            src={`../../assets/${category}/${i}}.png`}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            onClick={() => toggleModal(image, i)}
                            key={image.name}
                        />
                    )
                })}
            </div>
        </div>
    );




}

export default PhotoList;