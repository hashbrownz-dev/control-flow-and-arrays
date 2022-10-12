//Exercise 1

let num = -6;

if(num >= 0){
    console.log("Positive");
} else {
    console.log("Negative");
}

//Check for Even or Odd (I misread the directions)
if(!(num % 2)){
    console.log("Even");
} else {
    console.log("Odd");
}

//Exercise 3

let age = 12;
if(age >= 18){
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//Exercise 4
let num2 = 35;
let output = "";
if(num2 > 0){
    output = "The number is positive";
    if(num2 >= 100){
        output += " and greater than or equal to 100.";
    } else {
        output += " and less than 100."
    }
} else {
    output = "The number is negative.";
}
console.log(output);

//Exercise 5
let grade = 95;

if(grade >= 90){
    console.log("A");
} else if (grade >= 80){
    console.log("B");
} else if (grade >= 70){
    console.log("C");
} else if (grade >= 55){
    console.log("D")
} else {
    console.log("F");
}