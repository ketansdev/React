// const element = React.createElement("h1",{}, "Hello Coder Army");

// // ReactDOM.render(element, root);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// const element = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Hello"),
//   React.createElement("p", null, "React is cool")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// const element = React.createElement("h1", null, "I am learning React");
// const element2 = React.createElement(
//   "div",
//   null,
//   React.createElement(
//     "h2",
//     {
//       style: { color: "red", backgroundColor: "yellow" },
//       id: "heading-two",
//       className: "heading",
//     },
//     "This is heading 2",
//   ),
//   React.createElement("p", null, "This is paragraph"),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element2);

const btn1 = React.createElement(
  "button",
  { style: { backgroundColor: "#62C76B", color: "#fff" } },
  "Success",
);
const btn2 = React.createElement(
  "button",
  { style: { backgroundColor: "#BA0303", color: "#fff" } },
  "Failure",
);
const btn3 = React.createElement(
  "button",
  { style: { backgroundColor: "#134CFC", color: "#fff" } },
  "Info",
);

const element = React.createElement(
  "div",
  {
    style: {
      textAlign: "center",
      backgroundColor: "black",
      color: "white",
    },
  },
  btn1,
  btn2,
  btn3,
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
