import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './cv.scss';

const CV = () => {
    const [ visibleEducation, setVisibleEducation ] = useState(false);
    const [ visibleWorkExperience, setVisibleWorkExperience ] = useState(false);
    const [ visibleTechnicalSkills, setVisibleTechnicalSkills ] = useState(false);

    const changeEducationVisibility = () => {
        setVisibleEducation(!visibleEducation);
        setVisibleWorkExperience(false);
        setVisibleTechnicalSkills(false);
    };

    const changeWorkExperienceVisibility = () => {
        setVisibleWorkExperience(!visibleWorkExperience);
        setVisibleEducation(false);
        setVisibleTechnicalSkills(false);
    };

    const changeTechnicalSkillsVisibility = () => {
        setVisibleTechnicalSkills(!visibleTechnicalSkills);
        setVisibleWorkExperience(false);
        setVisibleEducation(false);
    };

    const hideAll = () => {
        setVisibleEducation(false);
        setVisibleWorkExperience(false);
        setVisibleTechnicalSkills(false);
    }

    return (
        <section className="cv">
            <h1 className="section-heading">CV.</h1>
            <OutsideClickHandler onOutsideClick={hideAll}>
            <article>
                <div className="cv__btns">
                    <button className="clickable-heading" onClick={changeEducationVisibility}>{visibleEducation ? `Hide -` : `Education & Training +`}</button>
                    <button className="clickable-heading" onClick={changeWorkExperienceVisibility}>{visibleWorkExperience ? `Hide -` : `Work Experience +`}</button>
                    <button className="clickable-heading" onClick={changeTechnicalSkillsVisibility}>{visibleTechnicalSkills ? `Hide -` : `Technical Skills +`}</button>
                </div>
                <div>
                    {visibleEducation &&
                    <>
                        <div>
                            <h2>Full Stack JavaScript</h2>
                            <p>School of Applied Technology,<br/>January 2021 - April 2021</p>
                            <p>Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning</p>
                        </div>
                        <div>
                            <h2>Full Stack Software Development Diploma</h2>
                            <p>Code Institute,<br/>January 2020 - May 2020</p>
                            <p>An introduction to the fundamentals of full stack software development</p>
                        </div>
                        <div>
                            <h2>BA Theatre: Design for Performance</h2>
                            <p>University of the Arts, London<br/>September 2004 - July 2007</p>
                            <p>Designing for all aspects of live performance</p>
                        </div>
                    </>
                    }
                    {visibleWorkExperience &&
                    <>
                        <div>
                            <h2>Full Stack JavaScript Consultant</h2>
                            <p>School of Applied Technology,<br/>April 2021 - Present</p>
                            <p>Working with JavaScript, React and Node.js to build full stack web and mobile applications</p>
                        </div>
                        <div>
                            <h2>Project Manager</h2>
                            <p>Household Design, London,<br/>July 2017 - October 2018</p>
                            <p>A client facing role managing store design and branding projects for retail clients such as Christian Louboutin, Paperchase and Ludlow Farms</p>
                        </div>
                        <div>
                            <h2>Client Manager</h2>
                            <p>Conran Design Group, London, <br/>January 2016 - July 2017</p>
                            <p>Managed Shell’s online ‘Retail Brand Check Service’ ensuring the brand was represented consistently at retail sites around the world </p>
                        </div>
                    </>}
                    {visibleTechnicalSkills && 
                    <>
                        <div>
                            <div>
                                <p>General</p>
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <p>Frontend</p>
                                <p>React, Redux, Webpack, HTML, CSS / SASS / styled-components</p>
                            </div>
                            <div>
                                <p>Backend</p>
                                <p>NodeJS, Express, REST, GraphQL, MongoDB / PostgreSQL</p>
                            </div>
                            <div>
                                <p>Tools and technologies</p>
                                <p>Visual Studio Code, Handlebars / Mustache, Mocha / Jest, Docker, Git + GitHub, AWS, Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku, Contentful), TDD,Agile Work Methods</p>
                            </div>
                        </div>
                    </>}
                </div>
            </article>
            </OutsideClickHandler>
        </section>
    )
}

export default CV
