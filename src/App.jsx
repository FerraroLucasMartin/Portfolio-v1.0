import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Views/Home.jsx";
import About from "./Views/About.jsx";
import Contact from "./Views/Contact.jsx";
import Projects from "./Views/Projects.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
               <NavBar />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
                <Home name="home"/>
                 <About name="about" />
        </>
    );
}

export default App;
