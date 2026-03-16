import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};
import LandSectionMe from './components/LandPageSections/LandSectionMe';
import LandSectionAboutMe from './components/LandPageSections/LandSectionAboutMe';
import LandSectionPortfolio from './components/LandPageSections/LandSectionPortfolio';
import LandSectionContact from './components/LandPageSections/LandSectionContact';

const Home = () => (
  <main className="fade-in">
    <LandSectionMe />
    <LandSectionAboutMe />
    <LandSectionPortfolio />
    <LandSectionContact />
  </main>
);

const About = () => (
  <main>
    <div>
      <h1>Sobre Mí</h1>
      <p>Aquí puedes contar tu historia y experiencia.</p>
    </div>
  </main>
);

const Projects = () => (
  <main>
    <div>
      <h1>Mis Proyectos</h1>
      <p>Muestra tus mejores trabajos aquí.</p>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
      <footer>
        <p>&copy; 2026 Martín Quiroga</p>
      </footer>
    </Router>
  );
}

export default App;
