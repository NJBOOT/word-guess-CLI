let Letter = require('./letter.js')


function Word(word) {
    this.word = word
    this.objArray = []

    this.makeWord = function () {
        let wordArr = this.word.split("")

        for (var i = 0; i < wordArr.length; i++) {
            let letter = new Letter(wordArr[i])
            this.objArray.push(letter)
        }

        // wordArr.forEach(function (element) {
        //     let letter = new Letter(element)
        //     this.objArray.push(letter)
        // });
    }
    this.updateDisplay = function () {
        var displayWord = ""
        for (var i = 0; i < this.objArray.length; i++) {
            displayWord += this.objArray[i].display()
        }
        return displayWord
    }
    this.guessLetter = function (guessChar) {

        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].checker(guessChar)
        }

    }
}

module.exports = Word;

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)