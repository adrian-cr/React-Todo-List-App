import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

function TodoApp() {
  /* STATE MANAGEMENT */
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || []
  });

  /* SIDE EFFECTS */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* TASK LIST OPERATIONS */
  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      status: 'ongoing',
    };
    setTasks([...tasks, newTask]);

  };

  const updateTask = (id, updatedTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: updatedTitle } : task
    ));
    setEditingTaskId(null);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: "completed" } : task
    ));
  }
  return (
    <div className="TodoApp">
      <header>
        <h1>TO-DO LIST</h1>
      </header>
      <main>
        {
          tasks.map(task =>
            editingTaskId ===task.id?
              <TaskInput
                key={task.id}
                title={task.title}
                onSave={(newTitle) => updateTask(task.id, newTitle)}
                onCancel={() => setEditingTaskId(null)}
              />
            :
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                main={false}
                onEdit={() => setEditingTaskId(task.id)}
                onDelete={() => deleteTask(task.id)}
                onComplete={() => completeTask(task.id)}
              />
          )
        }
        <TaskInput
          main={true}
          onSave={(title) => addTask(title)}
          onCancel={() => setEditingTaskId(null)}
          onClick={() => setEditingTaskId(null)}/>
      </main>
    </div>
  );
}

export default TodoApp;
