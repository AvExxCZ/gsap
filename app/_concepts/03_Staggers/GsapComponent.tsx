"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapComponent = () => {

  useGSAP(() => {
    gsap.to(".box", { 
      x: 500, 
      duration: 2, 
      ease: "power1.inOut",
      stagger: 0.5,
    });
  }, [])

  return (
    <>
      <div className='size-16 bg-orange-500 m-5 box'></div>
      <div className='size-16 bg-lime-500 m-5 box'></div>
      <div className='size-16 bg-blue-500 m-5 box'></div>
      <div className='size-16 bg-yellow-500 m-5 box'></div>
    </>
  )
}

export default GsapComponent