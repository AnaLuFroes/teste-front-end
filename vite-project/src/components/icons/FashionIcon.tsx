interface IconProps {
  className?: string;
}

function FashionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M16 12l-4 12h40l-4-12M12 24v28a4 4 0 004 4h32a4 4 0 004-4V24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M22 24v-4a10 10 0 0120 0v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default FashionIcon;
