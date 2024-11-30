interface BotSvgProps {
  h?: number
  w?: number
  className?: string
}

export default function BotSvgComponent({ h = 30, w = 30, className = "" }: BotSvgProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Head */}
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
      {/* Eyes */}
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      {/* Antenna */}
      <line x1="12" y1="4" x2="12" y2="2" />
      <circle cx="12" cy="2" r="0.5" fill="currentColor" />
      {/* Body */}
      <path d="M8 16v2a2 2 0 0 0 8 0v-2" />
      {/* Smile */}
      <path d="M9 13c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1" />
    </svg>
  )
}

