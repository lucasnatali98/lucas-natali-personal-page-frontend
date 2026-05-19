import { skills, type SkillGroup } from "../data/portfolio";

export default function TerminalSkills() {
  const keys = Object.keys(skills) as SkillGroup[];

  return (
    <section id="trabalho">
      <div className="container">
        <div className="reveal">
          <span className="section-label">~/skills/index.json</span>
          <h2 className="section-title">
            Ferramentas que uso<br />
            <em>todos os dias.</em>
          </h2>
          <p className="section-sub">
            {"// não acredito em \"stack universal\", mas tem ferramentas que voltam comigo em quase todo projeto."}
          </p>
        </div>

        <div className="term-skills reveal">
          <div className="term-skills-bar">
            <div className="term-dots">
              <span /><span /><span />
            </div>
            <span className="term-title">
              ~/portfolio · <em>tree skills/</em>
            </span>
            <span className="term-meta">3 dirs · 15 files</span>
          </div>
          <div className="term-skills-body">
            <div className="term-line">
              <span className="term-prompt">$</span>{" "}
              <span className="term-cmd">tree skills/ --skill-bars</span>
            </div>
            <div className="term-empty" />
            <div className="ts-tree">
              <div className="ts-root">skills/</div>
              {keys.map((group, gi) => {
                const isLast = gi === keys.length - 1;
                return (
                  <div key={group} className="ts-group">
                    <div className="ts-group-name">
                      <span className="ts-branch">{isLast ? "└──" : "├──"}</span>
                      <span className="ts-folder">{group.toLowerCase()}/</span>
                      <span className="ts-count">({skills[group].length})</span>
                    </div>
                    {skills[group].map((s, si) => {
                      const last = si === skills[group].length - 1;
                      return (
                        <div
                          key={s.name}
                          className="ts-skill"
                          style={{ "--lvl": s.level } as React.CSSProperties}
                        >
                          <span className="ts-pipe">{isLast ? "   " : "│  "}</span>
                          <span className="ts-branch">{last ? "└──" : "├──"}</span>
                          <span className="ts-name">{s.name}</span>
                          <span className="ts-bar">
                            <span className="ts-bar-fill" />
                          </span>
                          <span className="ts-years">{s.years}</span>
                          <span className="ts-pct">{Math.round(s.level * 100)}%</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="term-empty" />
            <div className="term-line">
              <span className="term-comment">// 15 files indexed · last sync 2h ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
