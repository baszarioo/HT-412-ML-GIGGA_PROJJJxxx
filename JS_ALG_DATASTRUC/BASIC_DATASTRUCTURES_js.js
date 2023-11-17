/* Data can be stored and accessed in many ways: examples of js data strucrtures are: arrays and objects */
/* more about the differences between arrays and objects, and which to use in different situtations. Also we will get to know with how to use helpful JS methods like: splice(); and Object.keys(); to access and manipulate data. */

/* Use an Array to Store a Collection of Data */
// example:
let simpleArray=['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); // +> 7

let complexArray=[
	[ { one:1, two:2 }, { three:3, four:4}],
	[ { a:"a", b:"b" }, { c: "c", d: "d" } ]
];


/* Access an Array's Contents Using Bracket Notation */
let ourArray=["a", "b", "c"];
let ourVariable=ourArray[0]; //+> a .
ourArray[1]="not b anymore";


/* Add Items to an Array with push() and unshift() */
// example:
let twentyThree='XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');	// +> ['XIX', 'XX', 'XXI', 'XXII'].
//then:
romanNumerals.push(twentyThree);	// +> ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

// or||
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));


/* Remove Items from an Array with pop() and shift() */
// example: 
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();		// +> ['whats up?', 'hello'].
greetings.shift(); 		// +> ['hello'].

//but: 
let popped = greetings.pop();	// +> popped = ['hello']. 	and greetings = [].
// exercise: 
function popShift(arr) {
  let popped = arr.pop(); // 
  let shifted = arr.shift(); // C this line
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));


/* Remove Items Using splice() */
// splice() can take up to 3 arguemnts, whereas first 2 represents indexes+ positions.
//examples:
let array=['today', 'was', 'not', 'so', 'great'];
array.splice(2,2);	// +> ['today', 'was', 'great'].
//or||
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
//exercise:
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
arr.splice(3,6);

console.log(arr);	// [4,5,1] : score=10.


/* Add Items Using splice() */
// sample:
const numbers=[10,11,12,12,15];
const startIndex=3;
const amountToDelete=1;
numbers.splice(startIndex, amountToDelete,13,14);
console.log(numbers);	// +> [10,11,12,13,14,15];

function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


/* Copy Array Items Using slice(); */
let weatherConditions=['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather=weatherConditions.slice(1,3);		// +> todaysWeather==['snow','sleet'].
// and weatherConditions remain the same.

function forecast(arr) {
  let weather=arr.slice(2,4);		// it doesn't work on arr object only from parameter.
  return weather;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


/* Copy an Array with the Spread operator; */
let thisArray=[true,true,udnefined,false,null];
let thatArray=[...thisArray];		// +> thatArray ==  [true, true, undefined, false, null].

//exercise:
function copyMachine(arr, num) {
	let newArr=[];
	for( let i=0; i<num;  i++) {
			newArr.push([...arr]);
	}
	return newArr;
}
//or: ||
function copyMachine(arr,num) {
	let newArr=[];
	while(num>=1) {
		newArr.push([...arr]);
		num--;
	}
	return newArr;
} console.log(copyMachine([true,false,true],2));		// +> [[true,false,true],[true,false,true]]


