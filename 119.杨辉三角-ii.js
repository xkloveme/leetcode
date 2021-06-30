/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = []
  for (let i = 1; i < rowIndex + 2; i++) {
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
  return arr[rowIndex]
};
// @lc code=end

