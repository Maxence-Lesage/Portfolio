import "./index.scss";
import Navbar from "../../components/navbar/index";
import Hero from "../../sections/hero/index";
import Projects from "../../sections/projects";
import Skills from "../../sections/skills";
import Modal from "../../components/contact/modal";
import Footer from "../../sections/footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Modal />
            <Footer />
        </>
    );
}

export default Home;