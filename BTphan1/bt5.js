// 5. Sử dụng reduce, tính tổng các phần tử * 2
let arr = [1,2,3,4,5,6,7,8]
let sum = arr.reduce((value,x) => value+x*2,0)
console.log(sum);