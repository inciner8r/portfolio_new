import Button from "./Button";
import { profile } from "../data";

export default function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section id="top" className="wrap pt-14 sm:pt-20 pb-20 sm:pb-28">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end">
        <h1 className="display hero-name" style={{ fontSize: "clamp(5.5rem, 21vw, 17.5rem)" }}>
          <span>{first}</span>
          <span>{last}</span>
        </h1>

        <dl className="hero-rest m-0 border-l-2 pl-6 lg:mb-4 lg:justify-self-end" style={{ borderColor: "var(--ink)" }}>
          <dt className="muted text-sm">Currently</dt>
          <dd className="m-0 mt-1 text-xl font-semibold">
            {profile.current.title}, {profile.current.company}
          </dd>
          <dd className="m-0 muted">Since {profile.current.since}</dd>
          <dd className="m-0 mt-3 max-w-[30ch]">{profile.current.blurb}</dd>
          <dt className="muted text-sm mt-6">Based in</dt>
          <dd className="m-0 mt-1">{profile.location}</dd>
        </dl>
      </div>

      <div
        className="hero-mark mt-8 mb-12"
        style={{ height: 6, width: "min(220px, 40%)", background: "var(--red)" }}
        aria-hidden
      />

      <div className="hero-rest grid gap-8 md:grid-cols-2 md:gap-16">
        <p
          className="m-0 font-semibold leading-[0.95]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)", maxWidth: "16ch" }}
        >
          {profile.tagline}
        </p>
        <div>
          <p className="lede muted mt-0 mb-9">{profile.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#work">See my work</Button>
            <Button href={`mailto:${profile.email}`} variant="ghost">
              Email me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
