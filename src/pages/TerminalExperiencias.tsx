import { experiences } from "../data/portfolio";

function shortHash(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return Math.abs(h).toString(16).slice(0, 7).padEnd(7, "0");
}

export default function TerminalExperiencias() {
  return (
    <section>
      <div className="container">
        <div className="reveal">
          <span className="section-label">~/career.git/log</span>
          <h2 className="section-title">
            Onde eu estive,<br />
            <em>o que eu fiz.</em>
          </h2>
        </div>

        <div className="term-gitlog reveal">
          <div className="term-skills-bar">
            <div className="term-dots">
              <span /><span /><span />
            </div>
            <span className="term-title">
              ~/career · <em>git log --oneline</em>
            </span>
            <span className="term-meta">branch · main · clean</span>
          </div>
          <div className="term-skills-body">
            <div className="term-line">
              <span className="term-prompt">$</span>{" "}
              <span className="term-cmd">git log --format=detailed --branch=main</span>
            </div>
            <div className="term-empty" />

            {experiences.map((exp, i) => {
              const hash = shortHash(exp.title + exp.company);
              const isHead = !!exp.current;
              return (
                <div key={i} className={`gl-commit ${isHead ? "is-head" : ""}`}>
                  <div className="gl-header">
                    <span className="gl-marker">*</span>
                    <span className="gl-hash">commit {hash}</span>
                    {isHead && (
                      <span className="gl-head">(HEAD → main, current)</span>
                    )}
                  </div>
                  <div className="gl-meta">
                    <span className="gl-label">Author:</span>{" "}
                    <span className="gl-value">Lucas Natali &lt;lucas@natali.dev&gt;</span>
                  </div>
                  <div className="gl-meta">
                    <span className="gl-label">Date:</span>{" "}
                    <span className="gl-value">{exp.period}</span>
                  </div>
                  <div className="gl-meta">
                    <span className="gl-label">Role:</span>{" "}
                    <span className="gl-value gl-strong">{exp.title}</span>
                  </div>
                  <div className="gl-meta">
                    <span className="gl-label">At:</span>{" "}
                    <span className="gl-value">{exp.company} · {exp.location}</span>
                  </div>
                  <div className="gl-message">
                    <span className="gl-prefix">{"    "}</span>
                    {exp.description}
                  </div>
                  <div className="gl-tags">
                    <span className="gl-prefix">{"    "}</span>
                    {exp.tags.map((t, ti) => (
                      <span key={t} className="gl-tag">
                        {ti > 0 && <span className="gl-sep">·</span>}
                        {t}
                      </span>
                    ))}
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="gl-divider">|</div>
                  )}
                </div>
              );
            })}

            <div className="term-empty" />
            <div className="term-line">
              <span className="term-comment">// {experiences.length} commits · main branch · all clean</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
