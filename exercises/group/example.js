//ARRAYS
const myArray = [9,7,5,3,1];
//access an element of an array with bracket notation
console.log(myArray[0]);
//expected output: 9;
//add element with push()
myArray.push(0);
console.log(myArray);
//remove element with pop()
myArray.pop();
console.log(myArray);
//add element with unshift()
myArray.unshift(11);
console.log(myArray);
//remove element with shift()
myArray.shift();
console.log(myArray);

//LOOPS
//while

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
//expected output: 1, 2, 3, 4...

//while... do
i = 1;
do{
    console.log(i);
    i++;
} while (i <= 10);
//expected output: 1, 2, 3, 4...

//FOR
for(let i = 1; i <= 10; i++){
    console.log(i);
}
//expected output: 1, 2, 3, 4...

//FOR OF
//Iterates through the values of an iterable object.
//Great for iterating over the values of an array.

for(let element of myArray){
    console.log(element);
}
//expected output: 9,7,5,3,1

//FOR IN
//Iterates through the keys of an iterable object.
for(let index in myArray){
    console.log(index);
}
//expected output: 0,1,2,3,4

//Great for iterating over the properties of an object.
const movie = {
    title: "Gremlins",
    year: 1984,
    genre: "Horror/Fantasy",
    rating: "PG"
}
for(let key in movie){
    console.log(`Key: ${key}, Value: ${movie[key]}`);
}