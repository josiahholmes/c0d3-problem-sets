/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        if (arr.includes(key)) acc.push(obj[key])
        return acc;
    }, []);
}