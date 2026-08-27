"use client";

import { usePathname } from "next/navigation";
import { profile } from "./content";

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm10.5 8.55L2.1 6.3v11.4h19.8V6.3L12 13.05zM3.15 6l8.85 6 8.85-6H3.15z" />
    </svg>
  );
}

const pages = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <a className="site-name" href="/">
        {profile.name}
      </a>
      <nav aria-label="Site">
        {pages.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className={pathname === p.href ? "nav-link nav-link--active" : "nav-link"}
          >
            {p.label}
          </a>
        ))}
        <a className="nav-link" href={profile.resume} target="_blank" rel="noreferrer">
          Résumé
        </a>
        <span aria-hidden="true" className="nav-sep">
          |
        </span>
        <a className="nav-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <IconGithub />
        </a>
        <a className="nav-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <IconLinkedin />
        </a>
        <a className="nav-icon" href={`mailto:${profile.email}`} aria-label="Email">
          <IconMail />
        </a>
      </nav>
    </header>
  );
}
