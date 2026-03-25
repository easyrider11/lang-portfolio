"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
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

/* ── Scroll-triggered animation hook ── */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const children = el.querySelectorAll(".animate-on-scroll");
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Animated counter ── */
function AnimatedStat({ value, label }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const match = value.match(/^([\d.]+)(.*)$/);
          if (!match) {
            setDisplay(value);
            return;
          }
          const target = parseFloat(match[1]);
          const suffix = match[2];
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            setDisplay(
              (target % 1 === 0 ? Math.round(current) : current.toFixed(1)) +
                suffix
            );
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <p className="stat__value">{display}</p>
      <p className="stat__label">{label}</p>
    </div>
  );
}

/* ── Typewriter effect ── */
function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 32);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      {displayed}
      {!done && <span className="typewriter-cursor" />}
    </>
  );
}

/* ── Chevron icon ── */
function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 8 10 13 15 8" />
    </svg>
  );
}

export default function Page() {
  const [activeTag, setActiveTag] = useState("All");
  const [focusedProject, setFocusedProject] = useState(
    projects.find((p) => p.featured) || projects[0]
  );
  const [openExperience, setOpenExperience] = useState(0);
  const [toast, setToast] = useState("");
  const hasGithub = Boolean(profile.github);
  const hasWebsite = Boolean(profile.website);

  const scrollRef = useScrollReveal();

  const tags = useMemo(() => {
    const collected = new Set();
    projects.forEach((project) =>
      project.tags.forEach((tag) => collected.add(tag))
    );
    return ["All", ...Array.from(collected)];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Email copied!");
    } catch (error) {
      setToast("Copy failed. Please email directly.");
    }
    window.setTimeout(() => setToast(""), 2000);
  }, []);

  return (
    <div className="page" ref={scrollRef}>
      <header className="nav">
        <div className="nav__brand">
          <span className="nav__dot" />
          <div>
            <p className="nav__name">{profile.name}</p>
            <p className="nav__role">{profile.role}</p>
          </div>
        </div>
        <nav className="nav__links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="btn btn--outline">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero__content">
            <p className="kicker">AI Builder &middot; Software Engineer</p>
            <h1>
              <Typewriter text="I build intelligent software that ships." />
            </h1>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
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
              <a
                className="btn btn--ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <button className="btn btn--ghost" onClick={handleCopy}>
                Copy Email
              </button>
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
              </div>
            </div>
          </div>
        </section>

        {/* Stats + Focus */}
        <section className="metrics">
          <div className="stats">
            {stats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
          <div className="focus animate-on-scroll">
            <p className="focus__title">What I Build</p>
            <ul>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="work" id="projects">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Projects</p>
              <h2>AI-driven projects with real impact.</h2>
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
            </div>
          </div>

          <div className="work__grid">
            <div className="work__cards">
              {visibleProjects.map((project, i) => (
                <button
                  key={project.title}
                  className={`project-card animate-on-scroll delay-${Math.min(i + 1, 4)} ${
                    focusedProject.title === project.title
                      ? "project-card--active"
                      : ""
                  } ${project.featured ? "project-card--featured" : ""}`}
                  onClick={() => setFocusedProject(project)}
                >
                  <div>
                    <div className="project-card__top">
                      <p className="project-card__kicker">{project.year}</p>
                      {project.featured && (
                        <span className="project-card__badge">Featured</span>
                      )}
                    </div>
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
                <p className="work__impact-title">Impact</p>
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

        {/* Experience */}
        <section className="experience" id="experience">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Experience</p>
              <h2>Where I've shipped.</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <div
                className={`timeline__item animate-on-scroll delay-${Math.min(index + 1, 4)} ${
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
                    <ChevronDown className="timeline__chevron" />
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

        {/* Skills */}
        <section className="skills" id="skills">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Skills</p>
              <h2>Tools I ship with.</h2>
            </div>
          </div>
          <div className="skills__grid">
            {skills.map((group, i) => (
              <div
                className={`skill-card animate-on-scroll delay-${Math.min(i + 1, 3)}`}
                key={group.label}
              >
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

        {/* Education */}
        <section className="education" id="education">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Education</p>
              <h2>Academic foundation.</h2>
            </div>
          </div>
          <div className="education__grid">
            {education.map((item) => (
              <div className="edu-card animate-on-scroll" key={item.school}>
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
            <div className="edu-card edu-card--highlight animate-on-scroll delay-1">
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

        {/* Contact */}
        <section className="contact animate-on-scroll" id="contact">
          <div>
            <p className="kicker">Let's Build Together</p>
            <h2>Looking for an AI builder?</h2>
            <p>
              Open to ambitious AI problems and thoughtful engineering teams.
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
        <p>&copy; 2026 {profile.name}. Built with Next.js.</p>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
