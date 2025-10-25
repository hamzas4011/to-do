import React, { useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

export default function TaskInput({ onAddTask }: Props) {
  const [text, setText] = useState("");

  function handleAdd() {
    const title = text.trim();
    if (!title) return;
    onAddTask(title); // ✅ send the new task to App.tsx
    setText("");
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <input
        type="text"
        placeholder="Enter your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
      >
        Add Task
      </button>
    </div>
  );
}
