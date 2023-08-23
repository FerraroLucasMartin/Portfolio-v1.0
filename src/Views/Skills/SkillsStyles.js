import styled from "@emotion/styled";
import {keyframes } from '@emotion/react'

export const Wrapper=styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin-left: 12%;
margin-right: 12%;

`

export const Container=styled.div`
display:flex;
justify-content: space-between;
align-items: flex-start;
gap:100px;
margin-bottom: 50px;
`

const pulsate= keyframes` 
  100% {
    text-shadow:
    0 0 7px #ffffffff,
    0 0 20px rgb(0,127,255),
    0 0 40px  rgb(0,127,255),
    0 0 80px  rgb(0,127,255),
    0 0 90px  rgb(0,127,255),
    0 0 120px  rgb(0,127,255),
    0 0 2000px  rgb(0,127,255); 
  }
  `

export const H1= styled.h1`
font-size: 3.5rem;
margin-bottom: 50px;
color: #ffffffff;
text-shadow: 
    0 0 7px #ffffffff,
    0 0 20px rgb(0,127,255),
    0 0 40px  rgb(0,127,255),
    0 0 80px  rgb(0,127,255),
    0 0 90px  rgb(0,127,255),
    0 0 120px  rgb(0,127,255),
    0 0 150px  rgb(0,127,255),
    0 0 180px  rgb(0,127,255);
font-family: 'Tilt Neon', cursive;
animation: ${pulsate} 3s ease-in-out infinite;
`


