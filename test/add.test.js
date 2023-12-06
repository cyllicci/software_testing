import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect


describe("Add", () => {
 it("adds positive number to positive number", () =>{
     expect(add(2,6)).to.equal(8)
 });

 it("adds zero to positive number", () => {
    expect(add(2,0)).to.equal(2)
    expect(add(0,2)).to.equal(2)
 });

 it("adds negative number to positive number", () => {
    expect(add(-2,6)).to.equal(4)
    expect(add(2,-6)).to.equal(-4)
 });

 it("adds zero and zero together", () => {
    expect(add(0,0)).to.equal(0)
 });

 it("adds floating numbers correctly", () => {
    expect(add(2.5, 3.5)).to.equal(6.0)
 });

 it("takes string as input", () => {
    expect(add("2",3)).to.equal(5)
 });

})