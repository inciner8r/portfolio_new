// Angular cat head with red shades. Head uses currentColor so it follows the theme.
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden focusable="false">
      <path d="M4 28V11L7.5 3L13 9.5H19L24.5 3L28 11V28Z" fill="currentColor" />
      <path
        d="M6 14H15V16.5L13.5 19H8L6 16.5ZM17 14H26V16.5L24 19H18.5L17 16.5ZM15 14.5H17V15.5H15Z"
        fill="var(--red)"
      />
      <path d="M14.5 23H17.5L16 24.5Z" fill="var(--bg)" />
    </svg>
  );
}
