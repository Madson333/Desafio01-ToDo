import { ClipboardText } from "phosphor-react";
import { ITask } from "../home";
import { Task } from "./tasks/tasks";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Counter({ tasks, onDelete, onComplete }: Props) {
  const taskQuantity = tasks.length;
  const taskCompleted = tasks.filter(task => task.isCompleted).length
  return (


    <section className="w-full max-w-2xl mx-auto my-0 mt-[5.625rem] py-0 px-4 ">

      <header className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <p className="text-blue text-sm font-bold">
            Tarefas criadas
          </p>
          <span className="bg-gray-400 text-gray-200 px-[9px] py-[3px] rounded-[999px]
          font-bold text-xs">
            {taskQuantity}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-purple-dark text-sm font-bold">
            Concluídas
          </p>
          <span className="bg-gray-400 text-gray-200 px-[9px] py-[3px] rounded-[999px]
          font-bold text-xs">
            {taskQuantity !== 0 ? <span>{taskCompleted} de {taskQuantity}</span> : 0}
          </span>
        </div>

      </header>

      <div
        className="flex flex-col gap-3 mb-4"
      >
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className="mt-16 flex items-center justify-center flex-col gap-4 text-gray-300 text-center">
            <ClipboardText className="opacity-30" size={52} color="#808080" />
            <div>
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <span>
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          </section>
        )}

      </div>
    </section>

  )
}