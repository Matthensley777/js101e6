
var color =["chartreuse", "navy", "forest green", "aqua", "purple", "frost", "emerald", 
"international-rescue orange", "seafoam green", "firehouse red"];
console.log(color.sort());

var array = color;

for(var i = 0; i < color.length; i++) {
	console.log("the color at " + i + " is " + array[i]);
}


// looping exersise

// Write a for loop that uses a counter variable initialized at 5 and then increments it by 
// 10 every time it executes. Use console.log() to output the value of the counter variable each 
// time through the loop. Stop execution of the loop if the counter variable’s value is greater than 
// 120.

// Example output:

// Current value is 5
// Current value is 15
// Current value is 25 (edited)

for (var i = 5; i <= 120; i = i + 10) {
	console.log("current value ", i);
}















