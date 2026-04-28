interface IconProps {
  className?: string;
}

function SportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M10 32c8 6 36 6 44 0M32 10c6 6 6 38 0 44M32 10c-6 6-6 38 0 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default SportIcon;
