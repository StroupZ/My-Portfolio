import type { NextPage } from "next";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
