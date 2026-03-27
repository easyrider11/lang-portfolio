"use client";

import { useEffect, useMemo, useState } from "react";
import {
  profile,
  stats,
  focusAreas,
  projects,
  experience,
  education,
  skills,
  recognition,
  activities
} from "./content";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" }
];

export default function Page() {
  const [activeTag, setActiveTag] = useState("All");
  const [openProject, setOpenProject] = useState("");
  const [openExperience, setOpenExperience] = useState(0);
  const [toast, setToast] = useState("");
  const [activeSection, setActiveSection] = useState("experience");
  const [scrollProgress, setScrollProgress] = useState(0);
  const hasGithub = Boolean(profile.github);
  const hasWebsite = Boolean(profile.website);

  const tags = useMemo(() => {
    const collected = new Set();
    projects.forEach((project) => project.tags.forEach((tag) => collected.add(tag)));
    return ["All", ...Array.from(collected)];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  useEffect(() => {
    if (!openProject) return;

    const hasVisibleProject = visibleProjects.some(
      (project) => project.title === openProject
    );

    if (!hasVisibleProject) {
      setOpenProject("");
    }
  }, [openProject, visibleProjects]);

  useEffect(() => {
    const sections = ["experience", "projects", "skills", "education", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (current?.target?.id) {
          setActiveSection(current.target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.7],
        rootMargin: "-30% 0px -42% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight <= 0 ? 0 : (window.scrollY / scrollableHeight) * 100;

      setScrollProgress(Math.min(Math.max(nextProgress, 0), 100));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Email copied.");
    } catch (error) {
      setToast("Copy failed. Please email directly.");
    }

    window.setTimeout(() => setToast(""), 2000);
  };

  const handlePointerMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;

    document.documentElement.style.setProperty("--pointer-x", `${x.toFixed(2)}%`);
    document.documentElement.style.setProperty("--pointer-y", `${y.toFixed(2)}%`);
  };

  const resetPointer = () => {
    document.documentElement.style.setProperty("--pointer-x", "70%");
    document.documentElement.style.setProperty("--pointer-y", "14%");
  };

  return (
    <div
      className="page"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <header className="nav">
        <div className="nav__brand">
          <span className="nav__dot" />
          <div>
            <p className="nav__name">{profile.name}</p>
            <p className="nav__role">{profile.role}</p>
          </div>
        </div>
        <nav className="nav__links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${
                activeSection === item.id ? "nav__link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn btn--outline nav__contact ${
              activeSection === "contact" ? "nav__contact--active" : ""
            }`}
          >
            Contact
          </a>
        </nav>
        <div className="nav__progress" aria-hidden="true">
          <span style={{ width: `${scrollProgress}%` }} />
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__content">
            <p className="kicker">Software Engineer Portfolio</p>
            <h1>
              Shipping high-performance software for AR, AI, and real-time systems.
            </h1>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <button className="btn btn--ghost" onClick={handleCopy}>
                Copy Email
              </button>
              <a
                className="btn btn--ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {hasGithub && (
                <a
                  className="btn btn--ghost"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
            <div className="hero__signals">
              <div className="status-pill">
                <span className="status-pill__dot" />
                Open to ambitious teams, internships, and shipped product work
              </div>
              <p className="hero__note">
                Warm product taste, systems reliability, and fast iteration across
                UI, backend, and applied AI.
              </p>
            </div>
            <div className="hero__meta">
              <div>
                <p className="meta__label">Location</p>
                <p className="meta__value">{profile.location}</p>
              </div>
              <div>
                <p className="meta__label">Graduation</p>
                <p className="meta__value">May 2026</p>
              </div>
              <div>
                <p className="meta__label">Focus</p>
                <p className="meta__value">AR & AI Systems</p>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="photo-card">
              <img src="/profile.jpg" alt={`${profile.name} profile`} />
              <div className="photo-card__overlay">
                <div>
                  <p className="photo-card__title">{profile.name}</p>
                  <p className="photo-card__subtitle">{profile.role}</p>
                </div>
                <div className="photo-card__tags">
                  <span>Full-Stack</span>
                  <span>Systems</span>
                  <span>Product</span>
                </div>
              </div>
            </div>
            <div className="focus">
              <div className="focus__head">
                <p className="focus__title">Focus Areas</p>
                <span className="focus__badge">Current</span>
              </div>
              <ul>
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="focus__note">
                Building software that feels polished at the UI level and dependable
                under real load.
              </p>
            </div>
          </div>
        </section>

        <section className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat__value">{stat.value}</p>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </section>

        <div className="section-divider" aria-hidden="true">
          <span className="section-divider__line" />
          <span className="section-divider__dot" />
          <span className="section-divider__line" />
        </div>

        <section className="experience" id="experience">
          <div className="section__head">
            <div>
              <p className="kicker">Experience</p>
              <h2>Shipping fast with strong quality.</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => {
              const isOpen = openExperience === index;

              return (
                <div
                  className={`timeline__item ${isOpen ? "timeline__item--open" : ""}`}
                  key={`${item.company}-${item.role}`}
                >
                  <button
                    className="timeline__header"
                    onClick={() => setOpenExperience(isOpen ? -1 : index)}
                  >
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                      <p className="timeline__count">
                        {item.highlights.length} highlight
                        {item.highlights.length === 1 ? "" : "s"}
                      </p>
                    </div>
                    <div className="timeline__aside">
                      <div className="timeline__meta">
                        <p>{item.timeframe}</p>
                        <p>{item.location}</p>
                      </div>
                      <span
                        className={`timeline__icon ${
                          isOpen ? "timeline__icon--open" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div className="timeline__content">
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="timeline__skills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="section-divider" aria-hidden="true">
          <span className="section-divider__line" />
          <span className="section-divider__dot" />
          <span className="section-divider__line" />
        </div>

        <section className="work" id="projects">
          <div className="section__head">
            <div>
              <p className="kicker">Selected Projects</p>
              <h2>Projects with clear impact.</h2>
            </div>
            <div className="filter">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`chip ${activeTag === tag ? "chip--active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
              <p className="filter__note">{visibleProjects.length} projects in view</p>
            </div>
          </div>

          <div className="work__cards">
            {visibleProjects.map((project) => {
              const isOpen = openProject === project.title;

              return (
                <div
                  key={project.title}
                  className={`project-card ${isOpen ? "project-card--open" : ""}`}
                >
                  <button
                    className="project-card__header"
                    onClick={() => setOpenProject(isOpen ? "" : project.title)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="project-card__kicker">{project.year}</p>
                      <h3>{project.title}</h3>
                      <p>{project.tagline}</p>
                    </div>
                    <div className="project-card__aside">
                      <div className="project-card__tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <span
                        className={`project-card__icon ${
                          isOpen ? "project-card__icon--open" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div className="project-card__content">
                    <p className="work__summary">{project.description}</p>

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="work__highlights">
                        <p className="kicker">Technical Highlights</p>
                        <ul>
                          {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="work__stack">
                      <p className="kicker">Stack</p>
                      <div>
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>

                    {project.github && (
                      <div className="work__links">
                        <a
                          className="btn btn--ghost work__repo-link"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                          View on GitHub
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-hidden="true"
                          >
                            <path d="M3.5 1.5h7v7M10 2L2 10" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="section-divider" aria-hidden="true">
          <span className="section-divider__line" />
          <span className="section-divider__dot" />
          <span className="section-divider__line" />
        </div>

        <section className="skills" id="skills">
          <div className="section__head">
            <div>
              <p className="kicker">Skills</p>
              <h2>Tools I ship with.</h2>
            </div>
          </div>
          <div className="skills__grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.label}>
                <h3>{group.label}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" aria-hidden="true">
          <span className="section-divider__line" />
          <span className="section-divider__dot" />
          <span className="section-divider__line" />
        </div>

        <section className="education" id="education">
          <div className="section__head">
            <div>
              <p className="kicker">Education</p>
              <h2>Academic foundation.</h2>
            </div>
          </div>
          <div className="education__grid">
            {education.map((item) => (
              <div className="edu-card" key={item.school}>
                <h3>{item.school}</h3>
                <p className="edu-card__degree">{item.degree}</p>
                <p className="edu-card__time">{item.timeframe}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="edu-card edu-card--highlight">
              <h3>Recognition & Activities</h3>
              <p className="edu-card__subhead">Recognition</p>
              <ul>
                {recognition.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="edu-card__subhead">Activities</p>
              <ul>
                {activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true">
          <span className="section-divider__line" />
          <span className="section-divider__dot" />
          <span className="section-divider__line" />
        </div>

        <section className="contact" id="contact">
          <div>
            <p className="kicker">Let’s Build</p>
            <h2>Looking for a builder?</h2>
            <p>Open to ambitious problems and thoughtful teams.</p>
          </div>
          <div className="contact__card">
            <div>
              <p className="contact__label">Email</p>
              <p className="contact__value">{profile.email}</p>
              <p className="contact__label">Phone</p>
              <p className="contact__value">{profile.phone}</p>
            </div>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              {hasGithub && (
                <a
                  className="btn btn--ghost"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {hasWebsite && (
                <a
                  className="btn btn--ghost"
                  href={profile.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Personal Site
                </a>
              )}
              <a
                className="btn btn--ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 {profile.name}. Built with Next.js.</p>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
