import React, { useState, createContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [ projectDetails, setProjectDetails ] = useState(null);

    const saveProjectInfo = (project) => {
        console.log('in projectcontext', project);
        setProjectDetails(project);
    }

    return (
        <ProjectContext.Provider value={{
            saveProjectInfo,
            projectDetails,
        }}>
            { children }
        </ProjectContext.Provider>
    )
}

export default ProjectContext;