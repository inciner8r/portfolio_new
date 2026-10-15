import Button from "./Button";
import { profile, socials } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="ink">
      <div className="wrap section">
        <h2 className="h2" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
          Let&apos;s build something
        </h2>
        <p className="lede muted mt-6 mb-9">
          Always happy to talk about interesting problems, systems and ideas. Email is the fastest way to reach me.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`}>Email me</Button>
          <Button href="https://www.linkedin.com/in/punarvpawade/" variant="ghost" external>
            LinkedIn
          </Button>
        </div>
      </div>

      <footer className="border-t" style={{ borderColor: "var(--line)" }}>
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6 text-sm">
          <p className="m-0 muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <ul className="flex gap-6 list-none m-0 p-0">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="tlink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  );
}
