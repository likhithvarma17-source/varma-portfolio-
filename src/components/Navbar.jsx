import { useEffect, useState } from 'react';
import { navItems, profile } from '../data.js';
import useActiveSection from '../hooks/useActiveSection.js';

const ids = navItems.map((n) => n.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const dark = theme === 'dark';

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
          {profile.shortName}
        </a>

        <nav aria-label="Primary" className="nav-wrap">
          <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'active' : ''}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span aria-hidden="true">{dark ? '☀️' : '🌙'}</span>
          </button>
          <button
            className="icon-btn nav-toggle"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-links"
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
