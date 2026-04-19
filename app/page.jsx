"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  profile,
  projects,
  experience
} from "./content";

/* ──────────────────────────────────────────────
   Icon components
   ────────────────────────────────────────────── */
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconFolder() {
  return (
    <svg className="other-card__folder" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Hooks
   ────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5, 0.9] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      el.classList.add("active");
    };
    const leave = () => el.classList.remove("active");
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <div className="cursor-glow" ref={ref} aria-hidden />;
}

function FeaturedVisual({ emoji }) {
  return (
    <div className="feat__visual">
      <div className="feat__visual-inner">
        <div className="feat__visual-pattern" aria-hidden />
        <span className="feat__visual-emoji" aria-hidden>{emoji}</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   MAIN
   ────────────────────────────────────────────── */
export default function Page() {
  // Treat first 3 (or all featured) as main featured, rest as other
  const featuredProjects = useMemo(() => {
    const fp = projects.filter((p) => p.featured);
    if (fp.length >= 2) return fp.slice(0, 4);
    return projects.slice(0, 3);
  }, []);
  const featuredTitles = new Set(featuredProjects.map((p) => p.title));
  const otherProjects = useMemo(
    () => projects.filter((p) => !featuredTitles.has(p.title)),
    [featuredTitles]
  );

  const [activeTab, setActiveTab] = useState(0);
  const [toast, setToast] = useState("");

  const sectionIds = useMemo(() => ["about", "experience", "work", "contact"], []);
  const active = useActiveSection(sectionIds);
  const rightRef = useReveal();

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("email copied");
    } catch {
      setToast("copy failed");
    }
    window.setTimeout(() => setToast(""), 1800);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const current = experience[activeTab] || experience[0];

  // Emoji per project (visual identity)
  const emojis = {
    "AI-Assisted Interview Platform": "🧪",
    "LLM Quiz Interface": "📚",
    "Dead Code Detector": "🔍",
    "HFT Order Book Imbalance Engine": "📈",
    "Legal Consultant RAG": "⚖️",
    "FTS Scanner App": "📱",
    "NDFootball Channel": "🎯",
    "Graph Analysis Bot": "🕸️"
  };

  return (
    <>
      <CursorGlow />

      {/* Mobile top bar */}
      <header className="mobile-bar">
        <span className="mobile-bar__name">{profile.name.toLowerCase()}</span>
        <div className="mobile-bar__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a className="mobile-bar__cta" href={profile.resume}
            target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
            Résumé ↗
          </a>
        </div>
      </header>

      <div className="shell">
        <div className="main-grid">
          {/* ═══ LEFT PANE (sticky) ═══ */}
          <aside className="pane-left">
            <div>
              <div className="portrait">
                <img src="/profile.jpg" alt={`${profile.name} portrait`} />
                <div className="portrait__badge">
                  <div className="portrait__status">
                    <span className="portrait__dot" />
                    available may 2026
                  </div>
                </div>
              </div>

              <div className="identity">
                <h1>{profile.name}</h1>
                <h2>{profile.role}</h2>
                <p>{profile.summary}</p>
              </div>

              <nav className="dot-nav" aria-label="Sections">
                {[
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "work", label: "Work" },
                  { id: "contact", label: "Contact" }
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`dot-nav__link ${
                      active === item.id ? "dot-nav__link--active" : ""
                    }`}
                    onClick={() => scrollTo(item.id)}
                  >
                    <span className="dot-nav__line" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="socials" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <IconGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <IconLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <IconMail />
              </a>
            </div>
          </aside>

          {/* ═══ RIGHT PANE (scrolling) ═══ */}
          <main className="pane-right" ref={rightRef}>
            {/* ── About ── */}
            <section id="about" className="section">
              <div className="section__head reveal">
                <span className="section__num">01.</span>
                <h2 className="section__title">About Me</h2>
                <span className="section__rule" />
              </div>

              <div className="about">
                <p className="reveal d1">
                  Hi, I&apos;m Lorre. I build{" "}
                  <strong style={{ color: "var(--text-heading)" }}>
                    production-ready AI systems
                  </strong>
                  {" "}— agents that reason, retrieval pipelines that surface the right
                  context, and real-time infrastructure that holds up under load. I care
                  about systems that actually ship, not demos.
                </p>
                <p className="reveal d2">
                  I&apos;m a CS + Applied Math double major at the{" "}
                  <a href="https://www.nd.edu" target="_blank" rel="noreferrer">
                    University of Notre Dame
                  </a>
                  , graduating May 2026. Last summer at{" "}
                  <a href="https://about.meta.com" target="_blank" rel="noreferrer">Meta</a>,
                  I rebuilt Instagram&apos;s AR camera init pipeline and lifted
                  cold-start reliability to 99.9% — the same discipline I bring to
                  AI-serving systems. At{" "}
                  <a href="https://www.radicalai.com" target="_blank" rel="noreferrer">
                    Radical AI
                  </a>
                  , I shipped agentic LLM tutoring with evaluation loops and tool-use
                  orchestration.
                </p>
                <p className="reveal d3">
                  Right now I&apos;m most excited about{" "}
                  <em style={{ color: "var(--accent)", fontStyle: "normal" }}>
                    agentic systems that operate on real codebases and data
                  </em>
                  {" "}— sandboxed execution, evaluation rubrics, retrieval-augmented
                  reasoning, and the glue that makes LLMs reliable in production.
                </p>

                <p className="reveal d3"
                  style={{ color: "var(--text-2)", marginTop: 24 }}>
                  Technologies I&apos;ve been working with recently:
                </p>
                <ul className="about__skills reveal d4">
                  <li>Python / TypeScript</li>
                  <li>C++ / Swift</li>
                  <li>LLM APIs &amp; Agents</li>
                  <li>RAG &amp; Vector Search</li>
                  <li>FastAPI / Node</li>
                  <li>Docker / Kubernetes</li>
                  <li>PyTorch / TensorFlow</li>
                  <li>PostgreSQL / pgvector</li>
                </ul>
              </div>
            </section>

            {/* ── Experience (tabbed) ── */}
            <section id="experience" className="section">
              <div className="section__head reveal">
                <span className="section__num">02.</span>
                <h2 className="section__title">Where I&apos;ve Worked</h2>
                <span className="section__rule" />
              </div>

              <div className="exp reveal d1">
                <div className="exp__tablist" role="tablist">
                  {experience.map((item, i) => (
                    <button
                      key={`${item.company}-${i}`}
                      role="tab"
                      aria-selected={activeTab === i}
                      className={`exp__tab ${activeTab === i ? "exp__tab--active" : ""}`}
                      onClick={() => setActiveTab(i)}
                    >
                      {item.company}
                    </button>
                  ))}
                  <span
                    className="exp__tab-highlight"
                    style={{ transform: `translateY(${activeTab * 44}px)` }}
                    aria-hidden
                  />
                </div>

                <div className="exp__panel" role="tabpanel">
                  <h3 className="exp__role">
                    {current.role}{" "}
                    <span className="exp__role-company">@ {current.company}</span>
                  </h3>
                  <p className="exp__meta">
                    {current.timeframe} · {current.location}
                  </p>
                  <ul className="exp__list">
                    {current.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  {current.skills?.length > 0 && (
                    <div className="exp__skills">
                      {current.skills.map((s) => <span key={s}>{s}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ── Work ── */}
            <section id="work" className="section">
              <div className="section__head reveal">
                <span className="section__num">03.</span>
                <h2 className="section__title">Some Things I&apos;ve Built</h2>
                <span className="section__rule" />
              </div>

              <div className="featured">
                {featuredProjects.map((p) => (
                  <article className="feat reveal" key={p.title}>
                    <div className="feat__meta">
                      <p className="feat__kicker">Featured Project</p>
                      <h3 className="feat__title">{p.title}</h3>
                      <div className="feat__desc">{p.description}</div>
                      <div className="feat__stack">
                        {p.stack.map((s) => <span key={s}>{s}</span>)}
                      </div>
                      <div className="feat__links">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer"
                            aria-label="GitHub repository">
                            <IconGithub />
                          </a>
                        )}
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noreferrer"
                            aria-label="Live site">
                            <IconExternal />
                          </a>
                        )}
                      </div>
                    </div>
                    <FeaturedVisual emoji={emojis[p.title] || "✨"} />
                  </article>
                ))}
              </div>

              {/* Other noteworthy projects */}
              {otherProjects.length > 0 && (
                <div className="other">
                  <h3 className="other__heading">Other Noteworthy Projects</h3>
                  <p className="other__sub">
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      view the archive on GitHub →
                    </a>
                  </p>

                  <div className="other__grid">
                    {otherProjects.map((p, i) => (
                      <article className={`other-card reveal d${(i % 4) + 1}`}
                        key={p.title}>
                        <div className="other-card__top">
                          <IconFolder />
                          <div className="other-card__links">
                            {p.github && (
                              <a href={p.github} target="_blank" rel="noreferrer"
                                aria-label="GitHub">
                                <IconGithub />
                              </a>
                            )}
                            {p.link && (
                              <a href={p.link} target="_blank" rel="noreferrer"
                                aria-label="Live site">
                                <IconExternal />
                              </a>
                            )}
                          </div>
                        </div>

                        <h4 className="other-card__title">{p.title}</h4>
                        <p className="other-card__desc">{p.tagline}</p>

                        <div className="other-card__stack">
                          {p.stack.slice(0, 4).map((s) => <span key={s}>{s}</span>)}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* ── Contact ── */}
            <section id="contact" className="section contact">
              <p className="contact__kicker reveal">04. What&apos;s Next?</p>
              <h2 className="reveal d1">Get In Touch</h2>
              <p className="reveal d2">
                I&apos;m graduating May 2026 and looking for full-time roles on teams
                building serious AI systems — agentic infrastructure, retrieval,
                evaluation, or real-time AI products. If you&apos;re working on
                something ambitious, I&apos;d love to hear about it.
              </p>
              <div className="reveal d3" style={{
                display: "flex", gap: 16, justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <a className="btn--outline" href={`mailto:${profile.email}`}>
                  Say Hello
                </a>
                <button className="btn--outline" onClick={onCopy}>
                  Copy Email
                </button>
              </div>
            </section>

            <footer className="footer">
              <p>
                Designed &amp; built by{" "}
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.name}
                </a>
                {" · "}
                Built with Next.js
              </p>
            </footer>
          </main>
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
