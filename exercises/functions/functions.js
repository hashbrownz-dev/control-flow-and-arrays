// function one

function one(){
    return 'One'
}
console.log(one());

//function two
function two(){
    return 'Two'
}
console.log(two());

//shortened two

const shortenedTwo = () => 2;

console.log(shortenedTwo());

const rooseveltBlow = {
    name : "Roosevelt Blow",
    occupation : "Party Animal",
    old : true,
    age : 36
}

const increaseAge = (person) => {
    person.age++;
}

console.log(rooseveltBlow.age);
increaseAge(rooseveltBlow);
console.log(rooseveltBlow.age);