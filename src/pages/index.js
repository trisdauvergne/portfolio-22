import React from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import Cv from "../components/Cv"
import Intro from "../components/Intro"
import Nav from "../components/Nav"
import Connect from "../components/Connect"
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
