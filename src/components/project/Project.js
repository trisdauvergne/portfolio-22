import React from 'react';
import './project.scss';

const Project = ({ project }) => {
    console.log('single file', project)
    return (
        <div className="project">
            <div className="project__title">
                <h2>{project.projectTitle}</h2>
                <p>{project.projectIntro}</p>
            </div>
            <div className="project__copy">
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
            </div>
        </div>
    )
}

export default Project
