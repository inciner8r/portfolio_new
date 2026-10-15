import Image from "next/image";
import Button from "./Button";
import HeroBackdrop from "./HeroBackdrop";
import { profile } from "../data";

export default function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section id="top" className="hero">
      <HeroBackdrop />

      <div className="wrap relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center pt-14 sm:pt-20 pb-20 sm:pb-24">
        <div>
          <h1 className="display hero-name" style={{ fontSize: "clamp(3.75rem, 9vw, 7.5rem)" }}>
            <span>{first}</span>
            <span>{last}</span>
          </h1>

          <div
            className="hero-mark mt-6 mb-8"
            style={{ height: 5, width: 140, background: "var(--red)" }}
            aria-hidden
          />

          <div className="hero-rest">
            <p
              className="m-0 font-semibold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", maxWidth: "22ch" }}
            >
              {profile.tagline}
            </p>
            <p className="lede muted mt-4 mb-0" style={{ maxWidth: "44ch" }}>{profile.intro}</p>
            <ul className="flex flex-wrap gap-2 list-none p-0 mt-6 mb-9 max-w-[560px]">
              {profile.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button href="#experience">See my work</Button>
              <Button href={`mailto:${profile.email}`} variant="ghost">
                Email me
              </Button>
            </div>
          </div>
        </div>

        <figure className="hero-rest portrait m-0">
          <div className="portrait__frame">
            <Image src={profile.photo} alt={profile.name} width={736} height={736} priority sizes="(min-width: 1024px) 340px, 70vw" />
          </div>
          <figcaption className="mt-5 pl-4 border-l-2" style={{ borderColor: "var(--fg)" }}>
            <span className="block font-semibold">
              {profile.current.title}, {profile.current.company}
            </span>
            <span className="block muted text-[0.95rem]">
              Since {profile.current.since}. {profile.location}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
