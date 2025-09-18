import React, { useState } from "react";

/**
 * KeysExample
 * Goal: render a list of tasks with a Shuffle button.
 * Correct behavior (what the test expects):
 *  - Use a STABLE unique key (id) for each list item.
 *  - Typing into an input and then shuffling should keep the typed value
 *    attached to the same logical item (inputs are uncontrolled via defaultValue).
 */
export default function KeysExample() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Write Code" },
    { id: 3, text: "Test App" },
  ]);

  const shuffle = () => setTasks([...tasks].reverse());

  return (
    <div>
      <button onClick={shuffle}>Shuffle Tasks</button>
      <ul aria-label="task-list">
        {tasks.map((task, index) => (
          <li key={index} data-testid="row">
            <span aria-label="task-label">{task.text}</span>{" "}
            <input aria-label={`input-${task.id}`} defaultValue={task.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
