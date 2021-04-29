// NAV

import React from 'react';
import Mark from '../../assets/Mark Peterson Website background.png';
import resume from '../../assets/Mark Peterson Resume.pdf';


function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,

    } = props;



    return (
        <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
            <img src={Mark} alt="headerLogo" style={{ width: "15%", margin: "1rem" }} />

            <div className="navbarCenter">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <a className="nav-link" id="navLink" href="/index.html">
                            Home
                        </a>
                    </li>

                    {categories.map((category) => {

                        return (
                            <li id="projectsWord"
                                className={`nav-item nav-link ${currentCategory.name === category.name && `navActive`}`}
                                key={category.name}>

                                <span onClick={() => {
                                    setCurrentCategory(category);
                                  
                                    console.log(category);
                                }}
                                >{(category.name)}
                                </span>
                            </li>
                        );
                    })}
                    <li className="nav-item">
                        <a className="nav-link" href={resume} alt="Resume" target="_blank" rel="noreferrer">
                            <span id="navLink"> Resume</span>
                        </a>
                    </li>
            
                </ul>
            </div>
        </nav>

    );
}

export default Nav;