const person = {
    firstName: 'clint',
    talent: ['music', 'sports'],
}

person.lastName = 'tay'

person.introduce = function(){
    console.log('i am ' + this.firstName)
}

person.introduce();

// Nested/Nesting Objects
const address = {
    street: "123 Example Street",
    city: "Example City",
    country: "Example Country",
}
console.log("Address:", address);
person.address = address;
console.log("Person:", person);
console.log("Person Country:", person.address.country);

const {firstName, talent, lastName} = person

console.log(firstName, talent, lastName)

// Spread Operator - pass the key: value from an object to another object.
const grades = {
    math: 94,
    english: 90,
    science: 89,
    pe: 98
}
const gradesWithEC = {
    ...grades,
    extraCurricular: 88,
}
console.log("Grades with Extra Curricular:", gradesWithEC);

// Object.keys(object) - return the keys inside of an object.
const keys = Object.keys(person);
console.log("Keys:", keys);

// Object.values(object) - return the values inside of an object.
const values = Object.values(person);
console.log("Values:", values);

const keyValuePair = Object.entries(person);
console.log("key and value:", keyValuePair)

// Object.assign(object/s) - copy the key and value from multiple objects into a new object.
const information = {
    firstName: "Alice",
    lastName: "Jackson"
}
const information2 = {
    age: 30,
    city: "Example City"
}
const combinedInformation = Object.assign(information, information2)
console.log("Combined Information:", combinedInformation);



// Object.freeze(object) - prevent modification to an object.
Object.freeze(combinedInformation);
combinedInformation.age = 32;
console.log("Combined Information:", combinedInformation.age);

// JSON.stringify - convert object to a string.
let personString = JSON.stringify(person);
console.log("Person String:", personString);


// for in loop- iterate through the properties of an object.
for (let key in person){
    console.log(`Key: ${key}, Value: ${person[key]}`);
}

for (let property in person) {
    let prop= property + "1"
     console.log(prop)
 }

//  for of - iterate over all the elements of an array
 for (let element of keys) {
    console.log('ELement: ', element)
 }
 for (let val of values) {
    console.log('element: ', val)
 }
