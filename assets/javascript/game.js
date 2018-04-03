
$(document).ready(function() {

var number = "";

function randomMatchNumber(min,max)
{
    return Math.floor(Math.random()*(120-19+1)+19);
}

number = randomMatchNumber() + number;

$("#number").append("<br>" + number);

console.log(number);


var crystalOneNumber ="";
var crystalTwoNumber ="";
var crystalThreeNumber ="";
var crystalFourNumber ="";

function randomCrystalNumber(min,max)
{
    return Math.floor(Math.random()*(12-1+1)+1);
}

crystalOneNumber = randomCrystalNumber() + crystalOneNumber;
crystalTwoNumber = randomCrystalNumber() + crystalTwoNumber;
crystalThreeNumber = randomCrystalNumber() + crystalThreeNumber;
crystalFourNumber = randomCrystalNumber() + crystalFourNumber;

console.log(crystalOneNumber);


var totalScore ="";



});