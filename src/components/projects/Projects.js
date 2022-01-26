import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './projects.scss';
import Project from '../project/Project';

const Projects = ({ data }) => {
    const projects = data.allContentfulProject.edges;

    return (
        <section className="projects">
            <h1>Deployed projects.</h1>
            {projects.map((project, i) => (
                <Project key={i} project={project.node} />
            ))}
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