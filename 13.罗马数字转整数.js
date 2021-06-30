/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dic = {
      I:1,
      IV:4,
      v:5,
      IX:9,
      X:10,
      XL:40,
      L:50,
      XC:90,
      C:100,
      CD:400,
      D:500,
      CM:900,
      M:1000,
    }
    return s.split('').reduce((prev, next, idx, arr) => dic[next] < dic[arr[idx + 1]] ? prev - dic[next] : prev + dic[next], 0)
};
// @lc code=end