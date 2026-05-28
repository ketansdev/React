const App = () => {
  const handleForm = (e) => {
    console.log("Form Submitted");
    e.preventDefault();
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
          className="p-5 text-2xl border rounded "
        />
        <textarea
          name=""
          id=""
          placeholder="Write Details ..."
          className="h-40 p-5 text-2xl border rounded"
        ></textarea>
        <button className="bg-[#1E1F1E] text-white p-5 rounded cursor-pointer font-semibold">
          Add Note
        </button>
      </form>
      <div className="flex flex-col gap-5 w-full lg:w-1/2 lg:border-l-2 border-amber-50 p-10 h-screen">
        <h1 className="text-white text-2xl font-bold">Your Recent Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-y-auto hide-scrollbar">
          <div className="h-50 w-50 bg-[#1E1F1E] rounded-xl cursor-pointer"></div>
          <div className="h-50 w-50 bg-[#1E1F1E] rounded-xl cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
