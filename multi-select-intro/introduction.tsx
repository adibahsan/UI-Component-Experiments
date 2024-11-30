'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import BotSvgComponent from "./components/bot-svg-component"

interface TaskOption {
  id: string
  title: string
  subtitle: string
  description: string
}

const taskOptions: TaskOption[] = [
  {
    id: "surveillance",
    title: "Surveillance Program's objectives",
    subtitle: "knowing about the reasons behind surveillance",
    description: "What are the main objectives of the surveillance program?"
  },
  {
    id: "board",
    title: "Board of Directors' Responsibilities",
    subtitle: "to keep them in check",
    description: "What are the main responsibilities of the Board of Directors?"
  },
  {
    id: "risk",
    title: "Findings of the Internal Risk Management",
    subtitle: "to manage your risks better",
    description: "What are the Preliminary Findings of the Federal Reserve's Analysis of Internal Risk Management Reports?"
  },
  {
    id: "penalty",
    title: "Procedure of the Civil Money Penalty Assessment",
    subtitle: "to stay away from the punishments",
    description: "How the procedure of the Civil Money Penalty Assessment is conducted?"
  }
]

interface IntroductionProps {
  onSubmit: (descriptions: string[]) => void
}

export default function Introduction({ onSubmit }: IntroductionProps) {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])

  const handleSubmit = () => {
    const selectedDescriptions = taskOptions
      .filter(task => selectedTasks.includes(task.id))
      .map(task => task.description)
    onSubmit(selectedDescriptions)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-3">
          <div className="h-12 w-12">
            <div className="relative flex h-full items-center justify-center rounded-full bg-background text-foreground border-2 border-primary shadow-sm">
              <BotSvgComponent h={24} w={24} className="text-primary" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-medium mb-8">How can I help you today?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {taskOptions.map((task) => (
          <Card 
            key={task.id} 
            className={`relative transition-colors ${
              selectedTasks.includes(task.id) 
                ? "border-primary bg-primary/5" 
                : ""
            }`}
          >
            <CardContent className="p-6 cursor-pointer transition-all duration-200 hover:bg-primary/5">
              <div className="flex items-start space-x-4 select-none">
                <Checkbox
                  id={task.id}
                  checked={selectedTasks.includes(task.id)}
                  onCheckedChange={(checked) => {
                    setSelectedTasks(checked 
                      ? [...selectedTasks, task.id]
                      : selectedTasks.filter(id => id !== task.id)
                    )
                  }}
                />
                <div className="flex-1">
                  <label
                    htmlFor={task.id}
                    className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {task.title}
                  </label>
                  <p className="text-sm text-muted-foreground mt-1.5">
                    {task.subtitle}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={selectedTasks.length === 0}
          className="px-8"
        >
          Let's Go
        </Button>
      </div>
    </div>
  )
}

