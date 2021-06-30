/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return  x===Number(String(Math.abs(x)).split('').reverse().join(''))
  // return  x===Number(String.prototype.split.call(x,'').reverse().join(''))
};
// @lc code=end
