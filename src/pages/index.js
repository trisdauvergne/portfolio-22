import React from "react"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Cv from "../components/cv/Cv"
import Intro from "../components/intro/Intro"
import Nav from "../components/Nav"
import Connect from "../components/connect/Connect"
import Layout from "../components/Layout"
import { StateProvider } from '../context/StateContext';
import { ProjectProvider } from "../context/ProjectContext"

const Home = () => {
  return (
    <StateProvider>
      <ProjectProvider>
        <Layout>
          <Intro />
          <Nav />
          <About />
          <Projects />
          <Cv />
          <Connect />
        </Layout>
      </ProjectProvider>
    </StateProvider>
  )
};

export default Home;
