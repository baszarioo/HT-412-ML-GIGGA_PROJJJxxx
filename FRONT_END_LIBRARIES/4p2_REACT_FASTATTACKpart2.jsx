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




/* ///3/// WRITE A SIMPLE COUNTER; ///3/// */
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			count: 0
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset =this.reset.bind(this);
	}
	reset() {
		this.setState({
			count: 0
		});
	}
	increment() {
		this.setState(state => ({
			count: state.count +1
		}));
	}
	decrement() {
		this.setState(state => ({
			count: state.count - 1
		}));
	}
	render() {
		return (
			<div>
				<button className='inc' onClick={this.increment}>Increment!</button>
				<button className='dec' onClick={this.decrement}>Decrement!</button>
				<button className='reset' onClick={this.reset}>Reset</button>
				<h1>Current Count: {this.state.count}</h1>
			</div>
		);
	}
};



/* ///3/// CREATE A CONTROLLED INPUT; ///3/// */
// idea to create a controlled input where text updates from sthe state, not the browser.
handleChange(event) {
	this.setState({
		input: event.target.value
	});
} //don't forget to bind that.
this.handleChange = this.handleChange.bind(this);
//usage:
<input value={this.state.input} onChange = {this.handleChange}/>

//exercise:
class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value
		})
	}
	render() {
		return (
			<div>
				<input value={this.state.input} onChange={this.handleChange} />
				<h4>Controlled input:</h4>
				<p>{this.state.input}</p>
			</div>
		);
	}
}



/* ///3/// CREATE A CONTROLLED FORM; ///3/// */
// 
event.preventDefault()
this.setState({
	submit: this.state.input
});
//<input value={this.state.input} onChange={this.handleChange} /> ... <h4>{this.state.submit}</h1>
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			input: '',
			submit: ''
		};
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value
		});
	}
	handleSubmit(event) {
		event.preventDefault()
		this.setState({
			submit: this.state.input
		});
	}
	render() {
		return (
			<div> 
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.input}
						onChange={this.handleChange} />
					<button type='submit'>Submit!</button>
				</form>
				<h1>{this.state.submit}</h1>
			</div>
		);
	}
};
	
	
/* ///3/// PASS STATE AS PROPS TO CHILD COMPONENTS.; ///3/// */
// the MyApp component = stateful + renders a navbar component as a child. Pass the name property in its state down to child compoennt.
class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			name: 'CamperBot'
		}
	}
	render() {
		return (
			<div>
				<Navbar name={this.state.name}/> {/*!!!!!!!!*/}
			</div>
		);
	}
};
class Navbar extends React.Component {
	cosntructor(props) {
		super(props);
	}
	render() {
		return (
		<div>
			<h1>Hello, my name is: {this.props.name}</h1>
		</div>
		);
	}
};
			