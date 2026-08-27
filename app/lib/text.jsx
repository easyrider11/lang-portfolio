// Renders a plain string with [label](url) inline links into React nodes.
// Keeps content.js free of JSX so the README's "edit content.js" contract holds.
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderText(text) {
  const nodes = [];
  let last = 0;
  let match;
  while ((match = LINK.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const href = match[2];
    const external = href.startsWith("http");
    nodes.push(
      <a
        key={match.index}
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
