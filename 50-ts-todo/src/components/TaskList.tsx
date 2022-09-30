import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const deleteTask = (index: number) => {
        setTasks(prev => prev.filter((t, i) => i !== index));
    }

    const updateTask = (index: number, content: string) => {
        setTasks(prev => {
            const tasks = [...prev];
            tasks[index] = content;
            return tasks;
        })
    }

    const addTask = (content: string) => {
        setTasks(prev => [...prev, content])
    }

    return (
        <div className="field">
            <button onClick={() => addTask("New Task")} className="btn new">Add Task</button>
            {tasks.map((item, index) => <Task
                key={index}
                task={item}
                pos={index}
                remove={deleteTask}
                edit={updateTask}
            />)}
        </div>
    )

}

export default TaskList;