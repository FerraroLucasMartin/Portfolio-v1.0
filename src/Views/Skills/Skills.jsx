import React from 'react'
import SkillCard from "../../Components/SkillCard"
import { Wrapper, Container, H1 } from './SkillsStyles'
import { frontSkills, backSkills, otherSkills } from '../../utils/SkillsData'


const Skills = () => {

  return (
    <Wrapper id="skills">

      <H1>Tech Skills</H1>

    <Container>
      <div>
        <h1>Frontend</h1>
        {frontSkills.map((element) => <SkillCard skill={element} />)}
      </div>
      <div>
        <h1>Backend & DB</h1>
        {backSkills.map((element) => <SkillCard skill={element} />)}
      </div>
      <div>
        <h1>Others</h1>
        {otherSkills.map((element) => <SkillCard skill={element} />)}
      </div>
    </Container>
    </Wrapper>
  )
}

export default Skills