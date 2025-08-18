import './Projetos.css'
export default function Projetos() {
    return (
        <section  class="projetos" id="projetos">
        <div  data-aos="fade-up" class="projetos-container">
            <h2 class="subtitulo">
                Pro<br/> je<br/>  tos
            </h2>
            <div>
                <ul class="projetos-lista">
                    <li class="projeto">
                        <img src="./img/cognitio.jpg" alt="" />
                        <h2>Cognitio</h2>
                        <p>Plataforma de Cursos online</p>
                        <div class='tecnologias'>
                            <span>Angular</span>
                            <span>Spring</span>
                        </div>
                        <p>EM DESENVOLVIMENTO</p>
                    </li>
                    <li class="projeto">
                        <img src="./img/fitpro.jpg" alt="" />
                        <h2>FitPro</h2>
                        <p>Gerenciador de exercicios de academia</p>
                        <div class='tecnologias'>
                            <span>React</span>
                            <span>.NET</span>
                        </div>
                        <p>EM DESENVOLVIMENTO</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}