import { HiPencilAlt } from "react-icons/hi";
import Removebtn from "./removebtn";

function Todo({ todo }) {
  return (
    <li key={todo.id} className="border p-2">
      <div className="pb-2 border-b-2 border-slate-500 flex justify-between">
        <h1 className="text-2xl">{todo.title}</h1>
        <div className="flex align-top gap-3">
          <Removebtn id={todo.id}/>
          <button>
            <HiPencilAlt size={24} />
          </button>
        </div>
      </div>
      <p className="pt-2">{todo.desc}</p>
    </li>
  );
}

export default Todo;
