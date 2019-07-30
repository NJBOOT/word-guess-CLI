function Letter(char) {
    this.character = char;
    this.guessed = false;
    this.display = function () {
        if (this.guessed === false) {
            return ("_");
        } else return char
    }
    this.checker = function (newChar) {
        if (newChar === this.character) {
            this.guessed = true
            return true
        }

    }

}

module.exports = Letter