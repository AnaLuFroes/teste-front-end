interface IconProps {
  className?: string;
}

function HealthIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 56s-22-12-22-30a12 12 0 0122-7 12 12 0 0122 7c0 18-22 30-22 30z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default HealthIcon;
