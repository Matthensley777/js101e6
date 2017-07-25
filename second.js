var perry = "penguin";
var nelly = "owl";

console.log("perry is a " + perry);

var quote = "when you don’t create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.";

var numberOfCharacters = quote.length;
console.log("length of quote", numberOfCharacters);

// built in methods
// .indexOf()
// .charAt()
// .replace()

console.log(quote.indexOf("things")); // will give the index of the beginning of the string (first encounter)

console.log(quote.charAt(50)); // will give the character at the specified index.
var quote = quote.replace(/things/g, "robots");
document.getElementById("quote").innerHTML = quote;

var element = document.getElementById("secondQuote");
var jsString = element.innerHTML;

console.log(jsString);