function Header(props) {
  return <h1>Welcome to the Gaya Scoops {props.city}</h1>;
}

function Main({details}) {
  return <h2>Gaya Scoops is the Icecream Parlour in Panvel {details.landmark}, {details.road}, Maharashtra</h2>;
}

function Footer() {
  return <h3>Thankyou for visiting us !!</h3>;
}

function App() {
  return (
    <>
      <Header city = "panvel"/>
      <Main details = {{landmark : "Beside Shabri Hotel", road : "HDFC circle road"}}/>
      <Footer />
    </>
  );
}

const element = App();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
