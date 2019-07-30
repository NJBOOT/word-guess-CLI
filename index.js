var inquirer = require("inquirer")
var Word = require("./word.js")

var wordList = ["plain", "valid", "card", "landowner", "visit", "temple", "reduction", "feminine", "attachment", "capital", "publication", "jury", "silence", "cover", "leaflet", "layer", "margin", "science", "wind", "posture"]
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var secretWord = Math.floor(Math.random() * wordList.length);
console.log(secretWord);

specialWord = new Word(secretWord)