import { about, sideProjects } from "../data";

export default function About() {
  return (
    <section id="about" className="section pt-0">
      <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="h2 mb-8">About</h2>
          <div className="space-y-5 max-w-[60ch]">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="h3 mb-5 lg:mt-[5.1rem]">Side projects</h3>
          <ul className="list-none p-0 m-0">
            {sideProjects.map((p) => (
              <li key={p.name} className="py-5 border-t" style={{ borderColor: "var(--line)" }}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="text-lg font-semibold">{p.name}</span>
                  <span className="flex gap-5 text-[0.95rem]">
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
                </div>
                <p className="m-0 mt-1">{p.note}</p>
                <p className="m-0 mt-1 text-[0.9rem] muted">{p.stack}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
