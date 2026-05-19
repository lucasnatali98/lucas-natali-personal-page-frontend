import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Lucas <em>Natali</em>
            </div>
            <p className="footer-tag">
              Engenheiro de software construindo produtos web com intenção e
              rigor. De Minas Gerais para o mundo.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navegação</div>
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "sobre" },
              { label: "Projetos", id: "projetos" },
              { label: "Blog", id: "blog" },
              { label: "Contato", id: "contato" },
            ].map(({ label, id }) => (
              <a key={id} href={`#${id}`} className="footer-link" data-hover>
                {label}
              </a>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Social</div>
            <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link" data-hover>GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link" data-hover>LinkedIn ↗</a>
            <a href="#" className="footer-link" data-hover>Twitter ↗</a>
            <a href="#" className="footer-link" data-hover>RSS · Blog</a>
          </div>
          <div>
            <div className="footer-col-title">Currículo</div>
            <a href="#" className="footer-link" data-hover>CV — PT ↓</a>
            <a href="#" className="footer-link" data-hover>CV — EN ↓</a>
            <a href={`mailto:${profile.email}`} className="footer-link" data-hover>Email →</a>
          </div>
        </div>

        <div className="footer-big">Natali</div>

        <div className="footer-bottom">
          <span>© 2026 Lucas Natali · Feito com café e atenção</span>
          <span>v2.6 · last deploy abr · 19 / 2026</span>
        </div>
      </div>
    </footer>
  );
}
