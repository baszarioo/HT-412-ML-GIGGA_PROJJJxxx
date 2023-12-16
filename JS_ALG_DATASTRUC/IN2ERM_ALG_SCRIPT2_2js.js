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

