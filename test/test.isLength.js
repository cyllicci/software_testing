import chai from "chai"
import isLength from "../src/isLength.js"

const expect = chai.expect;

describe('isLength', () => {

  it('true for a valid array-like length', () => {
    expect(isLength(3)).to.equal(true);
  });

  it('false for Number.MIN_VALUE', () => {
    expect(isLength(Number.MIN_VALUE)).to.equal(false);
  });

  it('false for Infinity', () => {
    expect(isLength(Infinity)).to.equal(false);
  });

  it('false for a string', () => {
    expect(isLength('3')).to.equal(false);
  });

  it('false for a negative integer', () => {
    expect(isLength(-5)).to.equal(false);
  });

  it('false for a float', () => {
    expect(isLength(3.5)).to.equal(false);
  });

  it('false for an object', () => {
    expect(isLength({ length: 3 })).to.equal(false);
  });

  it('false for null', () => {
    expect(isLength(null)).to.equal(false);
  });

  it('false for undefined', () => {
    expect(isLength(undefined)).to.equal(false);
  });

});
