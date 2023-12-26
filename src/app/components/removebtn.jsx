"use client"

import { HiOutlineTrash } from "react-icons/hi";

async function handleRemoveHandler(id){
    console.log("you clicked to reamove this data Which have id of " + id)

    const req = await fetch("http://localhost:3000/api/todos",{
        method : "DELETE",
        body : JSON.stringify({ id })
    })
}

function Removebtn({ id }) {
  return (
    <button className="text-red-400" onClick={() => handleRemoveHandler(id)}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default Removebtn;
