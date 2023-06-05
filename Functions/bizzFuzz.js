// bizzFuzz game
// bizz == n % n = 3
//Fuzz == n % n = 5
var output = [];
var number = 1;
var bizz = number % 3;
var fuzz = number % 5;
function bizzFuzz() {
    
    if (bizz == 0 && fuzz == 0) {
        console.log("bizzFuzz");
        output.push("bizzFuzz");
        } else if (bizz == 0) {
            console.log("bizz");
            output.push("bizz");
        } else if (fuzz == 0) {
            console.log("fuzz");
            output.push("fuzz");
        } else {
            console.log(output);
            output.push(number);
        }
        number++;
    }