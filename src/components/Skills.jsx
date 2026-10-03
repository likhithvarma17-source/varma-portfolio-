import { skills } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <h2 className="section-title" id="skills-title">Skills</h2>
          <p className="section-intro">The languages and tools I work with, and how I work with others.</p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group) => (
            <Reveal as="article" className="card skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li className="tag" key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
