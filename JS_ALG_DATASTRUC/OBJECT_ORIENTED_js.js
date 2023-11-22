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
