import { projects } from "../data/portfolio";
import { Icon } from "../components/Icon";
import { Tag, ProjectCover } from "../components/primitives";

export default function Projetos() {
  return (
    <section id="projetos">
      <div className="container">
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="section-label">~/projects/</span>
            <h2 className="section-title">
              Coisas que eu<br />
              <em>construí.</em>
            </h2>
          </div>
          <a href="#" className="btn btn-ghost" data-hover>
            Ver tudo {Icon.arrowRight}
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={p.title} className="project reveal" data-hover>
              <div className="project-cover">
                <span className="project-tag">{p.tag}</span>
                <span className="project-arrow">{Icon.arrow}</span>
                <ProjectCover kind={p.cover} />
                <span className="project-cover-label">{p.label}</span>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span>
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {projects.length.toString().padStart(2, "0")}
                  </span>
                  <span>case study →</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-techs">
                  {p.techs.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
