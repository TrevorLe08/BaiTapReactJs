// 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
let arr = [4,5,6,7,8,9,11,14];
let arr1 = []
arr.map(x => {
    if (x % 3 == 2) {
        arr1.push(x);
    }
});
console.log(arr1);