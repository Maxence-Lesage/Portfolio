import "./index.scss";
import Navbar from "../../components/navbar/index";
import Hero from "../../sections/hero/index";
import Projects from "../../sections/projects";
import Skills from "../../sections/skills";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
        </>
    );
}

export default Home;