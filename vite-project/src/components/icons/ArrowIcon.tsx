interface IconProps {
  className?: string;
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 8 13" className={className} aria-hidden="true">
      <path
        d="M7.467 1.144L6.334 0 0 6.4l6.334 6.4 1.133-1.144L2.265 6.4 7.467 1.144z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ArrowIcon;
