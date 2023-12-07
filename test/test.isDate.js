import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect;

describe('isDate', () => {

  it('true for a valid Date object', () => {
    expect(isDate(new Date())).to.equal(true);
  });

  it('false for a string representation of a date', () => {
    expect(isDate('Mon April 23 2012')).to.equal(false);
  });

  it('false for a plain object', () => {
    expect(isDate({ key: 'value' })).to.equal(false);
  });

  it('false for a number', () => {
    expect(isDate(123456789)).to.equal(false);
  });

  it('false for an array', () => {
    expect(isDate([1, 2, 3])).to.equal(false);
  });

  it('false for null', () => {
    expect(isDate(null)).to.equal(false);
  });

  it('false for undefined', () => {
    expect(isDate(undefined)).to.equal(false);
  });

});
