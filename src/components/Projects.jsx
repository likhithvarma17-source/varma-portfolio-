import { projects } from '../data.js';
import Reveal from './Reveal.jsx';
import ExternalLink from './ExternalLink.jsx';

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <h2 className="section-title" id="projects-title">Projects</h2>
          <p className="section-intro">A few things I've built.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" className="card project-card" key={`${p.title}-${i}`}>
              {p.placeholder && <span className="badge-placeholder">[PLACEHOLDER] Replace me</span>}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tech.map((t, j) => (
                  <li className="tag" key={`${t}-${j}`}>{t}</li>
                ))}
              </ul>
              <div className="project-links">
                <ExternalLink url={p.github}>GitHub</ExternalLink>
                <ExternalLink url={p.live}>Live demo</ExternalLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
