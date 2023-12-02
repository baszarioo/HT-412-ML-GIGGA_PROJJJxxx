/* fp is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs. 
- pure functions -how to avoid mutations -how to write cleaner code with methods like .map() and .filter() */

/* LEARN ABOUT FUNCTIONAL PROGRAMMING */
// function scope is: INPUT -> PROCESS -> OUTPUT
/* FUNCTIONAL PROGRAMMING IS ABOUT: 
	1. Isolated functions = there is no dependence on the state of the program, which includes global variables that are subject to change.
	2. Pure functions = the same input always gives the same output.
	3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled.
*/
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
	const teaCups = [];
	
	for(let cups=1; cups<=numOfCups +=1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};
const tea4TeamFcc = getTea(40);



/* UNDERSTAND FUNCTIONAL PROGRAMMING TERMINOLOGY */
//1. callbacks are functions that are slipped or passed into another function to decvide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JS the criteria for how to filter an array.
//2. Functions that can be assigned to a variable, poassed into another function, or returned from another function just like any other normal values are called first class functions. In JS, all functions are first class functions.
//3. The functions that take a function as an argument, or return a function as a return value, are called higher order functions.
//4. When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

//exercise:
//Functions that returns a string representing a cups of different tea.
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
	const teaCups= [];
	for(let cups=1; cups<= numOfCups; cups +=1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups();
};

const tea4GreenTeamFCC= getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC= getTea(prepareBlackTea, 13);
console.log(
	tea4GreenTeamFCC,
	tea4BlackTeamFCC,
);	// +> ['greenTea','greenTea' (x12) ] ['blackTea', 'blackTea' (x26) ]