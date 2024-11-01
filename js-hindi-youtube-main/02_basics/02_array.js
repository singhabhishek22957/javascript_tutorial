const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)    

// console.log(marvel_heros);   // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);   //flash

// const allHeros = marvel_heros.concat(dc_heros)  
// console.log(allHeros);   //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]     // this is spread  operator 

// console.log(all_new_heros);     //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(1)   // it take a value how to solve 
// console.log(real_another_array);   // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

// const real_another_array1 = another_array.flat(Infinity)
// console.log(real_another_array1);     // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



// console.log(Array.isArray("Hitesh")) // false    // return      true false   value if Hitesh is array the he print true otherwise false 
// console.log(Array.from("Hitesh"))   // convert into array //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // interesting  // []   not able to convert 

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));  //   [ 100, 200, 300 ]