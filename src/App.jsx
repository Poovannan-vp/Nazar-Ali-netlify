import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Patents from './components/Patents';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-200">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Patents />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
