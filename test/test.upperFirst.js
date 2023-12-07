import chai from "chai"
import upperFirst from "../src/upperFirst.js"

const expect = chai.expect;

describe('upperFirst', () => {

  it('convert the first character of a lowercase string to upper case', () => {
    expect(upperFirst('fred')).to.equal('Fred');
  });

  it('leave the first character of an already uppercase string unchanged', () => {
    expect(upperFirst('FRED')).to.equal('FRED');
  });

  it('convert the first character of an empty string to an empty string', () => {
    expect(upperFirst('')).to.equal('');
  });

  it('handle strings with whitespace at the beginning', () => {
    expect(upperFirst('   hello')).to.equal('   Hello');
  });

  it('shandle strings with whitespace at the end', () => {
    expect(upperFirst('world   ')).to.equal('World   ');
  });

  it('handle strings with whitespace on both ends', () => {
    expect(upperFirst('   test   ')).to.equal('   Test   ');
  });

  it('handle a single-character string', () => {
    expect(upperFirst('a')).to.equal('A');
  });

  it('handle a single-character uppercase string', () => {
    expect(upperFirst('A')).to.equal('A');
  });

  it('handle non-alphabetic characters at the beginning', () => {
    expect(upperFirst('_test')).to.equal('_test');
  });

  it('handle non-alphabetic characters at the end', () => {
    expect(upperFirst('test_')).to.equal('Test_');
  });

});
