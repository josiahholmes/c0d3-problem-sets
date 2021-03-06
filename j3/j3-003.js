/*
 * write a function called solution that takes in an array of strings and returns a function. when the returned function is called (with an object with many keys), it will return an object with only keys that exist in the input arrary.
 * @param {array} arr {object} obj
 * @return {object} obj
 */

const solution = (arr) => obj => {
    return Object.entries(obj).reduce((acc, elem) => {
        if (arr.includes(elem[0])) acc[elem[0]] = elem[1];
        return acc;
    }, {})
}