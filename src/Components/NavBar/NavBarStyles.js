import styled from "@emotion/styled";

//STYLES


export const Container = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
 top:0;
  z-index: 1;
  /* border:solid green 5px; */
`;

export const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 30px;
    border: solid 3px rgba(255, 255, 255, 0.01);
    box-shadow: 3px 3px 7px 3px #00000050;
/* background-color: rgb(24,43,70,0.6); */
    width: 90%;
    margin-top:15px;
    backdrop-filter: blur(10px);
`;

export const H4 = styled.h4`
margin-left: 15px;
font-size: 1.5rem;
`;

export const LogoImg = styled.img`
width: 50px;
transform: rotate(90deg);
margin-top: -25px;
margin-Bottom: -25px;
transition: transform 0.8s ease; 

&:hover{
    transform: rotate(450deg);
}
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 15px;

    @media screen and (max-width: 1040px) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height:100%;
        background-color: rgb(16,22,42);
        position: absolute;
        margin: 0;
        top: 0;
        left: ${(props) => props.left};
        transition: 0.3s;
    }
`;

export const Li = styled.li`
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0 1rem;
    width: auto;
    transition: 0.05s ease-in-out;
    

    @media screen and (max-width: 1040px) {
        font-size: 1.2rem;

        &:hover{
        margin-left: 10px;
        font-size: 1.5rem;
        transition: 0.3s ease-in-out;
    }
    }
    
    &:hover{
        font-size: 1.3rem;
        transition: 0.1s ease-in-out;
    }
`;



export const Hamburguer = styled.div`
    display: none;
    @media screen and (max-width: 1040px) {
        display: initial;
        z-index: 1;
    }
`;

// export const Button = styled.button`
//   /* padding: 12px 24px;
//   font-size: 16px;
//   font-weight: bold;
//   text-align: center;
//   text-decoration: none;
//   background-color: #f1f1f1;
//   color: #333;
//   border: 2px solid #333;
//   border-radius: 4px;
//   transition: background-color 0.3s, color 0.3s, border-color 0.3s; */

//   &:Hover{
//   /* background-color: #333;
//   color: #fff;
//   border-color: #fff; */
//   }
// `