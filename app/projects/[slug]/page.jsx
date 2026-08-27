import { notFound } from "next/navigation";
import { projects } from "../../content";
import { renderText } from "../../lib/text";

export function generateStaticParams() {
  return projects.filter((p) => p.report).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug && x.report);
  return { title: p ? p.title : "Project" };
}

export default async function ProjectReport({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug && x.report);
  if (!p) notFound();

  return (
    <article>
      <p className="crumb">
        <a href="/projects">← Projects</a>
      </p>
      <h1 className="page-title">{p.title}</h1>
      <p className="project-meta">{p.meta}</p>

      {p.report.stats?.length > 0 && (
        <dl className="report-stats">
          {p.report.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="report-body">
        {p.report.body.map((para, i) => (
          <p key={i}>{renderText(para)}</p>
        ))}
      </div>

      {p.report.ledger?.length > 0 && (
        <div className="ledger">
          {p.report.ledger.map((group) => (
            <section key={group.repo} className="ledger-group">
              <h2 className="ledger-repo">
                {group.repo}
                {group.context && <span className="ledger-context"> — {group.context}</span>}
              </h2>
              <ul className="ledger-items">
                {group.items.map((item) => (
                  <li key={item.ref}>
                    <span className={`chip chip--${item.status}`}>{item.status}</span>
                    <span className="ledger-text">
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.ref}
                      </a>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      {p.report.media?.length > 0 && (
        <div className="report-media">
          {p.report.media.map((m) => (
            <figure key={m.src}>
              <img src={m.src} alt={m.caption} loading="lazy" />
              <figcaption>{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {p.report.links?.length > 0 && (
        <p className="report-links">
          {p.report.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </p>
      )}
    </article>
  );
}
