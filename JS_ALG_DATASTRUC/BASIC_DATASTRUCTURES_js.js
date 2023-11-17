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