/* ///// CREATE A REDUX STORE ///// */
/*
The redux 'store' is an object which holds and manages application 'state'. There is a method called createStore() on the Redux object, which you use to create the Redux 'store'. This method takes a 'reducer' function as a required argument. The 'reducer' function is covered in a later challenge, and is already defined for you in the code editor. It simply takes 'state' as an argument and returns 'state'.
1: Declare a variable

		const yourVariableName;
		
2: Assign your variable to a method.

		const yourVariableName = yourMethodName();
		//`Redux.createStore()`

3. Pass in an argument to your method.

		const yourVariableName = yourMethodName(yourArgumentName);

*/

		const reducer = (state =5) => {
			return state;
		}
		const store = Redux.createStore(reducer)
		

/* ///// GET STATE FROM THE REDUX STORE ///// */
/*
the Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current 'state' held in the Redux store object with the 'getState()' method. Use 'store.getState()' to retrieve the 'state' from the 'store', and assign this to a new variable 'currentState'.
*/

		const store = Redux.createStore(
			(state = 5) => state
		);
		let currentState = store.getState();
		
		
/* ///// DEFINE A REDUX ACTION ///// */

		let action = {
			type: 'LOGIN'
		}
		
		
/* ///// DEFINE AN ACTION CREATOR ///// */
/* 
syntax:
		
		function functionName() {
			console.log("Do something");
		}
*/

		const action = {
			type: 'LOGIN'
		}
		function actionCreator() {
			return action;
		}
		
		
/* ///// DISPATCH AN ACTION EVENT ///// */
/*
'dispatch' method is what you use to dispatch actions to the Redux store. Calling 'store.dispatch()' and passing the value returned from an action creator sends an action back to the store. Example of dispatching the action of type 'LOGIN':

		store.dispatch(actionCreator());
		store.dispatch({ type: 'LOGIN' });		//the same action as above.
*/

		const store=Redux.createStore(
			(state = {login: false}) => state 
		);
		
		const loginAction = () => {
			return {
				type: 'LOGIN'
			}
		};
		
		store.dispatch(loginAction());

		
/* ///// HANDLE AN ACTION IN THE STORE ///// */

		const defaultState = {
			login: false
		};
		const reducer = (state = defaultState, action) => {
			if(action.type === "LOGIN") {
				return {
					login: true
				};
			} else {
				return state;
			}
		};
		const store = Redux.createStore(reducer);
		
		const loginAction = () => {
			return {
				type: "LOGIN"
			};
		};
		
		
/* ///// USE A SWITCH STATEMENT TO HANDLE MULTIPLE ACTIONS ///// */

		const defaultState = {
			authenticated: false
		};
		
		const authReducer = (state = defaultState, action) => {
			switch (action.type) {
				case "LOGIN":
					return {
						authenticated: true
					};
				case "LOGOUT":
					return {
						authenticated: false
					};
				default:
					return defaultState;
			}
		};
		
		const store = Redux.createStore(authReducer);
		
		const loginUser = () => {
			return {
				type: "LOGIN"
			};
		};
		const logoutUser = () => {
			return {
				type: "LOGOUT"
			};
		};
			
			
/* ///// USE CONST FOR ACTION TYPES ///// */
/*
You may spell 'type: "LOGIN" correctly in your action creator but mispell 'type: "LOGN"' in your reducer as shown below.

		const loginUser = () => {
			return {
				type: "LOGIN"
			};
		};
		
		const authReducer = (state = defaultState, action) => {
			switch (action.type) {
				case "LOGN":
					return {
						authenticated: true
					};
				case "LOGOUT":
					return {
						authenticated: false
					};
				default:
					return state;
			}
		};
		
By using a const fort the Action Type, it won't matter if your string is mispelled because bot the reducer's switch statement and the Action Type are referencing the same 'const'.
*/

		const LOGIN='LOGIN';
		const LOGOUT='LOGOUT';
		
		const defaultState = {
			authenticated: false
		};
		const authReducer = (state = defaultState, action) => {
			switch(action.type) {
				case LOGIN:
					return { 
						authenticated: true
					}
				case LOGOUT: 
					return {
						authenticated: false
					}
				default:
					return state;
			}
		};
		const store = Redux.createStore(authReducer);
		const loginUser = () => {
			return {
				type: LOGIN
			}
		};
		const logoutUser = () => {
			return {
				type: LOGOUT
			}
		};
		

/* ///// REGISTER A STORE LISTENER ///// */
/*
A callback function is simply a function that gets called after another function is done being executed. In the real-world, it might be something like this:

		// You derop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed.
		let carIsBroken = true;
		const callCarOwner = () => console.log("Hello your car is done!");
		const fixCar = (carIsBroken, callCarOwner) => {
			if(carIsBroken === true) {
				carIsBroken = false;
			}
			console.log(carIsBroken);
			callCarOwner();
		};
		fixCar(carIsBroken, callCarOwner);

How do you increase a number variable? Use the "+=" operator for example.
		
		let count=1;
		const addOne = () => (count += 1);
		
How do you pass a function to a method?

		function sayHi() {
			console.log("Hi!");
		}
		store.subscribe(sayHi);
*/

		const ADD = 'ADD';
		const reducer = (state = 0, action) => {
			switch(action.type) {
				case ADD:
					return state + 1;
				default:
					return state;
			}
		};
		
		const store = Redux.createStore(reducer);
		
		store.subscribe(() => count++);
		/*	VS
		let count=0;
		const add = () => count++;
		store.subscribe(add);
		*/
		
		store.dispatch({type: ADD});
		console.log(count);
		store.dispatch({type: ADD});
		console.log(count);
		store.dispatch({type: ADD});
		console.log(count);
		
		
/* ///// COMBINE MULTIPLE REDUCERS ///// */
/*
Typicalli, it's a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the 'combineReducers()' method like this:

		const rootReducer = Redux.combineReducers({
			auth: authenticationReducer,
			notes: notesReducer
		});

Now the key 'notes' will contain all of the state associated with our notes and handled by our 'notesReducer'. This is how multiple reducers can be composed to manage more compelex application state. In this example, the state held in the Redux store would then be a single object containing 'auth' and 'notes' properties.
*/

		const INCREMENT = 'INCREMENT';
		const DECREMENT = 'DECREMENT';
		
		const counterReducer = (state = 0, action) => {
			switch(action.type) {
				case INCREMENT:
					return state + 1;
				case DECREMENT:
					return state - 1;
				default:
					return state;
			}
		};
		const LOGIN = 'LOGIN';
		const LOGOUT = 'LOGOUT';
		
		const authReducer = (state = {authenticated: false}, action) => {
			switch(action.type) {
				case LOGIN:
					return {
						authenticated: true
					}
				case LOGOUT:
					return {
						authenticated: false
					}
				default: 
					return state;
			}
		};
		const rootReducer = Redux.combineReducers({
			count: counterRedf,
			notes: notesReducer
		});
		// define the root reducer here
		const rootReducer = Redux.combineReducers({
			count: counterReducer,
			auth: authReducer
		});
		
		const store = Redux.createStore(rootReducer);
		
		
/* ///// SEND ACTION DATA TO THE STORE.` ///// */

		const ADD_NOTE = "ADD_NOTE";
		const notesReducer = (state = "Initial State", action) => {
			switch (action.type) {
				case ADD_NOTE:
					return action.text;
				default:
					return state;
			}
		};
		const addNoteText = note => {
			return {
				type: ADD_NOTE,
				text: note
			};
		};
		const store = Redux.createStore(notesReducer);
		console.log(store.getState());
		store.dispatch(addNoteText("Hello!"));
		console.log(store.getState());
		
		
/* ///// USE MIDDLEWARE TO HANDLE ASYNCHRONOUS ACTIONS.` ///// */

		const REQUESTING_DATA = "REQUESTING_DATA";
		const RECEIVED_DATA = "RECEIVED_DATA";
		
		const requestingData = () => {
			return { type: REQUESTING_DATA };
		};
		const receivedData = data => {
			return { type: RECEIVED_DATA, users: data.users };
		};
		
		const handleAsync = () => {
			return function(dispatch) {
				dispatch(requestingData());
				setTimeout(function() {
					let data = {
						users: ["Jeff", "William", "Alice"]
					};
					// dispatch received data action here
					dispatch(receivedData(data));
				}, 2500);
			};
		};
		const defaultState = {
			fetching: false,
			users: []
		};
		const asyncDataReducer = (state = defaultState, action) => {
			switch(action.type) {
				case REQUESTING_DATA:
					return {
						fetching: true,
						users: []
					};
				case RECEIVED_DATA:
					return {
						fetching: false,
						users: action.users
					};
				default:
					return state;
			}
		};
		const store = Redux.createStore(
			asyncDataReducer,
			Redux.applyMiddleware(ReduxThunk.default)
		);
		
		
/* ///// WRITE A COUNTER WITH REDUX.` ///// */

		const INCREMENT = "INCREMENT";
		const DECREMENT = "DECREMENT";
		
		const counterReducer = (state = 0, action) => {
			switch(action.type) {
				case INCREMENT:
					return state + 1;
				case DECREMENT:
					return state - 1;
				default:
					return state;
			}
		};
		const incAction = () => {
			return {
				type: INCREMENT
			};
		};
		
		const decAction = () => {
			return {
				type: DECREMENT
			};
		};
		const store = Redux.createStore(counterReducer);
		
		
/* ///// NEVER MUTATE STAKE.` ///// */
/*
We want to return a new copy of state in reducer function because of state immutability in Redux
*/

		const ADD_TO_DO = "ADD_TO_DO";
		const todos = [
			"Go to the store",
			"Clean the house",
			"Cook dinner",
			"Learn to code"
		];
		
		const immutableReducer = (state = todos, action) => {
			switch (action.type) {
				case ADD_TO_DO:
					return state.concat(action.todo);
					// return [..state, action.todo];
				default: 
					return state;
			}
		};
		
		const addToDo = todo => {
			return {
				type: ADD_TO_DO,
				todo
			};
		};
		const store = Redux.createStore(immutableReducer);
		

/* ///// USE THE SPREAD OPERATOR ON ARRAYS.` ///// */
/*
One solution from ES6 to help enforce state immutability in Redux is the spread operator: '...'. The spread operator has a variety of applications, one of which is well-suited to the previous challenge of producing a new array from an existing array. This is relatively new, but commonly used syntax. For example, if you have an array 'myArray' and write:	
	
		let newArray = [...myArray];
		
'newArray' is now a clone of 'myArray'. Both arrays still exist separately in memory. If you perform a mutation like 'newArray.push(5)', 'myArray' doesn't change. The '...' effectively spreads out the values in myArray into a new array...
*/

		const immutableReducer = (state = ["Do not mutate state!"], action) => {
			switch(action.type) {
				case "ADD_TO_DO":
					let arr = [...state, action.todo];
					return arr;
				default:
					return state;
			}
		};
		
		const addToDo = todo => {
			return {
				type: "ADD_TO_DO",
				todo
			};
		};
		
		const store = Redux.createStore(immutableReducer);
		
		
/* ///// x.` ///// */