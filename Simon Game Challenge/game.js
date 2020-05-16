var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    // Random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(250).fadeIn(250);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

nextSequence();
