// *** OBJECT DESTRUCTURING ***

//Example 1
// const person = {
//   name: "Dizy",
//   age: 28,
//   location: {
//     temp: 88,
//     city: "New York"
//   }
// };

// //set default value using equal (=)
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// //rename the variable using colon (:) , when we need to use descriptive variable name
// const { temp: temprature, city } = person.location;

// if (city && temprature) {
//   console.log(`It's ${temprature} in ${city}.`);
// }

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { temp, city } = person.location;

// if (city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }

//Example 2
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publiser: {
//     name: "Penguin"
//   }
// };

// const { name: publiserName = "Self-Publised" } = book.publiser;
// console.log(publiserName);

//Example 3
// const movie = {
//   title: "Simmba",
//   director: "Rohit Shetty",
//   producer: {
//     //name: "Karan Johar"
//   }
// };

// const { name: producerName = "Self-Producer" } = movie.producer;
// console.log(producerName);

//**************************
// *** ARRAY DESCTRUCTURING ***

//Example 1
// const address = ["26 Church St", "Newington", "CT", "06111"];

// const [, city, state = "New York"] = address;

// console.log(`The temple is in ${city}, ${state}.`);

//Example 2
const item = ['Coffee (hot)', '$2.50', '$2.75', '$3.00'];

const [coffee, , md] = item;

//console.log(`A Small ${coffee} costs ${sm}`);
console.log(`A Medium ${coffee} costs ${md}`);
//console.log(`A Large ${coffee} costs ${lg}`);
