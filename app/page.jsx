import { profile, intro, beliefs, credentials, projects } from "./content";

function cardTarget(p) {
  return p.report ? `/projects/${p.slug}` : p.href || "/projects";
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const [hero, ...rest] = featured;

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

      <ul className="cred-strip" aria-label="Credentials">
        {credentials.map((c) => {
          const external = c.href.startsWith("http");
          return (
            <li key={c.label}>
              <a
                href={c.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="cred-label">{c.label}</span>
                <span className="cred-sub">{c.sub}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <h2 className="home-section-title">Selected work</h2>

      {hero && (
        <a className="featured-card featured-card--hero" href={cardTarget(hero)}>
          <span className="featured-thumb">
            <img
              src={hero.hero || hero.thumb}
              alt={hero.heroAlt || hero.thumbAlt || hero.title}
            />
          </span>
          <span className="featured-hero-text">
            <span className="featured-title">{hero.title}</span>
            <span className="featured-tagline">{hero.description}</span>
          </span>
        </a>
      )}

      <div className="featured-grid featured-grid--3">
        {rest.map((p) => (
          <a key={p.slug} className="featured-card" href={cardTarget(p)}>
            <span className="featured-thumb">
              <img src={p.thumb} alt={p.thumbAlt || p.title} loading="lazy" />
            </span>
            <span className="featured-title">{p.title}</span>
            <span className="featured-tagline">{p.description}</span>
          </a>
        ))}
      </div>

      <p className="home-more">
        <a href="/projects">All projects →</a>
      </p>
    </>
  );
}
