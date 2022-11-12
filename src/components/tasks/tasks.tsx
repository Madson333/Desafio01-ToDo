import { CheckCircle, Circle, Trash } from "phosphor-react";
import { ITask } from "../../home";

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}


export function Task({ task, onDelete, onComplete }: TaskProps) {



  return (



    <div className="w-full bg-gray-500 border border-solid border-gray-400 p-4 rounded-lg flex items-center justify-between gap-3">

      <button onClick={() => onComplete(task.id)} >

        {
          task.isCompleted === false ?
            <Circle className="text-blue" size={24} /> :
            <div className="  ">
              <CheckCircle className="text-purple" weight="fill" size={24} />
            </div>
        }

      </button>


      <div className="text-xs font-[0.075rem] text-gray-100 mr-auto">
        {task.isCompleted ?
          <p className="text-gray-300 line-through" >{task.title}</p> :
          <p>{task.title}</p>
        }
      </div>


      <button className="bg-none rounded-none text-gray-300" onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>

    </div >

  )
}