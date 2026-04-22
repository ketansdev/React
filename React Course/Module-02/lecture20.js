// event bubling 

document.getElementById("grand-parent").addEventListener("click", ()=>{
    console.log("Grand Parent Clicked");
})

document.getElementById("parent").addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Parent Clicked");
})

document.getElementById("child").addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Child clicked");
})



//  event delegation

document.getElementById("nav-items").addEventListener("click", function(e){
    console.log(e.target.textContent);
})