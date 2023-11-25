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


/* UDNERSTAND THE CONSTRUCTOR PROPERTY */
// check that!
let duck= new Bird();
let beagle=new Dog();
console.log(duck.constructor === Bird);		//true
console.log(beagle.constructor === Dog);	//true
// advantage of the constructor property ^ is that it's possible to check for this property to find out what kind of object it is. Like below:
function joinBirdFraternity(candidate){	//braterstwo
	if(candidate.constructor===Bird){
		return true;
	} else {
		return false;
	}
}

function Dog(name){
	this.name=name;
}
function joinDogFraternity(candidate){
	if(candidate.constructor===Dog){
		return true;
	}
}


/* CHANGE THE PROTOTYPE TO A NEW OBJECT */
//adding properties to the prototype individually becomes tedious when we add many properties. Like:
Bird.prototype.eat = function() {
	console.log("nom nom nom");
}
Bird.prototype.describe=function(){
	console.log("My name is "+this.name);
}
// A more efficient way is to set the prototype to a new object that already contains the property.
Bird.prototype = {
	numLegs: 2,
	eat: function() {
		console.log("nom nom nom");
	},
	describe: function() {
		console.log("My name is " +this.name);
	}
};
// for a Dog class
function Dog(name) {
	this.name=name;
}
Dog.prototype = {
	numLegs: 4,
	eat: function() {
		console.log("nom nom nom");
	},
	describe: function() {
		console.log("My name is "+this.name);
	}
};


/* REMEMBER TO SET THE CONSTRUCTOR PROPERTY WHEN CHANGING THE PROTOTYPE */
duck.constructor === Bird; //false
duck.constructor === Object; //true
duck instanceof Bird; //true
// to fix that, whenever a prototype is manually set to a new object, remember to define the constructor property:
Bird.prototype = {
	constructor: Bird,
	numLegs: 2,
	eat: function() {
		console.log("nom nom nom");
	},
	describe: function() {
		console.log("My name is: "+this.name);
	}
};
//or: 
function Dog(name){
	this.name=name;
}
Dog.prototype = {
	constructor: Dog,
	numLegs: 4,
	eat: function() {
		console.log("nom nom nom");
	}, 
	describe: function() {
		console.log("My name is "+this.name);
	}
};
	
	
/* UNDERSTAND WHERE AN OBJECT'S PROTOTYPE COMES FROM */
function Bird(name){
	this.name=name;
}
let duck= new Bird("Donald");
Bird.prototype.isPrototypeOf(duck);	//true

function Dog(name) {
	this.name= name;
}
let beagle=new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);


/*	 UNDERSTAND THE PROTOTYPE CHAIN 	*/
function Bird(name){
	this.name=name;
}
typeof Bird.prototype;
//prototype is an object + it can have its own prototype. => prototype of Bird.prototype is Object.prototype
Object.prototype.isPrototypeOf(Bird.prototype);  //true
//o r | |
let duck=new Bird("Donald");
duck.hasOwnProperty("name");
//Bird supertype, duck=subtype. => Object is  a supertype for all objects in JavaScript
function Dog(name){
	this.name=name;
}
let beagle=new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);	// yields true
Object.prototypeOf(Dog.prototype);		// true


/* USE INHERITANCE SO YOU DON'T REPEAT YOURSELF */
// in the example below describe method is shared by Bird and Dog.
Bird.prototype = {
	constrtuctor: Bird,
	describe: function() {
		console.log("My name is "+ this.name);
	}
};
Dog.prototype = {
	constructor: Dog,
	describe: function() {
		console.log("My name is "+this.name);
	}
};
//we can ommit that by creating a supertype! (or parent) called Animal:
function Animal() { };
Animal.prototype = {
	constructor: Animal,
	describe: function() {
		console.log("My name is " + this.name);
	}
};
// +>
Bird.prototype = {
	constructor: Bird
};
Dog.prototype = {
	constructor: Dog
};

// solution:
function Cat(name){
	this.name=name;
}
Cat.prototype = {
	constructor: Cat
};
function Bear(name){
	this.name=name;
}
Bear.prototype= {
	constructor: Bear
};

function Animal() { }
Animal.prototype = {
	constructor: Animal,
	eat: function() {
		console.log("nom nom nom");
	}
};


/* INHERIT BEHAVIOURS FROM A SUPERTYPE */
// supertype:
function Animal() { }
Animal.prototype.eat = function() {
	console.log("nom nom nom");
}
//now create a new instance of the supertype
let animal = new Animal();	//not optimal
let animal = Object.create(Animal.prototype);	
animal.eat();
animal instanceof Animal;	//true

//solution
function Animal() { }
Animal.prototype = {
	constructor: Animal,
	eat: function() {
		console.log("nom nom nom");
	}
};
let duck=Object.create(Animal.prototype);
let beagle=Object.create(Animal.prototype);


/* SET THE CHILD'S PROTOTYPE TO AN INSTANCE OF THE PARENT */
//: set the prototytpe of the subtype (or child) - in this case, Bird- to be instance of Animal.
Bird.prototype = Object.create(Animal.prototype);	// Bird includes all the key 'ingredients' from Animal.
let duck = new Bird("Donald");
duck.eat();
// solution:
function Animal() { }
Animal.prototype = {
	constructor: Animal,
	eat: function() {
		console.log("nom nom nom");'
	}
};
Dog.prototype=Object.create(Animal.prototype);
let beagle= new Dog();


/* RESET AN INHERITED CONSTRUCRTOR PROPERTY */
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor	// created through Animal.

Bird.prototype.constructor = Bird;
duck.constructor // +> now it's done through Bird.
//solution:
function Animal() { };
function Bird() { };
function Dog() { };
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype=Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle=new Dog();


/* ADD METHODS AFTER INHERITANCE */
// bird as a constructor that inherits its prototype from Animal 
function Animal() { }
Animal.prototype.eat = function () {
	console.log("nom nom nom");
};
function Bird() { };
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
//now add unique behavior for Bird objects.
Bird.prototype.fly = function() {
	console.log("I'm flying!");
};
//now instances of Bird will have both eat() + fly() methods.
let duck = new Bird();
duck.eat();
duck.fly();

//exercise:
function Animal() { }
Animal.prototype.eat =function() {console.log("nom nom nom"); };
function Dog() { }
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark = function() {
	console.log("Woof!");
};
let beagle = new Dog();
