import { caseStudies } from "../data";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="h2">Selected work</h2>
          <p className="muted max-w-[38ch] m-0">
            Production systems I designed and shipped. Each one is written up as the problem, what I built and the
            part that was hard.
          </p>
        </div>

        <div>
          {caseStudies.map((c) => (
            <article key={c.name} className="case grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="chip"
                    style={
                      c.status === "Live"
                        ? { background: "var(--ink)", color: "var(--bone)", borderColor: "var(--ink)" }
                        : undefined
                    }
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="h3">{c.name}</h3>
                <p className="text-lg mt-4 mb-0 max-w-[40ch]">{c.pitch}</p>
                <ul className="flex flex-wrap gap-2 list-none p-0 mt-6 mb-0">
                  {c.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-w-[62ch]">
                <p className="muted m-0">{c.problem}</p>
                <ul className="mt-5 mb-0 pl-0 list-none space-y-3">
                  {c.built.map((b) => (
                    <li key={b} className="relative pl-5">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.7em] w-2 h-[2px]"
                        style={{ background: "var(--red)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 mb-0 pl-5 border-l" style={{ borderColor: "var(--line)" }}>
                  <strong className="font-semibold">The hard part: </strong>
                  <span className="muted">{c.detail}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
