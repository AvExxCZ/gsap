"use client"
import React from 'react'
// import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const GsapComponent = () => {

  // const target = useRef(null);

  useGSAP(() => {

    // use a class or ID

    // to
    gsap.to("#box1", { x: 200 })

    // from
    gsap.from("#circle1", { x: -40, fill: 'blue', })

    // from to
    gsap.fromTo("#circle2", { x: -40, background: 'blue', }, { x: 400, background: 'green' });

    // set
    gsap.set("#circle3", { x: 40, background: 'blue', });


    gsap.to("#box2", {
      x: 500,
      background: 'orange',
      rotation: 360,
      duration: 2,
    })

    gsap.fromTo("#box3", {
      x: 500,
      background: 'orange',
      rotation: 360,
      duration: 2,
    }, {
      x: 600,
      background: 'red',
      rotation: -360,
      duration: 1,
    })

    // procentualni hodnota transformu: yPercent: "hodnota v procentech" 

    // gsap units

    // x: 200, // use default of px
    // x: "+=200" // relative values
    // x: '40vw', // or pass in a string with a differe nt unit for GSAP to parse
    // x: () => window.innerWidth / 2, // you can even use functional values to do a calculation!

    // rotation: 360 // use default of degrees
    // rotation: "1.25rad" // use radians

  }, [])

  return (
    <>
      <div id='box1' className='size-24 bg-red-500 mb-8'></div>

      <div id='circle1' className='size-16 bg-orange-500 mb-8 rounded-full'></div>

      <div id='circle2' className='size-16 mb-8 rounded-full'></div>

      <div id='circle3' className='size-16 mb-8 rounded-full'></div>

      <div id='box2' className='size-24 bg-red-500 mb-8'></div>

      <div id='box3' className='size-24 bg-red-500 mb-8'></div>

    </>
  )
}

export default GsapComponent