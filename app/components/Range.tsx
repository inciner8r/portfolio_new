import { learning, range } from "../data";

export default function Range() {
  return (
    <section id="range" className="section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="h2">Range</h2>
          <p className="muted max-w-[44ch] m-0">
            I go where the problem is. These are the areas I&apos;ve shipped real work in.
          </p>
        </div>

        <ul className="list-none p-0 m-0">
          {range.map((r) => (
            <li key={r.area} className="range-row">
              <h3 className="h3 m-0">{r.area}</h3>
              <div>
                <p className="m-0">{r.shipped}</p>
                <p className="m-0 mt-2 text-[0.9rem] muted">{r.tools}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="range-learning">
          <strong className="font-semibold">Currently learning: </strong>
          {learning}
        </p>
      </div>
    </section>
  );
}
