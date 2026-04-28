interface IconProps {
  className?: string;
}

function CrownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3 8l4 4 5-7 5 7 4-4v9H3V8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default CrownIcon;
