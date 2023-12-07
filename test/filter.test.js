/**
 * Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index, array).
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
//function filter(array, predicate)

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
});

