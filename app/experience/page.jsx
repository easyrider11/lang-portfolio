import { timeline } from "../content";
import { renderText } from "../lib/text";

export const metadata = { title: "Experience" };

export default function Experience() {
  return (
    <>
      <h1 className="page-title">Experience</h1>

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
