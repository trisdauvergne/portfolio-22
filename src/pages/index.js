import React from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import Cv from "../components/Cv"
import Intro from "../components/Intro"
import Nav from "../components/Nav"
import Connect from "../components/Connect"


export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <About />
      <Projects />
      <Cv />
      <Connect />
    </>
  )
}
