import React, { useState } from "react";
import { Container, TextDiv, IMG } from "../Components/LandImg/LandImgStyles";
import character from "../assets/character.jpg";
import { ButtonGroup, Button } from "@mui/material";
import paragraphs from "../utils/aboutParagraphs";




const About = () => {

    const [currentP, setCurrentP] = useState(1);

    let clickHandler = (event) => {
      event.target.id === "prev" ? setCurrentP(currentP - 1) : setCurrentP(currentP +1);
    };

    return (
        <Container id="about" style={{ height:"100vh" }}>
            <TextDiv style={{padding:"50px", fontSize:"1.1rem", letterSpacing:".1em",justifyContent:"space-between"}}>
                <div style={{height:"80%",textAlign:"center"}}>{paragraphs[currentP]}</div>

                <ButtonGroup style={{ marginTop: "30px" }}>
                    <Button
                    id="prev"
                        variant="outlined"
                        onClick={clickHandler}
                        disabled={currentP === 1 ? true : false}
                    >
                        Previous
                    </Button>

                    <Button
                    id="next"
                        variant="outlined"
                        onClick={clickHandler}
                        disabled={currentP === 7 ? true : false}
                    >
                        Next
                    </Button>
                </ButtonGroup>
            </TextDiv>
            <IMG src={character} alt="" />

        </Container>
    );
};

export default About;
