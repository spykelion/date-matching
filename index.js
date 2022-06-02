/* Problem:
Using JavaScript, create a "date-matching" application that has the following features:

Three lists containing names (Group A, Group B and Places), the list can be represented with Object or Array.
The application should randomly match and produce 2 people at each refresh. 
The result produced should be in the format:
Group A['name'] and Group B['name'] will be going on a dinner date at Places['name'].
However, the program should go through the entire list in Group A before repeating names.
*/

// get a random number
function getRandomIndex (max) {
 return Math.floor(Math.random() * max);
} 

let groupA = ["Raiden", "Mason", "Philip", "Gabriel", "Josue", "Emilio", "Matthew","Emmanuel","Lolade", "Carson"];
let groupB = ["Adewura", "Omawunmi", "Ebiere", "Ayomide", "Olumide", "Omolara", "Tella","Zainab","Onome", "Aminu"];

let places = ["Pryfort", "Northmill", "Lochbutter", "Ormeadow", "Fairkeep", "Silverwind", "Highbeech","Ostlake","Erifield", "Freydale"];

let out = (nameA,nameB,place)=> console.log(
  `${nameA} and ${nameB} will be going on a dinner date at ${place}.\n`
);

prompt("Hey there")

// first, match a date with all groupA members
for(let i=0;i<places.length;i++)
  out(groupA[i], groupB[i], places[i])

console.log("....Dating again, this time randomly\n")

// second , match a random date with all groupA members, letting some date 2 or more times.
for(let i=0;i<getRandomIndex(10);i++){
  let randomA=getRandomIndex (9),
  randomB=getRandomIndex (9),
  randomPlace=getRandomIndex (9);

  out(groupA[randomA], groupB[randomB], places[randomPlace])
}
