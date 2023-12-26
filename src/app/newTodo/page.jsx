import Link from "next/link";
import { redirect } from "next/navigation";

async function handleSubmit(data) {
  "use server";

  const title = data.get("title")?.valueOf();
  const desc = data.get("desc")?.valueOf();
  const todo = {
    id: Math.floor(Math.random() * 9000),
    title,
    desc
  };

  if (title) {
    const response = fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo }),
    });
    redirect("/")
  }
}

function page() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-3xl">NEW TODO</h1>
        <button className="border p-2 rounded hover:bg-slate-800">
          <Link href="/">Home</Link>
        </button>
      </div>
      <div className="mt-2 border-t-2">
        <div className="max-w-5xl mx-auto p-4">
          <form
            className="max-w-80 mx-auto flex flex-col gap-3"
            action={handleSubmit}
          >
            <input
              name="title"
              placeholder="Enter Todo"
              className="bg-slate-500 px-2 py-1 rounded text-slate-100"
            />
            <textarea
              name="desc"
              rows={8}
              placeholder="Description about Topic"
              className="bg-slate-500 px-2 py-1 rounded text-slate-100"
            />
            <button
              type="submit"
              className="border rounded px-2 py-1 hover:bg-slate-800 hover:text-slate-50"
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
