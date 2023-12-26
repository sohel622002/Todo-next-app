import Link from "next/link";
import Todo from "./components/todo";

export default async function Home() {
  const request = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  const todos = await request.json();

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-3xl">TODO</h1>
        <button className="border p-2 rounded">
          <Link href="/newTodo">New</Link>
        </button>
      </div>
      <div className="mt-2 border-t-2">
        <div className="max-w-5xl mx-auto p-4">
          <ul className="text-lg flex flex-col gap-2">
            {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
