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
		for(let i=0; i<sourceKeys.length; i++){ 
			if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
				return false;
			}
		}
		return true;
	});
//20%




/* // SPINAL TAP CASE // */
// v 1:
function spinalCase(str) {
	var regex=/\s+|_+/g;	//variable for white spaces and underscores.
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2");	 // replace low-upper case to low-space-uppercase
	return str.replace(regex, "-").toLowerCase();	// replace space and _ with -
}
// v 2;
function spinalCase(str) {
	str=str.replace(/([a-z])([A-Z])/g, "$1 $2");
	return str
		.toLowerCase()
		.split(/(?:_| )+/)
		.join("-");
}
// v 3:
function spinalCase(str) {
	return str
		.split(/\s|_|(?=[A-Z])/)
		.join("-")
		.toLowerCase();
}



/* // PIG LATIN // */
// add ay or way to the word.
function translatePigLatin(str){
	let consonantRegex=/^[^aeiou]+/;
	let myConsonants = str.match(consonantRegex);
	return myConsonants !== null
		? str
			.replace(consonantRegex, "")
			.concat(myConsonants)
			.concat("ay")
		: str.concat("way");
}
// v 2;
fucntion translatePigLatin2(str){
	var pigLatin="";
	var regex = /[aeiou]/gi;
	if(str[0].match(regex)) {
		pigLatin = str+"way";
	} else if (str.match(regex) === null) {
		pigLatin = str + "ay";
	} else {
		var vowelIndice = str.indexOf(str.match(regex)[0]);	// find how many consonants before the 1st vowel.
		pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
	}
	return pigLatin;
}
// v 3 ;
function translatePigLatin3(str){
	if(str.match(/^[aeiou]/)) return str+"way";
	const consonantCluster = str.match(/^[^aeiou]+/)[0];
	return str.substring(consonantCluster.length) + consonantCluster + "ay";
}
// v 4;
function translatePigLatin4(str) {
	return str
		.replace(/^[aeiou]\w*/, "$&way")
		.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
// v 5; iter;
function translatePigLatin5(str, charPos=0) {
	return ['a','e','i','o','u'].includes(str[0])
		?str + (charPos === 0 ? 'way' : 'ay')
		: charPos === str.length
			? str + 'ay'
			:translatePigLatin(str.slice(1) + str[0], charPos + 1);
}



/* // SEARCH AND REPLACE // */
// V1: 
function myReplace1(str, before, after) {
	var index=str.indexOf(before);
	if(str[index]=== str[index].toUpperCase()) {
		after=after.charAt(0).toUpperCase() + after.slice(1);
	} else {
		after = after.charAt(0).toLowerCase() + after.slice(1);
	}
	str = str.replace(before, after);
	return str;
}
// V2;
function myReplace(str,before,after) {
	if(/^[A-Z]/.test(before)) {
		after=after[0].toUpperCase() + after.substring(1);
	} else {
		after=after[0].toLowerCase() + after.substring(1);
	}
	return str.replcae(before, after);
}
//V3:
function myReplcae(str, before, after) {
	function applyCasing(source,target) {
		var targetArr=target.split("");
		var sourceArr=target.split("");
		for(var i=0; i<Math.min(targetArr.length, sourceArr.length); i++) {
			if(/[A-Z]/.test(sourceArr[i])) {
				targetArr[i] = targetArr[i].toUpperCase();
			}
			else targetArr[i] = targetArr[i].toLowerCase();
		}
		return targetArr.join("");
	}
	return str.replace(before, applyCasing(before, after));
}
// V $4;
//method to the string object, not overriding the existing one (if it is).
String.prototype.capitalize = 
	String.prototype.capitalize || 
	function() {
		return this[0].toUpperCase() + this.slice(1);
	};
const Util=(function() {
	function textCase(str, tCase) {
		if(tCase) {
			return setCase(str, tCase);
		} else {
			return getCase(str);
		}
		function setCase(str, tCase) {
			switch(tCase) {
				case "uppercase":
					return str.toUpperCase();
				case "lowercase":
					return str.toLowerCase();
				case "capitalized":
					retrun str.capitalize();
				default:
					return str;
			}
		}
		function getCase(str) {
			if(str===str.toUpperCase()) {
				return "uppercase";
			}
			if(str===str.toLowerCase()) {
				return "lowercase";
			}
			if(str===str.capitalize()) {
				return "capitalized";
			}
			return "normal";
		}
	}
	return {
		textCase
	};
})();
	}