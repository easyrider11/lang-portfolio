import { projects, projectsIntro } from "../content";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">{projectsIntro}</p>

      <ol className="project-list">
        {projects.map((p) => (
          <li key={p.slug} id={p.slug}>
            <p className="project-title">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </p>
            <p className="project-meta">{p.meta}</p>
            <p className="project-desc">{p.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
