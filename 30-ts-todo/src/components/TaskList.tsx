import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTask] = useState<string[]>([]);
  //const [task, setTask] = useState<Array<string>>([])

  const deleteTask = (index: number) => {
    setTask((prev) => prev.filter((t, ind) => ind !== index));
  };

  const updateTask = (index: number, content: string) => {
    setTask((prev) => {
      const tasks = [...prev];
      tasks[index] = content;
      return tasks;
    });
  };

  const addTask = (content:string) => {
    setTask(prev =>[...prev,content])
  };

  return (
    <div className="field">
      <button onClick={() => addTask("New Task")} className="btn new">
        Add Task
      </button>
      {tasks.map((item, index) => (
        <Task
          key={index}
          task={item}
          pos={index}
          remove={deleteTask}
          edit={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
