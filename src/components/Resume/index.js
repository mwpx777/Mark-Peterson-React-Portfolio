

import React from 'react';
import resume from '../../assets/Mark Peterson Resume.pdf';

const Resume = (props) => {

    const { currentCategory } = props;
    return (
        <>
            <section className="resume">
                <div className="resumeContainer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3> Download Resume <a href={resume} alt="Resume" target="_blank" rel="noreferrer" >HERE</a></h3>
                            </div>
                            <div className="col-12">
                                <h3> Front End Profiencies </h3>
                                <ul>
                                    <li>HTML </li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>JQuery </li>
                                    <li>responsive design </li>
                                    <li>React.js</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <h3> Back End Profiencies </h3>
                                <ul>
                                    <li>APIS </li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MySQL, Sequelize </li>
                                    <li>MongoDB, Mongoose </li>
                                    <li>REST</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Resume;