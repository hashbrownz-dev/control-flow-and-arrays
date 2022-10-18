const adventurer = {
    name: 'Timothy',
    hitpoints: 10,
    belongings: ['sword','potion','Tums'],
    companion: {            //Use an object within an object
        name: "Velma",
        type: "Bat",
        companion: {        //Use an object within an object
            name: "Tina",
            type: "Parasite",
            belongings: [   //Use an array within an object within an object
                'SCUBA tank', 'health insurance'
            ]
        }
    }
}

console.log(adventurer.belongings);
//console.log(adventurer.belongings[0]);

//Iterate over an array that is within an object
for ( let i = 0; i < adventurer.belongings.length; i++ ) {
    console.log(adventurer.belongings[i]);
}

//Access the companion object
console.log(adventurer.companion);
//Access the companion's name
console.log(adventurer.companion.name);
//Access the companion's type
console.log(adventurer.companion.type);
//Access the companion's companion's type
console.log(adventurer.companion.companion.type);
//Access the companion's companion's belongings
console.log(adventurer.companion.companion.belongings[1]);

//Use an array of objects
const movies = [
    {title: "Tokyo Story"},
    {title: "Paul Blart: Mall Cop"},
    {title: "L'Avventura"}
]
//Reference using index
console.log(movies[0].title);
//Loop over the array and print all of the titles
for (let i = 0; i < movies.length; i++){
    console.log(movies[i].title);
}
//Combine objects, arrays, and functions
const foo = {
    someArray:[1,2,3],
    someObject:{
        someProperty: 'oh Hai!'
    },
    someFunction: () => {
        console.log('I am a function!');
    }
}
console.log(foo.someArray[2]);
console.log(foo.someObject.someProperty);
foo.someFunction();

//You can store an object in an array
const foo2 = [
    {name:'Object 1', mood:'vibin'},
    {name:'Object 2', mood:'slimin'},
    {name:'Object 3', mood:'bout dat life'}
]

//You can store an array in an array
const foo3 = [
    ['0,0','0,1','0,2'],
    ['1,0','1,1','1,2'],
    ['2,0','2,1','2,2']
];
//You can store a function in an array
function introduction(){
    console.log('Hello!');
}
function greeting(name = 'Roosevelt'){
    console.log(`My name is ${name}!`);
}
function goodbye(){
    console.log(`I must take my leave now.  Good Bye!`)
}

const myFunctions = [introduction, greeting, goodbye];
//console.log(myFunctions);
for(let i = 0; i < myFunctions.length; i++){
    myFunctions[i]('Joaquin');
}

//Create a class

class Character{
    constructor(name, legs, arms, eyes, hair){
        this.name = name;
        this.legs = legs;
        this.arms = arms;
        this.eyes = eyes;
        this.hair = hair;
    }
    greet(otherCharacter){
        let message = "Hi"
        if(otherCharacter){
            message += " " + otherCharacter;
        }
        console.log(message+"!");
    }
    smite(){
        console.log('I smite thee you vile person.');
    }
}

const me = new Character('James', 1, 4, 'Black', "None");
me.greet();
me.greet('Laura');
me.smite();