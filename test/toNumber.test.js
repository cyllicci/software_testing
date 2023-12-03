import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect;


describe('toNumber', () => {
  it('numeric input', () => {

      // positive number
      expect(toNumber(10)).to.equal(10)
      
      //negative number
      expect(toNumber(-10)).to.equal(-10)

      //positive float point
      expect(toNumber(3.1415)).to.equal(3.1415)

      //negative float point
      expect(toNumber(-3.1415)).to.equal(-3.1415)

      //exponent notation
      expect(toNumber(2e5)).to.equal(200000)

      //zero
      expect(toNumber(0)).to.equal(0)
  });

  it('special values', () => {

      // NaN
      expect(isNaN(toNumber(NaN))).to.equal(true)

      // infinity
      expect(toNumber(Infinity)).to.equal(Infinity)
  });

  it('string input', () => {
    
    // numeric strings
    expect(toNumber('10')).to.equal(10);
    expect(toNumber('3.1415')).to.equal(3.1415);

    // hexadecimal strings
    expect(toNumber('0x1a')).to.equal(26);

    // binary strings
    expect(toNumber('0b1101')).to.equal(13);

    // octal strings
    expect(toNumber('0o755')).to.equal(493);

    // leading/trailing whitespace
    expect(toNumber('   42   ')).to.equal(42);

    // non-numeric characters
    expect(toNumber('abc')).to.be.NaN;
  });

  it('symbol input', () => {

    // Test cases for Symbol input
    const symbol = Symbol('test');
    const result = toNumber(symbol);

    // Symbol input should return NaN
    expect(isNaN(result)).to.equal(true);

  });

  it('object input', () => {
    // Test cases for object input
  });

    const objWithNumericValue = {
      valueOf: () => 42
    };
    expect(toNumber(objWithNumericValue)).to.equal(42);

    const objWithNonNumericValue = {
      valueOf: () => 'abc'
    };
    expect(toNumber(objWithNonNumericValue)).to.be.NaN;

    const plainObject = { key: 'value' };
    expect(toNumber(plainObject)).to.be.NaN;

  it('edge cases', () => {

    // empty string input
    expect(toNumber('')).to.equal(0);

    // null input
    expect(toNumber(null)).to.equal(0);

    // undefined input
    expect(toNumber(undefined)).to.be.NaN;

    // whitespace-only string input
    expect(toNumber('         ')).to.equal(0);
    
    // an empty object
    expect(toNumber({})).to.be.NaN;

    // boolean input
    expect(toNumber(true)).to.equal(1);
    expect(toNumber(false)).to.equal(0);

    // Test with an array
    expect(toNumber([1, 2, 3])).to.be.NaN;
    
  });

  it('combination cases', () => {

    // tring containing a numeric value and additional characters
    expect(toNumber('42abc')).to.be.NaN;

    // combination of number and string
    expect(toNumber(10 + '20')).to.equal(1020);

    // combination of boolean and string
    expect(toNumber(true + '2')).to.be.NaN; // ????????

    // combination of number and boolean
    expect(toNumber(5 + true)).to.equal(6);
  });
});
