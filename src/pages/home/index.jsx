import "./index.scss";
import Navbar from "../../components/navbar/index";
import Hero from "../../components/hero/index";
import Projects from "../../components/projects";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
        </>
    );
}

export default Home;