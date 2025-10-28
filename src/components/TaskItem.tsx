import React from "react";
import type { Task } from "../types/task";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          id={`checkbox-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 accent-blue-600 cursor-pointer"
          aria-label={`Mark task "${task.title}" as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />

        <label
          htmlFor={`checkbox-${task.id}`}
          className={`cursor-pointer text-gray-800 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </label>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        title={`Delete task "${task.title}"`}
        aria-label={`Delete task "${task.title}"`}
        className="text-red-500 hover:text-red-700 font-medium transition text-lg"
      >
        ✕
      </button>
    </li>
  );
}
