import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Coursework from './components/Coursework';
import Skills from './components/Skills';

function HomePage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 md:px-8">
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}
