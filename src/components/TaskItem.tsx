import React from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-2">
        {/* Checkbox with accessible label */}
        <input
          id={`checkbox-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 accent-blue-600 cursor-pointer"
          aria-label={`Mark task "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
        />

        {/* Task title */}
        <label
          htmlFor={`checkbox-${task.id}`}
          className={`cursor-pointer text-gray-800 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </label>
      </div>

      {/* Delete button with title for screen readers */}
      <button
        onClick={() => onDelete(task.id)}
        title={`Delete task "${task.title}"`}
        aria-label={`Delete task "${task.title}"`}
        className="text-red-500 hover:text-red-700 font-medium transition"
      >
        ✕
      </button>
    </li>
  );
}
