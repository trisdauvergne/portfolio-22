import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Projects = ({ data }) => {
    const projects = data.allContentfulProject.edges;
    console.log('all', projects);
    return (
        <section>
            <h1>Projects section</h1>
            {projects.map((project, i) => (
                <p key={i}>{project.node.projectTitle}</p>
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