import { NextResponse } from "next/server";

let todos = [
  {
    id: 1000,
    title: "React Js",
    desc: "React is the best Frontend framwork over here!",
  },
  {
    id: 2500,
    title: "Javascript",
    desc: "Javascript is the best language to learn in 2024!",
  },
];
export function GET(req) {
  return NextResponse.json(todos);
}

export async function POST(req) {
  const todo = await req.json();
  todos.push(todo);
  return NextResponse.json(
    { result: "Todo Added !", success: true },
    { status: 201 }
  );
}

export async function DELETE(req) {
  const { id } = await req.json();
  const updatedTodos = todos.filter(todo => todo.id !== id)
  todos = updatedTodos
  console.log(todos)
  return NextResponse.json({ result: "Deleted Todo!" });
}
