'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BotIcon } from "@/components/ui/bot-icon"
import { SelectableCard } from "@/components/ui/selectable-card"
import { taskOptions, type TaskOption } from "@/lib/tasks"

interface IntroductionProps {
  onSubmit: (descriptions: string[]) => void
}

export default function Introduction({ onSubmit }: IntroductionProps) {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])

  const handleTaskToggle = (taskId: string) => {
    setSelectedTasks(current =>
      current.includes(taskId)
        ? current.filter(id => id !== taskId)
        : [...current, taskId]
    )
  }

  const handleSubmit = () => {
    const selectedDescriptions = taskOptions
      .filter(task => selectedTasks.includes(task.id))
      .map(task => task.description)
    onSubmit(selectedDescriptions)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8 dark:bg-gray-950">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-3">
          <div className="relative flex h-full items-center justify-center rounded-full bg-white dark:bg-gray-900 text-foreground border-2 border-emerald-500 shadow-sm">
            <BotIcon h={24} w={24} className="text-emerald-500" />
          </div>
        </div>
        <h2 className="text-2xl font-medium mb-8">How can I help you today?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {taskOptions.map((task) => (
          <SelectableCard
            key={task.id}
            id={task.id}
            title={task.title}
            subtitle={task.subtitle}
            isSelected={selectedTasks.includes(task.id)}
            onClick={() => handleTaskToggle(task.id)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={selectedTasks.length === 0}
          className="px-8 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700"
        >
          Let's Go
        </Button>
      </div>
    </div>
  )
}

