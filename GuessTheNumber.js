
var guess = randomNum 
var radomNum = Math.floor(Math.random() * 26);
    prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden... ")
    console.log("Your guess is: " + guess);

    var guess_count = 0;
    var guess_limit = 5;
    var out_of_guesses = false;

    while (guess != randomNum) not (out_of_guesses)
        if (guess_count < guess_limit) {
            guess = prompt("Probeer het nogmaals ")
            guess_count += 1;
        } else if (out_of_guesses = true);

    if (out_of_guesses) {
        prompt("Helaas, je hebt niet gewonnen ")
    } else {
        window.alert("Gefeliciteerd je hebt gewonnen")
    }


