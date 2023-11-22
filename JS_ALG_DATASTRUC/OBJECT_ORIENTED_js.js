/* OOP, or Object Oriented programming => objects,classes (this keyword), prototype chains, constructors, and inheritance */

/* CREATE A BASIC JAVASCRIPT OBJECT &*/
let dog = {
	name: "Rocky",
	numLegs: 2
};

/* USE DOT NOTATION TO ACCESS THE PROPERTIES OF AN OBJECT */
let duck = {
	name: "Aflac",
	numLegs: 2
};
console.log(duck.name);
console.log(duck.numLegs);
// or |
let dog = {
	name: "Spot",
	numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);


/* CREATE A METHOD ON AN OBJECT */
let duck = {
	name: "Aflac",
	numLegs: 52,
	sayName: function() {return "The name of this duck is: " + duck.name + ".";}
};
duck.sayName();

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has "+dog.numLegs +" legs.";}
};


/* MAKE CODE MORE REUSABLE WITH THE THIS KEYWORD */
let duck = {
	name: "Aflac",
	numLegs: 3,
	sayName: function() {return "The name of this duck is "+this.name+".";}
};
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();


/* DEFINE A CONTRUCTOR FUNCTION */
//constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the create of new objects.
function Bird() {
	this.name="Albert";
	this.color="blue";
	this.numLegs=2;
}
function Dog() {
  this.name="name";
  this.color="dark";
  this.numLegs=4;
}


/* USE A CONSTRUCTOR TO CREATE OBJECTS */
function Bird() {
	this.name="Albert";
	this.color="blue";
	this.numLegs=2;
}
let blueBird = new Bird();
// like any other object properties, of a bird can be accessed and modified:"
blueBird.name= 'Elvira';
blueBird.name;

function Dog() {
	this.name="Rupert";
	this.color="brown";
	this.numLegs=4;
}
let hound = new Dog();


/* EXTEND CONSTRUCTORS TO RECEIVE ARGUMENTS */
//constructor with parameters .
function Bird(name, color) {
	this.name=name;
	this.color=color;
	this.numLegs=2;
}
// then you use :
let cardinal = new Bird("Bruce", "red");

function Dog(name,color) {
  this.name= name;
  this.color = color;
  this.numLegs=4;
}
let terrier = new Dog();


/* VERIFY AN BOJECT'S CONSTRUCTOR WITH INSTANCEOF */
//'instanceof' alwos you to compare an Object to a constructor, returning true r false.
let Bird= function(name, color) {
	this.name=name;
	this.color=color;
	this.numLegs=2;
}
let crow=new Bird("alexis", "black");
crow instanceof Bird;	//returns true
// or |
let canary = {
	name: "Mildred",
	color: "Yellow",
	numLegs: 2
};
canary instanceof Bird;		// false. (this object was created without a constructor).

function House(numBedrooms) {
	this.numBedrooms=numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;


/* UNDERSTAND OWN PROPERTIES */
let ownProps = [];
for(let property in duck) {
	if(duck.hasOwnProperty(property)){
		ownProps.push(property);
	}
}
console.log(ownProps);	["name", "numLegs"]
for(let property2 in canary) {
	if(canary.hasOwnProperty(property2)){
		ownProps.push(property2);
	}
}


/* USE PROTOTYPE PROPERTIES TO REDUCE DUPLICATE CODE */
// since numLegs will probably have the same value for all instances of Bird, you esentailly have a duplicated variable numLegs inside each Bird instance.... (for example: 1million instances - 1million duplicated variables). A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype.
Bird.prototype.numLegs=2;
//Now all instances of Bird have the numLeg property.
function Dog(name){
	this.name=name;
}
let beagle=new Dog("Snoopy");
Dog.prototype.numLegs=4;


/* ITERATE OVER ALL PROPERTIES  */
// example of adding own properties to the array: ownProps and proptotype to the: prototypeProps.
let ownProps=[];
let prototypeProps=[];
for(let property in duck){
	if(duck.hasOwnProperty(property)) {
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
}
console.log(ownProps);	//["name"]
console.log(prototypeProps); //["numLegs"]

function Dog(name){
	this.name=name;
}
Dog.prototype.numLegs=4;
let beagle=new Dog("snoopy");
let ownProps=[];
let prototypeProps=[];
for(let property in beagle){
	if(beagle.hasOwnProperty(property)){
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
}
