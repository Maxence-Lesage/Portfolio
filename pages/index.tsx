import Hero from '@/sections/hero/hero'
import Navbar from '@/sections/navbar/navbar'
import Projects from '@/sections/projects/projects'
import Skills from '@/sections/skills/skills'
import Footer from '@/sections/footer/footer'
import Modal from '@/components/contact/modal'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Sleek Site</title>
                <meta name="description" content="Portfolio de Maxence Lesage développeur frontend" />
                <meta name="author" content="Maxence Lesage" />
            </Head>

            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Footer />
            <Modal />
        </>
    )
}