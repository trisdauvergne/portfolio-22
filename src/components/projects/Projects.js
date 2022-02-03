import React, { useState, useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'react-scroll';
import OutsideClickHandler from 'react-outside-click-handler';
import './projects.scss';
import ProjectDetails from '../projectDetails/ProjectDetails';
import { ProjectContext } from '../../context/ProjectContext'; 

const Projects = ({ data }) => {
    const [ projectInfoVisibility, setProjectInfoVisibility ] = useState(false);

    const { saveProjectInfo, projectDetails } = useContext(ProjectContext);

    const projects = data.allContentfulProject.edges;

    const setProject = (project) => {
        setProjectInfoVisibility(false);
        saveProjectInfo(project);
        setProjectInfoVisibility(true);
    }
 
    return (
        <section className="projects" id="projects">
            <OutsideClickHandler onOutsideClick={() => setProjectInfoVisibility(false)}>
                    <h1 className="section-heading">Deployed projects.</h1>
                    <div className="projects-info-container">
                            <div className="projects-info__names">
                                {projects.map((project, i) => (
                                    <button
                                        onClick={() => setProject(project.node)}
                                        className="clickable-heading"
                                        key={i}>{project.node.projectTitle}
                                    </button>))
                                }
                            </div>
                        <div className="projects-info__details">
                            {projectInfoVisibility && <ProjectDetails project={projectDetails}/>}
                        </div>
                    </div>
            </OutsideClickHandler>
            <Link to="cv" smooth={true} duration={1000}>
                <button className="nav-btn">To CV</button>
            </Link>
        </section>
        
    )
};

export const ProjectsData = () => {

    return (
        <StaticQuery query={graphql`
            query MyQuery {
                allContentfulProject {
                    edges {
                        node {
                            projectTitle
                            projectIntro
                            projectBody {
                                projectBody
                            }
                            projectCreative {
                                projectCreative
                            }
                            deployedLink
                            sourceCode
                            toolsAndLanguages
                            mainPagePreview {
                                title
                                description
                                file {
                                contentType
                                fileName
                                url
                                details {
                                    size
                                    image {
                                    height
                                    width
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }  
    `}
    render={data => <Projects data={data} />}
/>
    )
};

export default ProjectsData;