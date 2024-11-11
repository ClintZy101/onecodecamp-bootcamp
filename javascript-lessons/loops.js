const number = [45, 4, 9, 16, 25];

let text = "";

/* forEach() Method - call a function one for each array element */

number.forEach(myFunction);
document.getElementById("demo").innerHTML = text;

function myFunction(value, index, array) {
  text += value + "<br>";
}

number.forEach((value, index, array) => {
  return value * 5;
});

let myArray = [x, y, z];
let firstIndex = myArray[0];
let secondIndex = myArray[1];
let thirdIndex = myArray[2];

// do -while
let i = 0;

do {
  text += "<br>Hello World " + i;
  i++;
} while (i < 10);

// while
while(i <9){
  // execute code
}
