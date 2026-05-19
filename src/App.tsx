import { useState, useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import TerminalSkills from "./pages/TerminalSkills";
import TerminalExperiencias from "./pages/TerminalExperiencias";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import Contato from "./pages/Contato";
import { navItems } from "./data/portfolio";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="backdrop" />
      <div className="grid-bg" />
      <div className="grain" />
      <div className="scanlines" />
      <Navbar active={active} />
      <div className="shell">
        <Home />
        <Sobre />
        <TerminalSkills />
        <TerminalExperiencias />
        <Projetos />
        <Blog />
        <Newsletter />
        <Contato />
        <Footer />
      </div>
    </>
  );
}

export default App;
