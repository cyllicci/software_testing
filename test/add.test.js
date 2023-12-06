import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect


describe("Add", () => {
 it("adds two positive integers", () =>{
   expect(add(2,6)).to.equal(8)
 });

 it("adds two negative integers", () =>{
   expect(add(-2,-6)).to.equal(-8)
 });

 it("adds zero to positive integer and to negative integer", () => {
   expect(add(2,0)).to.equal(2)
   expect(add(0,2)).to.equal(2)
   expect(add(-2,0)).to.equal(-2)
   expect(add(0,-2)).to.equal(-2)
 });

 it("adds negative integer to positive integer", () => {
   expect(add(-2,6)).to.equal(4)
   expect(add(2,-6)).to.equal(-4)
 });

 it("adds two zeros together", () => {
   expect(add(0,0)).to.equal(0)
 });

 it("adds two positive floating numbers correctly", () => {
   expect(add(2.5, 3.5)).to.equal(6.0)
 });

 it("adds positive floating number correctly to zero", () => {
   expect(add(2.5, 0)).to.equal(2.5)
 });

 it("adds negative floating number correctly to positive floating number", () => {
   expect(add(-2.5, 3.5)).to.equal(1.0)
 });

 it("adds two floating numbers with different precision", () => {
   expect(add(2.5,0.0001)).to.equal(2.5001)
 });

 it("works with maximum value", () => {
   expect(add(Number.MAX_SAFE_INTEGER,1)).to.equal(Number.MAX_SAFE_INTEGER+1)
   expect(add(Number.MAX_SAFE_INTEGER,-1)).to.equal(Number.MAX_SAFE_INTEGER-1)
   expect(add(Number.MAX_SAFE_INTEGER,0)).to.equal(Number.MAX_SAFE_INTEGER+0)
 });

 it("works with minimum value", () => {
   expect(add(Number.MIN_SAFE_INTEGER,1)).to.equal(Number.MIN_SAFE_INTEGER+1)
   expect(add(Number.MIN_SAFE_INTEGER,-1)).to.equal(Number.MIN_SAFE_INTEGER-1)
   expect(add(Number.MIN_SAFE_INTEGER,0)).to.equal(Number.MIN_SAFE_INTEGER+0)
 });

})