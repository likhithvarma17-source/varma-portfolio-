// A link button. If no url is set yet, it shows as a placeholder and does nothing.
export default function ExternalLink({ url, children, placeholderLabel }) {
  if (!url) {
    return (
      <a
        className="link-btn"
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-label={`${placeholderLabel || children} (placeholder link)`}
      >
        {children} [PLACEHOLDER]
      </a>
    );
  }
  return (
    <a className="link-btn" href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
