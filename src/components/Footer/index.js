import React from 'react'
import MWPLogo from '../../assets/MWP Designs Logo for Email.png'


function Footer() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h3>&#169; 2021 Created by Mark Peterson</h3>
                    <img src={MWPLogo} id="mwpLogo" alt="MWP Designs Logo" />
                </div>
         </div>
        </section>

    )

}   

export default Footer;