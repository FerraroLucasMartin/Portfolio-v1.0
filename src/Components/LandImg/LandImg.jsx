import React from "react";
import introImg from "../../assets/computer.jpg";
import inIcon from "../../assets/LinkedinLogo.png"
import { Container, IMG, TextDiv, H1  } from "./LandImgStyles";
import { ButtonGroup, Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const LandImg = () => {
    return (
        <Container>
            <IMG src={introImg} alt={"introImg"} />

            <TextDiv>
                <H1>👋 Welcome! <br/> I´m Lucas Ferraro!</H1>

                <p>
                    Aspiring Fullstack Jr. Web Developer, turning ideas into
                    reality, one line of code at a time.💻💡{" "}
                </p>

                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                    size="large"
                >
                    <Button><GitHubIcon fontSize="large"  /></Button>
                    <Button><img src={inIcon} alt="LinkedIn" style={{width:"50px"}}/></Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </TextDiv>
        </Container>
    );
};

export default LandImg;
