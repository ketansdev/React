import "./App.css";
import Card from "./components/Card";
import array from "./constants/common.js";

const App = () => {
  console.log(array);

  return (
    <div className="parent">
      {array.map((item, idx) => {
        return (
          <div key={idx}>
            <Card
              brandLogo={item.brandLogo}
              companyName={item.companyName}
              location={item.location}
              pay={item.pay}
              posted={item.posted}
              role={item.role}
              tag1={item.tag1}
              tag2={item.tag2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
