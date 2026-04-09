"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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

export default function Page() {
  const [activeTag, setActiveTag] = useState("All");
  const [focusedProject, setFocusedProject] = useState(projects[0]);
  const [openExperience, setOpenExperience] = useState(0);
  const [toast, setToast] = useState("");
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

  const handleTagSelect = (tag) => {
    const nextVisibleProjects =
      tag === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(tag));

    setActiveTag(tag);
    setFocusedProject((currentProject) => {
      return (
        nextVisibleProjects.find(
          (project) => project.title === currentProject.title
        ) ?? nextVisibleProjects[0]
      );
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Email copied.");
    } catch (error) {
      setToast("Copy failed. Please email directly.");
    }
    window.setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="page">
      <header className="nav">
        <div className="nav__brand">
          <span className="nav__dot" />
          <div>
            <p className="nav__name">{profile.name}</p>
            <p className="nav__role">{profile.role}</p>
          </div>
        </div>
        <nav className="nav__links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="btn btn--outline">
            Contact
          </a>
        </nav>
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
              <Image
                src="/profile.jpg"
                alt={`${profile.name} profile`}
                width={640}
                height={800}
                priority
                sizes="(max-width: 960px) 100vw, 40vw"
              />
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
              <p className="focus__title">Focus Areas</p>
              <ul>
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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

        <section className="experience" id="experience">
          <div className="section__head">
            <div>
              <p className="kicker">Experience</p>
              <h2>Shipping fast with strong quality.</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <div
                className={`timeline__item ${
                  openExperience === index ? "timeline__item--open" : ""
                }`}
                key={`${item.company}-${item.role}`}
              >
                <button
                  className="timeline__header"
                  onClick={() =>
                    setOpenExperience(openExperience === index ? -1 : index)
                  }
                >
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <p>{item.timeframe}</p>
                    <p>{item.location}</p>
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
            ))}
          </div>
        </section>

        

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
                  type="button"
                  aria-pressed={activeTag === tag}
                  onClick={() => handleTagSelect(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="work__grid">
            <div className="work__cards">
              {visibleProjects.map((project) => (
                <button
                  key={project.title}
                  className={`project-card ${
                    focusedProject.title === project.title
                      ? "project-card--active"
                      : ""
                  }`}
                  onClick={() => setFocusedProject(project)}
                >
                  <div>
                    <p className="project-card__kicker">{project.year}</p>
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div className="work__spotlight">
              <div>
                <p className="kicker">Spotlight</p>
                <h3>{focusedProject.title}</h3>
                <p className="work__summary">{focusedProject.description}</p>
              </div>
              <div className="work__impact">
                {focusedProject.impact.map((item) => (
                  <div key={item}>
                    <span className="dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="work__stack">
                <p className="kicker">Stack</p>
                <div>
                  {focusedProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="contact" id="contact">
          <div>
            <p className="kicker">Let’s Build</p>
            <h2>Looking for a builder?</h2>
            <p>
              Open to ambitious problems and thoughtful teams.
            </p>
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

      {toast && (
        <div
          className="toast"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
