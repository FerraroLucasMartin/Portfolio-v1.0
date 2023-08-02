import React, { useState } from "react";
import { Container, TextDiv, IMG } from "../Components/LandImg/LandImgStyles";
import character from "../assets/character.jpg";
import { ButtonGroup, Button } from "@mui/material";

const About = () => {

    const paragraphs = {
        1: (
            <p>
                My name is <span style={{color:"#007FFF", fontSize:"1.7rem", }} >Lucas Ferraro</span>, I'm multi-disciplinary
                artist, educator, nature lover, and Vipassana
                meditator. 
                <br/>
                <br/>
                Through all my practices, I actively seek out new opportunities for personal and professional development. 
                <br/>
                <br/>
                As a
                junior developer, I'm excited to bring my diverse skill set and
                creativity to the table, collaborating with others to craft
                innovative solutions that positively impact our world.
            </p>
        ),
        2: (
            <p>
                {" "}
                Recently, I graduated from SoyHenry Bootcamp, where I honed my
                skills in full stack web development using NodeJS, Express,
                Postgresql, React, and Redux.
                <br/>
                <br/>
                During this time, I also discovered
                my love for frontend development and the power of User
                Experience design. I'm eager to continue expanding my knowledge
                in these areas while staying up-to-date with the latest
                technologies.
            </p>
        ),
        3: (
            <p>
                My background in art has instilled in me a keen eye for detail
                and a deep appreciation for aesthetics. I believe that good
                design should not only be functional but also visually
                pleasing.
                <br/>
                <br/>
                I've always been drawn to the intersection of
                technology and art. I believe that code can be a powerful tool
                for creative expression, and I enjoy exploring the boundaries of
                what's possible with digital media.
            </p>
        ),
        4: (
            <p>
                As an educator, I've worked with students of all ages, from
                young children to adults and I understand the importance of
                clear communication, empathy, and patience. 
                <br/>
                <br/>
                My approach to teaching is centered around mentorship, encouraging students to
                explore their interests and providing guidance throughout their
                artistic journeys.
            </p>
        ),
        5: (
            <p>
                
                I enjoy spending time in nature
                through gardening and birdwatching. These activities allow me to
                connect with the natural world, appreciate its beauty, and learn
                from its intricate patterns and relationships.
                <br/>
                <br/>
                Also, as a permaculture apprentice, I've learned about
                sustainable agriculture practices that prioritize ecological
                balance and biodiversity. 
                <br/>
                <br/>
                I'm interested in integrating
                permaculture principles into software development, exploring
                ways to create regenerative systems that benefit both people and
                the planet.
            </p>
        ),
        6: (
            <p>
                Practicing Vipassana meditation has taught me the importance of
                mindfulness and living in the present moment. 
                <br/>
                <br/>
                It has helped me
                cultivate patience, compassion, and inner peace. I believe that
                these qualities are essential for building meaningful
                relationships, both personally and professionally.
            </p>
        ),
        7: (
            <p>
                {" "}
                Now, as a junior developer, I'm excited to embark on this new
                chapter of my journey. I'm confident that my diverse background,
                passion for learning, and commitment to mindfulness will enable
                me to contribute positively to any team or project. 
                <br/>
                <br/>
                Let's
                collaborate and create something amazing together!
            </p>
        ),
    };

    const [currentP, setCurrentP] = useState(1);

    let clickHandler = (event) => {
      event.target.id === "prev" ? setCurrentP(currentP - 1) : setCurrentP(currentP +1);
    };

    return (
        <Container style={{ marginTop: "30px" }}>
            <IMG src={character} alt="" />
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
        </Container>
    );
};

export default About;
