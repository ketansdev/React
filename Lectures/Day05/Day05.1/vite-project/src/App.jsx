import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [users, setUsers] = useState([]);
  // let [val, setVal] = useState("");
  let [count, setCount] = useState(30);

  useEffect(() => {
    async function GithubProfile() {
      const responnse = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await responnse.json();
      console.log("Hello");
      setUsers(data);
    }

    GithubProfile();
  }, [count]);

  // function handleValue(e) {
  //   setVal(e.target.value.toUpperCase());
  // }

  function handleProfiles(e) {
    setCount(e.target.value);
  }
  return (
    <>
      <h1>Github Users</h1>
      <input type="text" onChange={handleProfiles} value={count} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {users.map((user) => (
          <img src={user.avatar_url} alt="" width={"100px"} key={user.login} />
        ))}
      </div>
    </>
  );
}

export default App;
