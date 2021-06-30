/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let answer = Number(String(Math.abs(x)).split('').reverse().join(''))
  return (answer<=-2147483648 || answer >2147483647)?0:x > 0 ? answer: -answer
};
// @lc code=end
