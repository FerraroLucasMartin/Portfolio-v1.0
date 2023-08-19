import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavDiv, Ul, Li, H4, Hamburguer, Container, LogoImg } from "./NavBarStyles";
// import {Link}  from "react-router-dom";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll"

//COMPONENT

export default function NavBar() {
    const [click, setclick] = useState(false);
    const handleClick = () => {
        setclick(!click);
    };

    return (
        <Container>
            <NavDiv>

                <Link style={{ display: "flex", alignItems: "center" }} to="test1" spy={true} smooth={true} offset={50} duration={500}>
                    <LogoImg src={logo} alt="" />
                    <H4>Lucas Ferraro.</H4>
                </Link>

                <Ul left={click ? "0%" : "-100%"}>
                    <Li>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </Li>
                    <Li>
                        <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>About</Link>
                    </Li>
                    {/* <Li>
                 {" "}
                 <Link to="/workInProgress">Projects</Link>{" "}
             </Li>
             <Li>
                 {" "}
                 <Link to="/workInProgress">Contact</Link>{" "}
             </Li> */}
                </Ul>

                <Hamburguer onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: "#fff" }} />
                    ) : (
                        <FaBars size={20} style={{ color: "#fff" }} />
                    )}
                </Hamburguer>
            </NavDiv>


        </Container>
    );
}
