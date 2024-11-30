import React, { useState } from "react";
import { Button } from "./Button";
import { BotIcon } from "./BotIcon";
import { SelectableCard } from "./SelectableCard";
import { taskOptions } from "../lib/tasks";

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

      <div className="flex flex-col items-center mt-6 space-y-4">
        <Button
          onClick={handleSubmit}
          disabled={selectedTasks.length === 0}
          className={`px-8 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 ${
            selectedTasks.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Let's Go
        </Button>
        {showConfirmation && (
          <p className="text-lg text-emerald-500 mt-4 animate-fade-in">
            You are all set to go, let's start chatting
          </p>
        )}
      </div>
    </div>
  );
}
