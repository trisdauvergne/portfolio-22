import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './projectDetails.scss';

const ProjectDetails = ({ project }) => {
    console.log('in the projectinfo component', project);
    const [ visibleDetails, setVisibleDetails ] = useState(false);
    const [ visibleTools, setVisibleTools ] = useState(false);

    const changeDetailsVisibility = () => {
        setVisibleDetails(!visibleDetails);
        setVisibleTools(false);
    };

    const changeToolsVisibility = () => {
        setVisibleTools(!visibleTools);
        setVisibleDetails(false);
    };

    const hideAll = () => {
        setVisibleTools(false);
        setVisibleDetails(false);
    };
    
    return (
        <div className="project">
                <div className="project-intro">
                    <h2>{project.projectTitle}</h2>
                    <p>{project.projectIntro}</p>
                    <OutsideClickHandler onOutsideClick={hideAll}>
                        <div className="project-btns">
                            <button onClick={changeDetailsVisibility}>{visibleDetails ? `Hide - ` : `Read more +`}</button>
                            <button onClick={changeToolsVisibility}>{visibleTools ? `Hide - ` : `See tools +`}</button>
                            <a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed project</a>
                            <a href={project.sourceCode} target="_blank" rel="noreferrer">Source code</a>
                        </div>
                    </OutsideClickHandler>
                </div>
                <div className="project-details">
                    {visibleDetails && <div>
                        <p>{project.projectBody.projectBody}</p>
                        <p>{project.projectCreative.projectCreative}</p>
                    </div>}
                    {visibleTools && <div>
                        {project.toolsAndLanguages.map((tool, i) => <p key={i}>{tool}</p>)}
                    </div>}
                </div>
        </div>
    )
}

export default ProjectDetails;
