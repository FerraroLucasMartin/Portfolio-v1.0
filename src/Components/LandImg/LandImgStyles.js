import styled from "@emotion/styled";

export const Container = styled.div`
display:flex;
justify-content: space-evenly;
/* align-items: center; */

height: 100%;
width: 98%;
margin-top: 2%;  

`;

// export const BackDiv = styled.div`
// height: 100%;
// width: 100%;
// background-image: linear-gradient(to top right,#150D18,#0F1024, #13223F,#1e3450, #75B3CD );
// `;

export const TextDiv = styled.div`
display:flex;
flex-direction: column;
border: solid 3px #040C11;
padding: 7%;
height: 85vh;
width: 50%;
border-radius: 50px;
justify-content: space-evenly;
align-items: flex-start;
box-shadow: 0 0 10px #fff, 0 0 20px #fff,  0 0 40px #94d0e8, 0 0 50px #94d0e8, 0 0 60px #94d0e8;

`;

export const IMG = styled.img`
border: solid 3px #040C11;
/* box-shadow: 0px 0px 25px 2px #fef7e8; */
border-radius: 50px;
height: 85vh;
`;

export const H1 = styled.h1`
font-size: 3.5rem;
`;
