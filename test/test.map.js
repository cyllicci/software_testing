import chai from "chai"
import map from "../src/map.js"

const expect = chai.expect;

describe('map function', () => {
  it('apply the iteratee function to each element in the array', () => {
    function square(n) {
      return n * n;
    }
    expect(map([4, 8], square)).to.have.same.members([16, 64]);
  });

  it('handle an empty array', () => {
    function double(n) {
      return n * 2;
    }
    expect(map([], double)).to.be.an( "array" ).that.is.empty
  });

  it('handle an array of strings and concatenate them with an iteratee function', () => {
    function addPrefix(str) {
      return 'prefix_' + str;
    }
    expect(map(['apple', 'banana'], addPrefix)).to.have.same.members(['prefix_apple', 'prefix_banana']);
  });

  it('handle an array of objects and apply an iteratee function to a specific property', () => {
    const users = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
    ];

    function addGreeting(user) {
      return 'Hello, ' + user.name;
    }

    expect(map(users, addGreeting)).to.have.same.members(['Hello, John', 'Hello, Jane']);
  });

  it('handle an array with undefined values and apply the iteratee function', () => {
    function squareOrZero(n) {
      return n ? n * n : 0;
    }
    expect(map([4, undefined, 8], squareOrZero)).to.have.same.members([16, 0, 64]);
  });

});
