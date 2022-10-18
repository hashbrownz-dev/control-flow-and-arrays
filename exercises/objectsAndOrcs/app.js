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