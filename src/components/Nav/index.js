// NAV

import React from 'react';
// import {ReactSVG} from 'react-svg'
import linkedIn from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'
import instagram from '../../assets/instagram.svg'
import resume from '../../assets/Mark Peterson Resume.pdf'

function Nav(props) {

    const{
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <div className="container">
                <div className="row">
                    <div className="navbar">
                    <h2>
                        {/* <a href="/">
                            <span>Home</span>
                        </a>
                        <a href="/">
                            <span>Bio</span>
                        </a>
                        <a href="/">
                            <span>Web Dev</span>
                        </a>
                        <a href="/">
                            <span> Graphic Design</span>
                        </a> */}
                        <a href={resume} alt="Resume" target="_blank">
                            <span> Resume</span>
                        </a>
                        <a href="#email">
                            <img src={email} alt="Email" id="icon" />
                        </a>
                        <a href="https://github.com/mwpx777" target="_blank">
                            <img src={github} alt="Github" id="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/mwpdesigns/" target="_blank">

                            <img src={linkedIn} alt="LinkedIn" id="icon" />

                        </a>
                        <a href="https://www.instagram.com/mwp_designs/" target="_blank">
                            <img src={instagram} alt="Instagram" id="icon" />
                        </a>

                    </h2>
                </div>
            </div>
            </div>
        </header>

    );
}

export default Nav;