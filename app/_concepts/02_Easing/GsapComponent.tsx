"use client"
import React from 'react'
// import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const GsapComponent = () => {

  useGSAP(() => {
    gsap.to("#box1", { x: 500, duration: 2, ease: "none" });
    gsap.to("#box2", { x: 500, duration: 2, ease: "bounce.out" });
  }, [])



  return (
    <>
      <div className='size-16 bg-red-500 m-5' id='box1'></div>
      <div className='size-16 bg-red-500 m-5' id='box2'></div>
    </>
  )
}

export default GsapComponent