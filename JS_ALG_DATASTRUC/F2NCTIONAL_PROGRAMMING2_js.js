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