//  async and await 

// async function test(){
//     return "Hello"
// }

// console.log(test())


// async function fetchData(){
//     try{

//         const result = await fetch("https://jsonplaceholder.typicode.com/users");
//         const response = await result.json();
//         console.log(response);
//     }catch(err){
//         console.log("Failed to fetch the data", err);
//     }
// }

// fetchData()


// 

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }


// async function fetchData(){
//     const result = await getData();
//     console.log(result);

// }

// fetchData();





function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Ketan" }), 1000);
  });
}

function getPosts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post1", "Post2"]), 1000);
  });
}

async function fetchUser(){
    try{
        const result = await getUser();
        console.log(result.name);

        const posts = await getPosts();
        console.log(posts);

    }catch(err){
        console.log(err)
    }

}


fetchUser();