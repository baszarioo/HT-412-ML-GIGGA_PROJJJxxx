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



/* UNDERSTAND THE HAZARDS OF USING IMPERATIVE CODE  */
// one example is to instead of the for loop, to call the map method which handles the details of iterating over an array.

//version1: not really working.
function Window(tabs) {
	this.tabs=tabs;
}
Window.prototype.tabClose = function (index) {
	var tabsBeforeIndex = this.tabs.slice(0, index);
	var tabsAfterIndex = this.tabs.slice(index+1); 
	this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
	return this.tabs;
};
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
var videoWindow =new Window(['Netflix', 'Youtube', 'Vine']);
 var finalTabs = join(
	tabOpen.bind(workWindow), tabClose.bind(workWindow, 2),
	tabOpen.bind(socialWindow),
	tabClose.bind(socialWindow, 2), tabOpen.bind(socialWindow),
	tabOpen.bind(videoWindow),
	tabClose.bind(videoWindow, 1),
	join.bind(null)
);
console.log(finalTabs.tabs);//no no 

//solution1.  change 1 into 2.
const tabsAfterIndex = this.tabs.splice(index + 1); //+>
const tabsAfterIndex = this.tabs.splice(1);

//or solution2:  change lines.1 into lines.2.
const tabsBeforeIndex = this.tabs.splice(0, index);
const tabsAfterIndex= this.tabs.splice(index + 1);
// +> replace with <+ :
const tabsBeforeIndex = this.tabs.slice(0, index);
const tabsAfterIndex= this.tabs.slice(index + 1);


//actual valid code:
const Window = function(tabs) {
	this.tabs = tabs;
};
Window.prototype.join = function(otherWindow) {
	this.tabs=this.tabs.concat(otherWindow.tabs);
	return this;
};
Window.prototype.tabOpen= function(tab) {
	this.tabs.push('new tab');
	return this;
};

Window.prototype.tabClose= function(index){
	const tabsBeforeIndex=this.tabs.splice(0,index);
	const tabsAfterIndex = this.tabs.splice(1);
	this.tabs=tabsBeforeIndex.concat(tabsAfterIndex);
	return this;
};

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
const finalTabs = socialWindow
	.tabOpen()
	.join(videoWindow.tabclose(2))
	.join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);



/* AVOID MUTATIONS AND SIODE EFFECTS USING FUNCTIONAL PROGRAMMING */
// In functional programming, changing or altering things is called mutation, and the outcome we call a: side effect. A function, ideally should be a pure function, meaning that it does not cause any side effects.
let fixedValue=4;
function incrementer() {
	let val=fixedValue;
	return ++val;
}



/* PASS ARGUMENTS TO AVOID EXTERNAL DEPENDENCE IN A FUNCTION */
// another principle of functional programming is to always declare your dependencies explicitly. i.e. pass the variable or object we want to use - directly into the function as an argument.
let fixedValue = 4;
function incrementer(fixedValue) {
	let val=fixedValue;
	return ++val;
}



/* REFACTOR GLOBAL VARIABLES OUT OF FUNCTIONS */
//altering object or variable by = const newArr = arrVar, is not copying, but creating reference!!@!
//let newArr=[...arr];
//function remove(list,bookName) { return list.filter(book => book !== bookName); }
//function add(list, bookName) { return [...list, bookName]; }

const bookList=["The hound of the Baskervilles", "On the Electrodynamics of Moving Bodies", "Philosophia Naturalis Principia Mathematica", "Disquisitions Arithmeticae"];
function add(arr, bookName) [
	let bList = [...arr];
	bList.push(bookName);
	return bList;
}
function remove(arr,bookName){
	let bList=[...arr];
	const book_index = bList.indexOf(bookName);
	if(book_index >= 0) {
		bList.splice(book_index, 1);
		return bList;
	}
}