/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var newArr = `${l1},${l2}`.split(',')
  for (let j = 0; j < newArr.length - 1; j++) {
    for (let i = 0; i < newArr.length - j - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        var temp = newArr[i]
        newArr[i] = newArr[i + 1]
        newArr[i + 1] = temp
      }
    }
  }
  return newArr
};

// @lc code=end

