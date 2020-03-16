/* Write an algorithm, either in pseudocode or in code, that converts weights to grams.
The algorithm should take two arguments.
The first argument will be a number,
the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".
Based on the second argument, convert the number to grams and output it.

	Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number.
	(The factors of a number are all numbers that divide evenly into it.
	For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)
	*/

//Algorithm
/*
A number is equal to x
to convert kilogram(kg) to grams: kg/1000
Therefore, x(g)=x(kg)/1000.

 */
var number = 1;
function uniquePositiveFactors(number1){
	while(number<number1){
		if (number%2===0){
			console.log(number)

		}
		number +=1;
	}




}

let result = uniquePositiveFactors(36);
console.log(result);