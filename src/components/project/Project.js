import React from 'react';
import './project.scss';

const Project = ({ project }) => {
    console.log('single file', project)
    return (
        <div className="project">
            <h2>{project.projectTitle}</h2>
            <p>{project.projectIntro}</p>
            <p><strong>Read more +</strong></p>
            <div>
                <p>{project.projectBody.projectBody}</p>
                <p>{project.projectCreative.projectCreative}</p>
            </div>
            <p><strong>Tools & languages +</strong></p>
            {project.toolsAndLanguages.map((tool, i) => <p key={i}>{tool}</p>)}
            <p>{project.deployedLink}</p>
            <p>{project.sourceCode}</p>
        </div>
    )
}

export default Project
