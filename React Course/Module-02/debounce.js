// const search = document.querySelector("#searchInput");

// function debounce(fn, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=> fn(...args), delay)
//     }
// }

// const searchInput = debounce((query) =>{
//     console.log("Searching for ", query)
// }, 5000);

// search.addEventListener("input", (e)=>{
//     searchInput(e.target.value)
// })



const input = document.querySelector("#searchInput");

function debounce(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        }, delay)
    }
}

const search = (text)=>{
    console.log("Searching...",text)
}

const debouncedSearch = debounce(search, 5000)

input.addEventListener("input", (e)=>{
    debouncedSearch(e.target.value);
})