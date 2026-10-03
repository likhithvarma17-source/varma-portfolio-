import { strengths } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Strengths() {
  return (
    <section className="section" id="strengths" aria-labelledby="strengths-title">
      <div className="container">
        <Reveal>
          <h2 className="section-title" id="strengths-title">Strengths</h2>
          <p className="section-intro">What teammates can count on.</p>
        </Reveal>
        <ul className="strengths-grid">
          {strengths.map((s) => (
            <Reveal as="li" className="card strength" key={s.label}>
              <span className="icon" aria-hidden="true">{s.icon}</span>
              <span className="label">{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
