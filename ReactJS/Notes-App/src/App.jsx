const App = () => {
  return (
    <div className="flex flex-col lg:flex-row p-10 gap-20">
      <form className="flex flex-col gap-5 text-white w-full lg:w-1/2">
      <h1 className="text-2xl font-bold">Add Your Notes</h1>
        <input type="text" placeholder="Enter Notes Heading ..." className="p-5 text-2xl border rounded "/>
        <textarea name="" id="" placeholder="Write Details ..." className="h-40 p-5 text-2xl border rounded"></textarea>
        <button className="bg-white text-black p-5 rounded cursor-pointer font-semibold">Add Note</button>
      </form>
      <div className="flex flex-col  gap-5 w-full lg:w-1/2">
        <h1 className="text-white text-2xl font-bold">Your Recent Notes</h1>
        <div className="flex flex-wrap gap-5">
          <div className="h-50 w-50 bg-white"></div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
