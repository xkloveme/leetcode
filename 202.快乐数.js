/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var list = {
    1: 1,
    2: 2,
    3: 3,
    4: 4
  }
  n += ''
  for (let index = 0; index < n.length; index++) {
    list.push(+ n[index] * n[index]);
    console.log(list[index], list[index - 1])
    return (list[index] < 4 || list[index] > list[index - 1])
  }
};
console.log(isHappy(7))
// @lc code=end

