import React from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import Cv from "../components/Cv"
import Intro from "../components/Intro"
import Nav from "../components/Nav"
import Connect from "../components/Connect"
import Layout from "../components/Layout"


export default function Home() {
  return (
    <>
    <Layout>
      <Intro />
      <Nav />
      <About />
      <Projects />
      <Cv />
      <Connect />
    </Layout>
    </>
  )
}
