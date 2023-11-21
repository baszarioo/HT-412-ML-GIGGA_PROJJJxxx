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


/* FIND THE LONGEST WORD IN A STRING */
function longestWord(str) {
	const words=str.split(' '); //split into array of words
	let longest=0;
	for(let i=0; i<words.length; i++){
		const word=words[i];
		const len=word.length;
		longest=Math.max(longest, len);
	}
	return longest;
}


/* RETURN LARGEST NUMBERS IN ARRAYS */
function largestOfFour(arr){
	var results=[''];
	for(var i=0;i<arr.length; i++){
		var largest=arr[i][0];
		for(var j=1; j<arr[i].length; j++) {
			if(arr[i][j]>largest){
				largest=arr[i][j];
			}
		}
		results.push(largest);
	}
	return results;
}
console.log(largestOfFour([[13,2,7,12],[3,8,10,1],[12,15,17,14],[4,5,6,7]]);


/* CONFIRM THE ENDING */
// can be solved also with the .endsWith() method.
function confirmEnding(str, target){
	if(target.length > str.length) {
		return false;
	}
	return str.slice(str.length-target.length)===target;
}
console.log(confirmEnding("Goodbye Cruel World", "World")); // outputs: false
// or"
function confirmEndingCheck(str, target) {
	return str.endsWith(target);
}
console.log(confirmEndingCheck("hello world", "world"));


/* REPEAT A STRING REPEAT A STRING */
function repeatString(str, num){
	if(num <=0){
		return "";
	}
	var result="";
	for(var i=0;i<num;i++){
		result+=str;
	}
	return result;
}
repeatString("abc",3);


/* TRUNCATE A STRING */
// return the truncated string with a ... ending.
function truncateString(str, num){
	if(str.length>num){
		return str.slice(0,num-3)+"...";
	} else {
		return str;
	}
}
// or |
function truncateString(str, num){
	if(str.length > num){
		return str.substring(0, num)+'...';
	} else {
		return str;
	}
}
truncateString("A-tisket a-tasket A green and yellow basket",8) // +> A tisket...


/* FINDERS KEEPERS */
//Create a function that looks through an array 'arr' and returns the first element in it that passes.
function findElement(arr,func) {
	for(let i=0; i<arr.length; i++){
		const element = arr[i];
		if(func(element)) {
			return element;
		}
	}
	return undefined;
}
findELement([1,2,3,4], num=> num % 2 === 0);

			
/*	BOO WHO */
function booWho(value) {
	return typeof value === 'boolean';
}
booWho(null);


/* TITLE CASE A SENTENCE */
function titleCase(str){
	return str.toLowerCase().split(' ').map(word =>word.charAt(0).toUpperCase() + word.slioce(1)).join(' ');
}	//it works fine, but also joins all words.
function titleCase(str) {
	let words=str.toLowerCase().split(' ');
	let titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
	let titleCasedSentence=titleCasedWords.join(' ');
	return titleCasedSentence;
}
let result=ttileCase("I'm a little hleb");
// or ""
function titleCase(str) {
	const newTitle=str.split(" ");
	const updatedtitle=[];
	for(let st in newTitle) {
		updatedTitle[st]=newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
	}
	return updatedTitle.join(" ");
}
// or | |v2 !!!!!!!!
function titleCase(str) {
	return str
		.toLowerCase().split(" ")
		 .map(val=>val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
		  .join(" ");
}
titleCase("Imi timi jimy");
// or | |v3 || ^^^^^^^^^
function titleCase(str) {
	return str.toLowerCase().replace(/(^|\s)\s/g, L=>L.toUpperCase());
}


/* SLICE AND SPLICE */
functrion frankenSplice(arr1, arr2, n) {
	let arr2Copy=arr2.slice();
	arr2Copy.splice(n, 0, ...arr1);
	return arr2Copy;
}
console.log(frankenSplice([1,2,3],[4,5,6], 1)); // +> [4,1,2,3,5,6].