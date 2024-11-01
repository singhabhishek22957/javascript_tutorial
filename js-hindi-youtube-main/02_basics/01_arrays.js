// array

const myArr = [0, 1, 2, 3, 4, 5]    
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);   //  1

// Array methods

// myArr.push(6)    // push method  insert the value inside the array at the last 
// console.log(myArr);  //[0, 1, 2, 3, 4, 5, 6]

// myArr.push(7)    // 
// myArr.pop()    // deletion the element of the array   at last position   
// console.log(myArr);  //[ 0, 1, 2, 3, 4 ]


myArr.unshift(9)
// console.log(myArr);   [9, 0, 1, 2,3, 4, 5]     insert the element at the first 

// myArr.shift()   // remove the element at the first position 

// console.log(myArr.includes(9));    // it check the value is have or not inside the array in true and false 
// console.log(myArr.indexOf(3));   // it gives the index of element 

// const newArr = myArr.join()   //  join the element and convert into a string  

// console.log(myArr);  // [ 9, 0, 1, 2,  3, 4, 5]
// console.log( newArr);    // 9,0,1,2,3,4,5


// slice, splice

console.log("A ", myArr);   // A  [  9, 0, 1, 2,  3, 4, 5]

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);   // [ 0, 1 ]
// console.log("B ", myArr);   // B  [9, 0, 1, 2, 3, 4, 5 ]


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);    // C  [ 9, 3, 4, 5 ]    splice method change the original array i
// console.log(myn2);   // [ 0, 1, 2 ]
