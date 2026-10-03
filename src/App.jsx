import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Strengths from './components/Strengths.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useTheme from './hooks/useTheme.js';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
