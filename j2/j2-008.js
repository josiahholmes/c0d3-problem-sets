/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
    Array.prototype.cMap = function (cb, result = [], i = 0) {
        if (!(this.length)) return this;
        if (result.length === this.length) return result;
        result.push(cb(this[i], i, this));
        return this.cMap(cb, result, i + 1);
    }
}