import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
