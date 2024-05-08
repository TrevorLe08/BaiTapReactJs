// 4. Sử dụng map, tính tổng các phần tử * 2
let arr = [1,2,3,4,5,6,7,8]
let sum = 0
arr.map(x => {
    x = x*2
    sum += x
});
console.log(sum);