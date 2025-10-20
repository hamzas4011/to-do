import React, { useState } from 'react';

export default function TaskInput() {
    const [text, setText] = useState('');

    function handleAdd() {
        console.log('Task added: ', text);
        setText('');
    }

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Enter your task here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAdd}>Add task</button>
        </div>
    );
}