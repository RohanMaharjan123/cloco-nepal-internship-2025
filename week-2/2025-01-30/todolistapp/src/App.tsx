import React, { useState } from 'react';
import styles from './TodoList.module.css'; // Import the CSS module
import { Task } from './interface/ButtonProps';
const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskContent, setTaskContent] = useState<string>("");
    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [editTaskContent, setEditTaskContent] = useState<string>("");

    // Add Task
    const addTask = () => {
        if (taskContent.trim() !== "") {
            const newTask: Task = { id: Date.now(), content: taskContent };
            setTasks([...tasks, newTask]);
            setTaskContent("");
        }
    };

    // Delete Task
    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Start Editing a Task
    const startEditing = (task: Task) => {
        setEditTaskId(task.id);
        setEditTaskContent(task.content);
    };

    // Save Edited Task
    const saveEdit = () => {
        setTasks(tasks.map(task =>
            task.id === editTaskId ? { ...task, content: editTaskContent } : task
        ));
        setEditTaskId(null);
        setEditTaskContent("");
    };

    return (
        <div className={styles.container}>
            <h2>To-Do List</h2>

            {/* Add Task Input */}
            <div className={styles.inputContainer}>
                <input 
                    type="text" 
                    className={styles.inputField}
                    value={taskContent} 
                    onChange={(e) => setTaskContent(e.target.value)} 
                    placeholder="Enter your task"
                />
                <button className={styles.addButton} onClick={addTask}>Add</button>
            </div>

            {/* Task List */}
            <ul className={styles.taskList}>
                {tasks.map(task => (
                    <li key={task.id} className={styles.taskItem}>
                        {editTaskId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    className={styles.inputField}
                                    value={editTaskContent}
                                    onChange={(e) => setEditTaskContent(e.target.value)}
                                />
                                <div className={styles.buttonGroup}>
                                    <button className={styles.saveButton} onClick={saveEdit}>Save</button>
                                    <button className={styles.cancelButton} onClick={() => setEditTaskId(null)}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className={styles.taskText}>{task.content}</span>
                                <div className={styles.buttonGroup}>
                                    <button className={styles.editButton} onClick={() => startEditing(task)}>Edit</button>
                                    <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;