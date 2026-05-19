import { useState, useRef, type FormEvent } from "react";
import { Icon } from "../components/Icon";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: trocar pelo endpoint real da newsletter
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
      }, 3000);
    }, 800);
  };

  const busy = status === "loading" || status === "sent";

  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter-card reveal">
          <div className="newsletter-head">
            <span className="section-label">~/newsletter/subscribe</span>
            <h2 className="newsletter-title">
              Conteúdo que vale<br />
              <em>seu inbox.</em>
            </h2>
            <p className="newsletter-desc">
              Artigos sobre desenvolvimento, arquitetura e carreira — sem
              ruído. Uma edição por semana, direto ao ponto.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={onSubmit}>
            <div className="newsletter-fields">
              <div>
                <label className="form-label">Nome</label>
                <input
                  ref={nameRef}
                  className="form-input"
                  placeholder="Como te chamo?"
                  required
                  disabled={busy}
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  ref={emailRef}
                  className="form-input"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  disabled={busy}
                />
              </div>
            </div>
            <button
              type="submit"
              className={`form-submit newsletter-btn ${status === "sent" ? "is-sent" : ""}`}
              data-hover
              disabled={busy}
            >
              {status === "sent" ? (
                <>{Icon.check} Inscrito com sucesso!</>
              ) : status === "loading" ? (
                <>Inscrevendo...</>
              ) : (
                <>{Icon.arrowRight} Inscrever na newsletter</>
              )}
            </button>
            <p className="newsletter-fine">
              Sem spam. Cancele quando quiser. Seus dados ficam seguros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
