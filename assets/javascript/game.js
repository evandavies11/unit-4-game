//linked the stylesheet
console.log("hellow world")

var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

//$("crystal").attr("class");

var resetStart = function () {

    $(".crystals").empty();

    //create random number between 19-120
    randomResult = Math.floor(Math.random() * 101) + 19;

    //console.log(randomResult);

    $("#result").html(randomResult);


    //create crystals
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });

        $(".crystals").append(crystal);

    }
}

//crystal button functionality
resetStart();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html(previous);

    if (previous > randomResult) {
        losses--;

        $("#losses").html(losses);

        previous = 0;

        $("#previous").html(previous);

        resetStart();


    }
    else if (previous === randomResult) {
        wins++;

        $("#wins").html(wins);

        previous = 0;

        $("#previous").html(previous);

        resetStart();
    }

    console.log(previous);

});
// game that uses crystals to get random result
// four crystals
// each crystal generates a random number between 1 and 12
// computer creates a new random number after player has won or lost
// when crystal is clicked it adds its number to user score
// until it equals the total score
// if it gets over the random result we add to loss counter
// if it is equal we increment the loss counter

