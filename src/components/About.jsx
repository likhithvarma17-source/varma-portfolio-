import { about } from '../data.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <Reveal className="container">
        <h2 className="section-title" id="about-title">About</h2>
        <div className="about-text" style={{ marginTop: 'var(--s3)' }}>
          {about.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
