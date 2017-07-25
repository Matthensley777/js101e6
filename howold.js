// 1. How many hours are in a year
var hours = 24;
var days = 365;

console.log("hours in a year", hours * days);

// 2. How many minutes are in a decade

var decade = 10;
var year = 365;
var day = 24;
var minutes = 60;

console.log("minutes in a decade", decade * year * day * minutes);


// 3. How many seconds old they are

var age = 33;
var seconds = 60;

console.log("seconds old", seconds * minutes * day * year * age);



//4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

if (age > 30){
	console.log("I'm old");
} else {
	console.log("I'm young");
}