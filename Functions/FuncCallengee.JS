var age = 28;

function lifeInDays(age) {
    var deathday = 90 * 365;
    var livedDays = age * 365;
    var daysLeft = deathday - livedDays;
    return daysLeft;
}

function lifeInWeeks(age) {
    var deathWeek = (90 * 52);
    var livedWeeks = (age * 52);
    var weeksLeft = deathWeek - livedWeeks;
    return weeksLeft;
}

function lifeInMonths(age) {
    var deathMonth = 90 * 12;
    var monthsLived = age * 12;
    var monthsLeft = deathMonth - monthsLived;
    return monthsLeft;
}

var lifeLeftInDays = ((90  - age) * 365);
var lifeLeftInWeeks = ((90 - age) * 52);
var lifeLeftInMonths = ((90 - age) * 12);


console.log("You have " + lifeLeftInDays + " days," + lifeLeftInWeeks + " weeks, and " + lifeLeftInMonths + " months left.");
