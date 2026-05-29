import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const copyNotes = [...notes];
    copyNotes.push({ title, description });

    setNotes(copyNotes);
    setTitle("");
    setDescription("");
  };

  const deleteNote = (idx) => {
    const copyNotes = [...notes];
    copyNotes.splice(idx, 1);
    setNotes(copyNotes);
  };
  return (
    <div className="flex flex-col lg:flex-row  gap-20">
      <form
        className="flex flex-col gap-5 text-white w-full lg:w-1/2 p-10"
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <h1 className="text-2xl font-bold">Add Your Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading ..."
          className="p-5 text-xl border rounded "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Write Details ..."
          className="h-40 p-5 text-xl border rounded"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="bg-[#1E1F1E] text-white p-5 rounded cursor-pointer font-semibold active:bg-gray-900">
          Add Note
        </button>
      </form>
      <div className="flex flex-col gap-5 w-full lg:w-1/2 lg:border-l-2 border-amber-50 p-10 h-screen">
        <h1 className="text-white text-2xl font-bold">Your Recent Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-y-auto hide-scrollbar">
          {notes.map((note, idx) => (
            <div
              className="h-60 w-50 bg-[#1E1F1E] rounded-xl p-5 flex flex-col justify-between items-start"
              key={idx}
            >
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-gray-300">
                  {note.title}
                </h1>
                <p className="text-s tracking-tight text-gray-500">
                  {note.description}
                </p>
              </div>
              <button
                className="bg-[#8A8C8A] w-full rounded text-white text-xs p-1 font-semibold cursor-pointer"
                onClick={() => {
                  deleteNote(idx);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
