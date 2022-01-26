import React from "react"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Cv from "../components/cv/Cv"
import Intro from "../components/intro/Intro"
import Nav from "../components/Nav"
import Connect from "../components/connect/Connect"
import Layout from "../components/Layout"
import {StateProvider } from '../context/StateContext';

const Home = () => {
  return (
    <StateProvider>
      <Layout>
        <Intro />
        <Nav />
        <About />
        <Projects />
        <Cv />
        <Connect />
      </Layout>
    </StateProvider>
  )
};

export default Home;
