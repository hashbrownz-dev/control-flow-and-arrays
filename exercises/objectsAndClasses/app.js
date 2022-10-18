// const myCar = {
//     make : "Ford",
//     model : "Escort",
//     color : "blue",
//     year : 2000,
//     isRunning : false
// }

// console.log(myCar.make);

// myCar.run = () => {
//     console.log('VRRRROOOOOM!');
// }

// myCar.run();

// const myPet = {
//     name : "Demetrius Demarcus Bartholomew Jackson the 3rd",
//     age : 8,
//     favoriteThings : ['cat nip', 'chasing mice', 'salmon'],
//     canSpeakFrench : true,
//     canSolveRubiksCube : false
// }

// console.log(myPet);

// for(let property in myPet){
//     console.log(property);
// }

//Encapsulation
//Encapsulation is the concept of bundling data (properties/attributes) and related behavior (methods) within an object.
//Vocab
//Instance - An Object created by a class
//Instantiate -
//Instantiation - The process of creating an Object from a class.

class Vehicle{
    constructor(vin, make, model){
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
}

const myCar = new Vehicle('a1234','Ford','Escort');
console.log(myCar);

//Static Methods vs. Instance Methods
//Static Methods can be executed without creating an instance of an object. i.e. A static method does not require an instance in order to execute...
//Instance Methods require an instance of an object to be executed.