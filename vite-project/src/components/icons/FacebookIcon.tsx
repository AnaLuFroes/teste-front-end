interface IconProps {
  className?: string;
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M14 4h-2a4 4 0 00-4 4v3H5v4h3v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default FacebookIcon;
