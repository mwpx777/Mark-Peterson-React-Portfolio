
import './index.css';

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import CarouselContainer from './components/CarouselContainer'
// import {NavLink} from 'react-router-dom';




function App() {
  // hide contact form by default
  // const [contactSelected, setContactSelected] = useState(false);



  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Web Development Projects'
    },
    {
      name: 'Bio',
      description: 'About Me'
    },
    {
      name: 'Contact'
    }

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const categoriesList = (category) => {
    switch (category) {
      case "Bio":
        return (
          <About currentCategory={currentCategory} />
        )
        break;
      case "Projects":
        return (
          <CarouselContainer currentCategory={currentCategory} />
        )
        break;
      case "Contact":
        return (
          <ContactForm currentCategory={currentCategory} />
        )
        break;
      default:
        return (
          <About currentCategory={currentCategory} />
        )
        break;

    }
  }

  return (
    <div >
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}

      ></Nav>

      <main>
        {categoriesList(currentCategory.name)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
