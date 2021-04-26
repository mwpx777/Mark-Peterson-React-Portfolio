import React from 'react'
import MWPLogo from '../../assets/MWP Designs Logo for Email.png'


function Footer() {
    return (
        <section>
            <h3>&#169; 2021 Created by Mark Peterson</h3>
            <img src={MWPLogo} style="height:40px" id="mwpLogo" />
        </section>

    )
}

export default Footer;