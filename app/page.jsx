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

/* ── Scroll reveal ── */
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
    }, 28);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      {displayed}
      {!done && <span className="typewriter-cursor" />}
    </>
  );
}

/* ── Icons ── */
function ArrowIcon({ dir = "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg className="timeline__chevron" viewBox="0 0 20 20" fill="none"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round">
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

  const scrollRef = useScrollReveal();

  const tags = useMemo(() => {
    const collected = new Set();
    projects.forEach((p) => p.tags.forEach((t) => collected.add(t)));
    return ["All", ...Array.from(collected)];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  // Keep spotlight valid when filter changes
  useEffect(() => {
    if (!visibleProjects.find((p) => p.title === focusedProject.title)) {
      setFocusedProject(visibleProjects[0] || projects[0]);
    }
  }, [visibleProjects, focusedProject.title]);

  const spotlightIdx = visibleProjects.indexOf(focusedProject);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("Email copied to clipboard");
    } catch {
      setToast("Copy failed — please email directly");
    }
    window.setTimeout(() => setToast(""), 2200);
  }, []);

  const goPrev = () => {
    const i = spotlightIdx <= 0 ? visibleProjects.length - 1 : spotlightIdx - 1;
    setFocusedProject(visibleProjects[i]);
  };
  const goNext = () => {
    const i = spotlightIdx >= visibleProjects.length - 1 ? 0 : spotlightIdx + 1;
    setFocusedProject(visibleProjects[i]);
  };

  return (
    <div className="page" ref={scrollRef}>
      {/* ── Navigation ── */}
      <header className="nav">
        <div className="nav__brand">
          <span className="nav__mark" aria-hidden />
          <div>
            <p className="nav__name">{profile.name}</p>
            <p className="nav__role">{profile.role}</p>
          </div>
        </div>
        <nav className="nav__links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav__cta">Get in touch</a>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero__content">
            <div className="hero__eyebrow">AI Builder · Agentic Systems</div>
            <h1>
              <Typewriter text="Building production AI systems " />
              <em>that reason, act, and ship.</em>
            </h1>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={profile.resume}
                target="_blank" rel="noreferrer">
                View Résumé <ArrowIcon />
              </a>
              <a className="btn btn--outline" href="#work">See projects</a>
              <button className="btn btn--text" onClick={handleCopy}>
                Copy email
              </button>
            </div>
            <div className="hero__meta">
              <div>
                <p className="hero__meta-label">Based in</p>
                <p className="hero__meta-value">{profile.location}</p>
              </div>
              <div>
                <p className="hero__meta-label">Graduating</p>
                <p className="hero__meta-value">May 2026</p>
              </div>
              <div>
                <p className="hero__meta-label">Status</p>
                <p className="hero__meta-value">Open to roles</p>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="portrait">
              <img src="/profile.jpg" alt={`${profile.name} portrait`} />
              <div className="portrait__badge">
                <div className="portrait__badge-status">
                  <span className="portrait__badge-dot" />
                  Available for work
                </div>
                <span className="portrait__badge-year">2026</span>
              </div>
            </div>
            <div className="portrait__sticker">Ship AI · Real Systems</div>
          </div>
        </section>

        {/* ── Metrics + Focus ── */}
        <section className="metrics-section">
          <div className="metrics">
            <div className="stats">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label}
                  value={stat.value} label={stat.label} />
              ))}
            </div>
            <aside className="focus animate-on-scroll">
              <p className="focus__title">What I build</p>
              <ul>
                {focusAreas.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="work">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Selected Work</p>
              <h2 className="section__title">
                Agentic pipelines, retrieval systems, and <em>production AI</em>.
              </h2>
            </div>
            <p className="section__lead">
              A cross-section of systems I've designed end-to-end — agents that
              reason, validate, and act on real data.
            </p>
          </div>

          <div className="filter" style={{ marginBottom: 32 }}>
            {tags.map((tag) => (
              <button key={tag}
                className={`chip ${activeTag === tag ? "chip--active" : ""}`}
                onClick={() => setActiveTag(tag)}>
                {tag}
              </button>
            ))}
          </div>

          <div className="work__grid">
            <div className="work__cards">
              {visibleProjects.map((project, i) => (
                <button
                  key={project.title}
                  className={`project-card animate-on-scroll delay-${Math.min(i + 1, 4)} ${
                    focusedProject.title === project.title ? "project-card--active" : ""
                  }`}
                  onClick={() => setFocusedProject(project)}
                >
                  <div>
                    <div className="project-card__top">
                      <span className="project-card__year">{project.year}</span>
                      {project.featured && (
                        <span className="project-card__badge">Featured</span>
                      )}
                    </div>
                    <h3 style={{ marginTop: 10 }}>{project.title}</h3>
                    <p className="project-card__tagline">{project.tagline}</p>
                  </div>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </button>
              ))}
            </div>

            <aside className="spotlight animate-on-scroll">
              <div className="spotlight__head">
                <div>
                  <p className="kicker">Spotlight</p>
                  <h3 className="spotlight__title">{focusedProject.title}</h3>
                  <p className="spotlight__description">{focusedProject.description}</p>
                </div>
                <div className="spotlight__nav">
                  <button className="spotlight__btn" onClick={goPrev} aria-label="Previous">
                    <ArrowIcon dir="left" />
                  </button>
                  <button className="spotlight__btn" onClick={goNext} aria-label="Next">
                    <ArrowIcon />
                  </button>
                </div>
              </div>

              <div>
                <p className="spotlight__section-label">Impact</p>
                <div className="spotlight__impact">
                  {focusedProject.impact.map((item, i) => (
                    <div key={item} className="spotlight__impact-item">
                      <span className="spotlight__impact-bullet">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="spotlight__impact-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="spotlight__section-label">Stack</p>
                <div className="spotlight__stack">
                  {focusedProject.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>

              <div className="spotlight__progress">
                <div className="spotlight__bar">
                  {visibleProjects.map((p, i) => (
                    <span key={p.title}
                      className={`spotlight__segment ${
                        spotlightIdx === i ? "spotlight__segment--active" : ""
                      }`} />
                  ))}
                </div>
                <p className="spotlight__count">
                  {String(spotlightIdx + 1).padStart(2, "0")} / {String(visibleProjects.length).padStart(2, "0")} ·{" "}
                  {activeTag === "All" ? "all work" : activeTag.toLowerCase()}
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Experience</p>
              <h2 className="section__title">
                Building AI systems that <em>ship and scale</em>.
              </h2>
            </div>
            <p className="section__lead">
              From real-time AR pipelines at Meta to agentic research systems —
              infrastructure-grade engineering, applied to AI.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <div key={`${item.company}-${item.role}`}
                className={`timeline__item animate-on-scroll delay-${Math.min(index + 1, 4)} ${
                  openExperience === index ? "timeline__item--open" : ""
                }`}>
                <button className="timeline__header"
                  onClick={() =>
                    setOpenExperience(openExperience === index ? -1 : index)
                  }>
                  <span className="timeline__year">
                    {item.timeframe.split(" — ")[0].slice(-4)}
                  </span>
                  <div>
                    <h3 className="timeline__role">{item.role}</h3>
                    <p className="timeline__company">{item.company}</p>
                  </div>
                  <span className="timeline__location">{item.location}</span>
                  <ChevronDown />
                </button>
                <div className="timeline__content">
                  <div className="timeline__body">
                    <ul>
                      {item.highlights.map((h) => <li key={h}>{h}</li>)}
                    </ul>
                    <div className="timeline__skills">
                      {item.skills.map((s) => <span key={s}>{s}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Toolkit</p>
              <h2 className="section__title">
                The stack behind the <em>systems</em>.
              </h2>
            </div>
            <p className="section__lead">
              Languages, frameworks, and infrastructure I use to build reliable,
              agentic AI products.
            </p>
          </div>

          <div className="skills__grid">
            {skills.map((group, i) => (
              <div key={group.label}
                className={`skill-card animate-on-scroll delay-${Math.min(i + 1, 3)}`}>
                <h3>{group.label}</h3>
                <div className="skill-card__items">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education">
          <div className="section__head animate-on-scroll">
            <div>
              <p className="kicker">Education</p>
              <h2 className="section__title">
                Foundations in <em>theory and systems</em>.
              </h2>
            </div>
          </div>

          <div className="education__grid">
            {education.map((item) => (
              <article className="edu-card animate-on-scroll" key={item.school}>
                <h3>{item.school}</h3>
                <p className="edu-card__degree">{item.degree}</p>
                <p className="edu-card__time">{item.timeframe}</p>
                <ul>
                  {item.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </article>
            ))}

            <article className="edu-card edu-card--highlight animate-on-scroll delay-1">
              <h3>Recognition &amp; Activities</h3>
              <p className="edu-card__subhead">Recognition</p>
              <ul>
                {recognition.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="edu-card__subhead">Activities</p>
              <ul>
                {activities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="contact animate-on-scroll">
          <div>
            <p className="kicker">Let's build together</p>
            <h2>
              Looking for an <em>AI builder</em>?
            </h2>
            <p className="contact__lead">
              Open to full-time and internship roles working on agentic systems,
              retrieval infrastructure, and production AI. Let's talk about what
              you're building.
            </p>
          </div>

          <div className="contact__card">
            <div className="contact__row">
              <div>
                <p className="contact__label">Email</p>
                <p className="contact__value">{profile.email}</p>
              </div>
            </div>
            <div className="contact__row">
              <div>
                <p className="contact__label">Phone</p>
                <p className="contact__value">{profile.phone}</p>
              </div>
            </div>
            <div className="contact__row">
              <div>
                <p className="contact__label">Location</p>
                <p className="contact__value">{profile.location}</p>
              </div>
            </div>
            <div className="contact__actions">
              <a className="contact__btn contact__btn--primary"
                href={`mailto:${profile.email}`}>
                Email me <ArrowIcon />
              </a>
              <a className="contact__btn" href={profile.github}
                target="_blank" rel="noreferrer">GitHub</a>
              <a className="contact__btn" href={profile.linkedin}
                target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 {profile.name} · Designed with Claude · Built with Next.js</p>
        <div className="footer__marks">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
