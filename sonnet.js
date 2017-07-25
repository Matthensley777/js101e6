//1
var element = document.getElementById("sonnet");

var sonnet = element.innerHTML;

//2
var indexOfOrphans = sonnet.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);

//3
console.log("sonnet length", sonnet.length);

//4
var newSonnet = sonnet.replace("winter", "yuletide");

//5
var globalReplace = newSonnet.replace(/the/g, "a large");

//6
element.innerHTML = globalReplace;





