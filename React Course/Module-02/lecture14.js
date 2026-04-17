// splice and slice 

const array1 = [1, 2, 3, 5, 8, 11]

array1.splice(2, 2);

array1.splice(1, 0, 100, 200)
console.log(array1)



//  slice 

const array = [ 1, 2, 3, 4, 5]
const newArr = array.slice(1, 3);
console.log(newArr)