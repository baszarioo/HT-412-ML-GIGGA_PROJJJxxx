const chai = require('chai');
const assert = chai.assert;
suite('Unit Tests', function () {
	suite('Basic Assertions', function () {
		test('#isNull, #isNotNull, function () {
			assert.isNull(null, 'This is an optional error description - e.g. null is null');
			assert.isNotNUll(1, '1 is not null');
		});
		test('#isDefined, #isUndefined', function() {
			assert.isDefined(null, 'null is not undefined');
			assert.isUndefined(undefined, 'undefined IS undefined');
			assert.isDefined('hello', 'A string is not undefined');
		});
		test('#isOk, #isNotOk', function () {
			assert.isNotOk(null, 'null is falsey');
			assert.isOk("I'm truthy", 'A string is truthy');
			assert.isOk(true, 'true is truthy');
		});
		test('#isTrue, #isNotTrue', function () {
			assert.isTrue(true, 'true is true');
			assert.isTrue(!!'double negation', 'Double negation of a truthy vbalue is true');
			assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
		});
	});
});