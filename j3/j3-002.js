/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const createRow = (x, y, result = [], i = 0) => {
    if (i >= x) return result;
    result.push({ x: i, y });
    return createRow(x, y, result, i + 1);
}

const solution = (num1, num2, result = [], i = 0) => {
    if (i == num1) return result;
    result.push(createRow(num2, i));
    return solution(num1, num2, result, i + 1);
}