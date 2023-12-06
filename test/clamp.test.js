import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect;

describe('clamp', () => {

  it('clamp within the range', () => {
    expect(clamp(5, 0, 10)).to.equal(5);
  });

  it('clamp the lower bound', () => {
    expect(clamp(-2, 0, 10)).to.equal(0);
  });

  it('clamp upper bound', () => {
    expect(clamp(15, 0, 10)).to.equal(10);
  });

  it('clamp equal bounds', () => {
    expect(clamp(7, 7, 7)).to.equal(7);
  });

  it('clamp floating-point numbers', () => {
    expect(clamp(3.14, 0, 5)).to.equal(3.14);
  });

});
