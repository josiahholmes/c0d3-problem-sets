/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
    Object.prototype.map = function (cb) {
        return Object.entries(this).reduce((acc, e, i) => {
            acc.push(cb(e[0], e[1], i));
            return acc;
        }, [])
    }
}