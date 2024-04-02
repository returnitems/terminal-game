//Initializing prompts
const prompt = require('prompt-sync')();

//Banner type introduction
console.log(" *************************");
console.log(" Welcome to Castle Battle!");
console.log(" *************************");
console.log(" ");
console.log("A turn-based strategy game!");
console.log(" ");

const rules = prompt("Would you like to read the rules of the game? Type (a) for 'Yes' or (b) for 'No'.");
if (rules === "a") {
    console.log("Castle Battle is a turn based strategy game where you compete against the computer and try to destroy its barracks using your Peons before the computer can destroy yours! Simple.");
} else {
    console.log("Alright, let's jump right into it!");
}
