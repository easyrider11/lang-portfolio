import { projects, projectsIntro } from "../content";

export const metadata = { title: "Projects" };

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

export default function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">{projectsIntro}</p>

      <ol className="project-list">
        {projects.map((p) => (
          <li key={p.slug} id={p.slug} className={p.thumb ? "has-thumb" : ""}>
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
        ))}
      </ol>
    </>
  );
}
