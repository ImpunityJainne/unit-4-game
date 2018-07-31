var wins = 0;
var losses = 0;
var score = 0;

// Initial score is 0.
$("#score").text(score);

// For #random-number, generate a random number between 19 and 120.

var randomNumber = 0;
$("#random-number").text(randomNumber);

// For each of the four crystals, generate a numer between 1 and 12.

var diamond = 0;
var ruby = 0;
var emerald = 0;
var sapphire = 0;

// !! I broke it! Figure out how to get this function to run.
function setGame () {
    diamond = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;
    emerald = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    randomNumber = Math.floor(Math.random() * 101) + 19;
    score = 0;
    $("#score").text(score);
    $("#random-number").text(randomNumber); 
    console.log("Diamond value is now " + diamond);
    console.log("Ruby value is now " + ruby);
    console.log("emerald value is now " + emerald);
    console.log("sapphire value is now " + sapphire);
}

//sets game up to be played.
setGame ();

// When any of the jewels are clicked, add the amount of the gem to the total score.
// !! Should I use a for loop here?

$("#diamond").on("click", function () {
    score = score + diamond;
    $("#score").text(score);
    console.log("Score is now " + score);
    checkScore ();
})

$("#ruby").on("click", function () {
    score = score + ruby;
    $("#score").text(score);
    console.log("Score is now " + score);
    checkScore ();
})

$("#emerald").on("click", function () {
    score = score + emerald;
    $("#score").text(score);
    console.log("Score is now " + score);
    checkScore ();
})

$("#sapphire").on("click", function () {
    score = score + sapphire;
    $("#score").text(score);
    console.log("Score is now " + score);
    checkScore ();
})


function checkScore() {
    if (score === randomNumber) { // If the total score equals randomNumber, add 1 to wins.
        wins++;
        $("#winsTally").text("Wins: " + wins);
        $("#gameStatus").text("You've won!");
        setGame();
    } else if (score !== 0 && score > randomNumber) { // If score goes over random number, ad 1 to losses.
        losses++;
        $("#lossesTally").text("Losses: " + losses);
        $("#gameStatus").text("You've lost.");
        setGame();
    };
}