import './Introducao.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Introducao() {
     useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação (ms)
      once: true      // anima só uma vez
    });
  }, []);
    return (
        <main data-aos="fade-up" class="introducao">
            <img className='perfil' src="/img/foto.jpg" alt="" />
            <div>
                <h1>Programador FullStack</h1>
                <p>Cidade - Rio de Janeiro/RJ</p> 
                <p>Idade - 25</p> 
                <p>Sou apaixonado por tecnologia, especialmente pelo desenvolvimento de interfaces de usuário. Meu objetivo é aplicar meus conhecimentos e continuar aprendendo enquanto crio soluções impactantes e escaláveis. Busco me aprofundar em frameworks modernos como <strong>React e Vue.js</strong>, além de aprimorar minhas habilidades em <strong>JavaScript, HTML, CSS e Angular.</strong> </p>
            </div>
        </main>
    )
}