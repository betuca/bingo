
$(document).ready(function(){

//  printCard();

	drawAllNumbers();

	fillCard();

	$(".ball").click(function() {
	    $(this).toggleClass('ball-selected');
	    $(this).toggleClass('ball-unselected');
	});

});  

//var allValues = drawAllNumbers();

var valuesB = buildValues(1, 15);
var valuesI = buildValues(16, 30);
var valuesN = buildValues(31, 45);
var valuesG = buildValues(46, 60);
var valuesO = buildValues(61, 75);

var numbersB = drawNumbers(valuesB, 5, 15);
var numbersI = drawNumbers(valuesI, 5, 15);
var numbersN = drawNumbers(valuesN, 5, 15);
var numbersG = drawNumbers(valuesG, 5, 15);
var numbersO = drawNumbers(valuesO, 5, 15);

function drawAllNumbers(){
	var allValues = drawNumbers(buildValues(1, 75), 30, 75);

	var values = "";
	for (var i = 0; i < 30; i++) {
		// values += ", " + allValues[i];
//		$('#bingoResults').append(values);
		createBallDiv("bingoResults", allValues[i]);
	}
}

function createLineDiv(lineNumber){
	var id = "line" + lineNumber;
	$('#card').append('<div class="line" id="' + id + '"></div>');

	for (var column = 1; column <= 5; column++) {
		var origin;
		if (column == 1){
			origin = numbersB;
		} else if (column == 2){
			origin = numbersI;
		} else if (column == 3){
			origin = numbersN;
		} else if (column == 4){
			origin = numbersG;
		} else if (column == 5){
			origin = numbersO;
		}
		createBallDiv(id, origin[lineNumber]);
	}
}

function createBallDiv(id, value){
	$('#'+id).append('<div class="ball ball-unselected"><span class="number">'+ value +'</span></div>');
}

function fillCard(){
	for (var i = 0; i < 5; i++) {
		createLineDiv(i);
	}
}

function drawNumbers(values, quantity, maxNumber){

	var numbers = [];
	var indexes = drawUniqueIndexes(quantity, maxNumber);

	for (var i = 0; i < indexes.length; i++) {
		var value = values[indexes[i]];

		numbers.push(value);
	}
	return numbers;
}

function drawUniqueIndexes(quantity, maxNumber){

	var indexes = [];

	while(indexes.length < quantity){
		var currentIndex = Math.floor(Math.random() * maxNumber);
		if (!indexes.includes(currentIndex)){
			indexes.push(currentIndex); 			
		} 
	}
	return indexes;
}

function buildValues(start, end){
	var values = [];

	for (var i = start; i <= end; i++) {
		values.push(i);
	}
	return values;
}
