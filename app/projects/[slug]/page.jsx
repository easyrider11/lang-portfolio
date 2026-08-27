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
