import { useState, useRef, type FormEvent } from "react";
import { Icon } from "../components/Icon";
import api from "../lib/api";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await api.post("/newsletter/subscribe", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
      });
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
      }, 3000);
    } catch (err: any) {
      const msg = err?.response?.data?.error ?? "Erro ao inscrever. Tente novamente.";
      setErrorMsg(msg);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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

            {status === "error" && (
              <p style={{ color: "var(--clr-accent)", marginTop: 8, fontSize: "0.85rem" }}>
                {errorMsg}
              </p>
            )}

            <p className="newsletter-fine">
              Sem spam. Cancele quando quiser. Seus dados ficam seguros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
