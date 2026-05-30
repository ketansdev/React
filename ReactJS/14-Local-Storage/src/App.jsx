const App = () => {
  localStorage.setItem("name", "Ketan");
  localStorage.setItem("age", 26);

  const name = localStorage.getItem("name");
  console.log(name);
  const age = localStorage.getItem("age");
  console.log(age);


  localStorage.setItem("user", JSON.stringify({name: "Ketan", age : 26, city : "Mumbai"}))

  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  console.log(typeof user);


  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}

export default App
