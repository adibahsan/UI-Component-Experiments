interface BotIconProps {
  h?: number
  w?: number
  className?: string
}

export function BotIcon({ h = 30, w = 30, className = "" }: BotIconProps) {
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
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <line x1="12" y1="4" x2="12" y2="2" />
      <circle cx="12" cy="2" r="0.5" fill="currentColor" />
      <path d="M8 16v2a2 2 0 0 0 8 0v-2" />
      <path d="M9 13c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1" />
    </svg>
  )
}

