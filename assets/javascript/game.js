
$(document).ready(function() {

var number = "";

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(120-19+1)+19);
}

number = randomIntFromInterval() + number;

$("#number").append("<br>" + number);

console.log(number);




});