import { range } from "../data";

export default function Range() {
  return (
    <section id="range" className="section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="h2">Range</h2>
          <p className="muted max-w-[44ch] m-0">
            I go where the problem is. These are the areas I&apos;ve shipped in, and what I&apos;m digging into next.
          </p>
        </div>

        <div className="range-head hidden md:grid" aria-hidden>
          <span />
          <span>Shipped</span>
          <span>Exploring</span>
        </div>
        <ul className="list-none p-0 m-0">
          {range.map((r) => (
            <li key={r.area} className="range-row">
              <h3 className="h3 m-0">{r.area}</h3>
              <div>
                <span className="range-label">Shipped</span>
                <p className="m-0">{r.shipped}</p>
                <p className="m-0 mt-2 text-[0.9rem] muted">{r.tools}</p>
              </div>
              <div>
                {r.exploring && (
                  <>
                    <span className="range-label">Exploring</span>
                    <p className="m-0 range-exploring">{r.exploring}</p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
