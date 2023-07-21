import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Contact from "./Routes/Contact.jsx";
import Projects from "./Routes/Projects.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
               {/* <NavBar /> */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
            <Home/>
        </>
    );
}

export default App;
