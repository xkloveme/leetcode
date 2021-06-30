/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (arr) {
  var num = 0
  var total = function (arr, num) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) {
        num++
        return total(element, num);
      }
    }
    return num
  }
  return total(arr, 0);
};
// removeDuplicates([1,2,[3,[4,[]]]])
console.log('🐛🐛🐛: removeDuplicates([1,2,[3,[4,[]]]])', removeDuplicates([1, 2, [3, [4, [4]]]]))
// @lc code=end

