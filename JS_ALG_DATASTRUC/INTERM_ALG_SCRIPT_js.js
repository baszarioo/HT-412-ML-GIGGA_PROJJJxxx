/* / SUM ALL NUMBERS IN A RANGE */
function sumAll(arr) {
	let max=Math.max(arr[0], arr[1]);
	let min=Math.min(arr[0], arr[1]);
	let sumBetween=0;
	for(let i=min; i<=max; i++){
		sumBetween += i;
	}
	return sumBetween;
}

// v 2;
const sumAll = arr => {
	const startNum=arr[0];
	const endNum=arr[1];
	const numCount=Math.abs(startNum - endNum)+1;
	const sum = ((startNum + endNum) * numCount)/2;	//arithmetic progression summing formula.
	return sum;
};

// v 3;
function sumAll(arr) {
	let sumBetween = 0;
	for (let i = Math.min(...arr); i<=Math.max(...arr); i++) {
		sumBetween += i;
	}
	return sumBetween;
}
sumAll([1,5]);

// v 4;
function sumAll(arr) {
	const [first, last] = [...arr].sort((a, b) => a - b);
	return first !== last 
		? first + sumAll([first + 1, last])
		: first;
}
sumAll([2,6])



/* / DIFF TWO ARRAYS / */
// v 1 -diffArray;
function diffArray(arr1, arr2) {
	const newArr= [];
	function onlyInFirst(first, second) {
		for(let i=0; i<first.length; i++) {
			if(second.indexof(first[i]) === -1) {
				newArr.push(first[i]);
			}
		}
	}
	onlyInFirst(arr1, arr2);
	onlyInFirst(arr2, arr1);
	return newArr;
}
diffArray([1,2,3,5], [1,2,3,4,5]);

// v 2 - differArr;
function diffArray(arr1, arr2) {
	return arr1
		.concat(arr2)
		.filter(item=> !arr1.includes(item) || !arr2.includes(item));
}

// v 3 ; diffArr
function diffArray(arr1, arr2) {
	return [...diff(arr1, arr2), ...diff(arr2, arr1)];
	function diff(a,b) {
		return a.filter(item=>b.indexOf(item)===-1);
	}
}

// v4. ;diffArray;
function diffArray(arr1,arr2) {
	const difference = new Set(arr1);
	arr2.forEach((ele) => 
		difference.has(ele) ? difference.delete(ele) : difference.add(ele)
	);
	return Array.from(difference);
}



/* / SEEK AND DESTROY // */
// v1;
function destroyer(arr, ...valsToRemove) {
	return arr.filter(elem => !valsToRemove.includes(elem));
}
// v 2 :
function destroyer(arr) {
	const valsToRemove = Array.from(arguments).slice(1);
	return arr.filter(function(val) {
		return !valsToRemove.includes(val);
	});
}
// v 1; simplified;
function destroyer(arr) {
	const valsToRemove=Object.values(arguments).slice(1);
	const filteredAway= [];
	for(let i=0; i<arr.length; i++) {
		let removeElement = false;
		for(let j=0;j<valsToRemove.length; j++) {
			if(arr[i] === valsToRemove[j]) {
				removeElements=true;
			}
		}
		if(!removeElement) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}



/* / WHEREFORE ART THOU //x */
// algorithm that will take an array for the first arg. and return an array with all the objects that matches all the properties and values in the Objecvt passed as second parameter.

// v 1;
function whatName(collection, source) {
	const collectionMatches = [];
	for (let i=0; i<collection.length; i++) {
		let foundMismatch = false;
		for(const sourceProp in source) {
			if(collection[i][sourceProp] !== source[sourceProp]) {
				foundMismatch=true;
			}
		}
		if(!foundMismatch) {
			collectionMatches.push(collection[i]);
		}
	}
	return collectionMatches;
}
// v 2;
function whatIsName(collection, source){
	const sourceKeys=Object.keys(source);
	return collection
		.filter(obj=>sourceKeys
			.every(key=>obj[key] === source[key]));
}
// v 3;
function whatNameIs(collection, source) {
	const sourceKeys=Object.keys(source);
	return collection.filter(obj=> {
		for(lety i=0; i<sourceKeys.length; i++){ 
			if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
				return false;
			}
		}
		return true;
	});
}