import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavDiv, Ul, Li, H4, Hamburguer, Container } from "./NavBarStyles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

//COMPONENT

export default function NavBar() {
    const [click, setclick] = useState(false);
    const handleClick = () => {
        setclick(!click);
    };

    return (
        <Container>
            <NavDiv>
                <Link>
                    <H4>Lucas Ferraro.</H4>
                </Link>

                <Ul left={click ? "0%" : "-100%"}>
                    <Li>
                        {" "}
                        <Link to="/">Home</Link>{" "}
                    </Li>
                    <Li>
                        {" "}
                        <Link to="/workInProgress">About</Link>{" "}
                    </Li>
                    <Li>
                        {" "}
                        <Link to="/workInProgress">Projects</Link>{" "}
                    </Li>
                    <Li>
                        {" "}
                        <Link to="/workInProgress">Contact</Link>{" "}
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
        </Container>
    );
}
