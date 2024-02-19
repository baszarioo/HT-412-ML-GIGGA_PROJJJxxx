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
	

		
