import React, { useState } from 'react';

export default function TaskInput() {
    const [task, setText] = useState('');
    return (
        <div className="task-input">
            <input type="text" placeholder="Enter your task here..." />
            <button>Add Task</button>
        </div>
    )
}