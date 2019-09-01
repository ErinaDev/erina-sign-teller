const assert = require('assert');
const Util = require('../utils');

describe('Library Utils', () => {
  describe('getDateDetails()', () => {
    it('should return date Details', () => {
      const [ month, day ] = Util.getDateDetails('12/24/1900');
      assert.equal(month, 'December', 'Month Should be December');
      assert.equal(day, 24, 'Day should be 24');
    })
  })
})
