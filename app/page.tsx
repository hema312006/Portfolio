import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
