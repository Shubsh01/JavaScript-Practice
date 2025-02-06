 const randomNumber = (Math.random()*100+1).toFixed(0);
// console.log(parseInt(Math.random()*100+1));
console.log(randomNumber);
const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastGuess')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submitButton.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess>=10){
            displayGusses(guess)
            displayMessage(`Game Over, the Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            checkGusses(guess)
            displayGusses(guess)
        }
    }
}

function checkGusses(guess){
    if(guess>randomNumber){
        displayMessage('The gussed number is higher')
    }else if(guess<randomNumber){
        displayMessage('The gussed number is lower')
    }else{
        displayMessage('You guessed the correct number !!')
        endGame()
    }
}

function displayGusses(guess){
    userInput.value = '' /*Clean up method for new guess */
    // guessSlot.textContent += `${guess}, `
    guessSlot.textContent = prevGuess.join(', ')
    numGuess++;
    remaining.textContent = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

