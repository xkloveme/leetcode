/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  let stack = [];
  var map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');
  for (let i = 0; i < s.length; i++) {
    let n = s[i];
    if (map.has(n)) {
      stack.push(n);
    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === n) {
        stack.pop();
      } else {
        return false
      }
    }
  }
  return stack.length===0

};
// @lc code=end
