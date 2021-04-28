import React from 'react'
import MWPLogo from '../../assets/MWP Designs Logo for Email.png'
import linkedIn from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

import instagram from '../../assets/instagram.svg'


function Footer() {
    return (
        <footer id="links">
            
            <div className="container" >
                <div className="row" id="footer">
                    <h3>&#169; 2021 Created by Mark Peterson</h3>
                    <img src={MWPLogo} id="mwpLogo" alt="MWP Designs Logo" />
                    <a href="https://github.com/mwpx777" target="_blank" rel="noreferrer">
                        <img src={github} alt="Github" id="icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/mwpdesigns/" target="_blank" rel="noreferrer">

                        <img src={linkedIn} alt="LinkedIn" id="icon" />

                    </a>

                    <a href="https://www.instagram.com/mwp_designs/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="Instagram" id="icon" />
                    </a>
                </div>
                
         </div>
        </footer>

    )

}   

export default Footer;