import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Constellations = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      className="h-screen"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.4,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#42daf5",
          },
          links: {
            color: "#c678dd",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 2,
            triangles: {
              enable: true,
              color: "#c678dd",
              opacity: 0.2,
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 80,
          },
          opacity: {
            value: 0.9,
          },
          shape: {
            type: "polygon",
          },
          size: {
            random: true,
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Constellations;
