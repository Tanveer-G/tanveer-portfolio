import React, { useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import style from "./css/Particles.module.css"
const ParticlesContainer = () => {
  const ParticlesInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    // console.log(engine);
    await loadFull(engine);
  }, []);
  const ParticlesLoaded = useCallback(async () => {}, []);

  // const options = {
    
    
  // };

  return (
    <Particles className={style.particles}
      id="tsParticles"
      init={ParticlesInit}
      loaded={ParticlesLoaded}
      // options={{

      //   fullScreen: { enable: true },
      //   background:{
      //     color:{
      //       value:"",
      //     },
      //   },
      //   fpsLimit:120,
      //   interactivity:{
      //      events:{
      //       onClick:{
      //         enable:false,
      //         mode:'push',
      //       },
      //       onHover:{
      //         enable:true,
      //         mode:'repluse',
      //       },
      //       resize:true, 
      //      },
      //      modes:{
      //       push:{
      //         quantity:90,
      //       },
      //       repulse:{
      //         distance:200,
      //         duration:0.4,
      //       },
      //      },
      //   },
      //   Particles: {
      //     color: {
      //       value:'#e67e2e'
      //     },
      //     links:{
      //       color:'#f5d393',
      //       distance:150,
      //       enable: true,
      //       opacity: 0.5,
      //       width:1,
      //     },
      //     collisions:{
      //       enable: true,
      //     },
      //     move:{
      //       directions:'none',
      //       enable: true,
      //       outModes:{
      //         default:'bounce',
      //       },
      //       random: false,
      //       speed:1,
      //       straight:false,
      //     },
      //     number:{
      //       density:{
      //         enable: true,
      //         area:800, 
      //       },
      //       value:80
      //     },
      //     opacity:{
      //       value:0.5,
      //     },
      //      shape:{
      //       type:'circle'
      //      },
      //      size:{
      //       value:{min:1, max:5}
      //      },
      //   },
      //   detectRetina: true,

      // }}
 
      options={{
      fullScreen:{ enable: false},
        background: {
            color: {
                value: "",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 90,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#5dc7ff",
            },
            links: {
                color: "#e1f7ff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}

    >
     
    </Particles>
  );
};

export default ParticlesContainer;


