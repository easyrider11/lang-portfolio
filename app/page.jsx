import { profile, intro, beliefs } from "./content";

export default function Home() {
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
    </>
  );
}
