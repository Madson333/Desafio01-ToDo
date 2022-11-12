import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import logo from "../assets/logoToDo.svg";

interface HeaderProps {
  onAddTask: (taskTile: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {

  const [title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title)
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className="flex items-center justify-center bg-gray-700 h-48 relative">
      <img src={logo} />

      <form
        className="h-14 w-full max-w-2xl flex gap-2 py-0 px-4 absolute bottom-[-1.875rem]"
        name='seach'
        onSubmit={handleSubmit}
      >
        <input
          className="h-full flex-1 border border-gray-700 border-solid px-4 text-base bg-gray-500 rounded-lg text-gray-200 placeholder-gray-300"
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
          required
        />
        <button
          className="h-full py-0 px-4  border-none flex items-center bg-blue-Dark rounded-lg  text-gray-100 gap-1 font-bold text-xs">
          Criar
          <PlusCircle size={20} />
        </button>

      </form>
    </header>
  )
}