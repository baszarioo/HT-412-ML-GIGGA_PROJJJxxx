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

		
/* ///// x ///// */