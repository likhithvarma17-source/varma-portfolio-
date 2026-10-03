import { useEffect, useState } from 'react';

// Follows the system theme by default; the toggle saves an explicit choice.
export default function useTheme() {
  const [choice, setChoice] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  });
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setSystemDark(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (choice) root.setAttribute('data-theme', choice);
    else root.removeAttribute('data-theme');
  }, [choice]);

  const theme = choice ?? (systemDark ? 'dark' : 'light');

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setChoice(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: ignore */
    }
  };

  return { theme, toggle };
}
