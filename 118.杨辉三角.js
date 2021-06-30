/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arr = []
  for (let i = 1; i < numRows + 1; i++) {
    let rows = []
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        rows.push(1)
      } else {
        rows.push(arr[i - 2][j - 1] + arr[i - 2][j])
      }
    }
    arr.push(rows)
  }
  return arr
};
// @lc code=end

