import "./index.scss";
import Navbar from "../../components/navbar/index";
import Hero from "../../sections/hero/index";
import Projects from "../../sections/projects";
import Skills from "../../sections/skills";
import Modal from "../../components/contact/modal";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Modal />
        </>
    );
}

export default Home;