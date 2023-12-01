import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect


describe("Add", () => {
 it("adds positive number to positive number", () =>{
     expect(add(2,6)).to.equal(8)
 });
})