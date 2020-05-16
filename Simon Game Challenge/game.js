var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    // Random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(250).fadeIn(250);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    // Verify when any buttons are clicked.
    $('.btn').click(function (event) {
        // Get the id of the button that it pressed, using the event.
        var userChosenColour =  event.target.id; // $(this).attr("id");

        userClickedPattern.push(userChosenColour);
        
        console.log(userClickedPattern);
    });
}

nextSequence();
