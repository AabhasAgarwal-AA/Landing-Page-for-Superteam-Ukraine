import { forwardRef } from "react";

const WheatIcon = forwardRef<SVGSVGElement, { className?: string; size?: number }>(({ className = "", size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 58V20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32 20C32 20 24 14 24 8C24 8 32 10 32 20Z"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M32 20C32 20 40 14 40 8C40 8 32 10 32 20Z"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M32 28C32 28 22 22 22 16C22 16 32 18 32 28Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M32 28C32 28 42 22 42 16C42 16 32 18 32 28Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M32 36C32 36 20 30 20 24C20 24 32 26 32 36Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M32 36C32 36 44 30 44 24C44 24 32 26 32 36Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M32 44C32 44 18 38 18 32C18 32 32 34 32 44Z"
      fill="currentColor"
      opacity="0.5"
    />
    <path
      d="M32 44C32 44 46 38 46 32C46 32 32 34 32 44Z"
      fill="currentColor"
      opacity="0.5"
    />
    {/* Small grain dots */}
    <circle cx="24" cy="7" r="1.5" fill="currentColor" opacity="0.9" />
    <circle cx="40" cy="7" r="1.5" fill="currentColor" opacity="0.9" />
    <circle cx="22" cy="15" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="42" cy="15" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="20" cy="23" r="1.5" fill="currentColor" opacity="0.7" />
    <circle cx="44" cy="23" r="1.5" fill="currentColor" opacity="0.7" />
  </svg>
));

WheatIcon.displayName = "WheatIcon";

export default WheatIcon;
