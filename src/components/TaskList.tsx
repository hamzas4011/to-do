import React from "react";
import TaskItem from "./TaskItem";
import type { Task } from "../types/task";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete }: Props) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No tasks yet. Add your first one above 👆
      </p>
    );
  }

  return (
    <ul className="w-full mt-6 space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
