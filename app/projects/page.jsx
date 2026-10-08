import { projects, projectsIntro } from "../content";

export const metadata = {
  title: "Projects",
  openGraph: { title: "Projects", images: ["/og/projects.png"] },
  twitter: { card: "summary_large_image", title: "Projects", images: ["/og/projects.png"] }
};

function TitleLink({ p }) {
  if (p.report) return <a href={`/projects/${p.slug}`}>{p.title}</a>;
  if (p.href)
    return (
      <a href={p.href} target="_blank" rel="noreferrer">
        {p.title}
      </a>
    );
  return p.title;
}

function ProjectRow({ p }) {
  return (
    <li id={p.slug} className={p.thumb ? "has-thumb" : ""}>
      {p.thumb && (
        <a
          className="project-thumb"
          href={p.report ? `/projects/${p.slug}` : p.href}
          aria-hidden="true"
          tabIndex={-1}
        >
          <img src={p.thumb} alt="" loading="lazy" />
        </a>
      )}
      <div>
        <p className="project-title">
          <TitleLink p={p} />
        </p>
        <p className="project-meta">{p.meta}</p>
        <p className="project-desc">{p.description}</p>
      </div>
    </li>
  );
}

export default function Projects() {
  const selected = projects.filter((p) => !p.earlier);
  const earlier = projects.filter((p) => p.earlier);

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">{projectsIntro}</p>

      <ol className="project-list">
        {selected.map((p) => (
          <ProjectRow key={p.slug} p={p} />
        ))}
      </ol>

      <h2 className="earlier-title">Earlier work</h2>
      <p className="page-intro earlier-intro">
        Coursework, research, and side projects from Notre Dame, 2023 – 2025.
      </p>
      <ol className="project-list project-list--earlier">
        {earlier.map((p) => (
          <li key={p.slug} id={p.slug}>
            <p className="project-title">
              <TitleLink p={p} />
              <span className="earlier-meta"> · {p.meta.replace(/^Creator · /, "")}</span>
            </p>
            <p className="project-desc">{p.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
