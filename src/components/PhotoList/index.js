// PHOTOLIST

// import React, {useState} from 'react';
import React from 'react';
// import Modal from '../Modal';
import Desk from '../../assets/Mark Peterson Website background.png'

const PhotoList = ({ category }) => {

    // const [photos] = useState([
    //     {
    //         name: "Movie Streaming Search",
    //         category: 'webdev',
    //         description: "This was a group project. This application utilizes two third party APIS to fetch movie data and which streaming services have the movie to stream.  We utilized HTML, CSS and JavaScript to create this application."
    //     },
    //     {
    //         name: "Weather Dashboard",
    //         category: 'webdev',
    //         description: 'This application utilizes a third party API to fetch weather data.  I utilized HTML, CSS and JavaScript to create this application.'
    //     },
    //     {
    //         name: "Run Buddy",
    //         category: 'webdev',
    //         description: "This is a landing page I built for the Run Buddy Company.  This landing page utilizes HTML and CSS."
    //     }
    // ]);

    // // this will filter the photos based on their category
    // const currentPhotos = photos.filter((photo) => photo.category === category);

    // const [currentPhoto, setCurrentPhoto] = useState();

    // const toggleModal = (image) => {
    //     setCurrentPhoto({ image })
    //     // this will set modal to true or false depening on its state
    //     setIsModalOpen(!isModalOpen);
    // }
    // // this hook manages if modal is open
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // return (
    //     <div>
    //         {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
    //         <div className="flex-row">
    //             {currentPhotos.map((image) => {
    //                 <img
    //                     src={require(`../../assets/webdev/${image.name}}.png`)}
    //                     alt={image.name}
    //                     className="img-thumbnail mx-1"
    //                     onClick={() => toggleModal(image)}
    //                     key={image.name}
    //                 />
    //             })}
    //         </div>
    //     </div>
    // );

    return(
<div>
    <img src={Desk} alt="desk" />
</div>

    )
};

export default PhotoList;