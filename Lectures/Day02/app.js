// const element = React.createElement("h1", null, "I am learning React from Scratch");

// const ele1 = React.createElement("p", null, "I Learned HTML and CSS")
// const ele2 = React.createElement("h2", null, "I also Learned Javascript from scratch")

// const element2 = React.createElement("div", null, ele1, ele2, element)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element2);

// JSX : Javascript XML : Look like html  .....// converted by babel
// JSX --> React.createElement()

// React Element
// const element = (
//   <div>
//     <h1 id="title"> My name is Ketan Shetge</h1>
//     <h2>I am learning React</h2>
//     <p>React is a javascript library</p>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// React Component

// function Button(){
//     return (
//         <button>Join now</button>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // Two ways to call using 1) Function call and self closing tag
// // root.render(Button());
// root.render(<Button/>)

// what can we write inside the element in JSX {}

// text/element : Javascript ka expression aap iske andar likh sakte hain
// Number , string , true, false, null, undefined, array object

// Number, string, array - Will render on UI
// true, false, null, undefined - (Will render but will not display on UI)
// Object : will throw error

// function App(name, role) {
//   return <h2>My Name is {name}. I am a {role}</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App("ketan","Web Developer"));

// const courses = ["HTML", "CSS", "JAVASCRIPY", "REACT"];

// const element = (
//   <ul>
//     {courses.map((course) => (
//       <li>{course}</li>
//     ))}
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// function App(props){
//   return(
//     <div>
//       <h1>Hello React</h1>
//       <h2>My name is {props.name} and I am {props.age} </h2>
//       <p>I reside in {props.location}</p>
//     </div>
//   )
// }

// const result = <App name = "Ketan" age = {22} location = "worli, Mumbai"></App>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(result);

// const styling = {
//   backgroundColor : "yellow",
//   color: "red"
// }

// const element =  <h1 id="title" className= "heading" style={styling}>Hello Coder Army</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);








// const fruits = ["Apple", "Banana", "Mango", "Watermelon", "Jackfruit"];

// const element = (
//   <ul>
//     {fruits.map((val) => (
//       <li>{val}</li>
//     ))}
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);






function App(props){
    return(
        <h1>I am Learning {props.language}</h1>
    )
}

const element = <App id = "title" language = "React"/>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);