import styled from "@emotion/styled";

export const Container = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
padding: 15px;
width: 98%;;

`;

export const TextDiv = styled.div`
display:flex;
flex-direction: column;
border: solid 3px #007FFF;
box-shadow:0 0px 10px rgb(255,255,255,0.4), 0 0px 10px rgb(255,255,255,0.4) inset,0 1px 20px rgb(0,127,255,0.7), 0 1px 20px rgb(0,127,255,0.7) inset,0 0px 25px rgb(0,100,255,0.2), 0 0px 25px rgb(0,100,255,0.2) inset;

background-color: rgb(24,43,70,0.2);
backdrop-filter: blur(80px);
padding: 7%;
height: 70vh;
width: 50%;
border-radius: 50px;
justify-content: space-evenly;
align-items: center

`;

export const IMG = styled.img`
opacity: 0.8;
border: solid 3px #007FFF;
box-shadow: 0 0px 10px rgb(255,255,255,0.5);
border-radius: 50px;
height: 75vh;
`;

export const H1 = styled.h1`
font-size: 3.5rem;
margin-left: -40px;
`;
