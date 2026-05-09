import "./App.css";
import Card from "./components/Card/Card";
const App = () => {
  return (
    <div className="parent">
      <Card
        name="Ketan Shetge"
        profile="Software Engineer"
        img="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D"
      />
      <Card
        name="Swapnil Chachad"
        profile="Rikshaw Driver"
        img="https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGVzfGVufDB8fDB8fHww"
      />
      <Card
        name="Yash Shinde"
        profile="Marketting Head"
        img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D"
      />
      <Card
        name="Nikhil Kadam"
        profile="Accountant"
        img="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXN8ZW58MHx8MHx8fDA%3D"
      />
    </div>
  );
};

export default App;
