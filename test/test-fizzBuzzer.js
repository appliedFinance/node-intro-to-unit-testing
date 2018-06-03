// import chai
const expect = require('chai').expect;
// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit test for fizzBuzzer
describe('fizzBuzzer unit test', function() {
	// normal cases
	it('should properly fizz-buzz', function() {
		const normalCases = [
		{n: 15, a:'fizz-buzz'},
		{n: 5, a:'buzz'},
		{n: 3, a:'fizz'}
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.n);
			//       console.log("-- " + answer);
			expect(answer).to.equal(input.a);
		});
	});
});


