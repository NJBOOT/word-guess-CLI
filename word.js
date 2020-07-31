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
        console.log(displayWord)
    }
    this.guessLetter = function (guessChar) {
        var found = false
        for (var i = 0; i < this.objArray.length; i++) {
            if (this.objArray[i].checker(guessChar))
                found = true
        }
        if (found) return true;
        else return false;
        
    }
}

// let test = new Word("testing")

// test.guessLetter("t")
// test.updateDisplay()
// test.makeWord()
module.exports = Word;