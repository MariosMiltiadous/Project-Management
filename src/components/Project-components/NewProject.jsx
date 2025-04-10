import { useRef } from "react";
import Input from "../Input";
import Modal from "../Modal";

export default function NewProject({ onAddProject, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show error modal
      modalRef.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} >
        <h2 className="text-xl font-bold text-stone-70 my-4">Invalid input - please try again</h2>
        <p className="text-stone-600 mb-4">Oops looks like you forgot to fill in all the fields!</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label={"Title"} />
          <Input ref={descriptionRef} label={"Description"} textarea />
          <Input type="date" ref={dueDateRef} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
