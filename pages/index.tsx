import Hero from '@/sections/hero/hero'
import Navbar from '@/sections/navbar/navbar'
import Projects from '@/sections/projects/projects'
import Skills from '@/sections/skills/skills'
import Footer from '@/sections/footer/footer'
import Modal from '@/components/contact/modal'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Footer />
            <Modal />
        </>
    )
}