/* 
    CIT 281 Project 1
    Name: Michael O'Neal 
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger() {
    return Math.floor(Math.random() * (25 - 5) + 5);
}

function randomC() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let randomc = alphabet[Math.floor(Math.random() * 26)];
    return randomc
}

let text = "";
let count = 0;
do {
    count++;
    text = text+randomC();
} while (count < getRandomInteger());
console.log(text);