// // function one

// function one(){
//     return 'One'
// }
// console.log(one());

// //function two
// function two(){
//     return 'Two'
// }
// console.log(two());

// //shortened two

// const shortenedTwo = () => 2;

// console.log(shortenedTwo());

// const rooseveltBlow = {
//     name : "Roosevelt Blow",
//     occupation : "Party Animal",
//     old : true,
//     age : 36
// }

// const increaseAge = (person) => {
//     person.age++;
// }

// console.log(rooseveltBlow.age);
// increaseAge(rooseveltBlow);
// console.log(rooseveltBlow.age);

function areBothEven(num1, num2){
    return !(num1 % 2) && !(num2 % 2);
}

console.log(areBothEven(3,7));

const sayName = (name) => {
    //console.log('Hello my name is ' +name+'!');
    console.log(`Hello!  My name is ${name}!`);
}

sayName('James')
sayName('Ricky')
sayName('Trevor')
sayName('Richter')
sayName('Simon')

const calculateAreaTriangle = (base, height) => {
    return `The area of a triangle with a base of ${base} and a height of ${height} is ${0.5 * base * height}.`
}

const calculateAreaCircle = (radius) => {
    return `The area of a circle with a radius of ${radius} is ${3.14 * square(radius)}.`
}

const square = (num) => {
    return num * num;
}

console.log(calculateAreaTriangle(8,4));
console.log(calculateAreaCircle(4));

const planetHasWater = (planet) => {
    return (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars')
}

console.log(planetHasWater('EaRth'));
console.log(planetHasWater('MarS'));
console.log(planetHasWater('Pluto'));