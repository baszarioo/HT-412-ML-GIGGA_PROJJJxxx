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