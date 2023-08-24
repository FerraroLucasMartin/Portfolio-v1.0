import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Views/Home.jsx";
import About from "./Views/About.jsx";
import Contact from "./Views/Contact.jsx";
import Projects from "./Views/Projects.jsx";
import { Route, Routes } from "react-router-dom";
import Skills from "./Views/Skills/Skills.jsx";

function App() {
    return (
        <>
               <NavBar />
                <Home name="home"/>
                 <About name="about" />
                 <Skills name="skills"/>
        </>
    );
}

export default App;
