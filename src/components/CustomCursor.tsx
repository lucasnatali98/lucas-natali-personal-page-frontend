import { useEffect, useRef } from "react";

/**
 * Cursor customizado + reveal-on-scroll global.
 * Monte uma única vez no App. Em mobile, se esconde automaticamente.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!ringRef.current) return;
      if (t.closest("a, button, [data-hover]")) {
        ringRef.current.classList.add("is-hover");
        ringRef.current.classList.remove("is-text");
      } else if (t.closest("input, textarea")) {
        ringRef.current.classList.add("is-text");
        ringRef.current.classList.remove("is-hover");
      } else {
        ringRef.current.classList.remove("is-hover", "is-text");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    tick();

    // Reveal-on-scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    const observe = () => {
      document
        .querySelectorAll(".reveal, .skill-card")
        .forEach((el) => io.observe(el));
    };
    observe();
    // Re-observe when DOM mutates (page navigation, dynamic content)
    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
