import { useState, useEffect, useRef } from "react";
import { CoffeeMachine } from "../components/CoffeeMachine";
import { Typewriter } from "../components/Typewriter";
import { Icon } from "../components/Icon";
import { stats, type Stat } from "../data/portfolio";

/* -------------------------------------------------------
   TypedTerminal — digita linhas uma por uma
   ------------------------------------------------------- */
type TermLine = {
  prompt?: string;
  text?: string;
  kind?: "cmd" | "output" | "empty" | "comment" | "string" | "num" | "key";
  delay?: number;
  instant?: boolean;
};

function TypedTerminal({ lines, speed = 22 }: { lines: TermLine[]; speed?: number }) {
  const [shown, setShown] = useState<TermLine[]>([]);
  const [active, setActive] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const target = lines[lineIdx];

    if (target.delay && charIdx === 0) {
      const t = setTimeout(() => setCharIdx(1), target.delay);
      return () => clearTimeout(t);
    }

    const text = target.text ?? "";
    if (charIdx <= text.length) {
      const t = setTimeout(() => {
        setActive(text.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, target.instant ? 0 : speed);
      return () => clearTimeout(t);
    } else {
      setShown((s) => [...s, target]);
      setActive("");
      setCharIdx(0);
      setLineIdx((i) => i + 1);
    }
  }, [lineIdx, charIdx, lines, speed]);

  const renderLine = (line: TermLine, key: React.Key, partial?: string) => {
    const t = partial != null ? partial : (line.text ?? "");
    return (
      <span key={key} className="term-line">
        {line.prompt && <span className="term-prompt">{line.prompt} </span>}
        <span className={`term-${line.kind ?? "cmd"}`}>{t}</span>
        {partial != null && (
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 14,
              background: "var(--accent)",
              marginLeft: 4,
              verticalAlign: "middle",
              animation: "blink 1s steps(1) infinite",
            }}
          />
        )}
      </span>
    );
  };

  return (
    <div className="term-body">
      {shown.map((l, i) => renderLine(l, i))}
      {lineIdx < lines.length && renderLine(lines[lineIdx], "active", active)}
    </div>
  );
}

/* -------------------------------------------------------
   useCountUp — animação de número crescente
   ------------------------------------------------------- */
function useCountUp(
  target: string,
  duration = 1400
): [string, React.RefObject<HTMLDivElement | null>] {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    let started = false;
    const num = parseFloat(String(target).replace(/[^\d.]/g, "")) || 0;
    const start = () => {
      const begin = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - begin) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(num * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            start();
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [target, duration]);

  const suffix = String(target).replace(/[\d.]/g, "");
  const isDecimal = String(target).includes(".") || /k|m/i.test(suffix);
  const showVal = isDecimal ? value.toFixed(1) : Math.floor(value);
  return [`${showVal}${suffix}`, ref];
}

function StatItem({ stat }: { stat: Stat }) {
  const [val, ref] = useCountUp(stat.num);
  return (
    <div ref={ref} className="stat reveal">
      <span className="stat-num">{val}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

/* -------------------------------------------------------
   TerminalHero + Stats — página inicial
   ------------------------------------------------------- */
const TERM_LINES: TermLine[] = [
  { prompt: "$", text: "whoami", kind: "cmd" },
  { text: "lucas-natali · engenheiro-de-software", kind: "output" },
  { text: "", kind: "empty", instant: true },
  { prompt: "$", text: "cat profile.json", kind: "cmd", delay: 500 },
  { text: "{", kind: "output", instant: true },
  { text: '  "name": "Lucas Natali",', kind: "output", instant: true },
  { text: '  "role": "Full-Stack Engineer",', kind: "output", instant: true },
  { text: '  "location": "Minas Gerais · BR · UTC−3",', kind: "output", instant: true },
  { text: '  "years": 6,', kind: "output", instant: true },
  { text: '  "focus": ["React", "TS", "Node", "AWS"],', kind: "output", instant: true },
  { text: '  "motto": "ship with intent.",', kind: "output", instant: true },
  { text: '  "status": "open-to-work"', kind: "output", instant: true },
  { text: "}", kind: "output", instant: true },
  { text: "", kind: "empty", instant: true },
  { prompt: "$", text: "ls highlights/", kind: "cmd", delay: 700 },
  { text: "shipped/   open-source/   case-studies/   blog/", kind: "output", instant: true },
  { text: "", kind: "empty", instant: true },
  { prompt: "$", text: "npm run dev", kind: "cmd", delay: 500 },
  { text: "✓ ready in 1.2s · listening on :3000", kind: "string", instant: true },
  { text: "  └── waiting for opportunities...", kind: "comment", instant: true },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-meta reveal">
            <span className="hero-status">
              <span className="hero-status-dot" />
              ./status: open-to-work
            </span>
            <span className="hero-divider" />
            <span>~/portfolio · main</span>
            <span className="hero-divider" />
            <span>last commit · 2h ago</span>
            <span className="hero-divider" />
            <span>build · passing</span>
          </div>

          <h1 className="hero-title-term reveal">
            <span className="frag">{"<"}</span>
            Lucas<span className="accent">.</span>Natali
            <span className="frag">{" />"}</span>
          </h1>

          <p className="hero-role reveal">
            <span style={{ color: "var(--accent-2)" }}>{">"}</span>{" "}
            <Typewriter
              words={[
                "engenheiro de software · full-stack",
                "react · typescript · node · cloud",
                "construindo produtos web com intenção",
              ]}
            />
          </p>

          <div className="hero-grid reveal" style={{ marginTop: 28 }}>
            {/* Terminal window */}
            <div className="term-window">
              <div className="term-bar">
                <div className="term-dots">
                  <span /><span /><span />
                </div>
                <span className="term-title">
                  lucas@portfolio: <em>~/intro</em>
                </span>
                <span className="term-meta">zsh · UTF-8 · 80×24</span>
              </div>
              <TypedTerminal lines={TERM_LINES} />
            </div>

            {/* Preview pane */}
            <div className="preview-pane">
              <div className="preview-bar">
                <div className="preview-tabs">
                  <div className="preview-tab is-active">
                    <span className="preview-tab-dot" />
                    espresso.tsx
                  </div>
                  <div className="preview-tab">brew.config</div>
                  <div className="preview-tab">README.md</div>
                </div>
                <span style={{ color: "var(--accent-2)" }}>● live</span>
              </div>
              <div className="preview-url-bar">
                <span className="preview-url-dot" />
                <span className="preview-url">localhost:3000 / app / espresso</span>
                <span className="preview-url-meta">200 OK · 14ms</span>
              </div>
              <div className="preview-body">
                <CoffeeMachine />
                <div className="preview-stats">
                  <div className="preview-stat">
                    <span className="preview-stat-label">temp</span>
                    <span className="preview-stat-val">92.4°C</span>
                  </div>
                  <div className="preview-stat">
                    <span className="preview-stat-label">flow</span>
                    <span className="preview-stat-val">9.2ml/s</span>
                  </div>
                  <div className="preview-stat">
                    <span className="preview-stat-label">pressure</span>
                    <span className="preview-stat-val">9 bar</span>
                  </div>
                </div>
              </div>
              <div className="preview-status">
                <span><span className="dot" /> RUNNING</span>
                <span>↑ 0 errors</span>
                <span>↑ 0 warnings</span>
                <span style={{ marginLeft: "auto" }}>build · v2.6.1</span>
              </div>
            </div>
          </div>

          <div className="hero-actions reveal" style={{ marginTop: 36 }}>
            <a href="#projetos" className="btn btn-primary" data-hover>
              cd ./projetos
              <span className="btn-arrow">{Icon.arrowRight}</span>
            </a>
            <a href="#contato" className="btn btn-ghost" data-hover>
              mail lucas@
              <span className="btn-arrow">{Icon.arrowRight}</span>
            </a>
            <div className="hero-stack" style={{ marginLeft: "auto" }}>
              <span className="hero-stack-label">// stack ·</span>
              <div className="hero-stack-icons">
                {["TS", "JS", "Re", "Nx", "Nd", "PG", "Dk", "AW"].map((t) => (
                  <span key={t} className="tech-chip" data-hover>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" style={{ padding: 0 }}>
        <div className="container">
          <div className="stats-grid" style={{ padding: "32px 0" }}>
            {stats.map((s) => <StatItem key={s.label} stat={s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
