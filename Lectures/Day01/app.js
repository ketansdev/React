// style = {
//     fontSize: "30px",
//     backgroundColor : "green",
//     color: "white"
//     }


// create element

// const element = document.createElement("h1");

// element.textContent = "Namaste Javascript";
// element.style.backgroundColor = "black";
// element.style.color = "white";
// element.style.fontSize = "23px";

// const element2 = document.createElement("h1");

// element2.textContent = "Namaste React";
// element2.style.backgroundColor = "red";
// element2.style.color = "white";
// element2.style.fontSize = "23px";

// const root = document.getElementById("root");

// root.append(element);
// root.append(element2);






// const React = {
//   createElement: function (tag, style, children) {
//     const element = document.createElement(tag);

//     if(typeof children === "object"){
//         for(let val of children){
//             element.append(val);
//         }
//     }else element.textContent = children;
//     for(let key in style){
//         element.style[key] = style[key];
//     }
//     return element;
//   },
// };

// const ReactDom = {
//     render: function(element, root){
//         root.append(element);
//     }
// }


// // call react function

// const h1 = React.createElement("h1", {fontSize: "30px", backgroundColor : "green", color: "white"}, "Hello Coder Army");
// const h2 = React.createElement("h2", {fontSize: "30px", backgroundColor : "blue", color: "white"}, " I am Learning React");

// const li1 = React.createElement("li", {}, "HTML");
// const li2 = React.createElement("li", {}, "CSS");
// const li3 = React.createElement("li", {}, "JS");
// const ul = React.createElement("ul", {fontSize: "30px", backgroundColor : "orange", color: "white"}, [li1, li2, li3]);

// const root = document.getElementById("root");
// // root.append(h1);
// // root.append(h2);

// ReactDom.render(h1, root);
// ReactDom.render(h2, root);
// ReactDom.render(ul, root);




