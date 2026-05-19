export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="reveal">
          <span className="section-label">~/about.md</span>
          <h2 className="section-title">
            Um engenheiro com<br />
            <em>vontade de construir.</em>
          </h2>
        </div>

        <div className="about-grid" style={{ marginTop: 64 }}>
          <div className="about-photo reveal">
            <span className="about-photo-tag">LN · 2026</span>
          </div>

          <div className="about-bio reveal">
            <p>
              Olá. Sou <strong>Lucas Natali</strong>, engenheiro de software
              brasileiro com mais de 6 anos de experiência construindo
              produtos web — do MVP de fim de semana à plataforma com
              milhões de requisições.
            </p>
            <p>
              Acredito que software bom é resultado de decisões pequenas e
              consistentes: nomes claros, testes que importam, deploy que
              não dá medo. Meu foco hoje é juntar <strong>velocidade de produto</strong>{" "}
              com <strong>rigor de engenharia</strong> — duas coisas que
              raramente convivem bem.
            </p>
            <p>
              Quando não estou no editor, estou fazendo espresso, lendo
              sobre arquitetura distribuída ou tentando convencer alguém
              que TypeScript não é overkill.
            </p>

            <div className="about-meta">
              <div className="about-meta-item">
                <span className="about-meta-key">Baseado em</span>
                <span className="about-meta-val">Minas Gerais <em>· BR</em></span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Foco atual</span>
                <span className="about-meta-val">Plataformas <em>SaaS B2B</em></span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Disponibilidade</span>
                <span className="about-meta-val">CLT · <em>Contract</em></span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Idiomas</span>
                <span className="about-meta-val">PT · <em>EN</em></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
