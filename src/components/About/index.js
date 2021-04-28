// ABOUT

import React from 'react';
import titleImage from '../../assets/Desk with Text.jpg';

function About() {
    return (
        <section className="my-5" id="#about">
            
            <img src={titleImage} className='my-2' style={{ width: "100%" }} alt="titleImage" />
                <div className="container">
                    <p id="bioText">
                    I am searching for a full stack or front end developer position where I can
                    expand my development skills. I am currently enrolled in the University of Wisconsin Web
                    Development Boot Camp with a completion date of May 2021. Prior to web development, I worked in the custom
                    minting industry for 26 years, creating graphic
                    art and digital sculptures for coins and medallions. In addition to web development, I operate
                    MWP Designs, a freelance business where I create graphic art and digital sculptures for the silver
                    collectors' community and custom law enforcement badges.
                     </p>
                 </div>
           
        </section >
    )
}

export default About;