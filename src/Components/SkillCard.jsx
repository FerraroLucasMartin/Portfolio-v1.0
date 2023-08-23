import { LinearProgress } from '@mui/material'
import React from 'react'



const SkillCard = ({ skill }) => {

    const levelCategory = (val) => {
        switch (val) {
            case 25: return "Apprentice";
            case 50: return "Evolving";
            case 75: return "Skilled";
            case 100: return "Guru";
        }


    }
    return (

        <div style={{ padding: "15px" }}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end",marginBottom:"15px"}}>
                {skill.icon ? <img src={skill.icon} style={{ height: "30px", width: "30px" }} /> : null}
                <h3 style={{marginLeft:"15px"}}>{skill.name}</h3>
                <p style={{marginLeft:"15px"}}>{levelCategory(skill.value)}</p>
            </div>

            <LinearProgress
                variant="determinate"
                value={skill.value}
                style={{
                    width: "250px", height: "10px", boxShadow: "0 0px 10px rgb(255,255,255,0.4), 0 0px 10px rgb(255,255,255,0.4) inset,0 1px 20px rgb(0,127,255,0.7), 0 1px 20px rgb(0,127,255,0.7) inset,0 0px 25px rgb(0,100,255,0.2), 0 0px 25px rgb(0,100,255,0.2) inset"
                }} />
        </div>

    )
}
export default SkillCard