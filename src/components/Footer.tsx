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
              Engenheiro de software construindo soluções que geram valor. De Minas Gerais para o Mundo.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navegação</div>
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "sobre" },
              { label: "Projetos", id: "projetos" },
              // { label: "Blog", id: "blog" }, desativado: seção de posts sem integração com backend
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
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="footer-link" data-hover>Instagram ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Lucas Natali · Feito com café e disposição</span>
          <span>v2.6 · last deploy abr · 19 / 2026</span>
        </div>
      </div>
    </footer>
  );
}
