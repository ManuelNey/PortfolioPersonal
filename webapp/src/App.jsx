import BackgroundHud from './components/BackgroundHud';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Stack from './components/Stack';
import Proyectos from './components/Proyectos';
import Analisis from './components/Analisis';
import Formacion from './components/Formacion';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { useStackWheel } from './hooks/useStackWheel';
import './App.css';

function App() {
  const { active, rot, selectCat, explorarSkills } = useStackWheel();

  const handleExplorarSkills = () => {
    const el = document.getElementById('stack');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    explorarSkills();
  };

  return (
    <div className="app">
      <BackgroundHud hudGrid />
      <Nav />
      <Hero onExplorarSkills={handleExplorarSkills} />
      <Sobre />
      <Stack active={active} rot={rot} selectCat={selectCat} />
      <Proyectos />
      <Analisis />
      <Formacion />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
