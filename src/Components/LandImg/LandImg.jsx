import React from "react";
import introImg from "../../assets/computer.jpg";
import { Container, IMG, TextDiv, H1 } from "./LandImgStyles";
import { ButtonGroup, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const LandImg = () => {
    return (
        <Container>
            <IMG src={introImg} alt={"introImg"} />

            <TextDiv>
                <H1>👋🏾 WELCOME!</H1>

                <p style={{ fontSize: "1.3rem",marginTop:"50px", marginBottom:"50px" }}>
                👨‍💻 Im a Jr. Full Stack Developer specialized in the PERN stack,
                    carving my path in the IT industry, always evolving. 
                    <br />
                    <br />
                    Fueled by curiosity and endless learning, I turn ideas into
                    reality, one line of code at a time.💻💡
                    <br />
                    <br />
                    Let's get in touch and collaborate, 
                    ever-ready to create a meaningful impact.🚀 {" "}
                </p>

                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                    size="large"
                >
                    <Button>
                        <a
                            href="https://github.com/FerraroLucasMartin"
                            target="_blank"
                        >
                            <GitHubIcon fontSize="large" color="primary" />
                        </a>
                    </Button>
                    <Button>
                        <a
                            href="https://www.linkedin.com/in/ferrarolucasmartin/"
                            target="_blank"
                        >
                            {" "}
                            <LinkedInIcon fontSize="large" color="primary" />
                        </a>
                    </Button>
                    <Button>
                        <a href="https://wa.me/5491167011008" target="_blank">
                            <WhatsAppIcon fontSize="large" color="primary" />
                        </a>
                    </Button>
                </ButtonGroup>
            </TextDiv>
        </Container>
    );
};

export default LandImg;
