import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main className="max-w-[860px] mx-auto px-6 md:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
