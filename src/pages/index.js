import React from "react"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Cv from "../components/cv/Cv"
import Intro from "../components/intro/Intro"
import Nav from "../components/Nav"
import Connect from "../components/connect/Connect"
import Layout from "../components/Layout"
import { DataProvider } from '../context/DataContext';

const Home = () => {
  return (
    <DataProvider>
    <Layout>
      <Intro />
      <Nav />
      <About />
      <Projects />
      <Cv />
      <Connect />
    </Layout>
    </DataProvider>
  )
};

export default Home;
