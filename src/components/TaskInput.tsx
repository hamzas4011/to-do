import React, { useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

export default function TaskInput({ onAddTask }: Props) {
  const [text, setText] = useState("");

  function handleAdd() {
    const title = text.trim();
    if (!title) return;
    onAddTask(title);
    setText("");
  }

  return (
    <div className="flex items-center gap-2 w-full mt-4">
      <input
        type="text"
        placeholder="Enter your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <button
        onClick={handleAdd}
        disabled={!text.trim()}
        className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
      >
        Add Task
      </button>
    </div>
  );
}
