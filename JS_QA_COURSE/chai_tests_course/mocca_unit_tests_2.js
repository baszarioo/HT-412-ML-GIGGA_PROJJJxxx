/* 
Mocha allows you to test asynchronous operations like calls to API endpoints with a plugin called 'chai-http'.
The following is an example of a test using chai-http for a suite called 'GET /hello?name=[name] => "hello [name]"'.
 suite('GET /hello?name=[name] => "hello [name]"', function () {
	 test('?name=John', function (done) {
		 chai
			.request(server)
			.keepOpen()
			.get('/hello?name=John')
			.end(function (err, res) {
				assert.equal(res.status, 200, 'Response status should be 200');
				assert.equal(res.text, 'hello John', 'Response should be "hello John"');
				done();
			});
	 });
 });
// Notice the 'done' parameter in the test's callback function. Calling it without an argument at the end of a test is necessary to signal that the asynchronous operation is complete.
Also, note the 'keepOpen' method just after the request method. Normally you would run your tests from the command line, or as part of an automated integration process, and you could let 'chai-http' start and stop your server automatically.
-However, the tests that run when you submit the link to your project require your server to be up, so you need to use the 'keepOpen' method to prevent 'chai-http' from stopping your server.
*/
const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp= require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
	this.timeout(5000);
	suite('Integration tests with chai-http', function () {
		test('Test GET /hello with no name', function (done) {
			chai
				.request(server)
				.keepOpen()
				.get('/hello')
				.end(function (err,res) {
					assert.equal(res.status, 200);
					assert.equal(res.text, 'hello Guest');
					done();
				});
		});
		// -----------------------------------------------------------------------------
		test('Test GET /hello with your name', function (done) {
			chai
				.request(server)
				.keepOpen()
				.get('/hello?name=Pimp')
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.text, 'hello Pimp');
					done();
				});
		});
		// -----------------------------------------------------------------------------
		
/*
When you test a 'PUT', you'll often send data along with it. The data you include with your PUT request is called the body of the request.
To send a 'PUT' request and a JSON object to the '/travellers' endpoint, you can use 'chai-http' plugin's 'put' and 'send' methods:
 chai
	.request(server)
	.keepOpen()
	.put('/travellers')
	.send({
		"surname": [last name of a traveller of the past]
	}) //...
	
*/
		test('Send {surname: "Colombo"}', function (done) {
			chai
				.request(server)
				.keepOpen()
				.put('/travellers')
				.send({ surname: 'Colombo' })
				.end(function (err, res) {
					assert.equal(res.status, 200, 'response status should be 200');
					assert.equal(res.type, 'application/json', 'Response should be json');
					assert.equal(
						res.body.name,
						'Cristoforo',
						'res.body.name should be "Christoforo"'
					);
					assert.equal(
						res.body.surname,
						'Colombo',
						'res.body.surname should be "Colombo"'
					);
					done();
				});
		});
		// -----------------------------------------------------------------------------
		test('Send {surname: "da Verrazzano"}', function (done) {
			chai
				.request(server)
				.put('/travellers')
				.send({ surname: 'da Verrazzano' })
				.end(function(err, res) {
					assert.equal(res.status, 200, 'response status should be 200');
					assert.equal(res.type, 'application/json', 'Response should be json');
					assert.equal(res.body.name, 'Giovanni');
					assert.equal(res.body.surname, 'da Verrazzano');
					done();
				});
		 });
		});
	});
	// -----------------------------------------------------------------------------
/* 
Mocha allows to run some code before any of the actual tests run. This can be useful to do things like add entries to a database which will be used in the rest of the tests. 
With a headless browser, before running tests, you need to visit the page you'll test..
The 'suiteSetup' hookup is executed only once at the beginnning of a test suite.
There are several other hook types that can execute code before each test, after each test, or at the end of a test suite. See the Mocha docs for more information.
- immediately after the 'Browser' declaration, add your project URL to the 'site' property of the variable:
	Browser.site = 'http://localhost:3000';
- Then at the root level of the 'Functional Tests with Zombie.js' suite, instantiate a new instance of the 'Browser' object with the following code:
	const browser = new Browser();
- And use the 'suiteSetup' hook to direct the 'browser' to the '/' route with the following code:
	suiteSetup(function(done) {
		return browser.visit('/', done);
	});
*/
	// -----------------------------------------------------------------------------
	const Browser = require("zombie");
	Browser.site = 'https://ccc93bff-d0fc-4a4d-94d6-c4d4098766fb-00-1ieqa3dan1qkz.picard.replit.dev';
	
	suite("Functional Tests with Zombie.js", function () {
		//this.timeout(5000);
		const browser = new Browser();
	
		suiteSetup(function(done) {
			return browser.visit('/', done);
		});
		
		suite("Headless browser", function() {
			test('should have a working "site" property', function () {
				assert.isNotNull(browser.site);
			});
		});
		// -----------------------------------------------------------------------------
/*		
On the page there's an input form. It sends data to the 'PUT /travellers' endpoints as an AJAX request.
When the request successfully completes, the client code appends a '<div>' containing the information in the response to the DOM.
Here's an example of how to use Zombie.js to interact with the form.
	
	test('Submit the surname "Polo" in the HTML form', function (done) {
		browser.fill('surname', 'Polo').then(() => {
			browser.pressButton('submit', () => {
				browser.assert.success();
				browser.assert.text('span#name', 'Marco');
				browser.assert.text('span#surname', 'Polo');
				browser.assert.elements('span#dates', 1);
				done();
			});
		});
	});
	
- First the 'fill' method of the 'browser' object fills the 'surname' field of the form with the value 'Polo'. 'fill' returns a promise, so 'then' is chained off of it.
Within the 'then' callback, the 'pressButton' method of the 'browser' object is used to invoke the form's 'submit' event listener. The 'pressButton' method is asynchronous. Then, response is received from the AJAX request, few assertions are made...
*/
		suite('"Famous Italian Explorers" form', function () {
			this.timeout(5000);
			test('submit "surname" : "Colombo" - write your e2e test...', function(done) {
				browser
				.fill('surname', 'Colombo').then(() => {
//				.pressButton('submit', function() {
					browser.pressButton("submit", function() {
						browser.assert.success();
						browser.assert.text("span#name", "Cristoforo");
						browser.assert.text("span#surname", "Colombo");
						browser.assert.elements("span#dates", 1);
						done();
					});
				});
			});
			// -----------------------------------------------------------------------------
			this.timeout(5000);
			test('Submit the surname "Vespucci" in the HTML form', function(done) {
				browser
					.fill("surname", "Vespucci").then(() => {
						browser.pressButton("submit", function() {
							browser.assert.success();
							browser.assert.text("span#name", "Amerigo");
							browser.assert.text("span#surname", "Vespucci");
							browser.assert.elements("span#dates", 1);
							done();
						});
					});
			 });
			});
		});
		// ----------------------------------------------------------------------------- FINITO.