

var valuesB = buildValues(1, 15);
var valuesI = buildValues(16, 30);
var valuesN = buildValues(31, 45);
var valuesG = buildValues(46, 60);
var valuesO = buildValues(61, 75);

function printCard(){

	// document.write(valuesB);

	var numbersB = drawNumbers(valuesB, 5);
	document.write("numbersB: " + numbersB);
	document.write("<br>");
	var numbersI = drawNumbers(valuesI, 5);
	document.write("numbersI: " + numbersI);
	document.write("<br>");
	var numbersN = drawNumbers(valuesN, 5);
	document.write("numbersN: " + numbersN);
	document.write("<br>");
	var numbersG = drawNumbers(valuesG, 5);
	document.write("numbersG: " + numbersG);
	document.write("<br>");
	var numbersO = drawNumbers(valuesO, 5);
	document.write("numbersO: " + numbersO);
	document.write("<br>");

	document.getElementById("card").innerHTML = numbersB + "<br>" + numbersI + "<br>" + numbersN + "<br>" + numbersG + "<br>" + numbersO;
}

function drawNumbers(values, quantity){

	var numbers = [];
	var indexes = drawUniqueIndexes(quantity);

	for (var i = 0; i < indexes.length; i++) {
		var value = values[indexes[i]];
		numbers.push(value);
	}
	return numbers;
}

function drawUniqueIndexes(quantity){

	var indexes = [];

	while(indexes.length < quantity){
		var currentIndex = Math.floor(Math.random() * 16);
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
