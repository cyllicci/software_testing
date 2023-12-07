import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect;

describe('ceil', () => {

  it('round up a number without precision', () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it('round up a number with precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('round up a number with negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  })

});
