/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const myMap = {};
    for (const str of strs) {
        const sortedStr = str.split('').sort().join();
        if (myMap[sortedStr]) {
            myMap[sortedStr].push(str);
        } else {
            myMap[sortedStr] = [str];
        }
    }
    return Object.values(myMap);
};