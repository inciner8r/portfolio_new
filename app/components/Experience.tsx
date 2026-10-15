import { caseStudies, experience } from "../data";

function Dash() {
  return (
    <span aria-hidden className="absolute left-0 top-[0.75em] w-2 h-[2px]" style={{ background: "var(--red)" }} />
  );
}

function CaseStudies() {
  return (
    <div className="mt-8">
      <h4 className="text-sm font-semibold muted m-0 mb-3">Key projects</h4>
      {caseStudies.map((c) => (
        <details key={c.name} className="case">
          <summary className="case__summary">
            <span className="flex-1">
              <span className="case__name">{c.name}</span>
              <span className="block muted mt-1">{c.pitch}</span>
            </span>
            <span className="case__toggle" aria-hidden />
          </summary>

          <div className="pb-8 pt-1">
            <p className="muted m-0">{c.problem}</p>
            <ul className="mt-4 mb-0 pl-0 list-none space-y-2">
              {c.built.map((b) => (
                <li key={b} className="relative pl-5">
                  <Dash />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-5 mb-0 pl-4 border-l-2" style={{ borderColor: "var(--red)" }}>
              <strong className="font-semibold">The hard part: </strong>
              <span className="muted">{c.detail}</span>
            </p>
            <ul className="flex flex-wrap gap-2 list-none p-0 mt-5 mb-0">
              {c.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section ink">
      <div className="wrap">
        <h2 className="h2 mb-12">Experience</h2>

        <ol className="list-none p-0 m-0">
          {experience.map((job, i) => (
            <li
              key={job.company}
              className="grid gap-4 md:grid-cols-[200px_1fr] py-10 border-t"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="m-0 text-sm muted">{job.period}</p>
              <div className="max-w-[70ch]">
                <h3 className="h3">{job.company}</h3>
                <p className="m-0 mt-1 font-semibold" style={{ color: "var(--red)" }}>
                  {job.title}
                </p>
                <p className="mt-4 mb-0 muted">{job.summary}</p>

                {i === 0 && <CaseStudies />}

                {i === 0 && <h4 className="text-sm font-semibold muted m-0 mt-8 mb-3">Also</h4>}
                <ul className={`${i === 0 ? "" : "mt-5"} mb-0 pl-0 list-none space-y-2`}>
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5">
                      <Dash />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
