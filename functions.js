console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);

function nuggetFactory(animalInput) {
    // chickens are cut up
    cutUpInput(animalInput);
    // chickens are separated into chunks
    // take chunks and fry them
    // package the nuggets
}

function cutUpInput(input) {
    var output = input.lenght * 20;
    return output;
}

// function decloration
var summation;
var constant = 40;

function doesAddition(numberOne, numberTwo) {
    summation = numberOne + numberTwo + constant;

    function doesMoreMath() {
        var value = 42;
    }
    doesMoreMath();
}

doesAddition(2, 3);

console.log(summation);

var additionAction = function (first, second) {
	return first + second;
}

console.log(additionAction(4, 9));






