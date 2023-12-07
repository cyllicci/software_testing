import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect;

describe('compact function', () => {

  it('remove all falsey values from the array', () => {
    expect(compact([0, 1, false, 2, '', 3])).to.equal([1, 2, 3]);
  });

  it('handle an array with all falsey values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).to.be.an("array").that.is.empty;
  });

  it('handle an array with all truthy values', () => {
    expect(compact([1, 'hello', true, {}, [1, 2, 3]])).to.have.same.members([1, 'hello', true, {}, [1, 2, 3]]);
  });

  it('handle an empty array', () => {
    expect(compact([])).to.be.an( "array" ).that.is.empty;
  });

  it('handle an array with a mix of truthy and falsey values', () => {
    expect(compact([false, 1, null, 'hello', 0, true])).to.have.same.members([1, 'hello', true]);
  });

  it('handle an array with non-boolean falsey values', () => {
    expect(compact([0, '', undefined, NaN])).to.be.an("array").that.is.empty;
  });

});
