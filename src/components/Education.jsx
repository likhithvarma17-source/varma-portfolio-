import { education } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="edu-title">
      <div className="container">
        <Reveal>
          <h2 className="section-title" id="edu-title">Education</h2>
          <p className="section-intro">Most recent first.</p>
        </Reveal>
        <ol className="timeline">
          {education.map((item) => (
            <Reveal as="li" key={item.title}>
              <div className="card tl-card">
                <h3>{item.title}</h3>
                <p className="school">{item.school}</p>
                <div className="tl-meta">
                  {item.pills.map((p) => (
                    <span className="pill" key={p}>{p}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
