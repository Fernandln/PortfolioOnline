import './Saudacao.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Saudacao() {
     useEffect(() => {
    AOS.init({
      duration: 2000, // duração da animação (ms)
      once: true      // anima só uma vez
    });
  }, []);
    return (
        <div className='fundo'>
            <div>
                <header class="header">
                    <h1>PORTFÓLIO</h1>
                    <nav>
                        <ul class="header-menu">
                            <li><a href="#experiencia">Experiência</a></li>
                            <li><a href="#formacao">Formação</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <main data-aos="fade-up">
                <div className='mensagem'>
                    <h1>Ola, sou <span> Fernando Abel de Sousa </span></h1>
                    <p>Full Stack Developer</p>
                </div>
            </main>
        </div>
    )
}