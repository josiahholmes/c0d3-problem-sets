/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    return obj1Keys.reduce((acc, key) => {
        if (obj2Keys.includes(key)) acc[key] = obj2[key](obj1[key]);
        else acc[key] = obj1[key];
        return acc;
    }, {})
}