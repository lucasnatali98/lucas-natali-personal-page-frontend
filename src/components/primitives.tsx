import { type Project } from "../data/portfolio";

/* Placeholder SVG covers para os projetos — substitua por screenshots reais. */
export function ProjectCover({ kind }: { kind: Project["cover"] }) {
  const palettes: Record<Project["cover"], [string, string]> = {
    ecommerce: ["#ff6b35", "#1a1a1a"],
    task: ["#ffd9c2", "#262626"],
    cli: ["#c2552a", "#0a0a0a"],
    design: ["#ff854d", "#1c1c1c"],
  };
  const [a, b] = palettes[kind];

  return (
    <svg
      viewBox="0 0 400 225"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={b} />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id={`acc-${kind}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={a} stopOpacity="0.3" />
          <stop offset="100%" stopColor={a} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#g-${kind})`} />
      {Array.from({ length: 20 }).map((_, i) =>
        Array.from({ length: 11 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={20 + i * 20}
            cy={20 + j * 20}
            r="0.6"
            fill="#ffffff"
            opacity="0.05"
          />
        ))
      )}

      {kind === "ecommerce" && (
        <g fontFamily="JetBrains Mono, monospace" fontSize="6.5">
          <rect x="30" y="30" width="340" height="170" rx="8" fill="#0d0d0d" stroke="#2a2a2a" strokeWidth="0.8" />
          <rect x="30" y="30" width="340" height="18" rx="8" fill="#1a1a1a" />
          <rect x="30" y="40" width="340" height="8" fill="#1a1a1a" />
          <circle cx="40" cy="39" r="2.2" fill="#ff5f57" />
          <circle cx="48" cy="39" r="2.2" fill="#febc2e" />
          <circle cx="56" cy="39" r="2.2" fill="#28c840" />
          <rect x="80" y="35" width="180" height="8" rx="2" fill="#0a0a0a" />
          <text x="90" y="40.5" fill="#737373">commerce.cloud / · checkout</text>
          <rect x="38" y="56" width="62" height="138" rx="3" fill="#1a1a1a" />
          <rect x="44" y="62" width="50" height="3" rx="1" fill={a} />
          <rect x="44" y="70" width="40" height="2" rx="1" fill="#444" />
          <rect x="44" y="76" width="50" height="2" rx="1" fill="#444" />
          <rect x="44" y="82" width="36" height="2" rx="1" fill="#444" />
          <rect x="44" y="88" width="44" height="2" rx="1" fill="#444" />
          {[0, 1, 2].map((c) => (
            <g key={c}>
              <rect x={108 + c * 86} y={56} width={80} height={86} rx={3} fill="#181818" />
              <rect x={114 + c * 86} y={62} width={68} height={48} rx={2} fill={`url(#acc-${kind})`} />
              <circle cx={148 + c * 86} cy={86} r={10} fill={c === 0 ? a : "#2a2a2a"} opacity={c === 0 ? 0.8 : 0.4} />
              <rect x={114 + c * 86} y={116} width={50} height={3} rx={1} fill="#fafafa" opacity={0.7} />
              <rect x={114 + c * 86} y={124} width={32} height={2.5} rx={1} fill={a} />
              <rect x={170 + c * 86} y={120} width={10} height={6} rx={1} fill={a} />
            </g>
          ))}
          <rect x="108" y="148" width="252" height="46" rx="3" fill="#141414" />
          <text x="116" y="158" fill="#fafafa">REVENUE · last 30d</text>
          <text x="116" y="174" fill={a} fontSize="11" fontWeight="600">$184,201</text>
          <text x="180" y="174" fill="#10b981">▲ 12.4%</text>
          <polyline
            points="240,184 252,178 264,180 276,170 288,174 300,164 312,168 324,160 336,162 348,154"
            stroke={a}
            strokeWidth="1.2"
            fill="none"
          />
        </g>
      )}

      {kind === "task" && (
        <g fontFamily="JetBrains Mono, monospace" fontSize="6.5">
          <rect x="22" y="22" width="356" height="180" rx="8" fill="#0d0d0d" stroke="#2a2a2a" strokeWidth="0.8" />
          <rect x="22" y="22" width="356" height="14" rx="8" fill="#1a1a1a" />
          <text x="36" y="32" fill="#737373">Taskforce · sprint-23</text>
          {["TO DO", "DOING", "DONE"].map((title, c) => (
            <g key={c}>
              <text x={40 + c * 118} y={50} fill="#737373">{title}</text>
              <rect x={40 + c * 118} y={52} width={20} height={2} fill={c === 0 ? "#666" : c === 1 ? a : "#10b981"} />
              {[0, 1, 2].map((r) => (
                <g key={r}>
                  <rect
                    x={40 + c * 118}
                    y={58 + r * 44}
                    width={110}
                    height={38}
                    rx={3}
                    fill={c === 1 && r === 0 ? a : "#181818"}
                    opacity={c === 1 && r === 0 ? 0.95 : 1}
                    stroke={c === 1 && r === 0 ? a : "#2a2a2a"}
                    strokeWidth="0.6"
                  />
                  <rect x={46 + c * 118} y={64 + r * 44} width={60} height={3} rx={1} fill={c === 1 && r === 0 ? "#0a0a0a" : "#fafafa"} opacity={c === 1 && r === 0 ? 1 : 0.85} />
                  <rect x={46 + c * 118} y={71 + r * 44} width={90} height={2} rx={1} fill={c === 1 && r === 0 ? "#0a0a0a" : "#666"} opacity={0.7} />
                  <rect x={46 + c * 118} y={77 + r * 44} width={70} height={2} rx={1} fill={c === 1 && r === 0 ? "#0a0a0a" : "#666"} opacity={0.5} />
                  <circle cx={46 + c * 118 + 4} cy={89 + r * 44} r={3} fill={c === 1 && r === 0 ? "#0a0a0a" : "#444"} />
                  <circle cx={46 + c * 118 + 10} cy={89 + r * 44} r={3} fill={c === 1 && r === 0 ? "#0a0a0a" : "#666"} />
                </g>
              ))}
            </g>
          ))}
        </g>
      )}

      {kind === "cli" && (
        <g fontFamily="JetBrains Mono, monospace" fontSize="9">
          <rect x="30" y="30" width="340" height="170" rx="6" fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="0.8" />
          <rect x="30" y="30" width="340" height="20" rx="6" fill="#161616" />
          <circle cx="42" cy="40" r="2.5" fill="#ff5f57" />
          <circle cx="52" cy="40" r="2.5" fill="#febc2e" />
          <circle cx="62" cy="40" r="2.5" fill="#28c840" />
          <text x="76" y="43" fill="#737373" fontSize="7">~ / type-forge</text>
          <text x="44" y="68" fill="#fafafa">
            <tspan fill={a}>$</tspan> npx type-forge init
          </text>
          <text x="44" y="84" fill="#737373">  parsing schema.prisma</text>
          <text x="44" y="98" fill="#10b981">  ✓ 124 models · 38 relations</text>
          <text x="44" y="112" fill={a}>
            <tspan fill={a}>$</tspan> <tspan fill="#fafafa">npx type-forge gen --zod</tspan>
          </text>
          <text x="44" y="126" fill="#737373">  writing src/generated/types.ts</text>
          <text x="44" y="140" fill="#737373">  writing src/generated/zod.ts</text>
          <text x="44" y="154" fill="#10b981">  ✓ generated 14.2kb · 184ms</text>
          <text x="44" y="172" fill="#fafafa">
            <tspan fill={a}>$</tspan> <tspan opacity="0.6">_</tspan>
          </text>
        </g>
      )}

      {kind === "design" && (
        <g fontFamily="JetBrains Mono, monospace" fontSize="6.5">
          <rect x="24" y="24" width="352" height="176" rx="6" fill="#0d0d0d" stroke="#2a2a2a" strokeWidth="0.8" />
          <text x="38" y="44" fill="#737373">/// tokens · colors</text>
          {["#ff6b35", "#ff854d", "#c2552a", "#fafafa", "#a3a3a3", "#525252", "#1a1a1a", "#0a0a0a"].map((color, i) => (
            <g key={i}>
              <rect x={38 + i * 41} y={52} width={32} height={32} rx={3} fill={color} />
              <text x={38 + i * 41} y={92} fill="#5a5a5a" fontSize="5">{color.toUpperCase()}</text>
            </g>
          ))}
          <text x="38" y="112" fill="#737373">/// components</text>
          <rect x="38" y="118" width="80" height="20" rx="3" fill={a} />
          <text x="46" y="131" fill="#0a0a0a" fontSize="7" fontWeight="600">Button / primary</text>
          <rect x="124" y="118" width="80" height="20" rx="3" fill="none" stroke={a} strokeWidth="0.8" />
          <text x="132" y="131" fill={a} fontSize="7" fontWeight="600">Button / ghost</text>
          <rect x="210" y="118" width="80" height="20" rx="3" fill="#1a1a1a" stroke="#2a2a2a" />
          <text x="218" y="131" fill="#fafafa" fontSize="7">input · placeholder</text>
          <rect x="296" y="118" width="64" height="20" rx="10" fill="#181818" stroke="#2a2a2a" />
          <circle cx="332" cy="128" r="6" fill={a} />
          <text x="302" y="131" fill="#737373" fontSize="6">toggle</text>
          <text x="38" y="158" fill="#737373">/// type · scale</text>
          <text x="38" y="178" fill="#fafafa" fontSize="14" fontWeight="700">Aa Display</text>
          <text x="130" y="178" fill="#fafafa" fontSize="9">Aa Body</text>
          <text x="180" y="178" fill="#737373" fontSize="6.5">Aa Mono</text>
          <text x="38" y="192" fill="#525252" fontSize="6">8 / 12 / 16 / 24 / 32 / 48 / 72</text>
        </g>
      )}
    </svg>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

export function SectionHeader({
  label,
  title,
  emphasis,
  sub,
}: {
  label: string;
  title: React.ReactNode;
  emphasis?: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="reveal">
      <span className="section-label">{label}</span>
      <h2 className="section-title">
        {title}
        {emphasis && <><br /><em>{emphasis}</em></>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

