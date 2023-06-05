// have 2 names 
var yourName = prompt("What is your name?");
var crushName = prompt("Who is your crush?");

// need to show a result that will "randomly" select 1-100%
var number = Math.random();
var percentage = number * 100;
var loveCalc = Math.round(percentage); 

var results = console.log(Math.round(loveCalc));

alert("your love interest has about " + loveCalc + "% chance to workout." )