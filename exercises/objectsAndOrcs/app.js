const adventurer = {
    name: 'Timothy',
    hitpoints: 10,
    belongings: ['sword','potion','Tums'],
    companion: {    //Use an object within an object
        name: "Velma",
        type: "Bat"
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