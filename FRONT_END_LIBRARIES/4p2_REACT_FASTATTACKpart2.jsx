/* ///3// BIND 'this' TO A CLASS METHOD; //3/// */
// in addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword, so it can access properties on the class (such as state and props): inside the scope of the method. There are a few ways to allow your class methods to access this.

//previously explicit binded 'this' in the constructor: 
this.handleClick = this.handleClick.bind(this)
//exercise: add a click handler and use explicitly binding to the method.
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Hello"
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			text:  "You clicked!"
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>wciesnij mnie</button>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
};



/* ///3// USE STATE TO TOGGLE AN ELMEENT; //3/// */
//State updates may be asynchronous = React may batch multiple setState() calls into a single update = you cannot rely on the prev. value of this.state or this.props when calculating the next value.
// 1. DON'T RELY ON/ DON'T USE IT:
this.setState({
	counter: this.state.counter + this.props.increment
});
// INSTEAD PASS SETSTATE, THAT ALLOWS TO ACCESS BOTH STATE AND PROPS.
this.setState((state, props) => ({
	counter: state.counter + props.increment
}));
// OR VERSION WITHOUT PROPS, IF YOU DONT NEED IT.
this.setState( state => ({
	counter: state.counter + 1
}));
// v e r s i o n 1 : exercise: toggleVisibility something.
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}
	toggleVisibility() {
		this.setState(state => {
			if(state.visibility === true) {
				return { visibility: false };
			} else {
				return { visibility: true };
			}
		});
	}
	render() {
		if(this.state.visibility) {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
					<h1>Now you see me!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
};
// v e r s i o n 2: 
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}
	toggleVisibility() {
		this.setState(state => ({
			visibility: !state.visibility
		}));
	}
	render() {
		if(this.state.visibility){
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
					<h1>Now you see me!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
};