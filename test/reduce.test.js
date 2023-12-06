import chai from "chai"
import reduce from "../src/reduce.js"

const expect = chai.expect;

describe('reduce', () => {
  it('reduce an array with an initial accumulator', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).to.equal(6);
  });

  it('reduce an object with an initial accumulator', () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 3 }, (result, value, key) => result + value, 0)).to.equal(6);
  });

  it('reduce an array without an initial accumulator', () => {
    expect(reduce([1, 2, 3], (product, n) => product * n)).to.equal(6);
  });

  it('reduce an object without an initial accumulator', () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 3 }, (result, value) => result * value)).to.equal(6);
  });

  it('reduce data types in the collection', () => {
    expect(reduce(['1', 2, '3'], (concat, item) => concat + item, '')).to.equal('123');
  });

  it('reduce an empty array with an initial accumulator', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).to.equal(0);
  });

  it('reduce an empty object with an initial accumulator', () => {
    expect(reduce({}, (result, value, key) => result + value, 0)).to.equal(0);
  });

  it('reduce an empty array without an initial accumulator', () => {
    expect(reduce([], (sum, n) => sum + n)).to.equal(undefined); // Adjust based on your expected behavior
  });

  it('recude an empty object without an initial accumulator', () => {
    expect(reduce({}, (result, value, key) => result + value)).to.equal(undefined); // Adjust based on your expected behavior
  });

});
