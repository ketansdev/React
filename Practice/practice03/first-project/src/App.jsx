function Greet(){
  return <h1>I am learning React</h1>
}

function Card(){
  return(
    <>
      <h2>This is Card Heading</h2>
      <p>This is Card Description</p>
    </>
  )
}


function App(){
  return(
    <>
      <Greet/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App;