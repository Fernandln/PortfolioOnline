import './Formacao.css'
export default function Formacao() {
    return (
        <section  class="formacao" id="formacao">
        <div  data-aos="fade-up" class="formacao-container">
            <h2 class="subtitulo">
                For<br/>ma<br/>ção
            </h2>
            <div>
                <p class="formacao-texto">
                    Minha mais recente experiência academica, Redes de Computadores. Além disso me mantenho atualizado estudando desenvolvimento online.
                </p>
                <ul class="faculdade-lista">
                    <li class="faculdade">
                        <span class="faculdade-tipo">
                            Tecnologo
                        </span>
                        <h3 class="faculdade-curso">
                            Redes de Computadores
                        </h3>
                        <span class="faculdade-instituicao">
                            UniCarioca
                        </span>
                    </li>
                    <li class="faculdade">
                        <span class="faculdade-tipo">
                            Curso profisionalizante
                        </span>
                        <h3 class="faculdade-curso">
                            Fullstack Java
                        </h3>
                        <span class="faculdade-instituicao">
                            SENAC
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}