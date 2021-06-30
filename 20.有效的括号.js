/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = []
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (stack.join('').indexOf(element)) {
      stack.split(i, 1)
    } else {
      stack.push(element)
    }
  }
  // let str = '(){}[]'
  // let num = null
  // for (let index = 0; index < s.length; index++) {
  //   const item = s[index];
  //   // if (str.indexOf(item) === -1) {
  //   //   return false
  //   // }
  //   switch (item) {
  //     case '(':
  //       num++
  //       break;
  //     case ')':
  //       num--
  //       break;
  //     case '{':
  //       num = num + 3
  //       break;
  //     case '}':
  //       num = num - 3
  //       break;
  //     case '[':
  //       num = num + 5
  //       break;
  //     case ']':
  //       num = num - 5
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // return num === 0
};
// @lc code=end

