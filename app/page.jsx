import { intro, beliefs, timeline } from "./content";
import { renderText } from "./lib/text";

export default function Home() {
  return (
    <>
      <p className="intro">{intro}</p>

      <blockquote className="beliefs">
        {beliefs.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </blockquote>

      <ol className="timeline">
        {timeline.map((entry) => (
          <li key={entry.period + entry.org}>
            <p className="timeline-period">{entry.period}</p>
            <p className="timeline-org">
              <strong>{entry.org}</strong>
              <span className="timeline-role">{entry.role}</span>
            </p>
            <p className="timeline-desc">{renderText(entry.description)}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
