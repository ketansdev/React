const App = () => {
  const boxes = Array(20).fill("box");
  return (
    <div>
      <h1 className="text-9xl font-bold underline bg-amber-200">Namaste React</h1>
      <h2 className="bg-green-500 text-white p-8">I am learning React</h2>
      <p className="bg-red-500 text-white p-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio perspiciatis cum voluptates voluptatum vitae asperiores expedita fugiat, fugit necessitatibus, at nesciunt dolorem nulla eum debitis quae veritatis facere ad?</p>
      <button className="bg-gray-200 px-8 py-2 rounded">Click Me</button>
      <div className="card w-60 bg-amber-500 h-40 flex justify-center items-center text-center">This is a card</div>
      <div className="parent flex flex-wrap justify-center items-center">
        {
          boxes.map((box, idx)=>(
            <div key={idx} className="w-60 bg-blue-300 text-center h-50 m-2 flex justify-center items-center">{box}</div>
          ))
        }
      </div>
    </div>
  )
}

export default App
