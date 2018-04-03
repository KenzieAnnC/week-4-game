
$(document).ready(function () {

    var matchNumber = "";
    var totalScore = 0;
    var crystalOneNumber = 0;
    var crystalTwoNumber = 0;
    var crystalThreeNumber = 0;
    var crystalFourNumber = 0;
    var wins = 0;
    var losses = 0;
    

    function randomMatchNumber(min, max) {
        return Math.floor(Math.random() * (120 - 19 + 1) + 19);
    }

    matchNumber = randomMatchNumber() + matchNumber;

    $("#number").append("<br>" + matchNumber);

    console.log(matchNumber);


   

    function randomCrystalNumber(min, max) {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

    crystalOneNumber = randomCrystalNumber() + crystalOneNumber;
    crystalTwoNumber = randomCrystalNumber() + crystalTwoNumber;
    crystalThreeNumber = randomCrystalNumber() + crystalThreeNumber;
    crystalFourNumber = randomCrystalNumber() + crystalFourNumber;

    console.log(crystalOneNumber);


    

    $("")

});