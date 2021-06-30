/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let str = nums.join('')
  if (str.indexOf(target) > -1) {
    return str.indexOf(target)
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] > target && target > nums[i]) {
        return i + 1
      } else {
        return target < nums[0] ? 0 : nums.length
      }
    }
  }
};
// @lc code=end

