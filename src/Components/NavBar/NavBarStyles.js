import styled from "@emotion/styled";

//STYLES
export const H4 = styled.h4`
    font-size: 1.5rem

`;

export const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    /* border: 1px red solid; */
    width: 100%;
    
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
        background-color: #1b191c;
        position: absolute;
        margin: 0;
        top: 0;
        left: ${(props) => props.left};
        transition: 0.3s;
    }
`;

export const Li = styled.li`
    font-size: 1rem;
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