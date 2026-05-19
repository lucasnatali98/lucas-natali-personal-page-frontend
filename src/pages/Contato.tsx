import { useState, type FormEvent } from "react";
import { Icon } from "../components/Icon";
import { profile } from "../data/portfolio";

export default function Contato() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: trocar pelo seu endpoint real (fetch, formspree, EmailJS, etc)
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contato">
      <div className="container">
        <div className="reveal">
          <span className="section-label">07 — Vamos conversar</span>
          <h2 className="section-title">
            Tem um projeto?<br />
            <em>Adoraria ouvir.</em>
          </h2>
          <p className="section-sub">
            Respondo todo email em até 24h úteis. Para projetos longos,
            prefiro uma call de 20 minutos antes — vai por mim, vale a pena.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-block reveal">
            <a href={`mailto:${profile.email}`} className="contact-channel" data-hover>
              <span className="contact-channel-icon">{Icon.mail}</span>
              <div className="contact-channel-body">
                <div className="contact-channel-label">Email · resposta em 24h</div>
                <div className="contact-channel-val">{profile.email}</div>
              </div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-channel" data-hover>
              <span className="contact-channel-icon">{Icon.linkedin}</span>
              <div className="contact-channel-body">
                <div className="contact-channel-label">LinkedIn · network</div>
                <div className="contact-channel-val">/in/lucasnatali98</div>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-channel" data-hover>
              <span className="contact-channel-icon">{Icon.github}</span>
              <div className="contact-channel-body">
                <div className="contact-channel-label">GitHub · open source</div>
                <div className="contact-channel-val">@lucasnatali98</div>
              </div>
            </a>
            <div className="contact-channel" style={{ cursor: "default" }}>
              <span className="contact-channel-icon">{Icon.pin}</span>
              <div className="contact-channel-body">
                <div className="contact-channel-label">Localização · UTC−3</div>
                <div className="contact-channel-val">{profile.location}</div>
              </div>
            </div>
          </div>

          <form className="form reveal" onSubmit={onSubmit}>
            <div className="form-row row-split">
              <div>
                <label className="form-label">Nome</label>
                <input className="form-input" placeholder="Como te chamo?" required />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="seu@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <label className="form-label">Assunto</label>
              <input className="form-input" placeholder="Tô construindo um SaaS de..." required />
            </div>
            <div className="form-row">
              <label className="form-label">Mensagem</label>
              <textarea
                className="form-textarea"
                placeholder="Me conta o contexto, prazo aproximado e o que você espera dessa parceria."
                required
              />
            </div>
            <button type="submit" className={`form-submit ${sent ? "is-sent" : ""}`} data-hover>
              {sent ? (
                <>
                  {Icon.check} Mensagem enviada — em breve respondo
                </>
              ) : (
                <>
                  {Icon.send} Enviar mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
