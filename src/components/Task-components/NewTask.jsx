import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('')

  function hadnleChange(event) {
    setEnteredTask(event.target.value);
  }

  function hadnleClick() {
    if(enteredTask.trim() === ''){
      return;
    }
    onAdd(enteredTask)
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={hadnleChange}
        value={enteredTask}
      />

      <button className="text-stone-700 hover:text-slate-950" onClick={hadnleClick}>
        Add Tasks
      </button>
    </div>
  );
}
