import { about, skills, sideProjects } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="h2 mb-10">About</h2>
          <div className="space-y-5 max-w-[60ch]">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="h3 mb-6 lg:mt-[7.5rem]">Toolkit</h3>
          <dl className="m-0">
            {skills.map((s) => (
              <div
                key={s.group}
                className="grid grid-cols-[110px_1fr] gap-4 py-3 border-t"
                style={{ borderColor: "var(--line)" }}
              >
                <dt className="font-semibold">{s.group}</dt>
                <dd className="m-0 muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="wrap mt-24">
        <h3 className="h3 mb-6">Side projects</h3>
        <ul className="list-none p-0 m-0">
          {sideProjects.map((p) => (
            <li
              key={p.name}
              className="grid gap-3 md:grid-cols-[220px_1fr_auto] md:items-baseline py-5 border-t"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="text-xl font-semibold">{p.name}</span>
              <span className="max-w-[60ch]">
                {p.note} <span className="muted">{p.stack}</span>
              </span>
              <span className="flex gap-5">
                {p.href && (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="tlink">
                    Showcase
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="tlink">
                    Code
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
