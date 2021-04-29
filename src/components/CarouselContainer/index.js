// CAROUSEL CONTAINER

import React, { useState } from 'react';
// import React from 'react';
import { Carousel } from 'react-bootstrap';
// import image0 from '../../assets/images/0.png'
// import image1 from '../../assets/images/1.png'
// import image2 from '../../assets/images/2.png'
import Modal from '../Modal';


const CarouselContainer = (props) => {
  const { currentCategory } = props;
  // console.log(currentCategory.name);

  const [photos] = useState([
    {
      name: "Movie Streaming Search",
      category: 'webdev',
      description: "This was a group project. This application utilizes two third party APIS to fetch movie data and which streaming services have the movie to stream.  This project was built with HTML, CSS and JavaScript to create this application.",
      index: "0",
      repo: "https://github.com/mwpx777/Movie-Database-Search"
    },
    {
      name: "Weather Dashboard",
      category: 'webdev',
      description: 'This application utilizes a third party API to fetch weather data.  This project was built with HTML, CSS and JavaScript to create this application.',
      index: "1",
      repo: "https://github.com/mwpx777/Weather-Dashboard"
    },
    {
      name: "Run Buddy",
      category: 'webdev',
      description: "This is a landing page I built for the Run Buddy Company.  This landing page was built with HTML and CSS.",
      index: "2",
      repo: "https://github.com/mwpx777/Run-Buddy112120"
    },
    {
      name: "Tech Blog",
      category: 'webdev',
      description: "This is a Full Stack Tech Blog application.  This project was built with HTML, CSS, JavaScript, Node.js, Express.js, Express Handlebars and Bcrypt.",
      index: "3",
      repo: "https://github.com/mwpx777/Tech-Blog-1"
    },
    {
      name: "Note Taker",
      category: 'webdev',
      description: "This is a back end project where I connected it to an existing front end.  This project was built utilizing Node.js and Express.js.",
      index: "4",
      repo: "https://github.com/mwpx777/Note-Taker"
    },
    {
      name: "Budget Tracker PWA",
      category: 'webdev',
      description: "This is a budget tracking application that I converted into a PWA.  This application will work offline, and will update transactions when it establishs a network connection.  This PWA conversion was built with Node.js, Express.js, Service Worker, IndexedDB, MongoDB and Mongoose ",
      index: "5",
      repo: "https://github.com/mwpx777/Budget-Tracker-PWA"
    },

  ]);



  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    
    setCurrentPhoto({ ...image, index: i })
    // this will set modal to true or false depening on its state
    setIsModalOpen(!isModalOpen);
    
  }

  // this hook manages if modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <>
      <h1> {(currentCategory.name)} </h1>
      <p>{currentCategory.description}</p>
      {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
    <section id="sectionContainer">
    <div className="carousel" id="carouselClose">
      <Carousel id="carouselItem">
      {photos.map((image, index) => {

        return (
          
            <Carousel.Item interval={5000} >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${image.index}.png`}
                alt={image.name}
                className="d-block w-100"
                onClick={() => toggleModal(image, index)}
                key={image.name}
              />
               <Carousel.Caption>
     
      <p>Click the image for more info!</p>
    </Carousel.Caption>

            </Carousel.Item>
         
        )

        })}
     </Carousel>
     </div>
    </section>
    </>
  )
}




//     <div className="carousel">
//     <Carousel>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src={image0}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100"
//       src={image1}
//       alt="Second slide"
//     />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={image2}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// </div>
//     )
// }


export default CarouselContainer;