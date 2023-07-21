import styled from "@emotion/styled";

export const Container = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
padding: 15px;
width: 98%;

`;

export const TextDiv = styled.div`
display:flex;
flex-direction: column;
border: solid 3px rgb(148,208,231,0.2);
box-shadow: 0 1px 12px rgb(148,208,231,0.2);
background-color: rgb(24,43,70,0.2);
backdrop-filter: blur(80px);
padding: 7%;
height: 85vh;
width: 50%;
border-radius: 50px;
justify-content: space-evenly;
align-items: flex-start;

`;

export const IMG = styled.img`
opacity: 0.8;
border: solid 3px rgb(148,208,231,0.2);
    box-shadow: 0 1px 12px rgb(148,208,231,0.2);
border-radius: 50px;
height: 85vh;
`;

export const H1 = styled.h1`
font-size: 3.5rem;
`;
