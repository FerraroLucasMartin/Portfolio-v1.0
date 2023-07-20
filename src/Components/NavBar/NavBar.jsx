import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavDiv, Ul, Li, H4, Hamburguer } from "./NavBarStyles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

//COMPONENT

export default function NavBar() {
    const [click, setclick] = useState(false);
    const handleClick = () => {
        setclick(!click);
    };

    return (
        <NavDiv>
            <Link>
                <H4>Ferraro Lucas Martin</H4>
            </Link>

            <Ul left={click ? "0%" : "-100%"}>
                <Li>
                    {" "}
                    <Link to="/">Home</Link>{" "}
                </Li>
                <Li>
                    {" "}
                    <Link to="/projects">Projects</Link>{" "}
                </Li>
                <Li>
                    {" "}
                    <Link to="/about">About</Link>{" "}
                </Li>
                <Li>
                    {" "}
                    <Link to="/contact">Contact</Link>{" "}
                </Li>
            </Ul>

            <Hamburguer onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </Hamburguer>

        </NavDiv>
    );
}
