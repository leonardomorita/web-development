// Get the color of the h1 tag.
alert("Color: " + $("h1").css("color"));

// Set the color of the h1 tag.
$("h1").css("color", "brown");

// Add a class to the h1 tag.
$("h1").addClass("big-title italic");

// Remove a class to the h1 tag.
$("h1").removeClass("big-title");

// Verify if the h1 tag has a class.
alert("Has it a class: " + $("h1").hasClass("italic"));

// Change the text of the h1 tag. It can't use HTMLs tags, only text.
$("h1").text("Change with text");

// Change the HTML of the h1 tag. It can use HTMLs tags.
$("h1").html("<bolder>Change with html</bolder>");

// Get the attribute of the 'a' tag.
alert("URL: " + $("a").attr("href"));

// Set the attribute of the 'a' tag.
$("a").attr("href", "https://www.udemy.com");

// This function will execute, when the user click any key of the keyboard.
$("body").keydown(function (event) {
    // Printing the key in the screen that it was pressed by user.
    $("h1").text(event.key);
});

// This function will execute, when the user pass the mouse over in the h1 tag.
// $("h1").on("mouseover", function () {
//     $("h1").addClass("background-color-blue");
// });

// Add the button before the h1 tag.
$("h1").before("<button class='new-btn'>Button before</button>");

// Add the button after the h1 tag.
$("h1").after("<button class='new-btn'>Button after</button>");

// Add the button into the h1 tag, just before all the content into this tag.
$("h1").prepend("<button class='new-btn'>Button prepend</button>");

// Add the button into the h1 tag, just after all the content into this tag.
$("h1").append("<button class='new-btn'>Button append</button>");

$(".new-btn").after("<button class='toggle-btn'>Button toggle</button>");

$(".toggle-btn").after("<button class='animate-btn'>Button animate</button>");

$(".btn").click(function () {
    // A 'hide()' method disappear the h1 tag instantly.
    // A 'fadeOut()' method disappear the h1 tag with animation.
    // A 'slideUp()' method disappear the h1 tag (dropdowns menu).
    $("h1").hide();
    // Another example: $("h1").fadeOut();
    // Another example: $("h1").slideUp();
});

$(".new-btn").on('click', function () {
    // A 'show()' method appear the h1 tag instantly.
    // A 'fadeIn()' method appear the h1 tag with animation.
    // A 'slideDown()' method appear the h1 tag (dropdowns menu).
    $("h1").show(); 
    // Another example: $("h1").fadeIn();
    // Another example: $("h1").slideDown()
});

$(".toggle-btn").on('click', function () {
    // A 'toggle()' method alternate (appear and disappear) the h1 tag instantly.
    // A 'fadeToggle()' method alternate (appear and disappear) the h1 tag with animation.
    // A 'slideToggle()' method alternate (appear and disappear) the h1 tag (dropdowns menu).
    $("h1").toggle();
    // Another example: $("h1").fadeToggle();
    // Another example: $("h1").slideToggle():
});

$(".animate-btn").on('click', function () {
    // Only numeric number should be inside the animate method parameters.
    $("h1").animate({margin: 50});
});


