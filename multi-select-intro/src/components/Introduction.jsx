import React, { useState } from "react";
import { Button } from "./Button";
import { BotIcon } from "./BotIcon";
import { SelectableCard } from "./SelectableCard";
import { taskOptions } from "../lib/tasks";
import { ArrowRight } from "lucide-react";

export default function Introduction({ onSubmit }) {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTaskToggle = (taskId) => {
    setSelectedTasks(current =>
      current.includes(taskId)
        ? current.filter(id => id !== taskId)
        : [...current, taskId]
    );
  };

  const handleSubmit = () => {
    const selectedDescriptions = taskOptions
      .filter(task => selectedTasks.includes(task.id))
      .map(task => task.description);
    setShowConfirmation(true);
    onSubmit(selectedDescriptions);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8 dark:bg-gray-950">
      <div className="flex flex-col items-center justify-center h-32 relative">
        <div className={`absolute w-full text-center transition-all duration-500 ease-in-out ${
          showConfirmation 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}>
          <p className="text-2xl font-medium text-emerald-500">
            You are all set to go, let's start chatting
          </p>
        </div>
        
        <div className={`absolute w-full transition-all duration-500 ease-in-out ${
          showConfirmation 
            ? 'opacity-0 transform -translate-y-10' 
            : 'opacity-100 transform translate-y-0'
        }`}>
          <div className="relative mb-3">
            <div className="relative flex h-full items-center justify-center rounded-full  text-foreground">
              <BotIcon h={24} w={24} className="text-emerald-500" />
            </div>
          </div>
          <h2 className="text-2xl font-medium mb-8 text-center">How can I help you today?</h2>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        showConfirmation 
          ? 'opacity-0 transform translate-y-10 pointer-events-none hidden' 
          : 'opacity-100 transform translate-y-0'
      }`}>
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

        <div className="flex flex-col items-center mt-6 space-y-4">
          <Button
            onClick={handleSubmit}
            disabled={selectedTasks.length === 0}
            className={`px-8 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 ${
              selectedTasks.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Let's Go <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
