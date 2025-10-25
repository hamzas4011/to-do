import React from 'react';

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
    <li
      className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 accent-blue-600 cursor-pointer"
        />

        <span
          className={`text-gray-800 ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-medium transition"
      >
        ✕
      </button>
    </li>
  );
}
