/**
 * Cafeteira refinada — versão CSS-pure.
 * Animação de espresso saindo, vapor subindo, luz piscando.
 * Estilos em styles/coffee.css.
 */
export function CoffeeMachine() {
  return (
    <div className="coffee-stage" aria-hidden="true">
      <div className="cm-machine">
        <div className="cm-panel">
          <div className="cm-lights">
            <span className="cm-light on-power" />
            <span className="cm-light on-brew" />
          </div>
          <div className="cm-display">BREW</div>
          <div className="cm-gauge" />
        </div>
        <div className="cm-brand">Natali</div>
        <div className="cm-brand-sub">— ENGINEERING CO. —</div>
        <div className="cm-handle" />
        <div className="cm-spout-house" />
        <div className="cm-spout" />
      </div>

      <div className="cm-steam-wand" />
      <div className="cm-stream" />

      <div className="cm-steam">
        <span /><span /><span /><span /><span />
      </div>
      <div className="cm-cup" />
      <div className="cm-tray" />
      <div className="cm-base" />
      <div className="cm-base-tag">est. 2019 · since the first commit</div>
      <div className="cm-shadow" />
    </div>
  );
}
