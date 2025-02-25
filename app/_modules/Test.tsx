'use client';
import styled from 'styled-components';
import { useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Body = styled.div`
  height: 300vh;
`;

const Trigger = styled.div`
  position: absolute;
  top: 75vh;
  left: 0;
  width: 100vw;
  height: 80vh;
  background-color: lightgray;
  padding: 20px;
`;

const Box = styled.div`
  background-color: black;
  width: 10vw;
  height: 10vw;
`;

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.trigger',
          start: 'top top',
          end: '+=1000',
          scrub: 1,
          pin: true,
          markers: true,
        },
      });
      tl.to('.box', { yPercent: 350, duration: 1 });
      tl.to('.box', { rotation: 360, duration: 3 });
      tl.to('.box', { xPercent: 350, duration: 1 });
    },
    { scope: container }
  );

  return (
    <Body ref={container}>
      <h1>Scroll down</h1>

      <Trigger className="trigger">
        <Box className="box"></Box>
      </Trigger>
    </Body>
  );
}