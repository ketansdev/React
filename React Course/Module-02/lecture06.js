function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());




function outer(){
    let a = 10;

    function inner(){
        console.log(a);
    }

    inner();
}

outer();