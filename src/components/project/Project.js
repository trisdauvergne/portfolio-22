import React, { useState, useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './project.scss';
import { ProjectContext } from '../../context/ProjectContext';

const Project = ({ project }) => {
    const [ visibleInfo, setVisibleInfo ] = useState(false);
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
        setVisibleInfo(false);
        setVisibleTools(false);
        setVisibleBody(false);
    };

    const data = useContext(ProjectContext);
    console.log(data);

    return (
        <div className="project">
            <div className="project__title">
                <button className="clickable-heading" onClick={() => setVisibleInfo(!visibleInfo)}>{project.projectTitle}</button>
            </div>
            {visibleInfo && 
            <>
                <div className="project__intro">
                    <p>{project.projectIntro}</p>
                </div>
                <OutsideClickHandler onOutsideClick={hideAll}>
                    <div className="project__btns">
                        <button onClick={changeBodyVisibility}>{visibleBody ? `Hide -` : `Read more +`}</button>
                        <button onClick={changeToolsVisibility}>{visibleTools ? `Hide -` : `Tools & Languages +`}</button>
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
            </>
            }
        </div>
    )
}

export default Project
