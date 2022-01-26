import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './project.scss';

const Project = ({ project }) => {
    const [ visibleBody, setVisibleBody ] = useState(false);
    const [ visibleTools, setVisibleTools ] = useState(false);

    const changeBodyVisibility = () => {
        setVisibleBody(!visibleBody);
        setVisibleTools(false);
    };

    const changeToolsVisibility = () => {
        setVisibleTools(!visibleTools);
        setVisibleBody(false);
    };

    const hideAll = () => {
        setVisibleTools(false);
        setVisibleBody(false);
    }

    return (
        <div className="project">
            <div className="project__title">
                <h2>{project.projectTitle}</h2>
                <p>{project.projectIntro}</p>
            </div>
            <OutsideClickHandler onOutsideClick={hideAll}>
            <div className="project__btns">
                <button onClick={changeBodyVisibility}>{visibleBody ? `Hide -` : `Read more +`}</button>
                <button onClick={changeToolsVisibility}>Tools & Languages +</button>
                <a href={project.deployedLink} target="_blank" rel="noreferrer" onClick={hideAll}>Deployed project</a>
                <a href={project.sourceCode} target="_blank" rel="noreferrer" onClick={hideAll}>Source code</a>
            </div>
            </OutsideClickHandler>
            <div className="project__info">
                {visibleBody && <div>
                    <p>{project.projectBody.projectBody}</p>
                    <p>{project.projectCreative.projectCreative}</p>
                </div>}
                {visibleTools && <div>
                    {project.toolsAndLanguages.map((tool, i) => <p key={i}>{tool}</p>)}
                </div>}
            </div>
            {/* <div className="project__copy">
                <p><strong>Read more +</strong></p>
                <p>{project.projectBody.projectBody}</p>
                <p>{project.projectCreative.projectCreative}</p>
            </div>
            <div className="project__tools">
                <p><strong>Tools & languages +</strong></p>
                {project.toolsAndLanguages.map((tool, i) => <p key={i}>{tool}</p>)}
            </div>
            <div className="project__links">
                <p>{project.deployedLink}</p>
                <p>{project.sourceCode}</p>
            </div> */}
        </div>
    )
}

export default Project
