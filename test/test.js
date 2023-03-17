import assert from 'assert';
import numberConversion from '../lib/number-conversion.js';

describe('Array', function () {
	describe('Number Conversion is finding words', function () {
		it('Should return the correct words', async function () {
			assert.equal(await numberConversion('8333'), 'seed');
			assert.equal(await numberConversion('3767'), 'drop');
			assert.equal(await numberConversion('9666'), 'zoom');
		});
	});
});