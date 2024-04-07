const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought')
  } else if (inches < 2) {
    console.log('dry')
  } else if (inches < 4) {
    console.log('average')
  } else if (inches < 6) {
    console.log('rainy')
  } else {
    console.log('flood')
  }
};
// measureRain(0) // drought
// measureRain(1) // dry
// measureRain(2) // average 
// measureRain(3)// average 
// measureRain(4)// rainy 
// measureRain(5) // rainy 
// measureRain(6) // flood 
// measureRain(7) // flood 
// measureRain(10)  // flood



const happyBirthdayPet = (breed, age) => {
  //  'snake', any age - 'Hiss hiss!'
  //'cat', less than 5 - 'Mew mew!'
  if (breed == "snake") {
    console.log('Hiss hiss!')
  } else if (breed == "cat" && age < 5) {
    console.log('Mew mew!')
  } else if (breed == "cat" && age >= 5) {
    console.log('Meow meow!')
  } else if (breed == "dog" && age < 5) {
    console.log('Arf arf!')
  } else if (breed == "dog" && age >= 10) {
    console.log('Boof!')
  } else if (breed == "dog" && age >= 5 && age <= 10) {
    console.log('Woof woof!')
  } else console.log('Happy birthday!')
}
// happyBirthdayPet("snake", 0) // hiss hiss 
// happyBirthdayPet("snake", 4)// hiss hiss 
// happyBirthdayPet("cat", 2)// mew mew
// happyBirthdayPet("cat", 5)// meow 
// happyBirthdayPet("cat", 10)// meow 
// happyBirthdayPet("dog,", 4)//arf
// happyBirthdayPet("dog", 5)// woof 
// happyBirthdayPet("dog", 9)// woof 
// happyBirthdayPet("dog", 10)/// boof
// happyBirthdayPet("dog", 11)// boof 
// happyBirthdayPet("bird", 1)// happy birthday 
// happyBirthdayPet("racoon", 5)// happy birthday




// input: any input (string, number, boolean, etc.)
// output: string
const funTypes = (jsType) => {
  // we add a console.log at the top of this function to help with the flow of the function 
  // "console.log(typeof jsType)"
  // typeof method is used to tell us what kind of datatype is found within out if statement
  if (typeof jsType === "string") {
    console.log("That's just some text.")
    // we use strict equals "===" because strict equals check for data types.
    // from this point out the statement just continues to run 
    // so long as one of these statements are not true. 
  } else if (Number.isNaN(jsType)) {
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === "boolean") {
    console.log("To bool, or not to bool?")
  } else if (jsType === undefined) {
    console.log("Nothing, but I didn't set that.")
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.")
  } else if (Array.isArray(jsType)) {
    console.log("I order you to be indexed.")
  } else if (typeof jsType === "object") {
    console.log("Anybody got the key?")
  } else if (typeof jsType === "number") {
    console.log("That's a good number.")
  }
};

// funTypes("string")
// funTypes('');
// funTypes(1);
// funTypes(0);
// funTypes(true);
// funTypes(false);
// funTypes(undefined);
// funTypes(null);
// funTypes({});
// funTypes([]);
// funTypes(NaN);

// this isArray method will check if something is an array 

// in this console log we will plug in whatever data type we would like
//this is to catch the return message. 





// console.log(typeof NaN)
// console.log(typeof [])


// input: float (number), string
// output: number 
// const rounder = (float, roundSetting) => {
//   /* we use the method of Math.ceil() because this method helps us
//   round up to the next interger. */
//   if (roundSetting == 'up') {
//     return Math.ceil(float)
//     /*we place float within this method because float is a pramater 
//     and the number in which float could be will continue to change
//     */
//   } else if (roundSetting == "down") {
//     return Math.floor(float)
//     /*
// The Math.floor method is used to round down to the nearest interger.
//     */
//   } else if (roundSetting == "honest") {
//     return Math.round(float)
//   }
//   // The Math.round method is used to return the value of a number
//   // rounded to the nearest integer.
//};
const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') return Math.ceil(float);
  if (roundingSetting === 'down') return Math.floor(float);
  return Math.round(float);
};

console.log(rounder(1.0, "up"))
console.log(rounder(3.5, "down"))
console.log(rounder(3.5, "honest"))

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzBuzz!")
  }
  else if (num % 3 === 0) {
    console.log("fizz")
  }
  else if (num % 5 === 0) {
    console.log("buzz")
  } else console.log(num)
}
// fizzBuzzish(8)

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
}
