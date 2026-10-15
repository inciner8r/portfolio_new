import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section ink on-ink">
      <div className="wrap">
        <h2 className="h2 mb-14">Experience</h2>

        <ol className="list-none p-0 m-0">
          {experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-4 md:grid-cols-[220px_1fr] py-10 border-t"
              style={{ borderColor: "var(--line-dark)" }}
            >
              <p className="m-0 text-sm" style={{ color: "var(--steel)" }}>
                {job.period}
              </p>
              <div className="max-w-[64ch]">
                <h3 className="h3">{job.company}</h3>
                <p className="m-0 mt-1 font-semibold" style={{ color: "var(--red)" }}>
                  {job.title}
                </p>
                <p className="mt-4 mb-0" style={{ color: "#b9bcbf" }}>
                  {job.summary}
                </p>
                <ul className="mt-5 mb-0 pl-0 list-none space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.7em] w-2 h-[2px]"
                        style={{ background: "var(--red)" }}
                      />
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
