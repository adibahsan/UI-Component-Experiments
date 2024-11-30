import { Check } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface SelectableCardProps {
  id: string
  title: string
  subtitle: string
  isSelected: boolean
  onClick: () => void
}

export function SelectableCard({
  id,
  title,
  subtitle,
  isSelected,
  onClick,
}: SelectableCardProps) {
  return (
    <Card
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={`relative cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md dark:hover:border-emerald-500/30 hover:border-emerald-500/50 ${
        isSelected 
          ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/10 dark:border-emerald-500" 
          : "dark:hover:bg-emerald-950/5 hover:bg-emerald-50/30"
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 pointer-events-none">
          <div className="flex-1">
            <h3 className="text-base font-medium leading-none dark:text-white">{title}</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1.5">{subtitle}</p>
          </div>
          <div
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
              isSelected
                ? "border-emerald-500 bg-emerald-500 text-white opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            {isSelected && <Check className="h-4 w-4" />}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

