/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let list = {
    0: 1,
    1: 1
  }
  for (let i = 3; i <= n - 1; i++) {
    list[i] = list[i - 1] + list[i - 2]
  }
  let num = 0
  for (const key in list) {
    console.log(list[key])
    num = num + list[key]
  }
  console.log(num)
  return n === 1 ? 1 : num
};
climbStairs(1)
// let num = 1;
// for (var i = 1; i < 8; i++) {
//   console.log(climbStairs(i), num)
//   num = Number(num) + climbStairs(i)
// }
// console.log(num)
// @lc code=end

