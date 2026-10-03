import { profile } from '../data.js';

export default function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="hello">Hi, I'm</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="sub">{profile.tagline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Contact me</a>
            <a className="btn btn-secondary" href={resumeHref} download>Download resume</a>
          </div>
        </div>

        {/* Animated code card: lines appear one by one. Values come from your profile. */}
        <div
          className="code-card"
          role="img"
          aria-label="A short code snippet summarizing Likhith: B.Tech student 2023 to 2027, knows Python, Java, C, HTML, CSS and JavaScript, looking for entry-level and internship roles."
        >
          <div className="code-top" aria-hidden="true">
            <i></i><i></i><i></i><span>profile.py</span>
          </div>
          <div className="code-body" aria-hidden="true">
            <span className="code-line"><span className="k">profile</span> = {'{'}</span>
            <span className="code-line">{'  '}<span className="s">"name"</span>: <span className="s">"{profile.shortName}"</span>,</span>
            <span className="code-line">{'  '}<span className="s">"studying"</span>: <span className="s">"B.Tech, 2023-2027"</span>,</span>
            <span className="code-line">{'  '}<span className="s">"programming"</span>: [<span className="s">"Python"</span>, <span className="s">"Java"</span>, <span className="s">"C"</span>],</span>
            <span className="code-line">{'  '}<span className="s">"web"</span>: [<span className="s">"HTML"</span>, <span className="s">"CSS"</span>, <span className="s">"JavaScript"</span>],</span>
            <span className="code-line">{'  '}<span className="s">"looking_for"</span>: <span className="s">"entry-level / internship"</span>,</span>
            <span className="code-line">{'}'}<span className="cursor"></span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
