export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="reveal">
          <span className="section-label">~/about.md</span>
          <h2 className="section-title">
            Transformando ideias em 
            <br />
            <em>software escalável.</em>
          </h2>
        </div>

        <div className="about-grid" style={{ marginTop: 64 }}>
          <div className="about-photo reveal">
            <img
              src="/foto_pessoal.png"
              alt="Lucas Natali"
              className="about-photo-img"
            />
            <span className="about-photo-tag">LN · 2026</span>
          </div>

          <div className="about-bio reveal">
            <p>
              Olá! Sou <strong>Lucas Natali</strong>, engenheiro de software,
              apaixonado por transformar ideias em produtos digitais robustos,
              escaláveis e fáceis de evoluir. Moro em Belo Horizonte – MG e, nos
              últimos anos, venho desenvolvendo aplicações web e APIs que unem
              qualidade técnica, experiência do usuário e foco no negócio.
            </p>
            <p>
              Atuo de ponta a ponta no desenvolvimento de software, do desenho
              da arquitetura à entrega em produção, trabalhando principalmente
              com TypeScript, Node.js, React e PostgreSQL. Meu interesse vai
              além de escrever código: gosto de projetar sistemas resilientes,
              definir boas abstrações e construir soluções que permaneçam
              simples mesmo conforme crescem.
            </p>
            <p>
              Acredito que engenharia de software é sobre tomar boas decisões
              continuamente. Um sistema sustentável nasce de pequenas escolhas
              bem feitas: uma arquitetura consistente, código legível, testes
              que agregam valor, observabilidade, automação e processos que
              permitem evoluir com segurança. Tenho um perfil analítico e gosto
              de compreender profundamente os problemas antes de propor
              soluções. Isso me levou a estudar temas como arquitetura de
              software, sistemas distribuídos, padrões de projeto,
              escalabilidade e engenharia de plataformas, sempre buscando
              equilibrar velocidade de entrega com excelência técnica.
            </p>

            <p>
              Hoje meu principal objetivo é construir produtos que gerem impacto
              real, aplicando boas práticas de engenharia para entregar software
              confiável, escalável e preparado para crescer junto com o negócio.
            </p>

            <div className="about-meta">
              <div className="about-meta-item">
                <span className="about-meta-key">Baseado em</span>
                <span className="about-meta-val">
                  Minas Gerais <em>· BR</em>
                </span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Foco atual</span>
                <span className="about-meta-val">
                  Plataformas <em>SaaS B2B</em>
                </span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Disponibilidade</span>
                <span className="about-meta-val">
                  CLT · <em>Contratos</em>
                </span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Idiomas</span>
                <span className="about-meta-val">
                  PT · <em>EN</em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
