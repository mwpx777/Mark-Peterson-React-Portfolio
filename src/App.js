
import './index.css';

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import CarouselContainer from './components/CarouselContainer'



function App() {
  // hide contact form by default
  const [contactSelected, setContactSelected] = useState(false);


  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Web Development Projects'
    },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div >
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
        {!contactSelected ? (
          <>
           <CarouselContainer currentCategory={currentCategory} />
           
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
