/* /////USE HIGHER-ORDER FUNCTIONS MAP, FILTER, OR REDUCE TO SOLVE A COMPLEX PROBLEM()/ */
//solution1:
const squareList=(arr)=> {
	return arr
		.filter(num => num > 0 && num % parseInt(num) === 0)
		.map(num => Math.pow(num, 2));
}; //. ... 

//solution2: 
const squareList = arr => {
	return arr.reduce((sqrIntegers, num) => {
		return Number.isInteger(num) && num > 0
			? sqrIntegers.concat(num * num)
			: sqrIntegers;
	}, []);
};
const squaredIntegers=squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [25, 9];



/* //// SORT AN ARRAY ALPHABETICALLY USING THE SORT METHOD / */
// sort method sorts the elements of an array according to the callback function./
function ascendingOrder(arr) {
	return arr.sort(function(a,b) {
		return a-b;
	});
} 
ascendingOrder([1,5,2,3,4]);	//+> [1,2,3,4,5];

//example2; reversed sort.
fucntion reverseAlpha(arr) {
	return arr.sort(function(a,b){
		return a===b ? 0:a<b ? 1:-1;
	});
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);	//+> ['z','s','l','h','b'].

//descending alphabetic sort.
function alphabeticalOrder(arr) {
	return arr.sort(function(a,b) {
		return a===b ? 0 : a<b ? -1 : 1;
	});
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);




/* ////RETURN A SORTED ARRAY WITHOUT CHANGING THE ORIGINAL ARRAY/ */
// side effect of the sort method => mutation.
// prevent that by [slice or concat to copy] and then apply sort().
const globalArray=[5,6,3,2,9];
function nonMutatingSort(arr) {
	return [].concat(arr).sort(function(a, b) {
		return a-b;
	});
}
nonMutatingSort(globalArray);



/* /// SPLIT A STRING INTO AN ARRAY USING THE SLPIT METHOD / */
// exercise: 
const str = "Hello World";
const bySpace = str.split(" ");		// +> ["Hello", "World"];
const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);	// +> ["How", "are", "you", "today"]

// use the split method inside a function to split str -> into an array of words.
function splitify(str) {
	return str.split(/\W/);
}
splitify("Hello World,I-am code");




/* /// COMBINE AN ARRAY INTO A STRING USING THE JOIN METHOD /*/
	const arr=["Hello", "World"];
	const str=arr.join(" ");	//+> Hello World
	// join method to replace a '-' with a spacebar.
function sentensify(str) {
	return str.split(/\W/).join(" ");	//any non-word character.
}
sentensify("May-the-force-be-with-you");



/* ///APPLY FUNCTIONAL PROGRAMMIN TO CONVERT STRINGS TO URL SLUGS/ */
 // inotherwords. replace " " to "-", and change all uppercased into lowercase.
function urlSlug(title) {
	return title.toLowerCase().trim().split(/\s+/).join("-");
}
var winterComing = urlSlug("Winter Is Coming");		/* +> "winter-is-coming"  */

 // solution2:
function urlSlug2(title) {
	return title.split(" ").filter(substr => substr !== "").join("-").toLowerCase();
}
var wiunterComing = urlSlug(globalTitle); // +> Should be "winter-is-coming".




/* //// USE THE EVERY METHOD TO CHECK THAT EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA. */
const numbers=[1,5,8,0,10,11];
numbers.every(function(cuurentValue) {
	return currentValue<10;
});

//function to check if every number in arr is positive:
function checkPositive(arr) {
	return arr.every(val => val > 0);
} checkPOsitive([1,2,3,-4,5]);
//solution:2;
function checkPositive(arr) {
	return arr.every(function(value) {
		return value >0;
	});
} checkPositive([1,2,3,-4,5]);
/* //// USE THE EVERY METHOD TO CHECK THAT EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA. */



/* ////USE THE SOME METHOD TO CHECK THAT ANY ELMENETS IN AN ARRAY MEET A CRITERIA */
// checking if any elements in the numbers array is less than :
const numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
	return currentValue < 10;		// if there's at least one element passing test.
});
//solution to check if there is there any positive number in an array:
function checkPositive(arr) {
	return arr.some(function(value){ 
		return value>0;
	});
}
checkPositive([1,2,3,-4,5]);




/* /// INTRODUCTION TO CURRYING AND PARTIAL APPLICATION/ */
// arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

//example:
function unCurried(x,y) {
	return x+y;
}
function curried(x) {
	return function(y) {
		return x+y;
	}
}
const curried =x => y => x + y;
curried(1)(2);		// +> 3

//example 2: it's useful when you can't supply all the arguments to a function at 1 time.
const funcForY=curried(1);
console.log(funcForY(2)); // 3;

// partial application: WHOATT:
function impartial(x,y,z) {
	return x+y+z;
}
cosnt partialFn=impartial.bind(this, 1,2);
partialFn(10); // 13.
//	/	/	//	/	/	//	/	/	//	

function add(x) {
	return function(y) {
		return function(z) {
			return x+y+z;
		};
	};
} 
add(10)(20)(30);
// or 	or	 or		or
function add(x) {
	return y=>z=>x+y+z;
} add(10)(20)(30); 
