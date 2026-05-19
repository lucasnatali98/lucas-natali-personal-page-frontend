import { useState, useEffect } from "react";
import { navItems } from "../data/portfolio";

type Props = { active: string };

export default function Navbar({ active }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#home" className="nav-brand" data-hover>
        <span className="nav-brand-mark">L</span>
        <span className="nav-brand-meta">
          <span>Lucas Natali</span>
          <small>v2.6 — 2026</small>
        </span>
      </a>

      <div className="nav-links">
        {navItems.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`nav-link ${active === it.id ? "is-active" : ""}`}
            data-hover
          >
            <span className="nav-link-num">{it.num}</span>
            {it.label}
          </a>
        ))}
      </div>

      <a href="#contato" className="nav-cta" data-hover>
        <span className="nav-cta-dot" />
        Disponível para projetos
      </a>
    </nav>
  );
}
