console.log("hellow world")

var randomResult;
var losses;
var wins;

for (var i = 0; i < 4; i++) {

    var crystal = $("<div>");

    $(".crystals").append(crystal);


}
// game that uses crystals to get random result
// four crystals
// each crystal generates a random number between 1 and 12
// computer creates a new random number after player has won or lost
// when crystal is clicked it adds its number to user score
// until it equals the total score
// if it gets over the random result we add to loss counter
// if it is equal we increment the loss counter

