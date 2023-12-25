/* /12/21/ Sum ALL Primes / */
//v e r s i o n 1:
function isPrime(number) {
	if(number < 2) {
		return false;
	}
	for(let i=2; i<=Math.sqrt(number); i++) {
		if(number % i === 0) {
			return false;
		}
	}
	return true;
}
function sumPrimes(num){
	let sum=0;
	for(let i=2; i<=num; i++) {
		if(isPrime(i)){
			sum+=i;
		}
	}
	return sum;
}sumPrimes(10); //+> 17\
 //v e r s i o n 2;
function sumPrimes(num) {
	let primes = [];
	for(let i=2; i<=num; i++){
		if(primes.every((primes) => i % primes !== 0))
			primes.push(i);
	}
	return primes.reduce((sum, prime) => sum + prime, 0);
}
//v e r s i o n 3;
function sumPrimes(num) {
	let isPrime = Array(num+1).fill(true);
	isPrime[0] = false;
	isPrime[1] = false;
	for(let i = 2; i<=Math.sqrt(num); i++) {
		if(isPrime[i]) {
			for(let j=i*i; j<=num; j+=i)
				isPrime[j]=false;
		}
	}
	return isPrime.reduce(
		(sum, prime, index) => prime ? sum + index : sum, 0
	);
}



/* /13/21/ SMALLEST COMMON MULTIPLE / */
//wrong approach:
function gcd(a, b){
	return b===0 ? a:gcd(b, a%b);
}
function lcm(a,b){
	return (a*b)/gcd(a,b);
}
function smallestCommons(arr) {
	arr.sort(function (a,b) {
		return a-b;
	});
	let lcmValue = arr[0];
	for(let i=arr[0]+1; i<=arr[i]; i++){
		lcmValue=lcm(lcmValue, i);
	}
	return lcmValue;
}
smallestCommons([1,5]);
//VV1: looping.
function smallestCommons(arr) {
	const [min, max]=arr.sort((a, b)=> a-b);
	const numberDivisors = max - min + 1;
	let upperBound = 1;
	for(let i=min; i<=max; i++){
		upperBound *= i;
	}
	for(let multiple=max; multiple <= upperBound; multiple += max) {
		let divisorCount = 0;
		for(let i=min; i<=max; i++) {
			if(multiple % i === 0) {
				divisorCOunt += 1;
			}
		}
		if(divisorCount === numberDivisors) {
			return multiple;
		}
	}
}
smallestCommons([1, 5]);
//VV2: ES6 looping;
function smallestCommons2_ES6(arr) {
	const [min, max] = arr.sort((a, b) => a - b);
	const range = Array(max - min + 1)
		.fill(0)
		.map((_, i) => i + min);
	const upperBound = range.reduce((prod, curr) => prod * curr);
	for(let multiple = max; multiple <= upperBound; multiple += max) {
		const divisible = range.every((value)=>multiple % value === 0);
		if(divisible) {
			return multiple;
		}
	}
}
//VV3: GCD & LCM ;
function smallestCommons3_GCDLCM(arr) {
	const [min,max] = arr.sort((a,b)=> a-b);
	const range = Array(max - min + 1)
		.fill(0)
		.map((_, i) => i + min);
	const gcd = (a, b) => (b === 0) ? a : gcd(b, a%b);
	const lcm = (a, b) => a*b / gcd(a,b);
	return range.reduce((multiple, curr) => lcm(multiple, curr));
}
//VV4: Prime_factorization ;
function smallestCommons(arr) {
	const primeFactors = {};
	const [min, max] = arr.sort((a,b) => a - b);
	for(let i=min; i<=max; i++) {
		const currentFactors = getPrimeFactors(i);
		for (let prime in currentFactors) {
			if(!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
				primeFactors[prime] = currentFactors[prime]
			}
		}
	}
	// Build SCM from factorization
	let multiple = 1;
	for(let prime in primeFactors) {
		multiple *= prime ** primeFactors[prime];
	}
	return multiple;
}
function getPrimeFactors(num) {
	const factors = {};
	for(let i=2; i<=num; i++) {
		while ((num % i) === 0) {
			factors[i] = (factors[i]) ? factors[i] + 1 : 1;
			num /= i;
		}
	}
	return factors;
}
				
				
				
/* //14/21// DROP IT // */	
//v e r 1 1 1:
function dropElements(arr, func){ 
	while(arr.length > 0 && !func(arr[0])) {
		arr.shift();		//Array.prototype.shift()
	}
	return arr;
}
dropElements([1,2,3,4], function(n) { 
	return n >= 3;
});
// v e r 2 2 2:
function dropElements(arr, func) {
	let sliceIndex = arr.findIndex(func);
	return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
dropElements([1,2,3,4], function(n) {
	return n>=3;
});
// v e r 3 3 3:
function dropElements(arr, func) {
	let originalLen =arr.length;
	for(let i=0; i<originalLen; i++) {
		if(func(arr[0])) {
			break;
		} else {
			arr.shift();
		}
	}
	return arr;
}
dropElements([1,2,3,4], function(n) {
	return n >= 3;
}
// v e r 4 4 4: 
function dropElements(arr, func) {
	return arr.length > 0 && !func(arr[0])
		? (dropElements(arr.slice(1), func))
		: arr;
}
dropElements([1,2,3], function(n) {return n<3; });



/* //15/21// STEAMROLELR // */	
//flattten a nested array _ account for varying levels of nesting.
function steamrollArray(arr) {
	const flattenedArray = [];
	for(let i=0; i<arr.length; i++) {
		if(Array.isArray(arr[i])) {
			flattenedArray.push(...steamrollArray(arr[i]));
		} else {
			flattenedArray.push(arr[i]);
		}
	}
	return flattenedArray;
};
steamrollArray([1, [2], [3, [[4]]]]);
// v2 v2 
function steamrollArray(arr) {
	const flat = [].concat(...arr);
	return flat.some(Array.isArray) ? steamrollArray(flat): flat;
}
// v3 v3 v3:
function steamrollArray(arr) {
	return arr
		.toString()
		.replace(",,", ",")
		.split(",")
		.map(function(v) {
			if(v=="[object Object]") {	//bring back empty objects.
				return {};
			} else if(isNaN(v)) {
				return v;
			} else {
				return parseInt(v); // if a number in a string, convert it 
			}
		});
}
// v4 v4 v4 v4
function steamrollArray(val, flatArr=[]) {
	val.forEach(item => {
		if(Array.isArray(item)) steamrollArray(item, flatArr);
		else flatArr.push(item);
	});
	return flatArr;
}
// v5 v5 v5 v5 v5:
function steamrollArray(arr, flatArr = []) {
	const elem = arr.pop();
	return elem
		? !Array.isArray(elem)
			? steamrollArray(arr, [elem, ...flatArr])
			: steamrollArray(arr.concat(elem), flatArr)
		: flatArr;
}

/* //16/21// BINARY AGENTS;// */
// translate binary to english ok in js./?
// vershion1;
function binaryAgent1(str) {
	var biString = str.split(" ");
	var uniString = [];
	for(var i =0; i<biString.length; i++) {
		uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
	}
	return uniString.join("");
}
//...
function binaryAgent2(str) {
	str=str.split(" ");
	var power;
	var decValue =0;
	var sentence = "";
	for( var s =0; s<str.length; s++) {
		for(var t=0; t<str[s].length; t++) {
			if(str[s][t] == 1){
				power=Math.pow(2, +str[s].length -t -1);
				decValue+=power;
			}
		}
		sentence+=String.fromCharCode(decValue);
		decValue=0;
	}
	return sentence;
}
//tests..
function binaryAgent3(str) {
	return String.fromCharCode(
		...str.split(" ").map(function(char) {
			return parseInt(char, 2);
		})
	);
}
//test22..
//alternative
const binaryAgent = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));



/* ///17/21// EVERYTHING BE TRUTHY checker;/// */
function truthCheck1(collection, pre) {
	let counter = 0;
	for(let c in collection) {
		if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
			counter++;
		}
	}
	return counter == collection.length;
} //example test;
truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name:"Naomi", role:"", isBot: false }, {name:"CamperBot", role:"Bot", isBot: true }], "isBot");

// v 2 using Array.every()
function truthCheck2(collection, pre) {
	return collection.every(function (element) {
		return element.hasOwnProperty(pre) && Boolean(element[pre]);
	});
}
// v 3 ss collection.
function truthCheck(collection, pre) {
	return collection.every(obj => obj[pre]);
}



/* ///18/21// ARGUMENTS OPTIONAL ;/// */
//create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether1() {
	const [frist,second] = arguments;
	if(typeof(first) === 'number') {
		if(typeof (second) === 'number') return first + second;
		if(arguments.length === 1) return (second) => addTogether(first, second);
	}
}
//version22
function addTogether() {
	const [first,second] = arguments;
	if(typeof(first) !== "number"){
		return undefined;
	}
	else if (arguments.length === 1) {
		function addSecond(second) {
			if(typeof(second) !== "number") {
				return undefined;
			} else {
				return first + second;
			}
		}
		return addSecond;
	}
	else if (typeof(second) !== "number") {
		return undefined;
	}
	else {
		return first + second;
	}
}
// version 3 3 3
function addTogether() {
	const [first, second] = arguments;
	function addSecond(second) {
		if(typeof(second) === 'number') return first + second;
	}
	if(typeof(first) === "number") {
		if(arguments.length === 1) return addSecond;
		if(arguments.length === 2) return addSecond(second);
	}
}




/* ////19/21// MAKE A PERSON ;//// */
const Person = function(first, last) {
	let firstName= first;
	let lastName= last;
	this.getFirstName = function() {
		return firstName;
	};
	this.getLastName = function () {
		return lastName;
	};
	this.getFullName = function() {
		return this.getFirstName() + " " + this.getLastName();
	};
	this.setFirstName = function(first){
		return firstName = first;
	};
	this.setLastName = function(last) {
		return lastName = last;
	};
	this.setFullName = function(first, last) {
		this.setFirstName(first);
		this.setLastName(last);
		return this.getFullName();
	};
};
const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());



/* ////20/21// MAP THE DFEBRIS: ;//// */
function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	const a = 2*Math.PI;
	const newArr=[];
	 const getOrbPeriod = function(obj) {
		const c = Math.pow(earthRadius + obj.avgAlt, 3);
		const b = Math.sqrt(c / GM);
		const orbPeriod = Math.round(a * b);
		return {name: obj.name, orbitalPeriod: orbPeriod};
     };
	for(let elem in arr) {
		newArr.push(getOrbPeriod(arr[elem]));
	}
	return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
//solution2; loop + 
fucntion orbitalPeriod(arr) {
	const GM= 398600.4418;
	const earthRadius = 6367.4447;
	const newarr = [];
	for(let elem in arr) {
		const orbitalPer = Math.round(
			2* Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
		);
		newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
	}
	return newArr;
}
//solution3 - newArray to prevent modifications
function orbitalPeriod(arr) {
	const GM= 398600.4418;
	const earthRadius= 6367.4447;
	const newArr = JSON.parse(JSON.stringify(arr));
	newArr.forEach(function(item) {
		const tmp = Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
		);
		delete item.avgAlt;
		item.orbitalPeriod = tmp;
	});
	return newArr;
}
//solution 4;
function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	return arr.map(({ name, avgAlt }) => {
		const earthRadius + avgAlt;
		const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
		return { name, orbitalPeriod };
	});
}
