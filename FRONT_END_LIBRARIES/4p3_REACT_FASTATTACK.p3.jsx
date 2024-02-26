/* ///// USE && FOR A MORE CONCISE CONDITIONAL; ///// */
/*
	
	{condition && <p>markup</p>}
	
if the 'condition' is 'true', the markup will be returned. If the condition is 'false', the operation will immediately return 'false' after evaluating the 'condition' and return nothing. You can incl;ude these statements directly in your JSX and string multiple conditions together by writing '&&' after each one. This allows you to handle more complex conditional logic in your 'render()' method without repeating a lot of code.

	class MyComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				dinnerCooked: true
			}
		}
		render() {
			return (
				<div>
					{this.state.dinnerCooked && <h1>Dinner is Cooked!</h1>}
				</div>
			);
		}
	};
		
*/

	class MyComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				display: true
			}
			this.toggleDisplay = this.toggleDisplay.bind(this);
		}
		toggleDisplay() {
			this.setState(state => ({
				display: !state.display
			}));
		}
		render() {
			return (
				<div>
					<button onClick={this.toggleDisplay}>ToggleDisplay</button>
					{this.state.display && <h1>Displayed!</h1>}
				</div>
			);
		}
	};
	
/* ///// USE && FOR A MORE CONCISE CONDITIONAL; ///// */
/*
here's the basic syntax for a ternary operator:
	
	condition ? expressionIfTrue : expressionIfFalse;

*/

	const inputStyle = {
		width: 235,
		margin: 5
	}
	class CheckUserAge extends React.Component {
		constructor(props) {
			super(props) {
			this.state ={ 
				userAge: '',
				input: ''
			}
			this.submit = this.submit.bind(this);
			this.handleChange = this.handleChange.bind(this);
		}
		handleChange(e) {
			this.setState({
				input: e.target.value,
				userAge: ''
			});
		}
		submit() {
			this.setState(state => ({
				userAge: state.input
			}));
		}
		render() {
			const buttonOne = <button onClick={this.submit}>Submit</button>
			const buttonTwo = <button>You May Enter</button>;
			const buttonThree = <button>You Shall Not Pass</button>;
			return (
				<div>
					<h3>Enter Your Age to Continue</h3>
					<input
						style={inputStyle}
						type="number"
						value={this.state.input}
						onChange={this.handleChange} /><br />
						{
						this.state.userAge === ''
							? buttonOne
							: this.state.userAge >= 18
								? buttonTwo
								: buttonThree
						}
				</div>
			);
		}
	};
						
/* ///// RENDER CONDITIONALLY FROM PROPS; ///// */
/*
In 'render()' method use 'Math.random()' as mentioned in the challenge description and write a ternary expression to return 'true' if 'Math.random()' returns a value '>= 0.5', and 'false' otherwise;
*/

	class Results extends React.Component {
		constructor(props) {
			super(props);
		}
		render() {
			return (
				<h1>
					{this.props.fiftyFifty ? "You Win!" : "You Lose!" }
				</h1>
			)
		};
	};
	class GameOfChance extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				counter: 1
			}
			this.handleClick = this.handleClick.bind(this);
		}
		handleClick() {
			this.setState(prevState => {
				return {
					counter: prevState.counter + 1
				}
			});
		}
		render() {
			const expression = Math.random() >= 0.5;
			return (
				<div>
					<button onClick={this.handleClick}>Play Again</button>
					<Results fiftyFifty={expression} />
					<p>{'Turn: ' + this.state.counter}</p>
				</div>
			);
		}
	};
	
/* ///// CHANGE INLINE CSS CONDITIONALLY BASED ON COMPONENT STATE; ///// */
/*
At this point, you've seen serveral applications of conditional rendering and the use of inline styles. Here's one more example that combines both of these topics. You can also render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assingned to the JSX elements in the render method.
-This paradigm is important to understand because it is a dramatic shift from the more traditional approach of applying styles by modifying DOM elements directly (which is very common with jQuery, for example). In that approach, you must keep track of when elements change and also handle the actual manipulation directly. It can become difficult to keep track of changes, potentially making your UI unpredictable. When you set a style object based on a condition, you describe how the UI should look as a function fo the application's state. There is a clear flow of information that only moves in one direction. This is the preffered method when writing applications with React.
*/

	class GateKeeper extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				input: ''
			};
			this.handleChange = this.handleChange.bind(this);
		}
		handleChange(event) {
			this.setState({ input: event.target.value })
		}
		render() {
			let inputStyle = {
				border: '1px solid black'
			};
			if(this.state.input.length > 15) {
				inputStyle.border = '3px solid red';
			/*
			if(this.state.input.length > 15) {
				inputStyle = {
					border: '3px solid red'
				};
			}
			*/
			}
			return (
				<div>
					<h3>Don't Type Too Much:</h3>
					<input
						type="text"
						style={inputStyle}
						value={this.state.input}
						onChange={this.handleChange} />
				</div>
			);
		}
	};
	
/* ///// USE ARRAY.MAP() TO DYNAMICALLY RENDER ELEMENTS; ///// */
/*
define two states as a JS object:
	
		{object: state, object: state}
	
.map() usage for generating a line for every object in the array.

		this.state.toDoList.map(i => <li>{i}</li>);
		
*/

		const textAreaStyles = {
			width: 235,
			margin: 5
		};
		class MyToDoList extends React.Component {
			constructor(props) {
				super(props);
				this.state = {
					userInput: '',
					toDoList: []
				}
				this.handleSubmit = this.handleSubmit.bind(this);
				this.handleChange = this.handleChange.bind(this);
			}
			handleSubmit() {
				const itemsArray = this.state.userInput.split(',');
				this.setState({
					toDoList: itemsArray
				});
			}
			handleChange(e) {
				this.setState({
					userInput: e.target.value
				});
			}
			render() {
				const items = this.state.toDoList.map(i => <li>{i}</li>);
				return (
					<div>
						<textarea
							onChange={this.handleChange}
							value={this.state.userInput}
							style={textAreaStyles}
							placeholder="Separate Items With Commas" /><br />
						<button onClick={this.handleSubmit}>Create List</button>
						<h1>My "To Do" List:</h1>
						<ul>{items}</ul>
					</div>
				);
			}
		};
		

