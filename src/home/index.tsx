import { useState } from "react";
import { Counter } from "../components/counter"
import { Header } from "../components/header";
import { v4 as uuid } from 'uuid';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}


export function Home() {

  const [tasks, setTasks] = useState<ITask[]>([])

  function NewTask(taskTitle: string) {
    setTasks([
      ...tasks, {
        id: uuid(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTask(taskId: string) {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask)
  }

  function toggleTaskCompleted(taskId: string) {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTask)
  }

  return (

    <>
      <Header onAddTask={NewTask} />
      <Counter
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleTaskCompleted}
      />
    </>
  )
}


