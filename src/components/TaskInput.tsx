import React, { useState } from 'react';
import './App.css';

export default function TaskInput() {
    return (
        <div className="task-input">
            <input type="text" placeholder="Enter your task here..." />
            <button>Add Task</button>
        </div>
    )
}