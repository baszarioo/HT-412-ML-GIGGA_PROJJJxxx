/* React = js lib, for building reusable, component-driven user interfaces for webpages and apps.
combines HTML and JS functionaltiy into JSX.	Easy managing the flow of data throughout the app..
LEARN: coimponents, managing data in the form of state proops, use different lifecycle methods like :
componentDidMount, etc.	*/

/* /1/	Create a Simple JSX Element /1/ */
// you can use the standard js codes.
// and codes in the tasks, under the hood are being called by for example:
ReactDOM.render(JSX, document.getElementById('root'));
//code1:
const JSX = <h1>Hello JSX!</h1>



/* /1/	Create a Complex JSX Element /1/ */
const JSX = <div>
				<h1></h1>
				<p>Paragraph</p>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			


/* /1/	Add Comments in JSX /1/ */
// to put comments insde JSX, use a syntax of {/* */}
const JSX = (
	<div>
		<h1>This is a block of JSX</h1>
		{/* cip[ek */}
		<p>Here's a subtitle</p>
	</div>
);



/* /1/	Redner HTML Elements to the DOM /1/ */
//ReactDOM.render(componentToReader, targetNode);
const JSX = (
	<div>
		<h1>Hello World</h1>
		<p>Lets render this to the DOM</p>
	</div>
);
ReactDOM.render(JSX, document.getElementById("challenge-node"));



/* /1/	Define an HTML Class in JSX /1/ */
//JSX: camelCase + 'className', instead of js's 'class'. Add a class to div elem.
const JSX = (
	<div className="myDiv">
		<h1>Add a class to this div</h1>
	</div>
);



/* /1/	Learn About Self-Closing JSX Tags. /1/ */
// in js you can use both: <br> or <br />, and can't be: <br></br>, and in React only proper form is: <br />
const JSX = ( 
	<div>
		<h2>Welcome To React!</h2> <br />
		<p>Be sure to close all tags!</p>
		<hr />	{/* that line across the div */}
	</div>
);




/* /1/	Create a Stateless Functional Component. /1/ */
// in React -> everything is a component. : example of creating one;
const DemoComponent = function() {
	return(
		<div className='customClass' />
	);
};
const MyComponent=function() {
	return (
		<div>Stringggg</div>
	);
}



/* /1/ Create a React Component /1/ */
//the other way to define a React component is with the ES6 class syntax. Kitten example 'extends React.component':
class Kitten extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>Hello</h1>
		);
	}
}
//exercise:
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Hello React!</h1>
			</div>
		)
	}
};




/* /1/	Create a Component with Composition:. /1/ */
//take an example of building app with 3 components: 'Navbar', 'Dashboard', 'Footer', then React gives you a possibility to create a parent Ccomponent named for example: 'App';
return (
	<App>
		<Navbar />
		<Dashboard />
		<Footer />
	</App>
)
// exercise:
const ChildComponent=() => {
	return (
		<div>
			<p>I am the child</p>
		</div>
	);
};
class ParentComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>I am the parent</h1>
				<ChildComponent />
			</div>
		);
	}
};




/* /1/	Use React to Render Nested Components;. /1/ */
const TypesOfFruit = () => {
	return (
		<div>
			<h2>Fruits:</h2>
			<ul>
				<li>Apples</li>
				<li>Blueberries</li>
				<li>Strawberries</li>
				<li>Bananas</li>
			</ul>
		</div>
	);
};
const Fruits = () => {
	return (
		<div>
			<TypesOfFruit />
		</div>
	);
};
class TypesOfFood extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				<Fruits />
			</div>
		);
	}
};



/* /1/	Compose React Components;. /1/ */
// render some kind of list from more components.
class Fruits extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Fruits:</h2>
				<Citrus />
				<NonCitrus />
			</div>
		);
	}
};
class TypesOfFood extends React.Component { 
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				<Fruits />
				<Vegetables />
			</div>
		);
	}
};



/* /1/	Render a Class Component to the DOM:;. /1/ */
// ReactDOM.render(<ComponentToRender />, targetNode);
class TypesOfFood extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				<Fruits />
				<Vegetables />
			</div>
		);
	}
};
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));





/* /2//	Write a React Component from Scratch;. //2/ */
//class that extends React.Component has a null-return, [redefined render method.
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>My First React Component!</h1>
			</div>
		);
	}
};
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));


/* /2//	Pass props to a Stateless Functional Component.:;. //2/ */
//this is how u would add an user-property to welcome method.
<App>
	<Welcome user='Mark' />
</App>
//and here's how you would define a component(stateless functional one).
const Welocme = (props) => <h1>Hello, {props.user}!</h1>

//exercise:
// <p>The current date is: {props.date}</p>
// <CurrentDate date={Date()} />
const CurrentDate = (props) => {
	return (
		<div>
			<p>The current date is: {props.date}</p>
		</div>
	);
};
class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>What date is it?</h3>
				<CurrentDate date={Date()} />
			</div>
		);
	}
};


/* /2//	Pass an Array as Props. //2/ */
//example:
<ParentComponent>
	<ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
//child comp. then has access to the array property = colors. - can use array methods:
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
//exx
const List = (props) => {
	return <p>{props.tasks.join(', ')}</p>
//	return <p>{}</p>
};
class ToDo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>To Do Lists</h1>
				<h2>Today</h2>
				<List tasks={["Walk", "Cook", "Bake"]} />
				<h2>Tomorrow</h2>
				<List tasks={["Study", "Code", "Eat"]} />
			</div>
		);
	}
};



/* /2//	Use Default Props. //2/ */
// you can specify default prop as: 
MyComponent.defaultProps = { location: 'San Francisco' };
// but if you provide 'null' as the value for prop, it stays null; //if empty => San Francisco;
const ShoppingCart = (props) => {
	return (
		<div>
			<h1>Shopping Cart Component </h1>
		</div>
	)
};
ShoppingCart.defaultProps = { items: 0 };



/* /2//	Override Default Props. //2/ */
const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
Items.defaultProps = {
	quantity: 0
}
class ShoppingCart extends React.Component {
	constructor(props0 {
		super(props);
	}
	render() {
		return <Items quantity={10}/>
	}
};



/* /2//Use Prototypes to Define the Props you Expect.. //2/ */
/* react provides type-checking features (example: API call to retrieve data you expect in an array).
 it's considered a best practice to set 'propTypes' when you know type of a prop ahead of time. 
  example: require the type: function for a prop: handleClick */
 MyComponent.propTypes = {handleClick: PropTypes.func.isRequired };		// x...x