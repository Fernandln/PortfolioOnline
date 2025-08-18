import logo from './logo.svg';
import './App.css';
import Experiencia from './componentes/Experiencia';
import Formacao from './componentes/Formacao';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Introducao from './componentes/Introducao';
import Saudacao from './componentes/Saudacao';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projetos from './componentes/Projetos';

function App() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // duração da animação (ms)
        once: true      // anima só uma vez
      });
    }, []);
  return (
    <div className="App">
      <Saudacao/>
      <Introducao/>
      <Projetos/>
      <Experiencia/>
      <Formacao/>
      <Footer/>
    </div>
  );
}

export default App;
