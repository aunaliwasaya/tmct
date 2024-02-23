
// - Take input of 2 variables (from browser or terminal) and show the total in console.

// let input1 = Number(window.prompt("enter any number"));
// let input2 = Number(window.prompt("enter any number"));
// let result = (input1+input2);
// console.log(result);


// - Write code to sum an array containing numbers
// let array =[1,2,4,5,8,7,6,9,8,4,8];
// let sum=0;
// for (let i=0; i<=array.length; i++){
//     sum = sum + i;
// }
// console.log(sum);


// - Write code to find maximum value from an array containing numbers (first using for loop and then using reduce)

// let array =[1,2,4,5,8,7,6,9,8,4,8];
// let maxval=1;
// for (let i=0; i<=array.length; i++){
// if(maxval<array[i]){
//     maxval=array[i];
// }
// }
// console.log(maxval);


// Write code to find minimum value from an array containing numbers (first using for loop and then using reduce)

// let array =[1,2,4,5,8,7,6,9,8,4,8];
// let minval=1;
// for (let i=0; i<=array.length; i++){
// if(minval>array[i]){
//     minval=array[i];
// }
// }
// console.log(minval);


// Write code that guesses a number thought up by the user where after each guess the user indicates whether the guess is <=> than the “thought” number.
// let randomnumber = Math.ceil(Math.random()*10);
// console.log(randomnumber);


// for (let i=3; i>=0; i--){
//     let userinput = Number(window.prompt("enter any number")); 
//     if(randomnumber===userinput){
//         console.log("you guess the correct input");
//         break;
//     }
//     if(randomnumber<userinput){
//         console.log("you guess is greater than the correct number");
//     } else(console.log("try again"));
//     if(randomnumber>userinput){
//         console.log("you guess is less than the correct number");
//     } else(console.log("try again"));
// }

// Write a function which takes a string parameter and returns the string in reverse.
// function stringfunc(){

// let input=String(window.prompt("enter any string"));
// let result = input.split('').reverse('').join('');
// console.log(result);
// }

// stringfunc();


// input 1 = 0 and 0 = 1.

function One(input) {
    console.log(1 - input);
}

One(0);
One(0);

// Check if a Number is Even or Odd: Write a function that takes a number as an argument and returns "even" if the number is even and "odd" if it's odd.


// function oddeven(){
//     let userinput=Number(window.prompt("enter any number"));

//     if(userinput % 2 === 0){
//         console.log("its an even number")
//     }
//     else{
//         console.log("its an odd number");
//     }
    
// }
// oddeven();

// Reverse a String: Write a function that takes a string as an argument and returns the reverse of that string.

// function stringfunc(){

// let input=String(window.prompt("enter any string"));
// let result = input.split('').reverse('').join('');
// console.log(result);
// }

// stringfunc();

// - Find the Maximum Number: Write a function that takes an array of numbers as an argument and returns the largest number in the array.

// let input =[];
// function numbers () {
//     for (let i=0; i<=input.length; i++){
//         let userinput=Number(window.prompt("enter any number"));
//         if(userinput===null){
//             console.log("program ternimated");
//             break;
//         }else{
//             continue;
//         }
//         if(userinput<0){
//             input.push;
//             console.log(input);
//         }
//     }

    
 
// }
// numbers();

// Check for Prime Number: Write a function that takes a number as an argument and returns true if the number is prime and false otherwise.


// const number = Number(prompt("Enter a positive number: "));
// let isPrime = true;


// if (number === 1) {
//     console.log("1 is not prime nor composite number.");
// }


// else if (number > 1) {

   
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }


// else {
//     console.log("The number is not a prime number.");
// }






