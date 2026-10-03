import { profile } from '../data.js';
import Reveal from './Reveal.jsx';
import ExternalLink from './ExternalLink.jsx';

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="card contact-card">
          <h2 className="section-title" id="contact-title">Get in touch</h2>
          <p className="section-intro">
            I'm open to entry-level and internship roles in software development. Email or call me, and I'll reply as soon as I can.
          </p>
          <div className="contact-list">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn btn-secondary" href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="social-row">
            <ExternalLink url={profile.linkedin} placeholderLabel="LinkedIn profile">LinkedIn</ExternalLink>
            <ExternalLink url={profile.github} placeholderLabel="GitHub profile">GitHub</ExternalLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
