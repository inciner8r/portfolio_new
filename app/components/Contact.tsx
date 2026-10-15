import Button from "./Button";
import { profile, socials } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="ink on-ink">
      <div className="wrap section">
        <h2 className="display" style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}>
          Let&apos;s build
          <br />
          something
        </h2>
        <p className="lede mt-8 mb-10" style={{ color: "#b9bcbf" }}>
          I&apos;m open to full-stack and AI engineering roles. The fastest way to reach me is email.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`}>Email me</Button>
          <Button href="https://www.linkedin.com/in/punarvpawade/" variant="ghost" external>
            LinkedIn
          </Button>
        </div>
      </div>

      <footer className="border-t" style={{ borderColor: "var(--line-dark)" }}>
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6 text-sm">
          <p className="m-0" style={{ color: "var(--steel)" }}>
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
