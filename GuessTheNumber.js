prompt("Welkom!")
function guessNumber() {
    var randomNum = Math.floor(Math.random() * 26);

    // output to the console for debugging
    console.log(randomNum);

    // let user declare a variable
    var guess;
    guess = prompt("Please enter a number between 0 and 25 ")
    console.log("Your guess is: " + guess);

    if (guess < randomNum){
        window.alert("Your guess is too low");
    } else if (guess > randomNum){
        window.alert("Your guess is too high");
    } else if (guess == randomNum){
        window.alert("You guessed it, you win!!");
    } else {
        window.alert("Error")
    }
}
