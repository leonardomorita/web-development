
$("h1").css("color", "black");

$("body").keydown(function (event) {
    $("h1").text(event.key);
});
