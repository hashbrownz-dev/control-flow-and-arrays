const favShows = ["Castlevania","Seinfeld","Yowamushi Pedal"];
let firstShow = favShows[0];

//Exercise 1

// for(let i =10; i >= 1; i--){
//     console.log(i);
// }

//Exercise 2

// for(let i = 1; i <= 9; i += 2){
//     console.log(i);
// }

//Exercise 3

// for(let i = 6; i <= 60; i++){
//     if(!(i%3))console.log(i);
// }

//Exercise 4

// let output = "";
// for(let i = 0; i < 7; i++){
//     output += "#";
//     console.log(output);
// }

const numbers = [1,2,3,4,5,6,7,8,9,10];
//double each number
const double = (array)=>{
    const doubled = [...array];
    doubled.forEach((number,index,array) => {
        array[index] = number * 2;
    });
    return doubled;
}
//square each number
const square = (array) => {
    const squared = [...array];
    for(let element of squared){
        squared[squared.indexOf(element)] = element * element;
    }
    return squared;
}
 console.log(numbers);
 console.log(double(numbers));
 console.log(square(numbers));