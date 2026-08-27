import { profile, intro, beliefs, projects } from "./content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <div className="home-top">
        <img
          className="portrait"
          src="/profile.jpg"
          alt={`${profile.name} portrait`}
        />
        <div>
          <p className="intro">{intro}</p>
          <blockquote className="beliefs">
            {beliefs.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </blockquote>
        </div>
      </div>

      <h2 className="home-section-title">Selected work</h2>
      <div className="featured-grid">
        {featured.map((p) => {
          const target = p.report ? `/projects/${p.slug}` : p.href || "/projects";
          const external = !p.report && p.href;
          return (
            <a
              key={p.slug}
              className="featured-card"
              href={target}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="featured-thumb">
                <img src={p.thumb} alt={p.thumbAlt || p.title} loading="lazy" />
              </span>
              <span className="featured-title">{p.title}</span>
              <span className="featured-tagline">{p.description}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
