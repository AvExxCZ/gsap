"use client"
import React, { useEffect } from "react"

const Smooth = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default
            const locomotiveScroll = new LocomotiveScroll()
        })()
    }, [])
    return <main>{children}</main>
}

export default Smooth