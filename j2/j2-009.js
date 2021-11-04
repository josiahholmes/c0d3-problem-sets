/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
    Array.prototype.cReduce = function (cb, acc, i = 0) {
        if (i === this.length) return acc;
        if (acc === undefined) {
            if (typeof this[i] === 'number') acc = 0;
            if (typeof this[i] === 'string') acc = '';
        }
        acc = cb(acc, this[i], i, this);
        return this.cReduce(cb, acc, i + 1);
    }
}