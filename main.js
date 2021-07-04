let wordList = ['bharti', 'sarmi', 'ravina', 'neha']
let secretWord = wordList[Math.floor(Math.random()* wordList.length)]
const input = require('readline-sync')
console.log(secretWord)
function get_guessed(guessed_array) {
    var x =0
    var str = ""
    while(x<secretWord.length){
        if(guessed_array.includes(secretWord[x])){
            str = str+secretWord[x]
        }else{
            str = str+"_"
        }x++
    }return str
};

function hangman(){
    var i = 0
    var array = []
    while(i<secretWord.length){
        var user = input.question('guess a letter ---')
        if(secretWord.includes(user)){
            array.push(user)
            var outPut = get_guessed(array)
            console.log('good guess ' + outPut)
        }else{
            console.log('opps this letter is not in my word')
        }i++

    };
    if(outPut == secretWord){
        console.log('*** Congrats!! You won ***')
    }else{
        console.log(`Sorry you loose the game. The word was ${secretWord}`)
    }
};
hangman();