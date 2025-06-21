"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapComponent = () => {

  useGSAP(() => {

    const timeline = gsap.timeline()

    timeline
      .to("#box", { x: 500, duration: 1, delay: .5, ease: "bounce" })
      .to("#box", { rotate: 360, duration: 2, delay: 0.5 })
      .to("#box", { background: "lime", delay: 1 })
      .to("#box", { x: 200 , duration: 1})
  }, [])

  return (
    <>
      <div id="box" className='size-24 bg-orange-500'></div>
    </>
  )
}

export default GsapComponent