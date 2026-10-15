import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="wrap flex items-center justify-between gap-6 py-3">
        <a href="#top" className="display text-2xl no-underline" aria-label="Punarv Pawade, back to top">
          PP<span style={{ color: "var(--red)" }}>.</span>
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="tlink text-[0.95rem]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button href="#contact" size="small" variant="ghost">
            Get in touch
          </Button>
        </div>
      </nav>
    </header>
  );
}
