/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  var arr ={
    0:0,
    1:1,
    2:1
  }
  if(n>2){
    for (let i = 2; i <n+2;i++){
      arr[i]= arr[i-1] +arr[i-2]
    }
  }
return arr[n]
};
// @lc code=end
