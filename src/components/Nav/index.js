// NAV

import React from 'react';
// import {ReactSVG} from 'react-svg'
// import email from '../../assets/email.svg'

import resume from '../../assets/Mark Peterson Resume.pdf'


function Nav(props) {


    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (

        <nav className="navbar navbar-expand-lg navbar-light " id="navbar">

         <div className="navbarCenter">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#bioText" onClick={() => setContactSelected(false)}>
                            <span>Bio</span>
                        </a>
                    </li>
                    {categories.map((category) => {

                        return (
                            <li 
                                className={`nav-item nav-link ${currentCategory.name === category.name &&
                                    !contactSelected &&
                                    `navActive`
                                    }`}
                                key={category.name}
                            >
                                <div onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);

                                }}
                                >{(category.name)}</div>
                            </li>
                        );
                    })}
                    <li className="nav-item">
                        <a className="nav-link" href={resume} alt="Resume" target="_blank" rel="noreferrer">
                            <span> Resume</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <section className={`nav-link  ${contactSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>Contact Me</span>
                        </section>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#links" onClick={() => setContactSelected(false)}>
                            <span>Links</span>
                        </a>
                    </li>
                </ul>
                </div>
        </nav>

    );
}

export default Nav;