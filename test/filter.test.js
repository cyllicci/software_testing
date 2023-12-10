import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("filter", () => {
    it("should return new array with filtered elements", () =>{
        const products = [
            { name: 'Apple', category: 'Fruits' },
            { name: 'Carrot', category: 'Vegetables' }
          ];

        const result = filter(products, ({ category }) => category === 'Fruits')

        expect(result).to.deep.equal([ { name: 'Apple', category: 'Fruits' } ])
    });

    it("should return empty array when input array is empty array", () => {
        const products = []
        const result = filter(products, ({ category }) => category === 'Fruits')
        
        expect(result).to.deep.equal([])
    });

    it("array with no matches to predicate", () => {
        const products = [
            { name: 'Apple', category: 'Fruits' },
            { name: 'Orange', category: 'Fruits' }
          ];
        const result = filter(products, ({ category }) => category === 'Vegetables')
 
        expect(result).to.deep.equal([])
    });

    it("array with all matches to predicate", () => {
        const products = [
            { name: 'Apple', category: 'Fruits' },
            { name: 'Orange', category: 'Fruits' }
        ];

        const result = filter(products, ({ category }) => category === 'Fruits')
 
         expect(result).to.deep.equal([
            { name: 'Apple', category: 'Fruits' },
            { name: 'Orange', category: 'Fruits' }
        ])
        });
    
    it("should handle null value", () => {
        const result = filter(null, ({ category }) => category === 'Fruits')
        expect(result).to.deep.equal([])
    });
});

