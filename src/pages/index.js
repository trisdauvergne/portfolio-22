import React from "react"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Cv from "../components/cv/Cv"
import Intro from "../components/intro/Intro"
import Connect from "../components/connect/Connect"
import Layout from "../components/Layout"
import store from '../redux/store'
import { Provider } from 'react-redux'

const Home = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Intro />
        <About />
        <Projects />
        <Cv />
        <Connect />
      </Layout>
    </Provider>
  )
};

export default Home;
