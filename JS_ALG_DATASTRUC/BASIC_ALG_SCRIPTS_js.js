/* course on fundamentals of algorithmic thinking: to convert temperatures up to handling complex 2D arrays */
/* CONVERT CELSIUS TO FAHRENHEIT */
function convertCtoF(celsius) {
	let fahrenheit=(9* celsius/5)+32;
	return fahrenheit;
}
convertCtoF(30);


/* REVERSE A STRING */
function revereString(str) {
	return str.split("").reverse().join("");
	//or |
	/* let rev="";
	for(let i=str.length-1; i>=0' i--){
			rev+=str.charAt(i);
	}
	return rev;
}
reverseString("hello");


/* FACTORIALIZE A NUMBER */
//recursiven:
function factorialize(num){
	if(num<1){return 1;}
	return num=factorialize(num-1);
}
factorialize(5);
//or:
function factorial(n) {
	if(n<1){
		return "Nothing";
	} else {
		let result=1;
		for(let i=2;i<=n;i++){
			result*=i;
		}
		return result;
	}
}
for(let i=-1;i<10;i++){
	let result=factorial(i);
	console.log(`${i}!=${result}`);
}