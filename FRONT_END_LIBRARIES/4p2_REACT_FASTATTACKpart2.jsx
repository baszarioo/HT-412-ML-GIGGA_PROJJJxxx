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
			
			


			
/* ///4//// PASS A CALLBACK AS PROPS.; ////4/// */		
class MyApp extends React.Component {
	constructor(props) {
		super9props);
		this.state = {
			inputValue: ''
		}
	this.handleChange=this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			inputValue: event.target.value
		});
	}
	render() {
		return (
			<div>
				<GetInput
					input={this.state.inputValue}
					handleChange={this.handleChange}/>
				<RenderInput
					input={this.state.inputValue}/>
			</div>
		);
	}
};
class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Get Input:</h3>
				<input
					value={this.props.input}
					onChange={this.props.handleChange}/>
			</div>
		);
	}
};
class RenderInput extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input Render:</h3>
				<p>{this.props.input}</p>
			</div>
		);
	}
};
	
	
	
/* ///4//// USE THE LIFECYCLE METHOD - COMPONENTWILLMOUNT; ////4/// */		
//main lifecycle methodfs are:
componentWillMount();
componentDidMount();
shouldComponentUpdate();
componentDidUpdate();
componentWillUnmount();	//called before render(), when a comp is being mounted to the DOM.	
//exercuise:
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		console.log("ciao");
	}
	render() {
		return <div />
	}
};



/* ///4//// USE THE LIFECYCLE METHOD - COMPONENTDIDMOUNT; ////4/// */		
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUsers: null]
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				activeUsers: 1273
			});
		}, 2500);
	}
	render() {
		return (
			<div>
				<h1>Active Users: {this.state.activeUsers}</h1>
			</div>
		);
	}
}



/* ///4//// USE THE LIFECYCLE METHOD - COMPONENTWMOUNT; ////4/// */
//attach event listener in componentDidMount() for keydown events, and have these eventys trigger the callback handleKeyPress(). Then remove it.
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.stage = {
			message: ""
		};
		this.handleEnter = this.handleEnter.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}
	componentWillUnmoonut() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}
	handleEnter() {
		this.setState((state) => ({
			messsage: state.message + 'You pressed the enter key! '
		}));
	}
	handleKeyPress(event) {
		if(event.keyCode === 13) {
			this.handleEnter();
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
		);
	}
}

/* ///5///// OPTIMIZE RE-RENDERS WITH SHOULDCOMPONENTUPDATE; /////5/// */
class OnlyEvens extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('Should I update?');
		if(nextProps.value % 2 == 0) {
			return true;			
		}
		return false;
	}
	componentWillReceiveProps(nextProps) {
		console.log('Receiving new props...');
	}
	componentDidUpdate() {
		console.log('Component re-rendered.');
	}
	render() {
		return <h1>{this.props.value}</h1>
	}
}
class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
		this.addValue = this.addValue.bind(this);
	}
	addValue() {
		this.setState({
			value: this.state.value + 1
		});
	}
	render() {
		return ( 
			<div>
				<button onClick={this.addValue}>Add</button>
				<OnlyEvens value={this.state.value}/>
			</div>
		);
	}
};



/* ///5///// INTRODUCING INLINE STYLES; /////5/// */
//inline style for HTML:
// <div style="color: yellow; font-size: 16px">Mellow Yellow</div>
//inline style for JSX:
<div style = {{color:"yellow", fontSize: 16}}>Mellow Yellow</div>
//exercise;
class Colorful extends React.Component {
	render() {
		return (
			<div style={{color: "red", fontSize: "72px"}}>Big Red</div>
		);
	}
};


/* ///5///// Add Inline Styles in React; /////5/// */
const styles = {
	color: 'purple',
	fontSize: 40,
	border: "2px solid purple",
};
class Colorful extends React.Component {
	render() {
		return (
			<div style={styles}>Style Me!</div>
		);
	}
};



/* ///5///// Use advanced JavaScript in React Render Method; /////5/// */
// while you're inside the render method and not inside the return method, you can write Js wothout wrappingg it inside curly braces.
const answer = possibleAnswers[this.state.randomIndex];
//...
<p> {answer} </p>

//exercise;
const inputStyle = {
	width: 235,
	margin: 5
};
class MagicEightBall extends React.Component {
	constructor(props) {
		super(props) {
			this.state = {
				userInput: '',
				randomIndex: ''
			};
			this.ask= this.ask.bind(this);
			this.handleChange = this.handleChange.bind(this);
		}
	ask() {
		if(this.state.userInput) {
			this.setState({
				randomIndex: Math.floor(Math.random() * 20),
				userInput: ''
			});
		}
	}
	handleChange(event) {
		this.setState({
			userInput: event.target.value
		});
	}
	render() {
		const possibleAnswers = [
			'It is certain',
			'It is decidedly so',
			'Without a doubt',
			'Yes, definitely',
			'You may rely on it',
			'As I see it, yes',
			'Outlook good',
			'Yes',
			'Signs point to yes',
			'Reply hazy try again',
			'Ask again later',
			'Better not tell you now',
			'Cannot predict now',
			'Concentrate and ask again',
			"Don't count on it",
			'My reply is no',
			'My sources say no',
			'Most likely',
			'Outlook not so good',
			'Very doubtful'
		];
		const answer = possibleAnswers[this.state.randomIndex];
		return (
			<div>
				<input
					type='text'
					value={this.state.userInput}
					onChange={this.handleChange}
					style={inputStyle}
				/>
				<br />
				<button onClick={this.ask}>Ask the Magic Eight Ball!</button>
				<br />
				<h3>Answer:</h3>
				<p> {answer} </p>
			</div>
		);
	}
};



/* ///5///// Render With na If-Else Condition; /////5/// */
class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			display: true
		}
		this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
		this.setState({
			display: !this.state.display
		});
	}
	render() {
		if(this.state.display) {
			return (
				<div>
					<button onClick={this.toggleDisplay}>Toggle Display</button>
					<h1>Displayed!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleDisplay}>Toggle Display</button>
				</div>
			);
		}
	}
};
