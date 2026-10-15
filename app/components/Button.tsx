type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  size?: "default" | "small";
  external?: boolean;
};

export default function Button({ href, children, variant = "solid", size = "default", external }: Props) {
  const cls = ["vbtn", variant === "ghost" && "vbtn--ghost", size === "small" && "vbtn--small"]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="vbtn__inner">
        <span className="vbtn__label">{children}</span>
      </span>
    </a>
  );
}
