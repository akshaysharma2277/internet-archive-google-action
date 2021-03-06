const sinon = require('sinon');

/**
 * Mock of feeder/albums
 *
 * @param fetchAlbumsResponse
 * @returns {{fetchDetails: *}}
 */
module.exports = function ({
  getCurrentItemReturns = null,
} = {}) {
  return {
    build: sinon.stub().returns(Promise.resolve()),
    getCurrentItem: sinon.stub().returns(getCurrentItemReturns),
    hasNext: sinon.stub().returns(true),
    next: sinon.stub().returns(Promise.resolve()),
    isEmpty: sinon.stub().returns(false),
  };
};
